import { GoogleGenAI } from "@google/genai";
import * as fs from "fs";
import * as path from "path";

// Ensure API key is available
if (!process.env.GEMINI_API_KEY) {
  console.error("GEMINI_API_KEY is not set.");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const prompts = [
  {
    filename: "suede-hero.jpg",
    prompt: "Extreme close-up architectural photography of a wall surface, delicate suede-like texture, warm taupe and high-end gray tones. Ultra-matte finish, 15%-25% low gloss, diffuse reflection. Extremely soft light and shadow transitions, gentle gradient of natural light. Minimalist, German craftsmanship aesthetic, flawless execution, serene and elegant. Photorealistic, 8k resolution, soft ambient lighting. Negative prompt: rough texture, glossy, shiny, reflections, harsh highlights.",
    aspectRatio: "16:9"
  },
  {
    filename: "suede-gallery-1.jpg",
    prompt: "Interior architectural photography of a high-end minimalist luxury villa living room. The expansive walls feature a delicate, warm buckskin texture paint, ultra-matte, diffuse reflection with extremely soft light transitions. High-end modern Italian furniture, neutral color palette of warm grays and taupe. Soft sunlight filtering through sheer curtains. German craftsmanship, clean lines, 8k, photorealistic. Negative prompt: glossy, shiny, rough, cluttered.",
    aspectRatio: "3:4"
  },
  {
    filename: "suede-gallery-2.jpg",
    prompt: "Interior photography of a serene minimalist art gallery space. Large blank walls with a subtle suede-like texture, high-end gray tones, 15% gloss, diffuse reflection. Extremely soft and diffused gallery spotlighting, no harsh glare. A single minimalist sculpture in the center. Quiet, sophisticated, German precision, wabi-sabi influence, 8k. Negative prompt: glossy, shiny, rough, cluttered.",
    aspectRatio: "3:4"
  },
  {
    filename: "suede-gallery-3.jpg",
    prompt: "Architectural detail photography of a minimalist interior corner. Flawless wall finish with a delicate matte texture, warm gray tones, soft diffuse reflection. A sleek, professional stainless steel artisan trowel resting elegantly on a minimalist wooden surface nearby. Soft, even lighting highlighting the perfect, seamless wall surface. German engineering aesthetic, precision, clean, professional, 8k. Negative prompt: glossy, shiny, rough, cluttered.",
    aspectRatio: "3:4"
  }
];

async function main() {
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  for (const item of prompts) {
    console.log(`Generating ${item.filename}...`);
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: item.prompt,
        config: {
          imageConfig: {
            aspectRatio: item.aspectRatio as any,
          }
        }
      });

      let saved = false;
      if (response.candidates && response.candidates.length > 0) {
        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            const base64Data = part.inlineData.data;
            fs.writeFileSync(path.join(publicDir, item.filename), base64Data, 'base64');
            console.log(`Successfully saved ${item.filename}`);
            saved = true;
            break;
          }
        }
      }
      if (!saved) {
        console.log(`No image data found for ${item.filename}`);
      }
    } catch (error) {
      console.error(`Error generating ${item.filename}:`, error);
    }
  }
}

main();
