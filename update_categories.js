const fs = require('fs');

const filePath = '/src/App.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Update CONTENT.zh.nav.collections.sub
content = content.replace(
  `      collections: { \n        title: '艺术肌理', \n        sub: [\n          { name: '有机系列', path: '/collections/organic' },\n          { name: '石材(无机)', path: '/collections/stone' },\n          { name: '石膏(无机)', path: '/collections/plaster' },\n          { name: '纯色功能漆', path: '/collections/solid-functional' }\n        ] \n      },`,
  `      collections: { \n        title: '艺术肌理', \n        sub: [\n          { name: '有机系列', path: '/collections/organic' },\n          { name: '无机系列', path: '/collections/inorganic' },\n          { name: '纯色功能漆', path: '/collections/solid-functional' }\n        ] \n      },`
);

// 2. Update CONTENT.zh.collections.tabs
content = content.replace(
  `tabs: { organic: '有机系列', stone: '石材(无机)', plaster: '石膏(无机)', 'solid-functional': '纯色功能漆' }`,
  `tabs: { organic: '有机系列', inorganic: '无机系列', 'solid-functional': '纯色功能漆' }`
);

// 3. Update CONTENT.zh.footer.sections
content = content.replace(
  `{ title: '产品系列', items: ['有机系列', '石材(无机)', '石膏(无机)', '纯色功能漆'] }`,
  `{ title: '产品系列', items: ['有机系列', '无机系列', '纯色功能漆'] }`
);

// 4. Update CONTENT.en.nav.collections.sub
content = content.replace(
  `      collections: { \n        title: 'Collections', \n        sub: [\n          { name: 'Organic', path: '/collections/organic' },\n          { name: 'Stone (Inorganic)', path: '/collections/stone' },\n          { name: 'Plaster (Inorganic)', path: '/collections/plaster' },\n          { name: 'Solid Functional', path: '/collections/solid-functional' }\n        ] \n      },`,
  `      collections: { \n        title: 'Collections', \n        sub: [\n          { name: 'Organic', path: '/collections/organic' },\n          { name: 'Inorganic', path: '/collections/inorganic' },\n          { name: 'Solid Functional', path: '/collections/solid-functional' }\n        ] \n      },`
);

// 5. Update CONTENT.en.collections.tabs
content = content.replace(
  `tabs: { organic: 'Organic', stone: 'Stone (Inorganic)', plaster: 'Plaster (Inorganic)', 'solid-functional': 'Solid Functional' }`,
  `tabs: { organic: 'Organic', inorganic: 'Inorganic', 'solid-functional': 'Solid Functional' }`
);

// 6. Update CONTENT.en.footer.sections
content = content.replace(
  `{ title: 'Collections', items: ['Organic', 'Stone (Inorganic)', 'Plaster (Inorganic)', 'Solid Functional'] }`,
  `{ title: 'Collections', items: ['Organic', 'Inorganic', 'Solid Functional'] }`
);

// 7. Replace stone and plaster arrays with inorganic array
const stoneStartIndex = content.indexOf('  stone: [');
const solidFunctionalStartIndex = content.indexOf("  'solid-functional': [");

