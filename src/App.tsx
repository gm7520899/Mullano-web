/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { CollectionPage } from './pages/CollectionPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { HeritagePage } from './pages/HeritagePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AtelierPage } from './pages/AtelierPage';

type Language = 'zh' | 'en';

const CONTENT = {
  zh: {
    nav: {
      home: '首页',
      heritage: { 
        title: '品牌溯源', 
        sub: [
          { name: '品牌故事', path: '/heritage/story' },
          { name: '玉兰传承', path: '/heritage/legacy' },
          { name: '工匠精神', path: '/heritage/craft' },
          { name: '材质溯源', path: '/heritage/material' }
        ] 
      },
      collections: { 
        title: '艺术肌理', 
        sub: [
          { name: '有机系列', path: '/collections/organic' },
          { name: '无机系列', path: '/collections/inorganic' },
          { name: '纯色功能漆', path: '/collections/solid-functional' }
        ] 
      },
      projects: { 
        title: '空间实景', 
        sub: [
          { name: '豪宅别墅', path: '/projects/residential' },
          { name: '商业空间', path: '/projects/commercial' },
          { name: '酒店会所', path: '/projects/hospitality' }
        ] 
      },
      art: {
        title: '墙面艺术',
        path: '/atelier/art'
      },
      atelier: { 
        title: '灵感与服务', 
        sub: [
          { name: '墙面艺术', path: '/atelier/art' },
          { name: '色彩趋势', path: '/atelier/trends' },
          { name: '涂料科普', path: '/atelier/knowledge' },
          { name: '招商加盟', path: '/atelier/investment' }
        ] 
      },
    },
    hero: {
      title: '墙，是家中面积最大的家具',
      subtitle: '让艺术漫延墙面 | 传承玉兰集团40年匠心',
      cta: '探索艺术肌理',
    },
    certificates: [
      { title: '法国 VOC A+', desc: '国际至高环保标准' },
      { title: '0级防霉', desc: '卓越墙面生命力' },
      { title: 'A1 级防火', desc: '天然矿物阻燃' },
      { title: '高透气性', desc: '墙面自由呼吸' },
    ],
    collections: {
      tag: '产品系列',
      title: '艺术系列大类',
      tabs: { organic: '有机系列', inorganic: '无机系列', 'solid-functional': '纯色功能漆' }
    },
    craft: {
      tag: '工艺标准',
      title: 'Standard of Craft',
      heading: '三分料，七分工\n每一面墙都是孤品',
      desc: '依托玉兰集团 40 年深厚积淀，Mullano 建立了严苛的标准化施工体系。从基层处理到每一遍手工批刮，工匠的指尖温度赋予了材料呼吸与灵魂。我们不仅是在涂刷墙面，更是在创作一件跨越时间的艺术品。',
      stats: [
        { label: '集团匠心传承', value: '40+' },
        { label: '标准化施工交付', value: '全面' }
      ]
    },
    footer: {
      desc: '木兰诺（Mullano）是玉兰集团旗下的高端艺术涂料品牌，致力于将全球前沿的色彩美学与精湛的工匠技艺带入每一个中国家庭。',
      sections: [
        { title: '产品系列', items: ['有机系列', '无机系列', '纯色功能漆'] },
        { title: '品牌服务', items: ['涂料科普', '施工标准化', '色彩咨询服务', '售后保障'] },
        { title: '联系我们', items: ['广东省东莞市莞龙路玉兰集团总部', '服务热线：0769-22677266', '官方微信：Mullano木兰诺'] }
      ],
      bottom: ['隐私政策', '使用条款', '粤ICP备XXXXXXXX号'],
      copyright: '© 2026 MULLANO. 玉兰集团旗下品牌. 保留所有权利.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      heritage: { 
        title: 'Heritage', 
        sub: [
          { name: 'Brand Story', path: '/heritage/story' },
          { name: 'Legacy', path: '/heritage/legacy' },
          { name: 'Craftsmanship', path: '/heritage/craft' },
          { name: 'Material Traceability', path: '/heritage/material' }
        ] 
      },
      collections: { 
        title: 'Collections', 
        sub: [
          { name: 'Organic', path: '/collections/organic' },
          { name: 'Inorganic', path: '/collections/inorganic' },
          { name: 'Solid Functional', path: '/collections/solid-functional' }
        ] 
      },
      projects: { 
        title: 'Projects', 
        sub: [
          { name: 'Villas', path: '/projects/residential' },
          { name: 'Commercial', path: '/projects/commercial' },
          { name: 'Hotels', path: '/projects/hospitality' }
        ] 
      },
      art: {
        title: 'Wall Artistry',
        path: '/atelier/art'
      },
      atelier: { 
        title: 'Inspirations & Services', 
        sub: [
          { name: 'Wall Artistry', path: '/atelier/art' },
          { name: 'Trends', path: '/atelier/trends' },
          { name: 'Paint Encyclopedia', path: '/atelier/knowledge' },
          { name: 'Franchise & Investment', path: '/atelier/investment' }
        ] 
      },
    },
    hero: {
      title: 'The Wall: The Largest Canvas',
      subtitle: 'Let Art Flow On Walls | 40 Years of Yulan Heritage',
      cta: 'Explore Textures',
    },
    certificates: [
      { title: 'French VOC A+', desc: 'Global Eco Standard' },
      { title: 'Grade 0 Mold', desc: 'Wall Longevity' },
      { title: 'A1 Fireproof', desc: 'Natural Retardant' },
      { title: 'Breathable', desc: 'Walls Can Breathe' },
    ],
    collections: {
      tag: 'Le Collezioni',
      title: 'Masterpiece Textures',
      tabs: { organic: 'Organic', inorganic: 'Inorganic', 'solid-functional': 'Solid Functional' }
    },
    craft: {
      tag: 'Standard of Craft',
      title: 'Standard of Craft',
      heading: '30% Material, 70% Craft.\nEvery wall is unique.',
      desc: 'Backed by 40 years of Yulan heritage, Mullano has established a strict application system. Every stroke by our artisans gives the material breath and soul. We are not just painting walls; we are creating timeless art.',
      stats: [
        { label: 'Years of Heritage', value: '40+' },
        { label: 'Standardized Delivery', value: 'Comprehensive' }
      ]
    },
    footer: {
      desc: 'Mullano is a premium art paint brand under Yulan Group, dedicated to bringing global color aesthetics and exquisite craftsmanship to every home.',
      sections: [
        { title: 'Collections', items: ['Organic', 'Inorganic', 'Solid Functional'] },
        { title: 'Services', items: ['Knowledge Base', 'Standardization', 'Consulting', 'Warranty'] },
        { title: 'Contact', items: ['Yulan HQ, Dongguan, Guangdong', 'Hotline: 0769-22677266', 'WeChat: Mullano'] }
      ],
      bottom: ['Privacy Policy', 'Terms of Use', 'ICP XXXXXXXX'],
      copyright: '© 2026 MULLANO. A BRAND OF YULAN GROUP. ALL RIGHTS RESERVED.'
    }
  }
};