if (stoneStartIndex !== -1 && solidFunctionalStartIndex !== -1) {
  const beforeStone = content.substring(0, stoneStartIndex);
  const afterSolidFunctional = content.substring(solidFunctionalStartIndex);
  
  const inorganicArray = \`  inorganic: [
    {
      id: 'stone',
      name: { zh: '石材', en: 'Stone' },
      desc: {
        zh: '天然石灰岩质感，纹理均匀，色泽温和低调，富有质感，兼具花岗岩的纹理。',
        en: 'Natural limestone texture, uniform pattern, mild and low-key color, highly textured, with granite-like patterns.'
      },
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800&h=1000',
      details: {
        zh: {
          intro: '石材系列属于天然石灰岩，由几亿年前海底下的岩屑、贝壳、珊瑚及其它海洋生物冲击、融合，又历经长期的地壳碰撞、挤压而最终形成。自然天成特性，被诸多追求自然古朴、高环保性与艺术性工程建筑所使用。本系列包含罗马洞石、莱姆之源、维纳斯之光、卡拉拉、诶特纳、莱茵摩尔、伊莱克斯、莱茵漫步、印象罗马等多种质感效果。',
          features: [
            { title: '环保健康', desc: '主要成分天然无机材料，无毒无味，无辐射，产品符合国家环保标准。' },
            { title: '优异附着力', desc: '与基层粘结力强，不易剥落，不开裂、不变形、硬度高。' },
            { title: '防潮透气', desc: '透气性好、防潮、吸潮，冬暖夏凉。' },
            { title: '良好可塑性', desc: '可根据设计需求塑造多种纹理效果。' },
            { title: '优良耐久性', desc: '耐磨损、耐擦洗、耐候性强，使用寿命长。' }
          ],
          steps: [
            { title: '渗透底漆层', desc: '渗透底漆加20%水，滚涂或喷涂一遍，干燥2-3小时。' },
            { title: '中涂层', desc: '净味底漆加20%水搅拌均匀后滚涂或喷涂一遍，干燥2-3小时。' },
            { title: '表面效果层', desc: '根据不同石材效果（如罗马洞石、莱姆之源等）采用相应批刮手法，要求表面平整、无缺料。完全干燥后进行打磨。' },
            { title: '罩面层', desc: '用海绵块沾无机罩面漆打圈涂抹或喷涂机喷涂，干燥后再上一遍。' }
          ],
          precautions: [
            '温度过高时，需用羊毛滚沾水打湿墙面，以方便批刮。',
            '施工收平时，干燥太快时用喷水壶喷适当的水保持湿度。',
            '上无机罩面漆时，不能有堆积、流挂现象。',
            '做阴阳角时，应等一面墙完全干燥后再施工另一面墙。'
          ],
          scenarios: ['高端别墅', '酒店', '会所', '商业空间', '室内装饰'],
          colors: [
            { code: 'DQ01701', name: '渗透底漆', hex: '#EAEAEA' },
            { code: 'DQ01601', name: '净味底漆', hex: '#F5F5F5' },
            { code: 'Roman', name: '罗马洞石浅米', hex: '#EBE5D9' },
            { code: 'Wax', name: '哑光蜜蜡', hex: '#FDFBF7' },
            { code: 'Lime-1', name: '莱姆之源浅米', hex: '#E8E3D9' },
            { code: 'Lime-2', name: '多拉', hex: '#DBCFB8' },
            { code: 'Lime-3', name: '米黄', hex: '#E6DCC3' },
            { code: 'Venus', name: '维纳斯之光', hex: '#F9F9F9' },
            { code: 'Carrara-1', name: '卡拉拉铂金', hex: '#EBEBEB' },
            { code: 'Carrara-2', name: '卡拉拉米黄', hex: '#E8E1D5' },
            { code: 'Etna', name: '诶特纳象牙白', hex: '#EAE6DF' },
            { code: 'Rhine', name: '莱茵摩尔浅米', hex: '#E6E0D4' },
            { code: 'Electrolux', name: '伊莱克斯', hex: '#DCD4C6' },
            { code: 'Rhine-Stroll', name: '莱茵漫步', hex: '#E3DCD0' },
            { code: 'Impression', name: '印象罗马', hex: '#E5DFD3' }
          ],
          gallery: [
            'https://picsum.photos/seed/roman-1/1000/1333',
            'https://picsum.photos/seed/lime-1/1000/1333',
            'https://picsum.photos/seed/venus-1/1000/1333',
            'https://picsum.photos/seed/carrara-1/1000/1333',
            'https://picsum.photos/seed/etna-1/1000/1333',
            'https://picsum.photos/seed/rhine-1/1000/1333',
            'https://picsum.photos/seed/electrolux-1/1000/1333',
            'https://picsum.photos/seed/rhinestroll-1/1000/1333',
            'https://picsum.photos/seed/impression-1/1000/1333'
          ]
        },
        en: {
          intro: 'The Stone series belongs to natural limestone, formed hundreds of millions of years ago. It includes various texture effects such as Roman Travertine, Lime Source, Venus Light, Carrara, Etna, Rhine Moore, Electrolux, Rhine Stroll, and Impression Rome.',
          features: [
            { title: 'Eco-Friendly', desc: 'Mainly composed of natural inorganic materials, non-toxic, odorless, and radiation-free.' },
            { title: 'Excellent Adhesion', desc: 'Strong bonding with the base layer, not easy to peel off, crack, or deform, with high hardness.' },
            { title: 'Moisture-Proof', desc: 'Good breathability, moisture-proof, moisture-absorbing, warm in winter and cool in summer.' },
            { title: 'Good Plasticity', desc: 'Can be shaped into various texture effects according to design needs.' },
            { title: 'Excellent Durability', desc: 'Wear-resistant, scrub-resistant, strong weather resistance, and long service life.' }
          ],
          steps: [
            { title: 'Penetrating Primer', desc: 'Add 20% water to the penetrating primer, roll or spray one coat, and dry for 2-3 hours.' },
            { title: 'Middle Coat', desc: 'Add 20% water to the odorless primer, stir evenly, roll or spray one coat, and dry for 2-3 hours.' },
            { title: 'Surface Effect Layer', desc: 'Apply according to specific stone effects. Ensure flat surface, no missing material. Sand after completely dry.' },
            { title: 'Clear Coat', desc: 'Apply inorganic clear coat in circular motions or spray. Apply a second coat after drying.' }
          ],
          precautions: [
            'When the temperature is too high, wet the wall for easier scraping.',
            'When smoothing, if it dries too fast, spray appropriate water to maintain humidity.',
            'When applying the inorganic clear coat, there should be no accumulation or sagging.',
            'For internal and external corners, wait until one wall is completely dry before working on the other.'
          ],
          scenarios: ['High-end Villas', 'Hotels', 'Clubs', 'Commercial Spaces', 'Interior Decor'],
          colors: [
            { code: 'DQ01701', name: 'Permeable Primer', hex: '#EAEAEA' },
            { code: 'DQ01601', name: 'Odorless Primer', hex: '#F5F5F5' },
            { code: 'Roman', name: 'Roman Travertine', hex: '#EBE5D9' },
            { code: 'Wax', name: 'Matte Beeswax', hex: '#FDFBF7' },
            { code: 'Lime-1', name: 'Lime Source', hex: '#E8E3D9' },
            { code: 'Lime-2', name: 'Dora', hex: '#DBCFB8' },
            { code: 'Lime-3', name: 'Beige', hex: '#E6DCC3' },
            { code: 'Venus', name: 'Venus Light', hex: '#F9F9F9' },
            { code: 'Carrara-1', name: 'Platinum', hex: '#EBEBEB' },
            { code: 'Carrara-2', name: 'Beige', hex: '#E8E1D5' },
            { code: 'Etna', name: 'Ivory White', hex: '#EAE6DF' },
            { code: 'Rhine', name: 'Light Beige', hex: '#E6E0D4' },
            { code: 'Electrolux', name: 'Electrolux', hex: '#DCD4C6' },
            { code: 'Rhine-Stroll', name: 'Rhine Stroll', hex: '#E3DCD0' },
            { code: 'Impression', name: 'Impression Rome', hex: '#E5DFD3' }
          ],
          gallery: [
            'https://picsum.photos/seed/roman-1/1000/1333',
            'https://picsum.photos/seed/lime-1/1000/1333',
            'https://picsum.photos/seed/venus-1/1000/1333',
            'https://picsum.photos/seed/carrara-1/1000/1333',
            'https://picsum.photos/seed/etna-1/1000/1333',
            'https://picsum.photos/seed/rhine-1/1000/1333',
            'https://picsum.photos/seed/electrolux-1/1000/1333',
            'https://picsum.photos/seed/rhinestroll-1/1000/1333',
            'https://picsum.photos/seed/impression-1/1000/1333'
          ]
        }
      }
    },
    { 
      id: 'plaster', 
      name: { zh: '石膏', en: 'Plaster' }, 
      desc: { 
        zh: '手工批刮形成的独特肌理，光影过渡非常柔和，每一面墙都是别具一格的艺术品。', 
        en: 'Unique texture formed by hand-plastering, with extremely soft light transitions, every wall is art.' 
      }, 
      image: '/plaster-hero.webp',
      details: {
        zh: {
          intro: '石膏系列是一款具有天然石材材质的石灰基产品采用天然无机的矿物材料经过高温煅烧石灰石与精细加工发酵而成，结合先进环保配方精心研制而成的艺术装饰涂料。该产品具有优良的可塑性和丰富的质感表现力，同时具备良好的透气性、耐候性以及抗裂性能。其独特的质地，能够模拟出石材、肌理墙等多种自然效果，赋予墙面丰富立体的艺术感。',
          features: [
            { title: '环保健康', desc: '主要成分天然无机材料，无毒无味，无辐射，产品符合国家环保标准。' },
            { title: '优异附着力', desc: '与基层粘结力强，不易剥落、不开裂、不变形、硬度高。' },
            { title: '防潮', desc: '透气性好、防潮、吸潮、冬暖夏凉。' },
            { title: '良好可塑性', desc: '可根据设计需求塑造多种纹理效果。' },
            { title: '优良耐久性', desc: '耐磨损、耐擦洗、耐候性强，使用寿命长。' },
            { title: '卓越表现力', desc: '色彩丰富，质感细腻，营造独特艺术氛围。' }
          ],
          steps: [
            { title: '渗透底漆层', desc: '渗透底漆加20%水，滚涂或喷涂一遍，干燥2-3小时。' },
            { title: '中涂层', desc: '净味底漆（不调色）加15-20%水搅拌均匀后滚涂或喷涂一遍，干燥2-3小时。' },
            { title: '表面效果层（第一道）', desc: '不加水，使用不锈钢批刀，将石膏面料朝墙面不同方向不规则的批一层，每批一刀约20-40cm长度，要求表面均匀无露底；在产品8成干，表面无明显水渍的时候，用批刀轻收，使上料的刀痕和高凸点去除。（注意：如表干过快，可用喷水壶喷水；如遇天气过干燥，可等第一道8成干或滚涂一遍水，待无明显水渍再施工第二道）' },
            { title: '表面效果层（第二道）', desc: '检查墙面，如有刀痕和不平需用砂纸打磨平整，采用同样施工手法批刮第二遍，最后用批刀再次收平，抛光，直到理想效果。' },
            { title: '罩面层', desc: '用海绵块蘸取无机罩面（不加水）均匀擦拭第一遍；干燥2-3小时后，再擦拭一遍。' }
          ],
          precautions: [
            '施工过程中应避免与其他涂料混合使用，以免影响效果。',
            '施工时应保持手法均匀，避免出现色差、刷痕等现象。',
            '施工完成后，应确保涂层充分干燥，避免触摸、摩擦，以免影响涂层质量。',
            '每次开盖使用后，务必盖紧涂料桶，并且存放在温度介于+10℃ — +30℃之间的环境中。',
            '施工过程中要注意防护，避免直接接触皮肤，保护好眼睛和脸部。如不慎接触，应立即用清水清洗，如有不适应及时就医。',
            '产品色块为样品制作，供颜色参考，最终颜色以实际使用情况为准。'
          ],
          scenarios: ['高端别墅', '酒店', '会所', '商业空间', '室内装饰'],
          colors: [
            { code: '08449 B', name: '08449 B', hex: '#A3A8A9' },
            { code: '08464 C', name: '08464 C', hex: '#B8B9B4' },
            { code: '08464 B', name: '08464 B', hex: '#8C8E8A' },
            { code: '08464 A', name: '08464 A', hex: '#656463' },
            { code: '08493 C', name: '08493 C', hex: '#D0C8C3' },
            { code: '08493 B', name: '08493 B', hex: '#A8A09B' },
            { code: '08493 A', name: '08493 A', hex: '#837A76' },
            { code: '08449 C', name: '08449 C', hex: '#C6CACB' },
            { code: '08449 A', name: '08449 A', hex: '#7E8385' },
            { code: '08425 C', name: '08425 C', hex: '#B2B9BB' },
            { code: '08425 B', name: '08425 B', hex: '#878F93' },
            { code: '08425 A', name: '08425 A', hex: '#5E666A' },
            { code: '08448 C', name: '08448 C', hex: '#9CA0A4' },
            { code: '08448 B', name: '08448 B', hex: '#72767A' },
            { code: '08448 A', name: '08448 A', hex: '#4A4D51' },
            { code: '08475 C', name: '08475 C', hex: '#D2B4B2' },
            { code: '08475 B', name: '08475 B', hex: '#A88A88' },
            { code: '08475 A', name: '08475 A', hex: '#806362' },
            { code: '08456 C', name: '08456 C', hex: '#E2C8C0' },
            { code: '08456 B', name: '08456 B', hex: '#B99F97' },
            { code: '08456 A', name: '08456 A', hex: '#90776F' },
            { code: '08470 C', name: '08470 C', hex: '#D0BDB9' },
            { code: '08470 B', name: '08470 B', hex: '#A89591' },
            { code: '08470 A', name: '08470 A', hex: '#806E6A' },
            { code: '08481 C', name: '08481 C', hex: '#A89292' },
            { code: '08481 B', name: '08481 B', hex: '#806A6A' },
            { code: '08481 A', name: '08481 A', hex: '#584444' },
            { code: '08467 C', name: '08467 C', hex: '#B2A3A0' },
            { code: '08467 B', name: '08467 B', hex: '#8A7B78' },
            { code: '08467 A', name: '08467 A', hex: '#625451' },
            { code: '08434 C', name: '08434 C', hex: '#DCA58B' },
            { code: '08434 B', name: '08434 B', hex: '#B47E64' },
            { code: '08434 A', name: '08434 A', hex: '#8C583F' },
            { code: '08489 C', name: '08489 C', hex: '#E8CBB5' },
            { code: '08489 B', name: '08489 B', hex: '#C0A38D' },
            { code: '08489 A', name: '08489 A', hex: '#987D67' },
            { code: '08435 C', name: '08435 C', hex: '#DCA080' },
            { code: '08435 B', name: '08435 B', hex: '#B47A5A' },
            { code: '08435 A', name: '08435 A', hex: '#8C5436' },
            { code: '08484 C', name: '08484 C', hex: '#C29B91' },
            { code: '08484 B', name: '08484 B', hex: '#9A756B' },
            { code: '08484 A', name: '08484 A', hex: '#725047' },
            { code: '08469 C', name: '08469 C', hex: '#BCA49B' },
            { code: '08469 B', name: '08469 B', hex: '#947E75' },
            { code: '08469 A', name: '08469 A', hex: '#6C5851' },
            { code: '08483 C', name: '08483 C', hex: '#C89B9C' },
            { code: '08483 B', name: '08483 B', hex: '#A07576' },
            { code: '08483 A', name: '08483 A', hex: '#785052' },
            { code: '08437 C', name: '08437 C', hex: '#DCA09E' },
            { code: '08437 B', name: '08437 B', hex: '#B47A78' },
            { code: '08437 A', name: '08437 A', hex: '#8C5454' },
            { code: '08499 C', name: '08499 C', hex: '#DCA09E' },
            { code: '08499 B', name: '08499 B', hex: '#B47A78' },
            { code: '08499 A', name: '08499 A', hex: '#8C5454' },
            { code: '08471 C', name: '08471 C', hex: '#BCA0A0' },
            { code: '08471 B', name: '08471 B', hex: '#947A7A' },
            { code: '08471 A', name: '08471 A', hex: '#6C5454' },
            { code: '08472 C', name: '08472 C', hex: '#A08C8E' },
            { code: '08472 B', name: '08472 B', hex: '#7A6668' },
            { code: '08472 A', name: '08472 A', hex: '#544244' },
            { code: '08466 C', name: '08466 C', hex: '#BCAFA4' },
            { code: '08466 B', name: '08466 B', hex: '#94897E' },
            { code: '08466 A', name: '08466 A', hex: '#6C635A' },
            { code: '08536 C', name: '08536 C', hex: '#8CB0C4' },
            { code: '08536 B', name: '08536 B', hex: '#668A9E' },
            { code: '08536 A', name: '08536 A', hex: '#42667A' },
            { code: '08453 C', name: '08453 C', hex: '#9CBCA4' },
            { code: '08453 B', name: '08453 B', hex: '#76967E' },
            { code: '08453 A', name: '08453 A', hex: '#52725A' },
            { code: '08534 C', name: '08534 C', hex: '#A4C2A0' },
            { code: '08534 B', name: '08534 B', hex: '#7E9C7A' },
            { code: '08534 A', name: '08534 A', hex: '#5A7856' },
            { code: '08476 C', name: '08476 C', hex: '#D2CDA8' },
            { code: '08476 B', name: '08476 B', hex: '#ACA782' },
            { code: '08476 A', name: '08476 A', hex: '#88835E' }
          ],
          gallery: [
            '/plaster-gallery-1.webp',
            '/plaster-gallery-2.webp',
            '/plaster-gallery-3.webp'
          ]
        },
        en: {
          intro: 'GESSO series is a lime-based product with the texture of natural stone. It is made of natural inorganic mineral materials through high-temperature calcining of limestone and fine processing and fermentation. It is an art decorative coating carefully developed with advanced environmentally friendly formulas. This product has excellent plasticity and rich texture expression, as well as good breathability, weather resistance and crack resistance. Its unique texture can simulate various natural effects such as stone and textured walls, giving the wall a rich three-dimensional artistic feel.',
          features: [
            { title: 'Environmental protection and health', desc: 'The main ingredients are natural inorganic materials, which are non-toxic, tasteless and non-radiative. The products comply with national environmental protection standards.' },
            { title: 'Excellent adhesion', desc: 'strong adhesion to the base layer, not easy to peel off, crack or deform, and has high hardness.' },
            { title: 'Moisture-proof', desc: 'good breathability, moisture-proof, moisture-absorbing, warm in winter and cool in summer.' },
            { title: 'Good plasticity', desc: 'a variety of texture effects can be shaped according to design needs.' },
            { title: 'Excellent durability', desc: 'wear-resistant, scrub-resistant, weather-resistant, and long service life.' },
            { title: 'Excellent expression', desc: 'rich colors and delicate texture, creating a unique artistic atmosphere.' }
          ],
          steps: [
            { title: 'Penetrating Primer', desc: 'Add 20% water to the penetrating primer, roll or spray one coat, and dry for 2-3 hours.' },
            { title: 'Middle Coat', desc: 'Add 15-20% water to the odorless primer (untinted), stir evenly, roll or spray one coat, and dry for 2-3 hours.' },
            { title: 'Surface Effect Layer (1st Coat)', desc: 'Without adding water, use a stainless steel trowel to scrape the plaster irregularly in different directions, about 20-40cm per stroke, ensuring even coverage without exposing the base. When 80% dry and no obvious water stains, lightly smooth with the trowel to remove marks and high spots. (Note: spray water if drying too fast; if too dry, wait until 80% dry or roll water before the 2nd coat).' },
            { title: 'Surface Effect Layer (2nd Coat)', desc: 'Check the wall, sand any marks or unevenness, apply the second coat using the same method, and finally smooth and polish with the trowel until the desired effect is achieved.' },
            { title: 'Clear Coat', desc: 'Use a sponge to wipe the inorganic clear coat (no water added) evenly for the first coat; after 2-3 hours of drying, wipe again.' }
          ],
          precautions: [
            'Avoid mixing with other paints during construction to prevent affecting the effect.',
            'Maintain uniform techniques during construction to avoid color differences or brush marks.',
            'Ensure the coating is fully dry after construction, avoid touching or rubbing.',
            'Close the paint bucket tightly after each use and store between +10℃ and +30℃.',
            'Take protective measures during construction, avoid direct skin contact, protect eyes and face. Wash with clean water immediately if contacted, seek medical help if unwell.',
            'Product color blocks are samples for reference, final color depends on actual application.'
          ],
          scenarios: ['Villas', 'Hotels', 'Clubs', 'Commercial Spaces', 'Interior Decoration'],
          colors: [
            { code: '08449 B', name: '08449 B', hex: '#A3A8A9' },
            { code: '08464 C', name: '08464 C', hex: '#B8B9B4' },
            { code: '08464 B', name: '08464 B', hex: '#8C8E8A' },
            { code: '08464 A', name: '08464 A', hex: '#656463' },
            { code: '08493 C', name: '08493 C', hex: '#D0C8C3' },
            { code: '08493 B', name: '08493 B', hex: '#A8A09B' },
            { code: '08493 A', name: '08493 A', hex: '#837A76' },
            { code: '08449 C', name: '08449 C', hex: '#C6CACB' },
            { code: '08449 A', name: '08449 A', hex: '#7E8385' },
            { code: '08425 C', name: '08425 C', hex: '#B2B9BB' },
            { code: '08425 B', name: '08425 B', hex: '#878F93' },
            { code: '08425 A', name: '08425 A', hex: '#5E666A' },
            { code: '08448 C', name: '08448 C', hex: '#9CA0A4' },
            { code: '08448 B', name: '08448 B', hex: '#72767A' },
            { code: '08448 A', name: '08448 A', hex: '#4A4D51' },
            { code: '08475 C', name: '08475 C', hex: '#D2B4B2' },
            { code: '08475 B', name: '08475 B', hex: '#A88A88' },
            { code: '08475 A', name: '08475 A', hex: '#806362' },
            { code: '08456 C', name: '08456 C', hex: '#E2C8C0' },
            { code: '08456 B', name: '08456 B', hex: '#B99F97' },
            { code: '08456 A', name: '08456 A', hex: '#90776F' },
            { code: '08470 C', name: '08470 C', hex: '#D0BDB9' },
            { code: '08470 B', name: '08470 B', hex: '#A89591' },
            { code: '08470 A', name: '08470 A', hex: '#806E6A' },
            { code: '08481 C', name: '08481 C', hex: '#A89292' },
            { code: '08481 B', name: '08481 B', hex: '#806A6A' },
            { code: '08481 A', name: '08481 A', hex: '#584444' },
            { code: '08467 C', name: '08467 C', hex: '#B2A3A0' },
            { code: '08467 B', name: '08467 B', hex: '#8A7B78' },
            { code: '08467 A', name: '08467 A', hex: '#625451' },
            { code: '08434 C', name: '08434 C', hex: '#DCA58B' },
            { code: '08434 B', name: '08434 B', hex: '#B47E64' },
            { code: '08434 A', name: '08434 A', hex: '#8C583F' },
            { code: '08489 C', name: '08489 C', hex: '#E8CBB5' },
            { code: '08489 B', name: '08489 B', hex: '#C0A38D' },
            { code: '08489 A', name: '08489 A', hex: '#987D67' },
            { code: '08435 C', name: '08435 C', hex: '#DCA080' },
            { code: '08435 B', name: '08435 B', hex: '#B47A5A' },
            { code: '08435 A', name: '08435 A', hex: '#8C5436' },
            { code: '08484 C', name: '08484 C', hex: '#C29B91' },
            { code: '08484 B', name: '08484 B', hex: '#9A756B' },
            { code: '08484 A', name: '08484 A', hex: '#725047' },
            { code: '08469 C', name: '08469 C', hex: '#BCA49B' },
            { code: '08469 B', name: '08469 B', hex: '#947E75' },
            { code: '08469 A', name: '08469 A', hex: '#6C5851' },
            { code: '08483 C', name: '08483 C', hex: '#C89B9C' },
            { code: '08483 B', name: '08483 B', hex: '#A07576' },
            { code: '08483 A', name: '08483 A', hex: '#785052' },
            { code: '08437 C', name: '08437 C', hex: '#DCA09E' },
            { code: '08437 B', name: '08437 B', hex: '#B47A78' },
            { code: '08437 A', name: '08437 A', hex: '#8C5454' },
            { code: '08499 C', name: '08499 C', hex: '#DCA09E' },
            { code: '08499 B', name: '08499 B', hex: '#B47A78' },
            { code: '08499 A', name: '08499 A', hex: '#8C5454' },
            { code: '08471 C', name: '08471 C', hex: '#BCA0A0' },
            { code: '08471 B', name: '08471 B', hex: '#947A7A' },
            { code: '08471 A', name: '08471 A', hex: '#6C5454' },
            { code: '08472 C', name: '08472 C', hex: '#A08C8E' },
            { code: '08472 B', name: '08472 B', hex: '#7A6668' },
            { code: '08472 A', name: '08472 A', hex: '#544244' },
            { code: '08466 C', name: '08466 C', hex: '#BCAFA4' },
            { code: '08466 B', name: '08466 B', hex: '#94897E' },
            { code: '08466 A', name: '08466 A', hex: '#6C635A' },
            { code: '08536 C', name: '08536 C', hex: '#8CB0C4' },
            { code: '08536 B', name: '08536 B', hex: '#668A9E' },
            { code: '08536 A', name: '08536 A', hex: '#42667A' },
            { code: '08453 C', name: '08453 C', hex: '#9CBCA4' },
            { code: '08453 B', name: '08453 B', hex: '#76967E' },
            { code: '08453 A', name: '08453 A', hex: '#52725A' },
            { code: '08534 C', name: '08534 C', hex: '#A4C2A0' },
            { code: '08534 B', name: '08534 B', hex: '#7E9C7A' },
            { code: '08534 A', name: '08534 A', hex: '#5A7856' },
            { code: '08476 C', name: '08476 C', hex: '#D2CDA8' },
            { code: '08476 B', name: '08476 B', hex: '#ACA782' },
            { code: '08476 A', name: '08476 A', hex: '#88835E' }
          ],
          gallery: [
            '/plaster-gallery-1.webp',
            '/plaster-gallery-2.webp',
            '/plaster-gallery-3.webp'
          ]
        }
      }
    }
  ],
\`;
  
  content = beforeStone + inorganicArray + afterSolidFunctional;
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully updated App.tsx');
} else {
  console.log('Could not find stone or solid-functional array start index.');
}