const CATEGORIES = {
  organic: [
    { 
      id: 'velvet-silk', 
      name: { zh: '丝绸', en: 'Silk' }, 
      desc: { 
        zh: '模拟丝绸细腻质感，15%-25% 柔和光泽，漫反射光影过渡非常柔和，触感如丝般顺滑。', 
        en: 'Simulates fine silk texture with 15%-25% soft gloss and smooth diffuse reflection, silky touch.' 
      }, 
      image: '/velvet-hero.webp',
      details: {
        zh: {
          intro: '丝绒系列是一款具有强烈东方丝绸效果的艺术涂料。采用独特的高分子聚合技术，结合天然矿物质颜料，主旨在模拟东方丝绸的真实质感和色泽。不仅具有优异的附着力和耐久性，同时具备良好的透气性和环保性能，能够长时间保持色彩的鲜艳和纹理的清晰。',
          features: [
            { title: '真实纹理', desc: '通过特殊工艺，能够还原丝绸的细腻质感，呈现出自然、逼真的效果。' },
            { title: '环保健康', desc: '采用环保原料，不含有毒有害物质，产品符合国家相关环保标准。' },
            { title: '优异附着力', desc: '与基层结合力强，不易剥落，不开裂、不变形。' },
            { title: '卓越表现力', desc: '色彩丰富，质感细腻，营造独特艺术氛围。' },
            { title: '防潮透气', desc: '透气性好，防潮，吸潮，不惧“回南天”。' }
          ],
          steps: [
            { title: '渗透底漆层', desc: '渗透底漆加20%水，滚涂或喷涂一遍，干燥2-3小时。' },
            { title: '中涂层', desc: '净味底漆（需调色）加15-20%水搅拌均匀后滚涂或喷涂一遍，干燥2-3小时，建议底漆多施工一遍，以获得更好效果。' },
            { title: '花纹丝绸效果（可选）', desc: '用羊毛滚蘸取丝绸面漆（需调色）滚涂第一遍，均匀无透底即可，立即用圆形打磨器打出无规则花朵纹理，干燥4小时。以第一遍相同手法涂刷第二遍面漆，注意第二遍比第一遍辊涂稍厚一些。' },
            { title: '平批丝绸效果（可选）', desc: '用羊毛滚蘸取丝绸面漆（需调色）均匀滚涂一遍，厚度为0.1-0.15mm，未干时用不锈钢批刀朝不同方向交叉不规则收平，收出5-10cm长的图纹，干燥4小时。重复第一次涂刷方式，做第二遍面漆，最终表面无明显刀痕，无透底，形成明暗不一的光滑效果。' }
          ],
          precautions: [
            '施工过程中应避免与其他涂料混合使用，以免影响效果。',
            '施工时应保持手法均匀，避免出现色差、刷痕等现象。',
            '施工完成后，应确保涂层充分干燥，避免触摸、摩擦，以免影响涂层质量。',
            '每次开盖使用后，务必盖紧涂料桶，并且存放在温度介于+10℃ — +30℃之间的环境中。',
            '施工过程中要注意防护，避免直接接触皮肤，保护好眼睛和脸部。如不慎接触，应立即用清水清洗，如有不适应及时就医。',
            '产品色块为样品制作，供颜色参考，最终颜色以实际使用情况为准。'
          ],
          scenarios: ['家居', '别墅', '酒店', '会所', '室内墙面', '天花板'],
          colors: [
            { code: 'DV 501', name: '象牙白', hex: '#F5F5F0' },
            { code: 'DV 508', name: '古铜金', hex: '#B87333' },
            { code: 'DV 500+467C', name: '银灰', hex: '#C0C0C0' },
            { code: 'DV 500+479G', name: '孔雀蓝', hex: '#5F8A8B' },
            { code: 'DV 500+452G', name: '茱萸粉', hex: '#F5D0D6' },
            { code: 'DV 500+530G', name: '豆绿', hex: '#D4E0D0' },
            { code: 'DV 509+480E', name: '芥末黄', hex: '#E3C565' },
            { code: 'DV 509+536C', name: '深海蓝', hex: '#2B5B6A' }
          ],
          gallery: [
            '/velvet-gallery-1.webp',
            '/velvet-gallery-2.webp',
            '/velvet-gallery-3.webp'
          ]
        },
        en: {
          intro: 'VELVET Series is a series with a strong oriental silk effect, using a unique polymer polymerization technology combined with natural mineral pigments. It simulates the real texture and color of oriental silk, offering excellent adhesion, durability, and environmental performance.',
          features: [
            { title: 'Real Texture', desc: 'Through special technology, the delicate texture of silk is restored, showing a natural and realistic effect.' },
            { title: 'Eco-Friendly', desc: 'Uses environmentally friendly raw materials, containing no toxic or harmful substances.' },
            { title: 'Excellent Adhesion', desc: 'Strong adhesion to the base layer, not easy to peel off, crack, or deform.' },
            { title: 'Artistic Expression', desc: 'Rich colors and delicate textures create a unique artistic atmosphere.' },
            { title: 'Moisture-Proof', desc: 'Good air permeability, moisture-proof, and moisture-absorption capabilities.' }
          ],
          steps: [
            { title: 'Penetrating Primer', desc: 'Add 20% water to the penetrating primer, roll or spray one coat, and dry for 2-3 hours.' },
            { title: 'Middle Coat', desc: 'Add 15-20% water to the odorless primer (tinted), stir evenly, roll or spray one coat, and dry for 2-3 hours. It is recommended to apply an extra coat for better results.' },
            { title: 'Patterned Silk Effect (Optional)', desc: 'Roll the first coat of silk topcoat (tinted) evenly. Immediately use a circular sander to create irregular flower textures. Dry for 4 hours. Apply the second coat using the same method, slightly thicker than the first.' },
            { title: 'Flat Silk Effect (Optional)', desc: 'Roll the silk topcoat (tinted) evenly to a thickness of 0.1-0.15mm. While wet, use a stainless steel trowel to smooth it irregularly in different directions, creating 5-10cm patterns. Dry for 4 hours. Repeat for the second coat to achieve a smooth finish with varying light and dark effects.' }
          ],
          precautions: [
            'Mixing with other coatings should be avoided during the construction process, so as not to affect the effect.',
            'During construction, the technique should be kept uniform to avoid color difference, brush marks and other phenomena.',
            'After the construction is completed, it should be ensured that the coating is fully dry, and touch and friction should be avoided so as not to affect the quality of the coating.',
            'After each opening the lid, be sure to close it tightly and store it in an environment between +10°C and +30°C.',
            'Pay attention to protection during construction, avoid direct skin contact, and protect eyes and face.'
          ],
          scenarios: ['Homes', 'Villas', 'Hotels', 'Clubs', 'Interior Walls', 'Ceilings'],
          colors: [
            { code: 'DV 501', name: 'Ivory White', hex: '#F5F5F0' },
            { code: 'DV 508', name: 'Bronze Gold', hex: '#B87333' },
            { code: 'DV 500+467C', name: 'Silver Gray', hex: '#C0C0C0' },
            { code: 'DV 500+479G', name: 'Peacock Blue', hex: '#5F8A8B' },
            { code: 'DV 500+452G', name: 'Cornus Pink', hex: '#F5D0D6' },
            { code: 'DV 500+530G', name: 'Bean Green', hex: '#D4E0D0' },
            { code: 'DV 509+480E', name: 'Mustard Yellow', hex: '#E3C565' },
            { code: 'DV 509+536C', name: 'Deep Sea Blue', hex: '#2B5B6A' }
          ],
          gallery: [
            '/velvet-gallery-1.webp',
            '/velvet-gallery-2.webp',
            '/velvet-gallery-3.webp'
          ]
        }
      }
    },
    {
      id: 'suede-touch',
      name: { zh: '鹿皮', en: 'Suede' },
      desc: {
        zh: '模拟天然鹿皮细腻质感，极致哑光漫反射，触感温润如玉，体现低调奢华。',
        en: 'Simulates natural suede texture with ultra-matte diffuse reflection and warm touch.'
      },
      image: '/suede-hero.webp',
      details: {
        zh: {
          intro: '鹿皮系列（SUEDE TOUCH）是一款模拟天然鹿皮细腻质感的艺术涂料。采用独特的高分子聚合技术，结合天然矿物质颜料，呈现出极致哑光的视觉效果和温润细腻的触感。它不仅具有优异的附着力和耐久性，同时具备良好的透气性和环保性能，是打造低调奢华空间的理想选择。',
          features: [
            { title: '真实质感', desc: '通过特殊工艺，精准还原鹿皮的细腻纹理，触感温润。' },
            { title: '极致哑光', desc: '15%-25%超低光泽，漫反射效果极佳，视觉舒适。' },
            { title: '环保健康', desc: '采用环保原料，无毒无味，符合法国VOC A+认证。' },
            { title: '优异附着力', desc: '与基层结合紧密，不易剥落，不开裂。' },
            { title: '防潮透气', desc: '良好的透气性能，防霉防潮，保持墙面干爽。' }
          ],
          steps: [
            { title: '渗透底漆层', desc: '渗透底漆加20%水，滚涂或喷涂一遍，干燥2-3小时。' },
            { title: '中涂层', desc: '净味底漆（需调色）加15-20%水，滚涂或喷涂一遍，干燥2-3小时；建议底漆多施工一遍，以获得更好效果。' },
            { title: '经典鹿皮效果（可选）', desc: '鹿皮面漆（需调色）加10-20%水搅拌均匀。用猪鬃刷以纵横交错的形式涂抹刷鹿皮面漆；待表干后，以同样的方法涂抹第二遍；第二遍没有反光时，用没有粘料的猪鬃刷将表面轻拉刷痕，使之更加细腻柔和；完全干透后，用1000目砂纸轻微打磨一遍。' },
            { title: '竖纹与布纹效果（可选）', desc: '鹿皮面漆（需调色）加10-20%水搅拌均匀。用羊毛滚蘸取鹿皮面漆均匀辊涂第一遍，接着用单排刷从上到下拉出均匀的肌理效果。以第一遍相同手法辊涂第二遍鹿皮面漆，接着竖纹效果用单排刷从上到下拉出均匀的肌理效果；布纹效果用单排刷从左到右拉出均匀的肌理效果。最终效果要求均匀，无明显留痕即可。' }
          ],
          precautions: [
            '施工环境温度应在10°C-30°C之间。',
            '保持手法均匀，避免产生明显接头或色差。',
            '开盖后未使用完的涂料应密封保存。'
          ],
          scenarios: ['私人豪宅', '高端别墅', '星级酒店', '艺术展厅', '高端商业空间'],
          colors: [
            { code: '18456', name: '暖灰', hex: '#D2C9BD' },
            { code: '18481', name: '褐灰', hex: '#A89F94' },
            { code: '18467', name: '银灰', hex: '#C5C7C4' },
            { code: '18470', name: '象牙白', hex: '#EAE3D5' },
            { code: '18496', name: '深咖', hex: '#6B5E54' },
            { code: '18479', name: '雾蓝', hex: '#8A9BA8' },
            { code: '18498', name: '暮粉', hex: '#D9BBAE' },
            { code: '18484', name: '沙金', hex: '#D9C5A0' }
          ],
          gallery: [
            '/suede-gallery-1.webp',
            '/suede-gallery-2.webp',
            '/suede-gallery-3.webp'
          ]
        },
        en: {
          intro: 'MULLANO Buckskin series is an art paint that simulates the texture of natural buckskin. Using unique polymer technology and natural mineral pigments, it provides excellent adhesion and durability, presenting a delicate, warm touch and ultra-matte visual effect.',
          features: [
            { title: 'Realistic Texture', desc: 'Accurately restores the delicate texture of buckskin through special processes.' },
            { title: 'Eco-Friendly', desc: 'Uses environmentally friendly raw materials, non-toxic, complies with French VOC A+.' },
            { title: 'Excellent Adhesion', desc: 'Strongly bonded to the base layer, not easy to peel or crack.' },
            { title: 'Artistic Expression', desc: 'Rich colors and delicate textures create a unique artistic atmosphere.' },
            { title: 'Breathable', desc: 'Good breathability, mold-proof and moisture-proof.' }
          ],
          specs: [
            { label: 'Packaging', value: '5KG/Bucket' },
            { label: 'Theoretical Coverage', value: '4-6 ㎡/kg' },
            { label: 'Gloss', value: 'Ultra-Matte (Diffuse)' },
            { label: 'Storage Temp', value: '+10°C to +30°C' }
          ],
          steps: [
            { title: 'Penetrating Primer', desc: 'Add 20% water to the penetrating primer, roll or spray one coat, and dry for 2-3 hours.' },
            { title: 'Middle Coat', desc: 'Add 15-20% water to the odorless primer (tinted), roll or spray one coat, and dry for 2-3 hours. It is recommended to apply an extra coat for better results.' },
            { title: 'Classic Suede Effect (Optional)', desc: 'Mix suede topcoat (tinted) with 10-20% water. Use a bristle brush to apply in a crisscross pattern. After surface drying, apply the second coat similarly. When the second coat has no reflection, lightly pull brush marks with a clean bristle brush to make it softer. After completely dry, lightly sand with 1000-grit sandpaper.' },
            { title: 'Vertical & Fabric Texture (Optional)', desc: 'Mix suede topcoat (tinted) with 10-20% water. Evenly roll the first coat with a wool roller, then use a single-row brush to pull uniform vertical textures from top to bottom. Apply the second coat similarly. For vertical effect, pull from top to bottom; for fabric effect, pull from left to right. Ensure uniform final effect with no obvious marks.' }
          ],
          scenarios: ['Private Mansions', 'Luxury Villas', 'Star Hotels', 'Art Galleries', 'Premium Commercial Spaces'],
          colors: [
            { code: '18456', name: 'Warm Gray', hex: '#D2C9BD' },
            { code: '18481', name: 'Taupe', hex: '#A89F94' },
            { code: '18467', name: 'Silver Gray', hex: '#C5C7C4' },
            { code: '18470', name: 'Ivory', hex: '#EAE3D5' },
            { code: '18496', name: 'Deep Coffee', hex: '#6B5E54' },
            { code: '18479', name: 'Mist Blue', hex: '#8A9BA8' },
            { code: '18498', name: 'Twilight Pink', hex: '#D9BBAE' },
            { code: '18484', name: 'Sand Gold', hex: '#D9C5A0' }
          ],
          gallery: [
            '/suede-gallery-1.webp',
            '/suede-gallery-2.webp',
            '/suede-gallery-3.webp'
          ]
        }
      }
    },
    { 
      id: 'sahara-wind', 
      name: { zh: '沙漠', en: 'Desert' }, 
      desc: { 
        zh: '微粒肌理如大漠狂沙，光影过渡自然，体现纯粹极简美学与自然的律动。', 
        en: 'Fine granular texture like desert sands, with natural light transitions and minimalist aesthetics.' 
      }, 
      image: '/mullano-desert-hero.webp',
      details: {
        zh: {
          intro: '沙漠系列是一款具有大漠狂沙效果的系列，采用独特的高分子聚合技术，结合天然矿物质颜料，旨在模拟大漠狂沙的的真实场景及色泽。该系列涂料不仅具有优异的附着力和耐久性，同时具备良好的透气性和环保性能，能够长时间保持色彩的鲜艳和纹理的清晰。适用于高端别墅、酒店、会所、商业空间等各类场所的室内装饰。',
          features: [
            { title: '真实纹理', desc: '通过特殊工艺，呈现沙漠粗犷大气的独特颗粒肌理，呈现出自然、逼真的效果。' },
            { title: '环保健康', desc: '采用环保原料，不含有毒有害物质，产品符合国家环保标准。' },
            { title: '优异附着力', desc: '与基层粘结力强，不易剥落，不开裂、不变形。' },
            { title: '卓越表现力', desc: '色彩丰富，质感细腻，营造独特艺术氛围。' },
            { title: '防潮透气', desc: '透气性好、防潮、吸潮，不惧“回南天”。' }
          ],
          steps: [
            { title: '渗透底漆层', desc: '渗透底漆加20%水，滚涂或喷涂一遍，干燥2-3小时。' },
            { title: '中涂层', desc: '净味底漆(不调色)加10-20%水搅拌均匀后滚涂或喷涂一遍，干燥2-3小时。' },
            { title: '平涂效果（可选）', desc: '沙漠面漆加15-20%水搅拌均匀。用猪鬃刷沾沙漠面漆往墙面按八字交叉均匀上料（注意不可直横、直竖刷），每笔刷的长度不超过10-20cm，手法要自然。第一遍干后的1-2小时后，用同样的手法再涂刷第二遍。待第二遍未干时（不反光、不粘料），再用猪鬃刷毛尖轻柔的涂扫方式，将产品向不同方向涂扫，每扫一次的长度不超过10-15cm，以减少偶然产生的条纹现象，要求无明显刷痕和透底即可。' },
            { title: '竖纹肌理效果（可选）', desc: '沙漠面漆加15-20%水搅拌均匀。用猪鬃刷刷上沙漠面漆，然后用单排刷从上到下，拉出均匀垂直的竖纹肌理效果。用猪鬃刷从上至下的方式进行涂刷第二遍，在产品仍然潮湿状态下，用工具单排刷，从高往低垂直刮拉条纹，越垂直越好。' }
          ],
          precautions: [
            '万能底漆、净味底漆、沙漠面漆涂刷效果要求均匀，不透底，无明显留痕。',
            '施工环境温度应在10°C-30°C之间。'
          ],
          scenarios: ['高端别墅', '酒店', '会所', '商业空间', '室内装饰'],
          colors: [
            { code: 'LUX ARGENTO 100', name: '银色', hex: '#E2E2E2' },
            { code: 'LUX ORO 200', name: '金色', hex: '#E8C37A' },
            { code: 'LUX 300', name: '灰色', hex: '#A8A8A8' },
            { code: 'MATT 500', name: '哑光白', hex: '#F5F5F5' }
          ],
          gallery: [
            '/mullano-desert-case-living.webp',
            '/mullano-desert-case-dining.webp',
            '/mullano-desert-case-bedroom.webp'
          ]
        },
        en: {
          intro: 'The Desert series simulates the effect of wild desert sand, using unique polymer technology combined with natural mineral pigments. It offers excellent adhesion, durability, breathability, and environmental performance, keeping colors bright and textures clear for a long time.',
          features: [
            { title: 'Real Texture', desc: 'Presents a unique granular texture of rough desert sand, showing a natural and realistic effect.' },
            { title: 'Eco-Friendly', desc: 'Uses eco-friendly materials, free of toxic substances, meeting national standards.' },
            { title: 'Excellent Adhesion', desc: 'Strong bond with the base, not easy to peel, crack, or deform.' },
            { title: 'Artistic Expression', desc: 'Rich colors and delicate textures create a unique artistic atmosphere.' },
            { title: 'Moisture-Proof', desc: 'Good breathability, moisture-proof, and absorbs moisture.' }
          ],
          steps: [
            { title: 'Penetrating Primer', desc: 'Add 20% water to the penetrating primer, roll or spray one coat, and dry for 2-3 hours.' },
            { title: 'Middle Coat', desc: 'Add 10-20% water to the odorless primer (untinted), stir evenly, roll or spray one coat, and dry for 2-3 hours.' },
            { title: 'Flat Coating Effect (Optional)', desc: 'Mix desert topcoat with 15-20% water. Use a bristle brush to apply in a figure-eight cross pattern (do not brush straight horizontally or vertically), 10-20cm per stroke. Apply the second coat after 1-2 hours. While the second coat is still wet, gently sweep the product in different directions with the tip of the bristle brush, 10-15cm per sweep, to reduce accidental stripes.' },
            { title: 'Vertical Texture Effect (Optional)', desc: 'Mix desert topcoat with 15-20% water. Apply with a bristle brush, then use a single-row brush to pull uniform vertical textures from top to bottom. Apply the second coat similarly from top to bottom. While still wet, use a single-row brush to scrape vertical stripes from high to low.' }
          ],
          precautions: [
            'Ensure uniform application of primer and topcoat without showing the base or obvious marks.',
            'Construction temperature should be between 10°C and 30°C.'
          ],
          scenarios: ['High-end Villas', 'Hotels', 'Clubs', 'Commercial Spaces', 'Interior Decor'],
          colors: [
            { code: 'LUX ARGENTO 100', name: 'Silver', hex: '#E2E2E2' },
            { code: 'LUX ORO 200', name: 'Gold', hex: '#E8C37A' },
            { code: 'LUX 300', name: 'Gray', hex: '#A8A8A8' },
            { code: 'MATT 500', name: 'Matte White', hex: '#F5F5F5' }
          ],
          gallery: [
            '/mullano-desert-case-living.webp',
            '/mullano-desert-case-dining.webp',
            '/mullano-desert-case-bedroom.webp'
          ]
        }
      }

    },
    { 
      id: 'microcement', 
      name: { zh: '微水泥', en: 'Microcement' }, 
      desc: { 
        zh: '纯粹无缝工业美学，漫反射表面，营造高级灰色调空间，硬朗而不失细腻。', 
        en: 'Seamless industrial aesthetic with a diffuse reflection surface, creating premium gray spaces.' 
      }, 
      image: '/microcement-hero.webp',
      details: {
        zh: {
          intro: 'MULLANO 微水泥系列是一种源自欧洲的高端装饰材料，由高强度水泥、水性树脂、矿物填料及纳米添加剂组成。它以其极致的极简主义风格、无缝一体化的视觉效果以及卓越的物理性能，成为现代建筑和室内设计的宠儿。无论是地面、墙面还是家具表面，微水泥都能提供纯粹、硬朗且细腻的工业美学体验。',
          features: [
            { title: '无缝整体', desc: '大面积施工无接缝，空间感极强，视觉效果纯粹统一。' },
            { title: '极薄厚度', desc: '施工厚度仅为2-3mm，不占用空间，不增加建筑负荷。' },
            { title: '坚固耐磨', desc: '具有极高的硬度和耐磨性，抗压强度高，经久耐用。' },
            { title: '极致防水', desc: '配合专用罩面漆，具备优异的防水防油污性能，适用于厨卫。' },
            { title: '极佳附着力', desc: '可直接施工于瓷砖、木材、金属、石膏板等多种基材表面。' },
            { title: '环保健康', desc: '水性配方，极低VOC排放，无毒无味，符合严苛环保标准。' }
          ],
          steps: [
            { title: '基层处理', desc: '确保基面坚实、平整、干燥、无油污。' },
            { title: '打磨找平', desc: '对基层进行初步打磨，确保平整度符合施工要求。' },
            { title: '界面剂', desc: '涂刷专用界面剂，增强基面与微水泥的附着力。' },
            { title: '基础层', desc: '批刮第一道微水泥基础层，找平基面。' },
            { title: '抗裂处理', desc: '铺设抗裂玻璃纤维网，防止表面开裂。' },
            { title: '饰面层', desc: '批刮两道微水泥饰面层，营造细腻的漫反射质感。' },
            { title: '精细打磨', desc: '面层干燥后进行精细打磨，提升触感。' },
            { title: '罩面保护', desc: '涂刷专用双组份聚氨酯罩面漆，提升防水防污性能。' }
          ],
          precautions: [
            '施工环境温度应在5°C-35°C之间。',
            '严格按照比例混合各组份，搅拌均匀。',
            '每道工序需完全干燥后方可进行下一道施工。',
            '基层必须具备足够的强度，不得有起砂、空鼓现象。',
            '施工完成后需养护7天方可达到最佳强度。'
          ],
          scenarios: ['极简家居', '商业展厅', '厨卫空间', '户外露台', '办公空间'],
          colors: [
            { code: 'NQ11108', name: '蒸肉白', hex: '#EAE3D5' },
            { code: 'NQ11123', name: '瓦灰', hex: '#9FA1A4' },
            { code: 'NQ11205', name: '赭石红', hex: '#8B3A3A' },
            { code: 'MC 01', name: '浅灰', hex: '#D3D3D3' },
            { code: 'MC 02', name: '中灰', hex: '#A9A9A9' },
            { code: 'MC 03', name: '深灰', hex: '#696969' }
          ],
          gallery: [
            '/microcement-gallery-1.webp',
            '/microcement-gallery-2.webp',
            '/microcement-gallery-3.webp'
          ]
        },
        en: {
          intro: 'MULLANO Microcement series is a high-end decorative material originating from Europe, composed of high-strength cement, water-based resins, mineral fillers, and nano-additives. It offers exceptional adhesion and a seamless, minimalist industrial aesthetic.',
          features: [
            { title: 'Seamless', desc: 'Large-scale application without joints for a unified visual effect.' },
            { title: 'Ultra-thin', desc: 'Only 2-3mm thick, saving space and reducing building load.' },
            { title: 'Durable', desc: 'High hardness and wear resistance with excellent compressive strength.' },
            { title: 'Waterproof', desc: 'Excellent water and stain resistance with special sealer, suitable for kitchens/baths.' },
            { title: 'Great Adhesion', desc: 'Can be applied directly to tiles, wood, metal, and plasterboard.' },
            { title: 'Eco-friendly', desc: 'Water-based formula with low VOC, non-toxic and odorless.' }
          ],
          steps: [
            { title: 'Base Prep', desc: 'Ensure the surface is solid, flat, dry, and free of oil.' },
            { title: 'Sanding', desc: 'Preliminary sanding of the base to ensure flatness.' },
            { title: 'Primer', desc: 'Apply special primer to enhance adhesion.' },
            { title: 'Base Coat', desc: 'Apply the first layer of microcement base to level the surface.' },
            { title: 'Anti-crack', desc: 'Lay anti-crack fiberglass mesh to prevent surface cracking.' },
            { title: 'Finish Coat', desc: 'Apply two layers of finish coat for a delicate diffuse texture.' },
            { title: 'Fine Sanding', desc: 'Fine sanding after the finish coat is dry for better touch.' },
            { title: 'Protection', desc: 'Apply two-component polyurethane sealer for water and stain resistance.' }
          ],
          precautions: [
            'Construction temperature should be between 5°C-35°C.',
            'Mix components strictly according to the ratio.',
            'Each layer must be fully dry before the next step.',
            'The substrate must be strong enough without sanding or hollowing.',
            'Curing for 7 days is required for maximum strength.'
          ],
          scenarios: ['Minimalist Homes', 'Showrooms', 'Kitchens/Baths', 'Outdoor Terraces', 'Offices'],
          colors: [
            { code: 'NQ11108', name: 'Steamed Meat White', hex: '#EAE3D5' },
            { code: 'NQ11123', name: 'Tile Gray', hex: '#9FA1A4' },
            { code: 'NQ11205', name: 'Ochre Red', hex: '#8B3A3A' },
            { code: 'MC 01', name: 'Light Gray', hex: '#D3D3D3' },
            { code: 'MC 02', name: 'Medium Gray', hex: '#A9A9A9' },
            { code: 'MC 03', name: 'Dark Gray', hex: '#696969' }
          ],
          gallery: [
            '/microcement-gallery-1.webp',
            '/microcement-gallery-2.webp',
            '/microcement-gallery-3.webp'
          ]
        }
      }
    },
    {
      id: 'milan-velvet',
      name: { zh: '米兰丝绒', en: 'Milan Velvet' },
      desc: {
        zh: '丝绒般细腻的触感，蕴含丰富的肌理，不同角度与光线呈现华丽雅致的光泽变化。',
        en: 'Delicate velvet-like touch with rich textures, presenting gorgeous and elegant gloss variations under different angles and lighting.'
      },
      image: '/milan-velvet-hero.webp',
      details: {
        zh: {
          intro: '米兰丝绒（MILAN VELVET）带来丝绒般细腻的触感，蕴含丰富的肌理。在不同角度下，华丽而不减内涵；在不同光线下，光耀却不失雅致。它提供神秘又奢华的装饰效果，华贵而时尚，独家奉献，贵乎稀有，是艺术与健康的典范。',
          features: [
            { title: '细腻触感', desc: '丝绒般细腻的触感，蕴含丰富的肌理，带来出众的肌肤体验。' },
            { title: '光影变幻', desc: '不同角度，不同光线，呈现华丽雅致的光泽变化，空间更具层次感。' },
            { title: '奢华装饰', desc: '神秘又奢华，华贵而时尚，瞬间提升空间的艺术格调。' },
            { title: '艺术健康', desc: '独家奉献，贵乎稀有，不仅是视觉的享受，更是艺术与健康的典范。' },
            { title: '色彩丰富', desc: '涵盖灰色、香槟色、蓝色、粉色、紫色、薄荷绿等12大色系，满足多样化设计需求。' }
          ],
          steps: [
            { title: '基层处理', desc: '确保墙面平整、干燥、清洁，无油污和浮灰。' },
            { title: '抗碱底漆', desc: '均匀滚涂专用抗碱封闭底漆一遍，增强附着力并封闭基底。' },
            { title: '丝绒中涂', desc: '平批米兰丝绒中涂层，确保表面平整无刀痕，干燥后打磨。' },
            { title: '面漆造型', desc: '使用专用工具（如海藻海绵或批刀）进行面漆施工，制作出丝绒般的肌理效果。' },
            { title: '细节收光', desc: '在半干状态下进行收光处理，使丝绒光泽更加自然柔和。' }
          ],
          scenarios: ['高端住宅', '大平层', '艺术展厅', '精品酒店', '背景墙'],
          colors: [
            { code: 'NQ09101', name: '蒸汽灰', hex: '#C4C4C4' },
            { code: 'NQ09203', name: '阳光色', hex: '#E8B478' },
            { code: 'NQ09403', name: '怀旧色', hex: '#BDB5AD' },
            { code: 'NQ09606', name: '烟蓝色', hex: '#7A93A7' },
            { code: 'NQ09803', name: '青柠色', hex: '#B5C7A4' },
            { code: 'NQ09902', name: '银白色', hex: '#A8AEB2' },
            { code: 'NQ10203', name: '水晶玫瑰', hex: '#D49A9E' },
            { code: 'NQ10306', name: '初晴', hex: '#9BB1C2' },
            { code: 'NQ10406', name: '浅紫色', hex: '#B2B0C4' },
            { code: 'NQ10603', name: '艾绿', hex: '#6A9C9E' },
            { code: 'NQ10706', name: '浅麦色', hex: '#C4B8B1' },
            { code: 'NQ10804', name: '鲨鱼灰', hex: '#8A9BA8' }
          ],
          gallery: [
            '/milan-velvet-gallery.webp',
            '/milan-velvet-gallery-2.webp',
            '/milan-velvet-gallery-3.webp'
          ]
        },
        en: {
          intro: 'MILAN VELVET brings a delicate velvet-like touch with rich textures. Under different angles, it is gorgeous yet profound; under different lighting, it is radiant yet elegant. It offers a mysterious and luxurious decorative effect, serving as a model of art and health.',
          features: [
            { title: 'Delicate Touch', desc: 'Velvet-like delicate touch with rich textures for an ultimate tactile experience.' },
            { title: 'Light & Shadow', desc: 'Presents gorgeous and elegant gloss variations under different angles and lighting.' },
            { title: 'Luxurious Decor', desc: 'Mysterious and luxurious, instantly elevating the artistic style of the space.' },
            { title: 'Art & Health', desc: 'Exclusive and rare, it is not only a visual enjoyment but also a model of art and health.' },
            { title: 'Rich Colors', desc: 'Covers 12 major color collections including gray, champagne, blue, pink, purple, and mint green.' }
          ],
          steps: [
            { title: 'Base Treatment', desc: 'Ensure the wall is flat, dry, clean, and free of oil and dust.' },
            { title: 'Alkali-Resistant Primer', desc: 'Evenly roll a coat of special alkali-resistant primer to enhance adhesion.' },
            { title: 'Velvet Middle Coat', desc: 'Apply the Milan Velvet middle coat evenly, sand after drying.' },
            { title: 'Topcoat Styling', desc: 'Use special tools to apply the topcoat and create a velvet-like texture.' },
            { title: 'Detail Polishing', desc: 'Polish in a semi-dry state to make the velvet gloss more natural and soft.' }
          ],
          scenarios: ['High-End Residences', 'Penthouses', 'Art Galleries', 'Boutique Hotels', 'Feature Walls'],
          colors: [
            { code: 'NQ09101', name: 'Steam Gray', hex: '#C4C4C4' },
            { code: 'NQ09203', name: 'Sunlight', hex: '#E8B478' },
            { code: 'NQ09403', name: 'Nostalgia', hex: '#BDB5AD' },
            { code: 'NQ09606', name: 'Smoky Blue', hex: '#7A93A7' },
            { code: 'NQ09803', name: 'Lime Green', hex: '#B5C7A4' },
            { code: 'NQ09902', name: 'Silver White', hex: '#A8AEB2' },
            { code: 'NQ10203', name: 'Crystal Rose', hex: '#D49A9E' },
            { code: 'NQ10306', name: 'First Clear', hex: '#9BB1C2' },
            { code: 'NQ10406', name: 'Light Purple', hex: '#B2B0C4' },
            { code: 'NQ10603', name: 'Mugwort Green', hex: '#6A9C9E' },
            { code: 'NQ10706', name: 'Light Wheat', hex: '#C4B8B1' },
            { code: 'NQ10804', name: 'Shark Gray', hex: '#8A9BA8' }
          ],
          gallery: [
            '/milan-velvet-gallery.webp',
            '/milan-velvet-gallery-2.webp',
            '/milan-velvet-gallery-3.webp'
          ]
        }
      }
    },
    { 
      id: 'spar-paint', 
      name: { zh: '雅晶石', en: 'Spar Paint' }, 
      desc: { 
        zh: '高分子材料与天然矿石填料的理想结合，纹理古朴典雅，纵横交错，抗刮耐磨。', 
        en: 'A perfect combination of polymer materials and natural ore fillers, with classic elegant textures and excellent scratch resistance.' 
      }, 
      image: '/yajingshi-hero.webp',
      details: {
        zh: {
          intro: '雅晶石是一种由高分子材料、环保颜料和填料组成的室内装饰涂料。质感效果独特出众，柔韧性佳，其纹理古朴典雅，纵横交错，通过简单涂刷便能打造出具时尚感、个性化的环保墙面，瞬间提升整体装修格调，营造出经典雅致的室内氛围，堪称涂料界的潮流风向标。',
          features: [
            { title: '绿色环保', desc: '无异味、无毒害，符合国家环保要求，能够为人们提供安全健康的室内环境。' },
            { title: '个性纹理', desc: '可以在不同的颜色、纹路和质感中选择，也可以定制，实现个性化的装饰效果。' },
            { title: '抗刮耐磨', desc: '采用的天然矿石填料柔韧性好，硬度高，抗碰撞，抗冲击，质感细腻，可有效减少灰尘和污垢的附着。' },
            { title: '防潮防霉', desc: '具有防水性和调湿性自动调节墙面湿度，不发生霉变，让墙面持久如新。' },
            { title: '装饰效果', desc: '特殊表面处理技术，使表面具有天然大理石或细石面的效果，造型逼真、沉稳豪华、富有质感。' }
          ],
          steps: [
            { title: '底漆层', desc: '万能底漆1:1兑水辊涂一遍。干燥2-3小时。' },
            { title: '中涂层', desc: '多功能含砂中涂均匀滚涂一遍（加水不超过10%）。光滑基材表面如亚克力板、不锈钢板、木板等表面施工需要辊涂含砂中涂。' },
            { title: '面漆第一道', desc: '第一道批刮雅晶石打底（加水不超过10%），满批，批刮收平整、避免透底。干燥2-5小时。' },
            { title: '面漆第二道', desc: '第二道批刮雅晶石（加水不超过10%），需要收薄，约一个砂粒的厚度。' },
            { title: '肌理施工', desc: '批刮完成后，使用水晶搓板，画圈圈手法搓起纹理（约批刮20㎡左右的时间即可搓纹理）。' },
            { title: '二次搓纹', desc: '等待至约七成干（表面无水光）再轻轻轻搓一遍，揉出最终纹理。干燥2-5小时。' },
            { title: '罩面第一道', desc: '哑光罩面漆加10%水，使用短毛辊均匀辊涂第一遍。干燥2-3小时。' },
            { title: '罩面第二道', desc: '哑光罩面漆加10%水，使用短毛辊均匀辊涂第二遍。干燥2-3小时。' }
          ],
          precautions: [
            '雅晶石工艺施工前，大白墙面先涂刷一遍抗碱(封闭)底漆/乳胶漆墙面，无起皮开裂情况，不需要刷底漆。',
            '施工温度≥5°C，空气湿度小于85%为宜。',
            '基面含水量≤8%。',
            '施工技法采用批刮、搓花的合法。',
            '施工前做好防护，施工时注意空气流通。'
          ],
          scenarios: ['酒店大堂', '别墅豪宅', '商业空间', '公共建筑', '室内墙面', '机场/车站', '医院/图书馆'],
          colors: [
            { code: 'NQ11001', name: '月白色', hex: '#F2F1ED' },
            { code: 'NQ11002', name: '牙白色', hex: '#F0EFEA' },
            { code: 'NQ11003', name: '银白色', hex: '#E2E2E0' },
            { code: 'NQ11004', name: '象牙色', hex: '#E8E4D9' },
            { code: 'NQ11005', name: '银灰色', hex: '#D1D3D4' },
            { code: 'NQ11006', name: '霜灰色', hex: '#C9CACB' },
            { code: 'NQ11007', name: '天青色', hex: '#C3D1D5' },
            { code: 'NQ11008', name: '灰蓝色', hex: '#B8C2C9' },
            { code: 'NQ11009', name: '薄蓝青', hex: '#A8B8B8' },
            { code: 'NQ11010', name: '肤白色', hex: '#E6DDD0' },
            { code: 'NQ11011', name: '嫩芽色', hex: '#E1DDC8' },
            { code: 'NQ11012', name: '薄茶灰', hex: '#DED9D0' },
            { code: 'NQ11013', name: '橡木色', hex: '#D0C8B8' },
            { code: 'NQ11014', name: '胡桃染', hex: '#A89F91' },
            { code: 'NQ11015', name: '粉白梅', hex: '#E9E1DC' },
            { code: 'NQ11016', name: '绯色', hex: '#EBD6D3' },
            { code: 'NQ11017', name: '淡红藤', hex: '#E5D8CF' },
            { code: 'NQ11018', name: '赤霞粉', hex: '#EED8CF' },
            { code: 'NQ11019', name: '灰紫藤', hex: '#E0E3E8' }
          ]
        },
        en: {
          intro: 'Spar Paint is an interior decorative coating composed of high polymer materials, eco-friendly pigments, and fillers. It features unique textures, excellent flexibility, and classic elegance with criss-cross patterns, instantly elevating the overall decor style.',
          features: [
            { title: 'Eco-Friendly', desc: 'Odorless and non-toxic, meeting national environmental standards for a safe indoor environment.' },
            { title: 'Custom Textures', desc: 'Available in various colors, patterns, and textures, allowing for personalized decorative effects.' },
            { title: 'Scratch Resistant', desc: 'Natural ore fillers provide high hardness, impact resistance, and reduce dust adhesion.' },
            { title: 'Moisture-Proof', desc: 'Waterproof and humidity-regulating, preventing mildew and keeping walls looking new.' },
            { title: 'Decorative Effect', desc: 'Special surface treatment creates realistic marble or fine stone effects, luxurious and textured.' }
          ],
          steps: [
            { title: 'Primer', desc: 'Apply universal primer mixed 1:1 with water. Dry for 2-3 hours.' },
            { title: 'Middle Coat', desc: 'Apply multi-functional sanded middle coat evenly for smooth substrates like acrylic or stainless steel.' },
            { title: 'First Topcoat', desc: 'Scrape the first layer of Spar Paint evenly to avoid substrate showing. Dry for 2-5 hours.' },
            { title: 'Second Topcoat', desc: 'Apply a second thin layer, about one sand grain thickness.' },
            { title: 'Texture Creation', desc: 'Use a crystal rubbing board in circular motions to create texture within 20 mins of scraping.' },
            { title: 'Second Rubbing', desc: 'Rub again lightly when 70% dry (no surface water) to finalize texture. Dry for 2-5 hours.' },
            { title: 'First Finish', desc: 'Apply matte finish coat mixed with 10% water using a short hair roller. Dry for 2-3 hours.' },
            { title: 'Second Finish', desc: 'Apply the second finish coat. Dry for 2-3 hours.' }
          ],
          precautions: [
            'Apply anti-alkali/sealing primer on bare walls before Spar Paint. No primer needed for sound latex paint surfaces.',
            'Construction temperature should be ≥5°C, humidity <85%.',
            'Base moisture content should be ≤8%.',
            'Technique involves scraping and rubbing.',
            'Ensure proper protection and ventilation during construction.'
          ],
          scenarios: ['Hotel Lobbies', 'Villas', 'Commercial Spaces', 'Public Buildings', 'Interior Walls', 'Airports', 'Libraries'],
          colors: [
            { code: 'NQ11001', name: 'Moon White', hex: '#F2F1ED' },
            { code: 'NQ11002', name: 'Ivory White', hex: '#F0EFEA' },
            { code: 'NQ11003', name: 'Silver White', hex: '#E2E2E0' },
            { code: 'NQ11004', name: 'Ivory', hex: '#E8E4D9' },
            { code: 'NQ11005', name: 'Silver Gray', hex: '#D1D3D4' },
            { code: 'NQ11006', name: 'Frost Gray', hex: '#C9CACB' },
            { code: 'NQ11007', name: 'Azure', hex: '#C3D1D5' },
            { code: 'NQ11008', name: 'Gray Blue', hex: '#B8C2C9' },
            { code: 'NQ11009', name: 'Thin Blue Green', hex: '#A8B8B8' },
            { code: 'NQ11010', name: 'Skin White', hex: '#E6DDD0' },
            { code: 'NQ11011', name: 'Sprout Green', hex: '#E1DDC8' },
            { code: 'NQ11012', name: 'Thin Tea Gray', hex: '#DED9D0' },
            { code: 'NQ11013', name: 'Oak', hex: '#D0C8B8' },
            { code: 'NQ11014', name: 'Walnut', hex: '#A89F91' },
            { code: 'NQ11015', name: 'Powder White Plum', hex: '#E9E1DC' },
            { code: 'NQ11016', name: 'Crimson', hex: '#EBD6D3' },
            { code: 'NQ11017', name: 'Pale Red Wisteria', hex: '#E5D8CF' },
            { code: 'NQ11018', name: 'Sunset Pink', hex: '#EED8CF' },
            { code: 'NQ11019', name: 'Wisteria Gray', hex: '#E0E3E8' }
          ]
        }
      }
    }

  ],
  inorganic: [
    {
      id: 'stone',
      name: { zh: '石材', en: 'Stone' },
      desc: {
        zh: '天然石灰岩质感，纹理均匀，色泽温和低调，富有质感，兼具花岗岩的纹理。',
        en: 'Natural limestone texture, uniform pattern, mild and low-key color, highly textured, with granite-like patterns.'
      },
      image: '/stone-hero.webp',
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
            '/stone-luoma-dongshi-qianmi.webp',
            '/stone-laimu-zhiyuan-qianmi.webp',
            '/stone-laimu-zhiyuan-duola.webp',
            '/stone-weinasizhiguang.webp',
            '/stone-kalala-mihuang.webp',
            '/stone-kalala-bojin.webp',
            '/stone-aitena-xiangyabai.webp',
            '/stone-laiyinmoer-qianmi.webp',
            '/stone-laimu-zhiyuan-mihuang.webp',
            '/stone-yilaikesi.webp',
            '/stone-laiyinmanbu.webp',
            '/stone-yinxiangluoma.webp'
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
            '/stone-luoma-dongshi-qianmi.webp',
            '/stone-laimu-zhiyuan-qianmi.webp',
            '/stone-laimu-zhiyuan-duola.webp',
            '/stone-weinasizhiguang.webp',
            '/stone-kalala-mihuang.webp',
            '/stone-kalala-bojin.webp',
            '/stone-aitena-xiangyabai.webp',
            '/stone-laiyinmoer-qianmi.webp',
            '/stone-laimu-zhiyuan-mihuang.webp',
            '/stone-yilaikesi.webp',
            '/stone-laiyinmanbu.webp',
            '/stone-yinxiangluoma.webp'
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
        }
      }
    }
  ],
  'solid-functional': [
    { 
      id: 'mullano-pro-matte', 
      name: { zh: '极简哑光 (Pro)', en: 'Mullano Matte (Pro)' }, 
      desc: { 
        zh: '高级哑光漫反射，具备防霉抗菌、高效除甲醛功能，为健康家居保驾护航。', 
        en: 'Ultra-matte diffuse reflection with anti-mold, antibacterial, and formaldehyde removal features.' 
      }, 
      image: '/mullano_pro_matte.webp' 
    },
    { 
      id: 'mullano-pro-pearl', 
      name: { zh: '温润蛋壳光', en: 'Mullano Eggshell' }, 
      desc: { 
        zh: '15%-25% 温润光泽，漫反射效果优异，耐擦洗、防霉抗菌，触感如玉。', 
        en: '15%-25% warm luster with excellent diffuse reflection, scrub-resistant and anti-mold.' 
      }, 
      image: '/mullano_pro_eggshell.webp',
      details: {
        zh: {
          intro: 'MULLANO 温润蛋壳光 是一款专为厨房、卫生间、天花等特殊场景设计的功能涂料。引入先进涂料配方，融合多项自主核心专利（水性自交联树脂等），结合个性化装饰，打造理想室内软装一体化空间解决方案。',
          features: [
            { title: '强效耐洗刷', desc: '采用自交联型防水乳液技术，耐洗刷测试超 20000 次，远高于国家优等品标准，耐刮擦性能优异。' },
            { title: '优异抗微生物', desc: '防霉达到 0 级标准，抗菌率高达 99.9%，并具备优异的抗病毒性能。' },
            { title: '拒水防污', desc: '漆膜表面能显著降低，呈现优异的疏水性（荷叶效应），污渍（如酱油、番茄酱等）清理干净且不染色。' },
            { title: '严苛环保', desc: '趋 0 甲醛及趋 0 VOC，通过法国 A+ 认证，符合新版严苛国标，适合儿童房和敏感人群。' },
            { title: '高遮盖与色彩', desc: '采用纳米级钛白粉，多重协同下实现高遮盖效果。提供 1784 种丰富色彩选择，支持墙面改色。' }
          ],
          specs: [
            { label: '光泽度', value: '温润蛋壳光 (5-10%@60°)' },
            { label: '耐洗刷次数', value: '> 20000 次' },
            { label: '环保认证', value: '法国 A+ / 趋0VOC' },
            { label: '抗菌防霉', value: '抗菌 99.9% / 防霉 0级' }
          ],
          steps: [
            { title: '基层处理', desc: '确保墙面平整、干燥、洁净。含水率≤10%，pH值≤9。' },
            { title: '渗透底漆', desc: '滚涂渗透底漆一遍，加固基层。' },
            { title: '高性能底漆', desc: '滚涂高性能底漆一遍，提供高附着力与防潮基础。' },
            { title: '面漆施工', desc: '均匀滚涂或喷涂温润蛋壳光面漆两遍，确保色彩均匀、高遮盖。' },
            { title: '拒水罩面 (可选)', desc: '在厨卫等特殊场景，可加涂一遍拒水罩面漆，显著提升荷叶拒水效应。' }
          ],
          scenarios: ['卫生间', '厨房', '天花板', '儿童房', '客厅卧室等全屋空间'],
          colors: [
            { code: 'M 001', name: '珍珠白', hex: '#F5F5F5' },
            { code: 'M 002', name: '浅滩沙', hex: '#E6E2D6' },
            { code: 'M 003', name: '晨雾灰', hex: '#D0D3D4' },
            { code: 'M 004', name: '莫兰迪粉', hex: '#D9C5C5' },
            { code: 'M 005', name: '静谧蓝', hex: '#A8B8C4' },
            { code: 'M 006', name: '鼠尾草绿', hex: '#B5C1B4' },
            { code: 'M 007', name: '暖咖灰', hex: '#A69C94' },
            { code: 'M 008', name: '深海蓝', hex: '#2C3E50' }
          ],
          gallery: [
            'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000',
            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1000',
            'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1000'
          ]
        },
        en: {
          intro: 'MULLANO Eggshell is a functional coating designed for special scenarios like kitchens, bathrooms, and ceilings. Incorporating advanced formulations and multiple core patents (such as water-based self-crosslinking resin), it provides a perfect integrated spatial solution.',
          features: [
            { title: 'Ultra Scrub-Resistant', desc: 'Utilizes self-crosslinking waterproof emulsion technology, passing over 20,000 scrub tests, far exceeding national standards.' },
            { title: 'Excellent Anti-Microbial', desc: 'Achieves Level 0 anti-mold and 99.9% antibacterial rate, with outstanding anti-virus performance.' },
            { title: 'Water & Stain Repellent', desc: 'Significantly reduces surface energy to present an excellent hydrophobic (lotus leaf) effect. Stains are easily wiped clean without dyeing.' },
            { title: 'Ultimate Eco-Friendly', desc: 'Near-zero formaldehyde and VOC, certified by French A+, suitable for children\'s rooms and sensitive groups.' },
            { title: 'High Hiding Power', desc: 'Uses nano-grade titanium dioxide for high coverage. Offers 1784 rich colors.' }
          ],
          specs: [
            { label: 'Glossiness', value: 'Warm Eggshell (5-10%@60°)' },
            { label: 'Scrub Resistance', value: '> 20,000 times' },
            { label: 'Eco Certification', value: 'French A+ / Near-0 VOC' },
            { label: 'Anti-Microbial', value: '99.9% Antibacterial / Level 0 Anti-mold' }
          ],
          steps: [
            { title: 'Base Treatment', desc: 'Ensure the wall is flat, dry, and clean. Moisture ≤10%, pH ≤9.' },
            { title: 'Penetrating Primer', desc: 'Apply one coat of penetrating primer to reinforce the base.' },
            { title: 'High-Performance Primer', desc: 'Apply one coat of high-performance primer for adhesion and moisture resistance.' },
            { title: 'Topcoat Application', desc: 'Evenly roll or spray Eggshell topcoat twice for uniform color and high coverage.' },
            { title: 'Water-Repellent Finish (Optional)', desc: 'For kitchens/bathrooms, apply a water-repellent clear coat to enhance the lotus leaf effect.' }
          ],
          scenarios: ['Bathrooms', 'Kitchens', 'Ceilings', 'Kids Rooms', 'Living Rooms & Bedrooms'],
          colors: [
            { code: 'M 001', name: 'Pearl White', hex: '#F5F5F5' },
            { code: 'M 002', name: 'Beach Sand', hex: '#E6E2D6' },
            { code: 'M 003', name: 'Morning Mist', hex: '#D0D3D4' },
            { code: 'M 004', name: 'Morandi Pink', hex: '#D9C5C5' },
            { code: 'M 005', name: 'Quiet Blue', hex: '#A8B8C4' },
            { code: 'M 006', name: 'Sage Green', hex: '#B5C1B4' },
            { code: 'M 007', name: 'Warm Taupe', hex: '#A69C94' },
            { code: 'M 008', name: 'Deep Sea', hex: '#2C3E50' }
          ],
          gallery: [
            'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000',
            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1000',
            'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1000'
          ]
        }
      }
    },
    {
      id: 'mullano-high-performance-primer',
      name: { zh: '高性能底漆', en: 'High-Performance Primer' },
      desc: {
        zh: '纯自交联丙烯酸树脂乳液，高附着力与环保配方，为面漆提供理想基础。',
        en: 'pure self-crosslinking acrylic resin emulsion, high adhesion and eco-friendly formula.'
      },
      image: '/mullano_high_performance_primer.webp',
      details: {
        zh: {
          intro: 'MULLANO 高性能底漆采用 纯自交联丙烯酸树脂乳液，专为经渗透底漆处理的墙面设计。具备出众的附着力与环保性能，趋零甲醛、趋零VOC，为后续的纯色功能面漆提供坚实、平滑的基础。',
          features: [
            { title: '高附着力', desc: '采用 纯自交联丙烯酸树脂乳液，与基层紧密结合，为面漆提供优异的附着基础。' },
            { title: '严苛环保', desc: '环保配方，趋零甲醛、趋零VOC，符合严苛的室内环保标准。' },
            { title: '优异封闭性', desc: '有效封闭基层，防潮抗碱，提升面漆的丰满度与色彩表现。' },
            { title: '施工便捷', desc: '适合辊涂或喷涂，涂刷面积大（35m²/桶/遍），施工效率高。' }
          ],
          specs: [
            { label: '树脂类型', value: '纯自交联丙烯酸树脂乳液' },
            { label: '光泽度', value: '5-7%@60°' },
            { label: '规格与用量', value: '5kg/桶，约 35m²/桶 (1遍)' },
            { label: '稀释比例', value: '底漆:水 = 1:0.05 (质量比)' }
          ],
          steps: [
            { title: '基层处理', desc: '确保墙面经渗透底漆处理完毕，表面干燥、平整、无浮灰。' },
            { title: '涂料调配', desc: '按 底漆:水 = 1:0.05 的质量比加入清水，搅拌均匀。' },
            { title: '底漆施工', desc: '使用优质中短毛辊筒或空气喷枪，均匀辊涂或喷涂一遍。' },
            { title: '干燥与面漆', desc: '待底漆完全干燥后，方可进行面漆（如温润蛋壳光）的施工。' }
          ],
          scenarios: ['经渗透底漆处理的墙面', '客厅', '卧室', '卫生间', '厨房', '天花板'],
          colors: [
            { code: 'Primer', name: '本白', hex: '#F8F9FA' }
          ],
          gallery: [
            'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1000',
            'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1000'
          ]
        },
        en: {
          intro: 'MULLANO High-Performance Primer uses pure self-crosslinking acrylic resin emulsion, designed for walls treated with penetrating primer. It features outstanding adhesion and eco-friendly performance, near-zero formaldehyde and VOC, providing a solid and smooth foundation for solid functional topcoats.',
          features: [
            { title: 'High Adhesion', desc: 'Uses pure self-crosslinking acrylic resin emulsion to tightly bond with the base layer, providing an excellent adhesion foundation for the topcoat.' },
            { title: 'Ultimate Eco-Friendly', desc: 'Eco-friendly formula, near-zero formaldehyde and near-zero VOC, meeting strict indoor environmental standards.' },
            { title: 'Excellent Sealing', desc: 'Effectively seals the base layer, moisture-proof and alkali-resistant, enhancing the fullness and color expression of the topcoat.' },
            { title: 'Convenient Application', desc: 'Suitable for rolling or spraying, large coverage area (35m²/bucket/coat), high construction efficiency.' }
          ],
          specs: [
            { label: 'Resin Type', value: 'pure self-crosslinking acrylic resin' },
            { label: 'Glossiness', value: '5-7%@60°' },
            { label: 'Specs & Coverage', value: '5kg/bucket, approx. 35m²/bucket (1 coat)' },
            { label: 'Dilution Ratio', value: 'Primer:Water = 1:0.05 (by weight)' }
          ],
          steps: [
            { title: 'Base Treatment', desc: 'Ensure the wall has been treated with penetrating primer, and the surface is dry, flat, and free of floating dust.' },
            { title: 'Paint Mixing', desc: 'Add water according to the mass ratio of Primer:Water = 1:0.05 and stir evenly.' },
            { title: 'Primer Application', desc: 'Use a high-quality medium-short hair roller or air spray gun to evenly roll or spray one coat.' },
            { title: 'Drying & Topcoat', desc: 'Wait until the primer is completely dry before applying the topcoat (e.g., Eggshell).' }
          ],
          scenarios: ['Walls treated with penetrating primer', 'Living Rooms', 'Bedrooms', 'Bathrooms', 'Kitchens', 'Ceilings'],
          colors: [
            { code: 'Primer', name: 'White', hex: '#F8F9FA' }
          ],
          gallery: [
            'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1000',
            'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1000'
          ]
        }
      }
    },
    {
      id: 'mullano-water-repellent-finish',
      name: { zh: '拒水罩面漆', en: 'Water-Repellent Finish' },
      desc: {
        zh: '水性有机硅树脂乳液，显著提升荷叶拒水效应，防污透明，趋零甲醛。',
        en: 'Water-based silicone resin emulsion, significantly enhances lotus leaf water repellency, transparent and anti-stain.'
      },
      image: '/mullano_water_repellent_finish.webp',
      details: {
        zh: {
          intro: 'MULLANO 拒水罩面漆采用水性有机硅树脂乳液，专为配合温润蛋壳光等面漆使用而设计。它能显著提升墙面的荷叶拒水效应，具备优异的防污性能且漆膜透明，不影响原有色彩。',
          features: [
            { title: '荷叶拒水效应', desc: '显著提升墙面拒水性能，水滴自然滑落不留痕。' },
            { title: '强效防污', desc: '强效抵御日常污渍，保持墙面持久洁净。' },
            { title: '高透光率', desc: '漆膜透明，完好保留并展现底层面漆的真实色彩与质感。' },
            { title: '严苛环保', desc: '趋零甲醛、趋零VOC，符合严苛的室内环保标准。' }
          ],
          specs: [
            { label: '树脂类型', value: '水性有机硅树脂乳液' },
            { label: '外观', value: '透明' },
            { label: '规格与用量', value: '5kg/桶，约 500m²/桶 (2遍)' },
            { label: '稀释比例', value: '不用稀释，直接使用' }
          ],
          steps: [
            { title: '基层要求', desc: '确保底层面漆（如温润蛋壳光）已完全干燥、平整、无浮灰。' },
            { title: '涂料准备', desc: '开桶后搅拌均匀，无需加水稀释。' },
            { title: '罩面施工', desc: '使用优质中短毛辊筒或空气喷枪，均匀辊涂或喷涂两遍。' },
            { title: '干燥与保养', desc: '施工后保持通风，待其自然干燥成膜，发挥优异拒水防污效果。' }
          ],
          scenarios: ['卫生间', '厨房', '特殊防污防潮空间'],
          colors: [
            { code: 'Clear', name: '透明', hex: '#FFFFFF' }
          ],
          gallery: [
            'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=1000',
            'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000'
          ]
        },
        en: {
          intro: 'MULLANO Water-Repellent Finish uses a water-based silicone resin emulsion, specifically designed to be used in conjunction with topcoats like Eggshell. It significantly enhances the lotus leaf water repellency of the wall, features excellent anti-stain performance, and is transparent, not affecting the original color.',
          features: [
            { title: 'Lotus Leaf Effect', desc: 'Significantly enhances wall water repellency, water drops slide off naturally without leaving marks.' },
            { title: 'Ultimate Anti-Stain', desc: 'Strongly resists daily stains, keeping the wall clean for a long time.' },
            { title: 'High Transparency', desc: 'Transparent film perfectly preserves and displays the true color and texture of the underlying topcoat.' },
            { title: 'Ultimate Eco-Friendly', desc: 'Near-zero formaldehyde and near-zero VOC, meeting strict indoor environmental standards.' }
          ],
          specs: [
            { label: 'Resin Type', value: 'Water-based silicone resin emulsion' },
            { label: 'Appearance', value: 'Transparent' },
            { label: 'Specs & Coverage', value: '5kg/bucket, approx. 500m²/bucket (2 coats)' },
            { label: 'Dilution Ratio', value: 'No dilution needed, use directly' }
          ],
          steps: [
            { title: 'Base Requirements', desc: 'Ensure the underlying topcoat (e.g., Eggshell) is completely dry, flat, and free of floating dust.' },
            { title: 'Paint Preparation', desc: 'Stir evenly after opening, no need to add water for dilution.' },
            { title: 'Finish Application', desc: 'Use a high-quality medium-short hair roller or air spray gun to evenly roll or spray two coats.' },
            { title: 'Drying & Maintenance', desc: 'Keep ventilated after application, wait for it to dry naturally to form a film and exert the best water-repellent and anti-stain effect.' }
          ],
          scenarios: ['Bathrooms', 'Kitchens', 'Special anti-stain and moisture-proof spaces'],
          colors: [
            { code: 'Clear', name: 'Transparent', hex: '#FFFFFF' }
          ],
          gallery: [
            'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=1000',
            'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000'
          ]
        }
      }
    }
  ]
};

const PROJECTS = [
  { 
    id: 'p1', 
    type: 'residential', 
    title: { zh: '上海檀宫别墅', en: 'Shanghai Regency Villa' }, 
    image: '/projects-residential-tangong.webp',
    fallback: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200' 
  },
  { 
    id: 'p2', 
    type: 'residential', 
    title: { zh: '北京壹号院', en: 'Beijing One Courtyard' }, 
    image: '/projects-residential-one-courtyard.webp',
    fallback: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200' 
  },
  { 
    id: 'p3', 
    type: 'residential', 
    title: { zh: '深圳湾一号顶层复式', en: 'One Shenzhen Bay Penthouse' }, 
    image: '/projects-residential-shenzhen-bay.webp',
    fallback: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200' 
  },
  { 
    id: 'p4', 
    type: 'residential', 
    title: { zh: '广州大一山庄', en: 'Guangzhou Grand Mansion' }, 
    image: '/projects-residential-grand-mansion.webp',
    fallback: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200' 
  },
  { 
    id: 'p5', 
    type: 'commercial', 
    title: { zh: '深圳湾艺术中心', en: 'Shenzhen Bay Art Center' }, 
    image: '/projects-commercial-shenzhen-bay.webp',
    fallback: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200' 
  },
  { 
    id: 'p6', 
    type: 'commercial', 
    title: { zh: '上海西岸艺术馆', en: 'West Bund Art Gallery Shanghai' }, 
    image: '/projects-commercial-west-bund.webp',
    fallback: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200' 
  },
  { 
    id: 'p7', 
    type: 'commercial', 
    title: { zh: '北京三里屯概念店', en: 'Sanlitun Concept Store Beijing' }, 
    image: '/projects-commercial-sanlitun.webp',
    fallback: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200' 
  },
  { 
    id: 'p8', 
    type: 'hospitality', 
    title: { zh: '杭州安缦法云', en: 'Amanfayun Hangzhou' }, 
    image: '/projects-hospitality-amanfayun.webp',
    fallback: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200' 
  },
  { 
    id: 'p9', 
    type: 'hospitality', 
    title: { zh: '三亚亚特兰蒂斯私人会所', en: 'Sanya Atlantis Private Club' }, 
    image: '/projects-hospitality-sanya-club.webp',
    fallback: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1200' 
  },
  { 
    id: 'p10', 
    type: 'hospitality', 
    title: { zh: '青城山涵雅精品酒店', en: 'Hanya Boutique Hotel Qingcheng Mountain' }, 
    image: '/projects-hospitality-qingcheng-hotel.webp',
    fallback: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200' 
  }
];

export default function App() {
  const [lang, setLang] = useState<Language>('zh');
  const t = CONTENT[lang];

  return (
    <Router>
      <Layout lang={lang} setLang={setLang} content={t}>
        <Routes>
          <Route path="/" element={<Home lang={lang} content={t} categories={CATEGORIES} />} />
          <Route path="/collections/:type" element={<CollectionPage lang={lang} content={t} categories={CATEGORIES} />} />
          <Route path="/product/:id" element={<ProductDetailPage lang={lang} categories={CATEGORIES} />} />
          <Route path="/heritage/:sub" element={<HeritagePage lang={lang} content={t} />} />
          <Route path="/projects/:type" element={<ProjectsPage lang={lang} content={t} projects={PROJECTS} />} />
          <Route path="/atelier/:sub" element={<AtelierPage lang={lang} content={t} />} />
          {/* Fallback */}
          <Route path="*" element={<Home lang={lang} content={t} categories={CATEGORIES} />} />
        </Routes>
      </Layout>
    </Router>
  );
}

