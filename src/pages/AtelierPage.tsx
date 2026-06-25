import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, CheckCircle, ArrowRight, MapPin, Phone, Mail, Building, X, Layers, Sparkles, Hammer, Check } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { solarTermsData } from '../data/solarTerms';

interface AtelierPageProps {
  lang: 'zh' | 'en' | 'it';
  content: any;
}

export const AtelierPage: React.FC<AtelierPageProps> = ({ lang, content }) => {
  const { sub } = useParams<{ sub: string }>();
  
  const categories = content.nav.atelier.sub;
  const currentCategory = categories.find((c: any) => c.path.includes(sub || ''));

  const [artGalleryType, setArtGalleryType] = useState<'classic' | 'solarterms'>('solarterms');
  const [activeSeason, setActiveSeason] = useState<'spring' | 'summer' | 'autumn' | 'winter'>('spring');
  const [selectedSolarTerm, setSelectedSolarTerm] = useState<any | null>(null);

  const [activeArtFilter, setActiveArtFilter] = useState<string>('all');
  const [selectedArtwork, setSelectedArtwork] = useState<any | null>(null);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [bookingName, setBookingName] = useState('');
  const [bookingPhone, setBookingPhone] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const artworks = [
    {
      id: 'art-1',
      category: 'mineral',
      title: { zh: '山海肌理', en: 'Mountains & Oceans' },
      subtitle: { zh: '凝固的自然潮汐', en: 'Frozen Tides of Nature' },
      materials: { zh: 'MULLANO Gesso (艺术灰泥) + 矿物微水泥', en: 'MULLANO Gesso + Mineral Microcement' },
      technique: { zh: '手工慢批、层叠肌理、生态拉毛、哑光防护罩面', en: 'Hand-trowelled layering, raw structural carving, matte stain-proof topcoat' },
      desc: {
        zh: '灵感源自阿尔卑斯山脉风化的岩石与奔涌的海潮。木兰诺匠人通过手工慢批，将天然无机矿物层层堆叠，勾勒出高低起伏的微雕刻面。当自然光线掠过，墙面呈现出深邃而宁静的阴影感。',
        en: 'Inspired by weathered Alpine rocks and rushing ocean tides. Artisans layer mineral materials to shape rolling, micro-carved crests that yield deep, tranquil shadows as light brushes the surface.'
      },
      image: '/gesso-gallery-1-1.webp',
      steps: [
        { zh: '渗透加固：涂刷高渗透底漆封固墙面基层，防止起砂起鼓。', en: 'Penetration: Apply high-penetration primer to consolidate base wall and prevent chalking.' },
        { zh: '肌理塑形：使用 MULLANO Gesso 艺术灰泥大开大合堆叠波澜起伏。', en: 'Texture Sculpting: Use MULLANO Gesso to shape wavy, cresting ridges.' },
        { zh: '微刻风化：利用特制软胶齿梳及毛刷在半干状态下进行微刻画，呈现岩石自然断层。', en: 'Micro-weathering: Craft wind-eroded, raw grooves on semi-dry plaster using special tools.' },
        { zh: '双色罩面：双色套染，凸显肌理阴影立体感，并涂刷超哑光耐污防护漆。', en: 'Dual-tone Protection: Double color glaze for enhanced shadow depth, finished with matte topcoat.' }
      ]
    },
    {
      id: 'art-2',
      category: 'metallic',
      title: { zh: '极光微澜', en: 'Auroral Ripple' },
      subtitle: { zh: '流动的丝绒光影', en: 'Fluid Silk & Shadow' },
      materials: { zh: 'MULLANO Milan Velvet (米兰天鹅绒) + 珠光金属釉面', en: 'MULLANO Milan Velvet + Pearlescent Metallic Glaze' },
      technique: { zh: '短毛辊筒揉滚打底、特制圆形艺术刷呈双向扇形弧扫', en: 'Short-hair roller base coat, special round artistic brush sweeping dual-directional fans' },
      desc: {
        zh: '将欧洲经典织物的温润触感与现代高科技珍珠粉母技术融合。随着视角与入射光线的移动，墙面在暖金色与银灰色之间变幻，如同极地夜空中流淌的微澜极光，高雅奢享。',
        en: 'Fuses the warmth of ancient silk with high-tech pearlescent reflection. As you move, the wall shifts between warm gold and silver gray, mimicking the polar aurora.'
      },
      image: '/gesso-gallery-2-1.webp',
      steps: [
        { zh: '同色打底：刷涂专用同色中涂底漆，打下细腻无暇的色彩背景。', en: 'Base Color: Apply dedicated matching-color midcoat for smooth background.' },
        { zh: '首层揉刮：用揉滚方式批刮第一遍米兰天鹅绒，确保涂层饱满均匀。', en: 'First Layer: Roller-apply first coat of Milan Velvet for a full film.' },
        { zh: '扇面揉光：第二遍半干时用圆形艺术刷呈八字扇形交错揉光，激活金属珠光定向排列。', en: 'Fan Buffing: Swipe circular brush in cross pattern on semi-dry second coat to align metallic flakes.' },
        { zh: '光泽定型：自然干燥固化，形成具有细腻绒面质感与流转金属折射的奢华光影。', en: 'Gloss Setting: Natural curing creates a fine velvet-textured metallic reflection.' }
      ]
    },
    {
      id: 'art-3',
      category: 'gilded',
      title: { zh: '金箔重奏', en: 'Gilded Symphony' },
      subtitle: { zh: '岁月斑驳的华丽觉醒', en: 'Gilded Awakening of Time' },
      materials: { zh: 'MULLANO Plaster (大理石饰面泥) + 24K 手工贴金箔', en: 'MULLANO Plaster + 24K Hand-applied Gold Leaf' },
      technique: { zh: '裂纹泥控温开裂工艺、手工描金镶嵌、局部抛光封蜡', en: 'Crackled paint curing, manual gold-gilding, local polishing and wax-sealing' },
      desc: {
        zh: '展现了“金缮（Kintsugi）”般的东方岁月美感。复古厚浆灰泥自然干裂出不规则的断层，匠人将璀璨金箔手工细致填入并点缀在岩壁空腔之上。粗粝斑驳与璀璨金箔完美重奏，张力十足。',
        en: 'Showcases time-worn beauty akin to "Kintsugi". Thick retro plaster is cracked to yield irregular fissures, which artisans carefully gild with gold leaf to produce striking contrasts.'
      },
      image: '/gesso-gallery-3-1.webp',
      steps: [
        { zh: '厚涂成膜：批刮 MULLANO Plaster 艺术厚浆层，制造天然断裂厚度。', en: 'Thick Coat: Apply MULLANO Plaster thick slurry to build splitting depth.' },
        { zh: '控温开裂：控温脱水，使涂层自然断裂成不规则、符合黄金比例的艺术裂缝。', en: 'Controlled Cracking: Heat-dry to let plaster naturally crack into golden-ratio fissures.' },
        { zh: '金箔手工镶嵌：手工用镊子与羊毛刷，将极薄金箔细致压入裂隙深处与凹槽。', en: 'Gilding Artistry: Hand-press ultra-thin gold leaf into crevices with fine tweezers and wool brush.' },
        { zh: '矿物保护封釉：涂刷高透光保护清釉，锁住金箔，防剥落、防氧化、持久璀璨。', en: 'Glaze Protection: Apply high-transparency glaze to protect gold leaf from oxidation.' }
      ]
    },
    {
      id: 'art-4',
      category: 'mineral',
      title: { zh: '侘寂石磐', en: 'Wabi-Sabi Monolith' },
      subtitle: { zh: '风化断崖的永恒静谧', en: 'Eternal Quiet of Eroded Cliffs' },
      materials: { zh: 'MULLANO Aitena Stone (雅典娜真石) + 天然凝灰岩矿砂', en: 'MULLANO Aitena Stone + Natural Tuffaceous Sands' },
      technique: { zh: '梳齿工具水平拉断层、硬齿刷描摹、馒刀二次平压收光', en: 'Horizontal groove scoring, rigid-toothed brush dragging, trowel flattening and burnishing' },
      desc: {
        zh: '还原大自然亿万年地质沉积的宏伟史诗。涂料中饱含天然石灰岩颗粒与火山凝灰岩矿砂，手工刷抹出斑驳的多孔肌理，温润内敛，传达出沉静、朴素、顺应天时的极致侘寂美学。',
        en: 'Recreates geological sedimentation spanning eons. Rich in limestone granules and volcanic tuff sands, it features organic cavities that convey the quiet elegance of wabi-sabi.'
      },
      image: '/gesso-gallery-4.webp',
      steps: [
        { zh: '粗浆铺底：刮涂第一遍含有天然粗矿砂的雅典娜真石，制造多孔吸附底色。', en: 'Granular Base: Spread first layer of Aitena Stone with natural sand for porous grip.' },
        { zh: '沉积拉线：用横向梳齿工具在未干膜层上水平刮拉，制造平行沉积断岩线。', en: 'Strata Dragging: Score parallel faultlines horizontally into the wet coat.' },
        { zh: '斑驳收光：用馒刀以不均力度轻揉平压，使高处光滑致密、低处保留自然凹凸孔洞。', en: 'Pore Burnishing: Press elevated points with stainless steel trowel to polish flats while retaining holes.' },
        { zh: '自然擦色：局部擦染矿物色浆，使风化石灰岩斑驳色差更加逼真、古朴。', en: 'Aged Patina: Rub mineral colorants locally to render authentic weathered shades.' }
      ]
    },
    {
      id: 'art-5',
      category: 'metallic',
      title: { zh: '暗夜微茫', en: 'Midnight Shimmer' },
      subtitle: { zh: '深邃夜空的静谧星辉', en: 'Silent Stardust of Deep Space' },
      materials: { zh: 'MULLANO Yajingshi (雅晶石) + 暗夜蓝珍珠金属釉', en: 'MULLANO Yajingshi + Midnight Blue Pearl Metallic Glaze' },
      technique: { zh: '揉批成纹、多层次夜空色微擦、珍珠清漆罩光', en: 'Texturing base, multi-layer rubbing of night-sky glaze, pearlescent glaze finish' },
      desc: {
        zh: '如同幽邃神秘的银河悬挂在卧室之中。硬朗的雅晶石细沙在墙面上揉批出微型石英肌理，多层暗夜蓝金属珍珠釉点蘸擦染其上。在射灯的折射下，墙面散发出犹如繁星般的璀璨微光，梦幻高定。',
        en: 'Like a mysterious galaxy wrapped around the room. Deep charcoal and midnight blue blend seamlessly, shimmering with starry pinpoints under directional spot-lights.'
      },
      image: '/gesso-gallery-5.webp',
      steps: [
        { zh: '石英揉批：刮涂黑色雅晶石，以横、竖、打圈方式揉搓出均匀的小石英晶体砂坑。', en: 'Dark Sanding: Apply dark charcoal Yajingshi, texturing with chaotic sand patterns.' },
        { zh: '夜色擦染：海绵蘸取暗夜蓝珍珠金属釉，微力由浅入深层层擦染，制造夜幕渐变。', en: 'Night tinting: Rub midnight blue metallic glaze on the surface using a sea sponge.' },
        { zh: '星尘点缀：点喷极细微银色、青色珠光颗粒，在涂层间营造繁星漫反射。', en: 'Stardust dusting: Spray ultra-fine silver pearl mist for soft starry reflections.' },
        { zh: '防污固色：罩涂耐磨超哑光抗污防护膜，耐水、耐擦洗，长久锁色。', en: 'Scratch protection: Apply heavy-duty matte sealant for scrubbing resistance and longevity.' }
      ]
    },
    {
      id: 'art-6',
      category: 'gilded',
      title: { zh: '威尼斯流金', en: 'Venetian Gold' },
      subtitle: { zh: '古典宫殿的华丽返照', en: 'Glow of Venetian Palaces' },
      materials: { zh: 'MULLANO Plaster (大理石饰面泥) + 手工流金艺术釉料', en: 'MULLANO Plaster + Hand-brushed Liquid Gold Glaze' },
      technique: { zh: '意大利传统馒刀多层揉批、高精度打磨、手绘扫金、局部封蜡抛光', en: 'Traditional Italian multi-layer trowelling, precision sanding, hand-painted gilding, wax-sealing & burnishing' },
      desc: {
        zh: '完美再现16世纪文艺复兴时期威尼斯宫殿墙面的奢华风采。选用大颗粒级配的天然大理石粉泥多层压实，表面呈现温润如玉的高致密肌理。匠人再以极细艺术扫刷在微孔隙间缓缓描摹纯金釉面，在光影流转中绽放出动人心魄的奢华光彩。',
        en: 'Perfectly recreates the luxurious ambiance of 16th-century Venetian palaces. Natural marble plaster is applied in multiple layers to yield a jade-like, dense texture, then hand-detailed with liquid gold glaze that catches natural light exquisitely.'
      },
      image: '/gesso-gallery-6.webp',
      steps: [
        { zh: '大理石粗泥铺底：馒刀呈弧形将 MULLANO Plaster 第一遍大理石饰面泥均匀批涂，奠定平整紧密的基层。', en: 'Coarse Marble Plaster: Use a rounded trowel to apply the first coat of MULLANO Plaster, establishing a flat and dense foundation.' },
        { zh: '高密精细批刮：第二遍采用更细腻配方，运用馒刀进行反复压实与揉光，赋予表面天然石材般的极佳触感。', en: 'High-Density Burnishing: Apply a second, finer layer, repeatedly burnishing with a stainless trowel for a marble-smooth texture.' },
        { zh: '扫刷描金：待完全干燥后，使用特制马毛艺术排刷，将含有纯金微粒的釉料在石壁微孔中进行半干扫，形成斑驳流转的金晕。', en: 'Gold Leaf Dry-brushing: After dry, sweep gold-particle metallic glaze into the stone crevices with a custom horsehair fan brush.' },
        { zh: '大理石蜡保护：纯手工擦涂天然蜂蜡，经高速抛光机慢扫抛光，彻底防尘、耐酸碱，并带来迷人的缎面微温光泽。', en: 'Wax Sealing: Rub natural beeswax across the wall and machine-polish to shield against acids/stains while casting a satin glow.' }
      ]
    },
    {
      id: 'art-7',
      category: 'mineral',
      title: { zh: '撒哈拉暮色', en: 'Sahara Twilight' },
      subtitle: { zh: '风沙洗礼的赤地之美', en: 'Wind-Swept Desert Sands' },
      materials: { zh: 'MULLANO Yajingshi (雅晶石) + 天然赭石色彩色色浆', en: 'MULLANO Yajingshi + Natural Ochre Colorant Glaze' },
      technique: { zh: '天然石英砂颗粒混批、横向S型微弧拉线、暖金沙釉层层渐变擦染', en: 'Quartz sand texturing, horizontal S-curve line dragging, multi-layer ochre-gold sponge glaze' },
      desc: {
        zh: '灵感汲取自撒哈拉大沙漠日落时分，长风卷起层层热浪、余晖铺满红沙的壮丽地貌。雅晶石内部丰富的石英晶体被微小的揉批技巧均匀激活，呈现出富有动感的风沙印记。在温和的赭石色釉轻擦渲染下，墙体仿佛饱含日光的热量与泥土的芬芳。',
        en: 'Captures the raw majesty of wind-swept desert dunes under a setting Sahara sun. The natural quartz sand particles of Yajingshi are swirled dynamically, while layered warm ochre glazes impart an earthy, radiant glow.'
      },
      image: '/gesso-gallery-7.webp',
      steps: [
        { zh: '石英质地粗涂：批涂 MULLANO Yajingshi，利用其内含的均匀石英沙颗粒形成天然微细蜂巢孔穴。', en: 'Sand Texture Coat: Evenly trowel MULLANO Yajingshi to leverage its precision silica sand for porous patterns.' },
        { zh: '风沙弧度刻划：使用软硬适中的硅胶塑形齿刮，在半湿墙面水平拉出微小的波浪状横纹，模拟层层沙浪。', en: 'Dune Scoring: Drag a medium-hard silicone comb horizontally across wet plaster in subtle S-curves to form wave-like sand ridges.' },
        { zh: '暮色套染：采用天然海藻绵，依次蘸取黄赭色与橙红色釉漆，以打圈揉擦方式，上深下浅渲染出暮色落日的绝妙光晕。', en: 'Sunset Sponge Glazing: Use a sea sponge to dab ochre and warm orange tints, creating a seamless twilight transition.' },
        { zh: '哑光固砂：涂刷一层渗透性超哑光防砂防护层，不仅固化砂石不掉粉，更能带来温润如粉末般的高级哑光视感。', en: 'Matte Sand Consolidation: Apply a high-penetration matte sealant to lock quartz grains in place, ensuring no dust-off.' }
      ]
    },
    {
      id: 'art-8',
      category: 'metallic',
      title: { zh: '丝缕织梦', en: 'Dreamlike Filament' },
      subtitle: { zh: '重磅真丝的经纬温润', en: 'Woven Luxury of Raw Silk' },
      materials: { zh: 'MULLANO Suede (高定丝绒漆) + 珠光天鹅绒釉', en: 'MULLANO Suede + Pearlescent Velvet Glaze' },
      technique: { zh: '短绒辊涂打底、专配经纬拉丝梳在未干层双向温柔拉丝', en: 'Short-nap roller base coat, dedicated comb pulling horizontal & vertical silk threads on wet paint' },
      desc: {
        zh: '将高级时装界“重磅真丝”织物特有的温润与华丽，纯手工铺洒在现代人居的背景之上。通过精密的双向十字拉丝技法，高浓度珠光微粒在细微的痕迹里形成了交叉光泽反射，使冷冰冰的墙面瞬间拥有了如同布艺墙布般的柔和包覆感与惊艳的触感。',
        en: 'Brings the timeless texture and luxury of heavy mulberry silk directly into high-end interiors. Through double-directional combing, sparkling pearlescent flakes align to refract warm lighting, making plain walls feel cocooned in soft fabric.'
      },
      image: '/gesso-gallery-8.webp',
      steps: [
        { zh: '真丝基底：用超短毛滚筒辊涂一遍 MULLANO Suede，确保没有刷痕和滚印，呈现极致纯净。', en: 'Silk Undercoat: Roll one coat of MULLANO Suede with a super-short nap roller, keeping the film free of overlap marks.' },
        { zh: '高浓度丝绒厚涂：滚涂第二遍时，有意增加湿膜厚度，为后续的质感肌理创作保留足够漆浆。', en: 'Plump Velvet Coat: Apply a generous second coat, ensuring there is enough wet paint to be sculpted.' },
        { zh: '经纬交叉拉丝：趁涂层湿润，手持专用细齿聚氨酯丝线梳，先垂直自上而下一气拉丝，再水平轻轻拉过，织造完美的十字经纬。', en: 'Warp & Weft Combing: While wet, pull a fine-toothed polyurethane comb vertically from top to bottom, then horizontally to weave threads.' },
        { zh: '流光定型：随着天然干燥，漆中的云母片依经纬纹路定向固化。配合软毛刷轻扫浮屑，使墙面触之如丝、视之流光。', en: 'Sheen Curing: As it dries, the pearlescent mica flakes align along the combed fibers. Gently brush away residue for a silk touch.' }
      ]
    },
    {
      id: 'art-9',
      category: 'gilded',
      title: { zh: '极冰熔岩', en: 'Glacial Fissures' },
      subtitle: { zh: '极地裂谷的凝固张力', en: 'Frozen Tension of Polar Rifts' },
      materials: { zh: 'MULLANO Microcement (微水泥) + 裂纹矿物泥 + 纯银箔', en: 'MULLANO Microcement + Crackled Plaster + Pure Silver Leaf' },
      technique: { zh: '超耐磨微水泥打底、裂纹厚浆特制烘烤开裂、银箔碎屑手工点缀、水晶面漆封底', en: 'Ultra-tough microcement base, custom crackled paste thermal curing, manual silver leaf gilding, crystal finish coat' },
      desc: {
        zh: '此款作品是大胆、先锋、充满现代建筑美学张力的艺术代表。它模拟了万年北极冰川在漫长断裂时展露出的宏大冰谷，并在深邃幽暗的裂痕腔体内，纯手工用镊子填入片片闪耀冷光的银箔。粗犷厚实的浅灰色微水泥，与裂隙里冰冷璀璨的银屑相互映衬，静穆冷冽。',
        en: 'A vanguard of modern architectural aesthetics. It mimics the deep, structural canyons of ancient polar glaciers. Artisans use tweezers to manually insert shimmering silver leaf inside the dark fissures, presenting a gorgeous dialogue between rugged microcement and cool metal.'
      },
      image: '/gesso-gallery-9.webp',
      steps: [
        { zh: '岩磐微水泥打底：刮涂高韧性 MULLANO 矿物微水泥，为不规则开裂提供极其坚韧的承载底座。', en: 'Microcement Underlay: Trowel ultra-tough MULLANO Microcement to guarantee a structural base that withstands tension.' },
        { zh: '裂隙泥厚刮与控干：厚刮配方特殊的裂纹泥浆。利用专业热风枪分区域控制温度干燥，诱导泥浆沿自然应力线爆裂出宽窄相宜的峡谷状裂缝。', en: 'Cracking Paste & Thermal Shocks: Apply a layer of specialized cracking plaster. Apply heat gun zones to induce organic, bold splits.' },
        { zh: '手工填银：由匠人手持精致不锈钢镊子，将极薄的银箔碎片逐一细致贴合在裂缝谷底及凹槽侧壁，创造冰晶般的冷艳反光。', en: 'Silver Leaf Embedding: Hand-place thin pure silver leaf fragments into the depths of the black rifts using precision tweezers.' },
        { zh: '双组份水晶保护：由于银箔和裂痕泥容易受潮，全面喷涂防潮抗氧化双组份高透水晶面漆，长久固色，使冰川色泽永驻。', en: 'Anti-Oxidation Crystal Coat: Airless spray clear two-component sealant to wrap the silver leaf, maintaining the majestic polar aesthetic.' }
      ]
    }
  ];

  const filteredArtworks = activeArtFilter === 'all' 
    ? artworks 
    : artworks.filter(item => item.category === activeArtFilter);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingName || !bookingPhone) return;
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setBookingName('');
      setBookingPhone('');
      setSelectedArtwork(null);
    }, 3000);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (zoomedImage) {
          setZoomedImage(null);
        } else if (selectedArtwork) {
          setSelectedArtwork(null);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [zoomedImage, selectedArtwork]);

  const renderArt = () => {
    const categoriesList = [
      { id: 'all', zh: '全部作品', en: 'All Works' },
      { id: 'mineral', zh: '矿物与肌理', en: 'Mineral & Texture' },
      { id: 'metallic', zh: '丝绒与金属', en: 'Silk & Metallic' },
      { id: 'gilded', zh: '金箔与开裂', en: 'Gilded & Fissured' }
    ];

    const seasonalList = [
      { id: 'spring', zh: '春 · 生机', en: 'Spring' },
      { id: 'summer', zh: '夏 · 炽烈', en: 'Summer' },
      { id: 'autumn', zh: '秋 · 岁月', en: 'Autumn' },
      { id: 'winter', zh: '冬 · 收藏', en: 'Winter' }
    ];

    const filteredSolarTerms = solarTermsData.filter(term => term.season === activeSeason);

    return (
      <div className="space-y-20">
        {/* Intro & Tab Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-mullano-gold font-semibold block">
              {lang === 'zh' ? '墙面艺术画馆' : 'WALL ARTISTRY MUSEUM'}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-mullano-black tracking-wider leading-tight">
              {lang === 'zh' ? '让涂料超越平面，化身墙面雕塑艺术' : 'Beyond Flat Paint: Sculpting Masterpieces on Walls'}
            </h2>
            <p className="text-stone-500 font-light leading-relaxed text-sm tracking-wide">
              {lang === 'zh' 
                ? '在木兰诺（MULLANO），涂料并非只是遮盖墙壁的色层，而是承载情感与艺术表达的雕塑介质。我们甄选意大利高纯度矿物材料与艺术厚泥，由受过严苛美学训练的工艺巨匠纯手工雕琢。'
                : 'At MULLANO, paint is not merely a coat of color, but a sculptural medium for raw emotion and fine art. We select Italian high-purity minerals and artistic plaster, hand-carved by master artisans.'}
            </p>
          </div>

          {/* Master Switch Tabs */}
          <div className="flex bg-mullano-gray/65 p-1.5 rounded-2xl shrink-0 self-start lg:self-end border border-stone-200/40 shadow-[inset_0_1.5px_3px_rgba(27,24,20,0.02)]">
            <button
              onClick={() => setArtGalleryType('classic')}
              className={`px-6 py-3 rounded-xl text-xs font-semibold tracking-wider transition-all duration-500 cursor-pointer ${
                artGalleryType === 'classic'
                  ? 'bg-white text-mullano-black shadow-md border border-stone-200/15'
                  : 'text-stone-500 hover:text-stone-900'
              }`}
            >
              {lang === 'zh' ? '经典高定画馆' : 'Classic Collection'}
            </button>
            <button
              onClick={() => setArtGalleryType('solarterms')}
              className={`px-6 py-3 rounded-xl text-xs font-semibold tracking-wider transition-all duration-500 cursor-pointer ${
                artGalleryType === 'solarterms'
                  ? 'bg-white text-mullano-black shadow-md border border-stone-200/15'
                  : 'text-stone-500 hover:text-stone-900'
              }`}
            >
              {lang === 'zh' ? '二十四节气“艺术盒子”' : '24 Solar Terms "Art Box"'}
            </button>
          </div>
        </div>

        {/* Dynamic Display Area */}
        {artGalleryType === 'classic' ? (
          <div className="space-y-12">
            {/* Filter Navigation for Classic */}
            <div className="flex flex-wrap gap-4 border-b border-gray-100 pb-6 items-center">
              {categoriesList.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveArtFilter(cat.id)}
                  className={`px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 relative rounded-full ${
                    activeArtFilter === cat.id 
                      ? 'text-white bg-gray-900 shadow-md' 
                      : 'text-gray-400 hover:text-gray-700 bg-white border border-gray-100'
                  }`}
                >
                  {lang === 'zh' ? cat.zh : cat.en}
                </button>
              ))}
            </div>

            {/* Classic Artworks Grid */}
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
            >
              <AnimatePresence mode="popLayout">
                {filteredArtworks.map((art) => (
                  <motion.div
                    layout
                    key={art.id}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.6 }}
                    className="group cursor-pointer bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full rounded-xl overflow-hidden"
                    onClick={() => {
                      setSelectedArtwork(art);
                      setBookingSuccess(false);
                    }}
                  >
                    {/* Image Wrap */}
                    <div className="aspect-[4/5] relative overflow-hidden bg-gray-100 shrink-0">
                      <img 
                        src={art.image} 
                        alt={art.title[lang]} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      {/* Category Pill */}
                      <div className="absolute top-4 left-4 bg-black/75 text-[9px] uppercase font-semibold text-white tracking-[0.25em] px-3.5 py-1.5 rounded-full border border-white/10 z-10">
                        {art.category === 'mineral' && (lang === 'zh' ? '矿物肌理' : 'Mineral')}
                        {art.category === 'metallic' && (lang === 'zh' ? '丝绒金属' : 'Metallic')}
                        {art.category === 'gilded' && (lang === 'zh' ? '金箔开裂' : 'Gilded Crackle')}
                      </div>
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-neutral-950/25 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <span className="bg-white/95 text-gray-900 text-xs uppercase tracking-[0.25em] font-semibold px-6 py-3 shadow-xl rounded-full scale-95 group-hover:scale-100 transition-all duration-500">
                          {lang === 'zh' ? '品鉴艺术工艺' : 'Inspect Artistry'}
                        </span>
                      </div>
                    </div>

                    {/* Info Text */}
                    <div className="p-8 flex flex-col justify-between flex-grow">
                      <div className="space-y-4">
                        <p className="text-[10px] tracking-[0.3em] uppercase text-mullano-gold font-semibold">
                          {art.subtitle[lang]}
                        </p>
                        <h3 className="text-2xl font-serif text-gray-900 tracking-wide font-medium group-hover:text-mullano-gold transition-colors">
                          {art.title[lang]}
                        </h3>
                        <p className="text-gray-400 font-light text-xs leading-relaxed line-clamp-3">
                          {art.desc[lang]}
                        </p>
                      </div>
                      <div className="border-t border-gray-50 pt-6 mt-6 flex justify-between items-center text-xs font-semibold tracking-wider text-gray-700">
                        <span className="text-[10px] text-gray-400 font-light">{lang === 'zh' ? '查看打造步骤' : 'View Creation Steps'}</span>
                        <ArrowRight className="w-4 h-4 text-mullano-gold transform group-hover:translate-x-1.5 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        ) : (
          <div className="space-y-12">
            {/* Solar Terms Section Header */}
            <div className="bg-mullano-gray/40 border border-black/[0.03] p-10 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="space-y-3">
                <span className="text-[10px] tracking-[0.4em] uppercase text-mullano-gold font-semibold block">
                  {lang === 'zh' ? '二十四节气高定艺术系列' : 'THE 24 SOLAR TERMS LUXURY ARTISTRY'}
                </span>
                <h3 className="text-2xl md:text-3xl font-serif text-gray-900 tracking-wide uppercase font-medium">
                  {lang === 'zh' ? '二 十 四 节 气 主 题 “ 艺 术 盒 子 ”' : '24 SOLAR TERMS "ART BOX"'}
                </h3>
                <p className="text-xs text-gray-400 font-light tracking-widest">
                  {lang === 'zh' ? '墅 级 高 定 艺 术 涂 料' : 'Villa-Grade Bespoke Artistic Paint'}
                </p>
              </div>
              <div className="text-xs text-gray-500 font-light max-w-md leading-relaxed border-l-2 border-mullano-gold/40 pl-6">
                {lang === 'zh'
                  ? '将华夏千年的时光刻度，纯手工凝练于一方墙面。四时轮转，节律生辉，每一款节气都拥有特定的矿物配方与大区工匠标准工艺步骤。'
                  : 'The rhythms of the ancient Chinese calendar hand-crafted upon luxury villa walls. Each solar term possesses a specific Italian mineral formulation and strict application steps.'}
              </div>
            </div>

            {/* Season Selector */}
            <div className="flex border-b border-gray-100 pb-1 justify-start gap-8 md:gap-12 overflow-x-auto">
              {seasonalList.map(season => (
                <button
                  key={season.id}
                  onClick={() => setActiveSeason(season.id as any)}
                  className={`pb-4 text-sm font-semibold tracking-[0.2em] transition-all duration-300 relative shrink-0 cursor-pointer ${
                    activeSeason === season.id
                      ? 'text-mullano-gold'
                      : 'text-gray-400 hover:text-gray-700'
                  }`}
                >
                  {lang === 'zh' ? season.zh : season.en}
                  {activeSeason === season.id && (
                    <motion.div
                      layoutId="seasonActiveLine"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-mullano-gold"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Solar Terms Grid */}
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
            >
              <AnimatePresence mode="popLayout">
                {filteredSolarTerms.map((term) => (
                  <motion.div
                    layout
                    key={term.id}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.6 }}
                    className="group cursor-pointer bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full rounded-xl overflow-hidden"
                    onClick={() => {
                      // Map the solar term structure directly to standard artwork light box
                      const mapped = {
                        id: term.id,
                        category: 'mineral', // fallback
                        title: {
                          zh: `${term.term} · ${term.name.zh}`,
                          en: `${term.term} · ${term.name.en}`
                        },
                        subtitle: {
                          zh: term.quote.zh,
                          en: term.quote.en
                        },
                        materials: term.materials,
                        technique: term.technique,
                        desc: term.desc,
                        image: term.image,
                        steps: term.steps
                      };
                      setSelectedArtwork(mapped);
                      setBookingSuccess(false);
                    }}
                  >
                    {/* Image Wrap */}
                    <div className="aspect-[4/5] relative overflow-hidden bg-gray-100 shrink-0">
                      <img 
                        src={term.image} 
                        alt={term.name[lang]} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      {/* Term Badge */}
                      <div className="absolute top-4 left-4 bg-mullano-gold text-[10px] font-bold text-white tracking-[0.25em] px-4 py-1.5 rounded-full shadow-sm border border-white/20 z-10">
                        {term.term}
                      </div>
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-neutral-950/25 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <span className="bg-white/95 text-gray-900 text-xs uppercase tracking-[0.25em] font-semibold px-6 py-3 shadow-xl rounded-full scale-95 group-hover:scale-100 transition-all duration-500">
                          {lang === 'zh' ? '品鉴节气配方' : 'Inspect Formula'}
                        </span>
                      </div>
                    </div>

                    {/* Info Text */}
                    <div className="p-8 flex flex-col justify-between flex-grow">
                      <div className="space-y-4">
                        <p className="text-[10px] tracking-[0.3em] uppercase text-mullano-gold font-semibold">
                          {term.name[lang]}
                        </p>
                        <h3 className="text-xl font-serif text-gray-900 tracking-wide font-medium group-hover:text-mullano-gold transition-colors">
                          “{term.quote[lang]}”
                        </h3>
                        <p className="text-gray-400 font-light text-xs leading-relaxed line-clamp-3">
                          {term.desc[lang]}
                        </p>
                        {/* Custom materials indicator */}
                        <div className="pt-2">
                          <span className="inline-block bg-gray-50 border border-gray-100 text-[10px] text-gray-500 rounded px-2.5 py-1 font-mono">
                            {term.materials[lang].split(' + ')[0]}
                          </span>
                        </div>
                      </div>
                      <div className="border-t border-gray-50 pt-6 mt-6 flex justify-between items-center text-xs font-semibold tracking-wider text-gray-700">
                        <span className="text-[10px] text-gray-400 font-light">{lang === 'zh' ? '查看节气打造步骤' : 'View Application Steps'}</span>
                        <ArrowRight className="w-4 h-4 text-mullano-gold transform group-hover:translate-x-1.5 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        )}

        {/* Dynamic Lightbox Modal */}
        <AnimatePresence>
          {selectedArtwork && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[150] overflow-y-auto bg-neutral-950/85 flex items-center justify-center p-4 md:p-8"
              onClick={() => setSelectedArtwork(null)}
            >
              <motion.div 
                initial={{ scale: 0.95, y: 25 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 25 }}
                transition={{ type: 'spring', damping: 25, stiffness: 180 }}
                className="bg-white max-w-6xl w-full rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 relative max-h-[90vh] lg:max-h-none overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedArtwork(null)}
                  className="absolute top-6 right-6 z-10 w-11 h-11 bg-black/40 text-white rounded-full flex items-center justify-center hover:bg-black/60 transition-colors cursor-pointer border border-white/10"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Left Visual Image Column */}
                <div 
                  className="lg:col-span-5 relative bg-neutral-950 overflow-hidden min-h-[400px] lg:min-h-[580px] flex flex-col items-center justify-center group/img cursor-zoom-in"
                  onClick={() => setZoomedImage(selectedArtwork.image)}
                  title={lang === 'zh' ? '点击查看全体大图' : 'Click to view full image'}
                >
                  {/* Blurred Background */}
                  <div 
                    className="absolute inset-0 opacity-30 scale-110 blur-2xl bg-cover bg-center transition-opacity duration-500 group-hover/img:opacity-40"
                    style={{ backgroundImage: `url(${selectedArtwork.image})` }}
                  />
                  
                  {/* Foreground containment image to see the entire tall/slender layout */}
                  <img 
                    src={selectedArtwork.image} 
                    alt={selectedArtwork.title[lang]} 
                    className="relative z-10 max-h-[48vh] lg:max-h-[62vh] w-auto h-auto object-contain transition-all duration-500 group-hover/img:scale-[1.03] shadow-lg rounded"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Dark overlay at bottom for text contrast */}
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/85 via-black/40 to-transparent z-10 pointer-events-none" />
                  
                  {/* Zoom indicator pill */}
                  <div className="absolute top-4 left-4 z-20 bg-black/80 text-[10px] text-mullano-gold tracking-[0.2em] uppercase font-bold px-3.5 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5 shadow-md group-hover/img:bg-mullano-gold group-hover/img:text-white transition-all">
                    <Sparkles className="w-3.5 h-3.5 text-mullano-gold group-hover/img:text-white" />
                    <span>{lang === 'zh' ? '点击查看全体' : 'Click to view full image'}</span>
                  </div>

                  {/* Title text */}
                  <div className="absolute bottom-8 left-8 right-8 text-white space-y-2 z-20 pointer-events-none">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-mullano-gold font-bold">
                      {selectedArtwork.subtitle[lang]}
                    </p>
                    <h2 className="text-2xl md:text-3xl font-serif tracking-widest font-medium">
                      {selectedArtwork.title[lang]}
                    </h2>
                  </div>
                </div>

                {/* Right Specification Info Column */}
                <div className="lg:col-span-7 p-8 md:p-12 space-y-10 overflow-y-auto max-h-[85vh]">
                  {/* Section 1: Philosophy & Desc */}
                  <div className="space-y-4">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-mullano-gold" />
                      {lang === 'zh' ? '艺术设计理念' : 'DESIGN CONCEPT'}
                    </span>
                    <p className="text-gray-600 font-light leading-relaxed text-sm">
                      {selectedArtwork.desc[lang]}
                    </p>
                  </div>

                  {/* Section 2: Recipe Material & Craft */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <div className="space-y-2">
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-gray-400" />
                        {lang === 'zh' ? '高定艺术材料' : 'PREMIUM MATERIALS'}
                      </p>
                      <p className="text-sm font-medium text-gray-800">
                        {selectedArtwork.materials[lang]}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold flex items-center gap-1.5">
                        <Hammer className="w-3.5 h-3.5 text-gray-400" />
                        {lang === 'zh' ? '核心工艺技法' : 'CORE CRAFT TECHNIQUE'}
                      </p>
                      <p className="text-sm font-light text-gray-700 leading-relaxed">
                        {selectedArtwork.technique[lang]}
                      </p>
                    </div>
                  </div>

                  {/* Section 3: Step-by-step Construction */}
                  <div className="space-y-6">
                    <h4 className="text-xs uppercase tracking-widest text-gray-400 font-bold border-b border-gray-100 pb-3">
                      {lang === 'zh' ? '匠人标准施工步骤 (三分料, 七分工)' : 'STANDARD ARTISAN APPLICATION STEPS'}
                    </h4>
                    <div className="space-y-5">
                      {selectedArtwork.steps.map((stepObj: any, index: number) => (
                        <div key={index} className="flex gap-4">
                          <span className="w-6 h-6 rounded-full bg-gray-900 text-white flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5 shadow-sm">
                            {index + 1}
                          </span>
                          <p className="text-sm text-gray-600 font-light leading-relaxed">
                            {stepObj[lang]}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Section 4: Interaction Appointment Form */}
                  <div className="border-t border-gray-100 pt-8 space-y-6">
                    <div className="space-y-2">
                      <h4 className="text-lg font-serif text-gray-900 tracking-wide">
                        {lang === 'zh' ? '预约匠人 · 专属定制' : 'Book Artisan Bespoke Consultation'}
                      </h4>
                      <p className="text-xs text-gray-400 font-light">
                        {lang === 'zh' 
                          ? '木兰诺艺术墙面属于100%纯手工定制。留下您的联系方式，我们将派遣大区星级色彩顾问及高级匠人为您上门提供免费基层检测与色卡实样比对。'
                          : 'Our artistry walls are 100% hand-crafted. Leave your contact info to secure a free wall audit and live sample comparison by a master color consultant.'}
                      </p>
                    </div>

                    {bookingSuccess ? (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl flex items-center gap-3 text-sm"
                      >
                        <Check className="w-5 h-5 text-emerald-600 shrink-0" />
                        <span>
                          {lang === 'zh' 
                            ? '预约成功！木兰诺艺术顾问将在24小时内致电您，请保持电话畅通。' 
                            : 'Booking submitted! Our consultant will call you within 24 hours.'}
                        </span>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleBookingSubmit} className="grid grid-cols-1 md:grid-cols-12 gap-4">
                        <div className="md:col-span-4">
                          <input 
                            type="text" 
                            required
                            placeholder={lang === 'zh' ? '您的尊称' : 'Your Name'}
                            value={bookingName}
                            onChange={(e) => setBookingName(e.target.value)}
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm font-light text-gray-800 focus:outline-none focus:border-mullano-gold focus:bg-white transition-all"
                          />
                        </div>
                        <div className="md:col-span-5">
                          <input 
                            type="tel" 
                            required
                            placeholder={lang === 'zh' ? '您的联系电话' : 'Your Phone Number'}
                            value={bookingPhone}
                            onChange={(e) => setBookingPhone(e.target.value)}
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm font-light text-gray-800 focus:outline-none focus:border-mullano-gold focus:bg-white transition-all"
                          />
                        </div>
                        <button 
                          type="submit" 
                          className="md:col-span-3 bg-gray-900 hover:bg-mullano-gold text-white text-xs font-semibold tracking-widest uppercase rounded-lg py-3.5 px-4 transition-colors cursor-pointer"
                        >
                          {lang === 'zh' ? '即刻预约' : 'BOOK NOW'}
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Fullscreen Image Zoom Modal */}
        <AnimatePresence>
          {zoomedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] bg-neutral-950 flex flex-col items-center justify-center p-4 cursor-zoom-out"
              onClick={() => setZoomedImage(null)}
            >
              {/* Close Button */}
              <button
                onClick={() => setZoomedImage(null)}
                className="absolute top-6 right-6 z-[210] w-12 h-12 bg-white/10 hover:bg-mullano-gold hover:text-white text-white rounded-full flex items-center justify-center transition-all border border-white/20 cursor-pointer"
                aria-label="Close Fullscreen View"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Title & Hint at bottom */}
              <div className="absolute bottom-6 left-6 right-6 text-center text-white/55 text-xs font-light tracking-[0.2em] z-[110] pointer-events-none select-none uppercase">
                {lang === 'zh' ? '点击任意处或按 ESC 键关闭大图全体视图' : 'Click anywhere or press ESC to close full view'}
              </div>

              {/* Contained image showing entire height and width */}
              <motion.img
                initial={{ scale: 0.9, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 15 }}
                transition={{ type: 'spring', damping: 25, stiffness: 180 }}
                src={zoomedImage}
                alt="Full View"
                className="max-h-[92vh] max-w-full w-auto h-auto object-contain rounded shadow-2xl border border-white/5"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  const renderTrends = () => (
    <div className="space-y-24">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block">
            {lang === 'zh' ? '2026 色彩趋势' : '2026 Color Trends'}
          </span>
          <h2 className="text-3xl font-light text-gray-900 mb-8 leading-tight">
            {lang === 'zh' ? '大地之息：回归自然的原始质感' : 'Breath of Earth: Return to Nature'}
          </h2>
          <p className="text-gray-500 leading-relaxed font-light mb-8">
            {lang === 'zh' 
              ? '在快节奏的数字时代，我们渴望触碰真实。2026年，MULLANO 灵感实验室聚焦于“大地色系”，通过微水泥与矿物涂料的结合，营造出一种宁静、深邃且富有生命力的空间氛围。'
              : 'In the fast-paced digital age, we long for the real. In 2026, MULLANO L\'Atelier focuses on "Earth Tones," creating a serene, deep, and vibrant atmosphere through the combination of microcement and mineral coatings.'}
          </p>
          <div className="flex gap-4">
            {['#E5E1DA', '#D4CBB3', '#A39985', '#7D7463'].map(color => (
              <div key={color} className="w-12 h-12 rounded-full shadow-inner" style={{ backgroundColor: color }} />
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="aspect-square bg-gray-200 overflow-hidden"
        >
          <img 
            src="/trends-breath-of-earth.webp" 
            alt="Trends" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200";
            }}
          />
        </motion.div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { 
            title: { zh: '极简主义', en: 'Minimalism' }, 
            img: '/trends-minimalism.webp', 
            fallback: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=600' 
          },
          { 
            title: { zh: '侘寂之美', en: 'Wabi-sabi' }, 
            img: '/trends-wabisabi.webp', 
            fallback: 'https://images.unsplash.com/photo-1615873968403-89e068629275?auto=format&fit=crop&q=80&w=600' 
          },
          { 
            title: { zh: '工业复兴', en: 'Industrial' }, 
            img: '/trends-industrial.webp', 
            fallback: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=600' 
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[3/4] overflow-hidden mb-4">
              <img 
                src={item.img} 
                alt={item.title[lang]} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                referrerPolicy="no-referrer" 
                onError={(e) => {
                  e.currentTarget.src = item.fallback;
                }}
              />
            </div>
            <h3 className="text-sm uppercase tracking-widest text-gray-900">{item.title[lang]}</h3>
          </motion.div>
        ))}
      </section>
    </div>
  );

  const renderKnowledge = () => (
    <div className="space-y-24">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-light text-gray-900 mb-8">
          {lang === 'zh' ? '艺术漆科普：墙面上的艺术革命' : 'Art Paint Knowledge: The Wall Art Revolution'}
        </h2>
        <p className="text-gray-500 font-light leading-relaxed mb-6">
          {lang === 'zh'
            ? '艺术涂料是一类用于实现美学表达的高分子聚合物表面装饰材料。通过特定的工艺技术实现高度的美学表达，包括仿石、仿木、金属效果、渐变色彩等多种艺术效果，能够创造出独特的视觉效果，使空间更加个性化和艺术化，满足人们对创意设计和定制化空间的需求。'
            : 'Art paint is a type of polymer surface decoration material used to achieve aesthetic expression. Through specific craft techniques, it achieves high aesthetic expression, including imitation stone, wood, metal effects, gradient colors, and other artistic effects, creating unique visual effects.'}
        </p>
        <p className="text-gray-500 font-light leading-relaxed">
          {lang === 'zh'
            ? '与传统乳胶漆相比，艺术涂料不仅在视觉上呈现多样化纹理艺术造型，在施工上也需要更高的专业工具与技术。优质的艺术漆（如 MULLANO 旗下产品）多采用天然无机矿物原料，不仅无毒无味、零甲醛，还具备防霉抗菌、防火阻燃、透气防潮等卓越的物理性能。'
            : 'Compared to traditional latex paint, art paint not only presents diverse textured artistic shapes visually but also requires higher professional tools and techniques for application. High-quality art paints (like MULLANO products) mostly use natural inorganic mineral raw materials.'}
        </p>
      </div>

      <div className="space-y-12">
        <h3 className="text-xl font-light text-gray-900 mb-8 border-b border-gray-100 pb-4">
          {lang === 'zh' ? '无机 vs 有机：艺术漆的选择之道' : 'Inorganic vs Organic: Choosing Your Art Paint'}
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
          >
            <h4 className="text-lg font-medium text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              {lang === 'zh' ? '无机矿物涂料' : 'Inorganic Mineral Paint'}
            </h4>
            <ul className="space-y-4 text-sm text-gray-500 font-light leading-relaxed">
              <li className="flex gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                <span>{lang === 'zh' ? '【环保极致】以天然矿物为基料，真正实现 0 VOC，零甲醛排放。' : '[Eco-Ultimate] Based on natural minerals, truly 0 VOC and zero formaldehyde emissions.'}</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                <span>{lang === 'zh' ? '【石化作用】与墙面发生化学反应形成一体，不剥落，寿命长达 20 年以上。' : '[Petrification] Chemically bonds with the wall, no peeling, lifespan up to 20+ years.'}</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                <span>{lang === 'zh' ? '【防护巅峰】防火 A1 级，天然强碱性环境使得霉菌、细菌无法生长。' : '[Peak Protection] Fireproof A1 grade, strong alkaline environment prevents mold and bacteria.'}</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
          >
            <h4 className="text-lg font-medium text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              {lang === 'zh' ? '高分子有机艺术漆' : 'Polymer Organic Art Paint'}
            </h4>
            <ul className="space-y-4 text-sm text-gray-500 font-light leading-relaxed">
              <li className="flex gap-3">
                <CheckCircle className="w-4 h-4 text-amber-500 shrink-0 mt-1" />
                <span>{lang === 'zh' ? '【表现力强】色彩饱和度更高，能实现极其复杂细腻的丝绸、天鹅绒等触感效果。' : '[Expressive] Higher color saturation, enables complex textures like silk and velvet.'}</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-4 h-4 text-amber-500 shrink-0 mt-1" />
                <span>{lang === 'zh' ? '【柔韧覆盖】具有一定的成膜弹性，能够更好地覆盖墙面的细微裂纹。' : '[Flexible] Has elastic film-forming properties, effectively covering minor wall cracks.'}</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-4 h-4 text-amber-500 shrink-0 mt-1" />
                <span>{lang === 'zh' ? '【施工友好】对基层的要求相对更宽泛，色彩纹理的现场把控度更高。' : '[Process Friendly] More lenient on base layers, with better on-site control of color/texture.'}</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full text-sm font-light text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-400 uppercase tracking-widest text-[10px]">
                <th className="p-4 border-b border-gray-100">{lang === 'zh' ? '对比维度' : 'Dimension'}</th>
                <th className="p-4 border-b border-gray-100">{lang === 'zh' ? '无机系列' : 'Inorganic'}</th>
                <th className="p-4 border-b border-gray-100">{lang === 'zh' ? '有机系列' : 'Organic'}</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              <tr className="border-b border-gray-50">
                <td className="p-4 font-normal text-gray-900">{lang === 'zh' ? '主要成分' : 'Composition'}</td>
                <td className="p-4">{lang === 'zh' ? '硅酸盐、石灰等天然矿物' : 'Silicates, lime, natural minerals'}</td>
                <td className="p-4">{lang === 'zh' ? '丙烯酸树脂等高分子聚合物' : 'Acrylic resin, polymer emulsion'}</td>
              </tr>
              <tr className="border-b border-gray-50">
                <td className="p-4 font-normal text-gray-900">{lang === 'zh' ? '环保等级' : 'Eco-Level'}</td>
                <td className="p-4">{lang === 'zh' ? '极致环保 (0 VOC)' : 'Ultimate (0 VOC)'}</td>
                <td className="p-4">{lang === 'zh' ? '符合国家标准 (低 VOC)' : 'National Standard (Low VOC)'}</td>
              </tr>
              <tr className="border-b border-gray-50">
                <td className="p-4 font-normal text-gray-900">{lang === 'zh' ? '阻燃性能' : 'Fireproof'}</td>
                <td className="p-4">{lang === 'zh' ? 'A1 级 (不燃)' : 'Non-flammable'}</td>
                <td className="p-4">{lang === 'zh' ? 'B1 级 (难燃)' : 'Flame retardant'}</td>
              </tr>
              <tr className="border-b border-gray-50">
                <td className="p-4 font-normal text-gray-900">{lang === 'zh' ? '色彩丰富度' : 'Color Range'}</td>
                <td className="p-4">{lang === 'zh' ? '中 (以自然大地色为主)' : 'Moderate (Natural earth tones)'}</td>
                <td className="p-4">{lang === 'zh' ? '极高 (全色系覆盖)' : 'Very High (Full spectrum)'}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-gray-900 text-white p-12 rounded-lg mt-12">
          <h4 className="text-xl font-light mb-8 text-center uppercase tracking-widest">
            {lang === 'zh' ? '艺术漆的共同优势' : 'Mutual Advantages of Art Paint'}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-gray-400 text-xs mb-4 uppercase tracking-[0.2em]">{lang === 'zh' ? '防霉防潮' : 'Anti-Mold'}</div>
              <p className="text-sm font-light text-gray-300 leading-relaxed">
                {lang === 'zh' ? '天然的微孔结构具有优异的透气性，能调节室内湿度，有效预防回南天发霉及起鼓。' : 'Natural microporous structure provides humidity regulation, preventing mold and bubbling.'}
              </p>
            </div>
            <div>
              <div className="text-gray-400 text-xs mb-4 uppercase tracking-[0.2em]">{lang === 'zh' ? '无接缝艺术' : 'Seamless Art'}</div>
              <p className="text-sm font-light text-gray-300 leading-relaxed">
                {lang === 'zh' ? '相比于壁纸，艺术漆能实现整墙无接缝覆盖，不论是弧形还是阴阳角均能完美贴合。' : 'Seamless coverage on any surface, fitting perfectly on curves and corners unlike wallpaper.'}
              </p>
            </div>
            <div>
              <div className="text-gray-400 text-xs mb-4 uppercase tracking-[0.2em]">{lang === 'zh' ? '经久耐用' : 'Durability'}</div>
              <p className="text-sm font-light text-gray-300 leading-relaxed">
                {lang === 'zh' ? '色彩持久稳固，不褪色、不泛碱，其耐擦洗性能远超传统涂料。' : 'Stable colors that won\'t fade or effloresce, with scrubbing resistance far beyond traditional paint.'}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-12">
        <h3 className="text-xl font-light text-gray-900 mb-8 border-b border-gray-100 pb-4">
          {lang === 'zh' ? '艺术涂料的核心优势' : 'Core Advantages of Art Paint'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: { zh: '颜值天花板', en: 'Aesthetic Pinnacle' }, desc: { zh: '能打造肌理漆、马来漆、金属漆等多种效果，可呈现磨砂、闪光、浮雕等触感，甚至能模拟大理石、木纹等天然材质纹理，色彩饱和度高且层次丰富，适合打造轻奢、复古、极简等个性化风格。', en: 'Creates various effects like textured paint, stucco, and metallic paint, presenting matte, shimmering, and embossed textures, and even simulating natural materials like marble and wood grain.' } },
            { title: { zh: '环保健康', en: 'Eco-Friendly & Healthy' }, desc: { zh: '无机涂料以碱金属硅酸盐溶液、硅溶胶、天然石灰乳等为基料，从源头上避免了有机化合物的引入，有害物质含量未检出，具有天然0级、99.9%抗菌，永久防霉抗菌性能。', en: 'Inorganic coatings use alkali metal silicate solutions, silica sol, and natural lime milk as base materials, avoiding the introduction of organic compounds from the source.' } },
            { title: { zh: '卓越物理性能', en: 'Excellent Physical Properties' }, desc: { zh: '无机涂料与墙面发生石化作用，形成一种耐水、防酸、不溶性、坚硬的硅酸盐和碳酸盐无机涂层；耐刮擦优势明显，且阻燃性能达到A1级超1200度。', en: 'Inorganic coatings petrify with the wall, forming a water-resistant, acid-resistant, insoluble, and hard silicate and carbonate inorganic coating.' } },
            { title: { zh: '高透气性', en: 'High Breathability' }, desc: { zh: '高透气性，使建筑物内部的水分能自由地向外蒸发，保持墙身干爽，可防止涂膜出现空鼓、起泡甚至掉皮脱落。', en: 'High breathability allows moisture inside the building to evaporate freely outward, keeping the wall dry and preventing the coating from hollowing, blistering, or peeling.' } },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="bg-white p-8 shadow-sm border border-gray-100"
            >
              <h4 className="text-lg font-medium text-gray-900 mb-4">{item.title[lang]}</h4>
              <p className="text-gray-500 font-light text-sm leading-relaxed">{item.desc[lang]}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="space-y-12">
        <h3 className="text-xl font-light text-gray-900 mb-8 border-b border-gray-100 pb-4">
          {lang === 'zh' ? '施工标准流程' : 'Standard Construction Process'}
        </h3>
        <p className="text-gray-500 font-light leading-relaxed mb-8">
          {lang === 'zh'
            ? 'MULLANO 坚信“三分料，七分工”。我们引入标准化施工管理体系，从基层加固到面层艺术创作，每一步都经过严格的检测，确保每一面墙都能经受时间的考验。施工环境要求温度5~35℃，空气相对湿度≤85%，待基底含水率≤10%时方可施工。'
            : 'MULLANO believes in "30% material, 70% craft." We introduce a standardized construction management system, from base reinforcement to surface art creation, ensuring every wall stands the test of time.'}
        </p>
        {[
          { step: '01', title: { zh: '基层处理', en: 'Base Treatment' }, desc: { zh: '确保表面平整，阴阳角方正平直；干燥（含水率≤8%）；中性（pH值≤10）；牢固（不掉粉、不起砂、无空鼓、无剥离）；清洁（表面光洁，无浮灰，无油污）。', en: 'Ensure the surface is flat, dry (moisture ≤8%), neutral (pH≤10), firm, and clean.' } },
          { step: '02', title: { zh: '上基层渗透底漆', en: 'Penetrating Primer' }, desc: { zh: '上基层渗透底漆，封固腻子层。', en: 'Apply penetrating primer to seal the putty layer.' } },
          { step: '03', title: { zh: '批刮腻子膏', en: 'Putty Application' }, desc: { zh: '批刮腻子膏1-2遍，找平基层细微瑕疵和砂眼。用320目以上的细砂纸打磨基层，并清理粉尘。（如果是厚浆系列的效果可以省去此步骤）', en: 'Apply putty 1-2 times to level minor flaws. Sand with 320+ grit sandpaper and clean dust.' } },
          { step: '04', title: { zh: '涂刷底漆', en: 'Primer Application' }, desc: { zh: '根据系列不同上不同系列的底漆。', en: 'Apply different series of primers according to the product series.' } },
          { step: '05', title: { zh: '涂刷面漆', en: 'Topcoat Application' }, desc: { zh: '根据系列不同上不同系列的面漆（通常批刮2遍+收光或打磨）。', en: 'Apply different series of topcoats (usually 2 coats + polishing or sanding).' } },
          { step: '06', title: { zh: '罩面漆（视需要）', en: 'Clear Coat (Optional)' }, desc: { zh: '根据系列不同上不同系列的罩面漆。', en: 'Apply clear coat depending on the series requirements.' } },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="flex gap-12 border-b border-gray-100 pb-12"
          >
            <span className="text-4xl font-light text-gray-200">{item.step}</span>
            <div>
              <h3 className="text-xl font-light text-gray-900 mb-4">{item.title[lang]}</h3>
              <p className="text-gray-500 font-light text-sm leading-relaxed">{item.desc[lang]}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderInvestment = () => {
    const managers = [
      {
        regionZh: '北部大区',
        regionEn: 'NORTH REGION',
        nameZh: '戴继锋',
        nameEn: 'Dai Jifeng',
        phone: '189 2828 8206',
        rawPhone: '18928288206',
        areasZh: '北京、天津、河北、山西、山东、河南、内蒙、黑龙江、吉林、辽宁',
        areasEn: 'Beijing, Tianjin, Hebei, Shanxi, Shandong, Henan, Inner Mongolia, Heilongjiang, Jilin, Liaoning'
      },
      {
        regionZh: '南部大区',
        regionEn: 'SOUTH REGION',
        nameZh: '胡松',
        nameEn: 'Hu Song',
        phone: '189 2828 8217',
        rawPhone: '18928288217',
        areasZh: '广东、广西、海南、湖北、湖南、江西、福建、安徽',
        areasEn: 'Guangdong, Guangxi, Hainan, Hubei, Hunan, Jiangxi, Fujian, Anhui'
      },
      {
        regionZh: '西部大区',
        regionEn: 'WEST REGION',
        nameZh: '王毅',
        nameEn: 'Wang Yi',
        phone: '189 2828 8243',
        rawPhone: '18928288243',
        areasZh: '陕西、甘肃、青海、宁夏、新疆、云南、贵州、四川、重庆、西藏',
        areasEn: 'Shaanxi, Gansu, Qinghai, Ningxia, Xinjiang, Yunnan, Guizhou, Sichuan, Chongqing, Tibet'
      },
      {
        regionZh: '东部大区',
        regionEn: 'EAST REGION',
        nameZh: '郑云峰',
        nameEn: 'Zheng Yunfeng',
        phone: '189 2828 3022',
        rawPhone: '18928283022',
        areasZh: '上海、浙江、江苏',
        areasEn: 'Shanghai, Zhejiang, Jiangsu'
      }
    ];

    return (
      <div className="space-y-24">
        {/* Header Section */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif text-[#1e3a8a] tracking-[0.2em] uppercase font-medium">
            {lang === 'zh' ? '招商加盟 · 合作共赢' : 'Franchise & Investment'}
          </h2>
          <p className="text-sm md:text-base text-gray-500 font-light tracking-widest max-w-3xl mx-auto leading-relaxed">
            {lang === 'zh' 
              ? '专业色彩 · 纯正品质 | 携手玉兰集团，开启艺术涂料全新篇章' 
              : 'Professional Color · Pure Quality | Partner with Yulan Group to open a new chapter in art paint'}
          </p>
        </div>

        {/* Part 1: Headquarters & Brand Contacts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100/80 relative overflow-hidden"
        >
          {/* Top subtle gold gradient bar */}
          <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-mullano-gold/40 via-mullano-gold to-mullano-gold/40" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left intro column */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[11px] tracking-[0.4em] text-mullano-gold uppercase font-semibold">
                {lang === 'zh' ? '品牌总部联系通道' : 'Headquarters Contact'}
              </span>
              <h3 className="text-2xl font-serif tracking-widest text-gray-900 leading-snug">
                {lang === 'zh' ? '广东玉兰集团股份有限公司' : 'Guangdong Yulan Group Co., Ltd.'}
              </h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed tracking-wider">
                {lang === 'zh' 
                  ? '作为行业领先的高端艺术涂料品牌，木兰诺（MULLANO）依托玉兰集团40年雄厚实力底蕴，致力于将纯正品质与前沿色彩美学带入千家万户。我们诚邀全国志同道合的合作伙伴，共享品牌溢价，共创美好未来。' 
                  : 'As an industry-leading luxury art paint brand, Mullano relies on Yulan Group\'s 40 years of solid foundation to bring pure quality and cutting-edge color aesthetics to thousands of households. We welcome nationwide business partners to share brand value and build a prosperous future together.'}
              </p>
            </div>

            {/* Right details grid */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-50/50 p-8 rounded-xl border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm flex-shrink-0 text-mullano-gold border border-gray-100">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-gray-400 uppercase tracking-wider">{lang === 'zh' ? '招商服务热线' : 'Investment Hotline'}</p>
                  <a href="tel:0769-22677266" className="text-base font-semibold text-[#1e3a8a] hover:underline tracking-wide">0769-22677266</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm flex-shrink-0 text-mullano-gold border border-gray-100">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-gray-400 uppercase tracking-wider">{lang === 'zh' ? '合作邮箱' : 'Partnership Email'}</p>
                  <a href="mailto:xiaowei@yulangroup.cn" className="text-base font-medium text-gray-800 hover:underline">xiaowei@yulangroup.cn</a>
                </div>
              </div>

              <div className="flex items-start gap-4 md:col-span-2">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm flex-shrink-0 text-mullano-gold border border-gray-100">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-gray-400 uppercase tracking-wider">{lang === 'zh' ? '总部及体验中心' : 'HQ & Experience Center'}</p>
                  <p className="text-sm text-gray-700 font-light leading-relaxed">
                    {lang === 'zh' ? '广东省东莞市莞龙路玉兰集团总部' : 'Yulan Group HQ, Guanlong Road, Dongguan, Guangdong, China'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 md:col-span-2">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm flex-shrink-0 text-mullano-gold border border-gray-100">
                  <Building className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-gray-400 uppercase tracking-wider">{lang === 'zh' ? '官方网址' : 'Official Site'}</p>
                  <a href="https://mullanopaint.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-700 hover:text-mullano-gold transition-colors font-medium hover:underline">
                    https://mullanopaint.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Part 2: Regional Managers direct hotline */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-serif text-gray-900 tracking-widest uppercase">
              {lang === 'zh' ? '大区经理直通车' : 'Regional Managers Hotline'}
            </h3>
            <p className="text-xs md:text-sm text-gray-400 font-light tracking-widest max-w-xl mx-auto">
              {lang === 'zh' 
                ? '专属负责人为您提供高效快捷、专业的品牌招商咨询与大区业务对接' 
                : 'Dedicated managers providing efficient and professional regional business support'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
            {managers.map((manager, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100 flex gap-6 relative overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                {/* Left Blue Accent Bar */}
                <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-[#1e3a8a] rounded-l-2xl" />

                <div className="flex-1 space-y-6 pl-2">
                  {/* Region & English */}
                  <div className="flex items-baseline gap-3">
                    <h3 className="text-2xl font-semibold text-gray-900 tracking-wide">
                      {lang === 'zh' ? manager.regionZh : manager.regionEn}
                    </h3>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#A37B45]">
                      {manager.regionEn}
                    </span>
                  </div>

                  {/* Manager Name & Phone Pill */}
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="text-xl font-bold text-gray-800">
                      {lang === 'zh' ? manager.nameZh : manager.nameEn}
                    </span>
                    <a
                      href={`tel:${manager.rawPhone}`}
                      className="inline-flex items-center gap-2 bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#1E293B] px-5 py-2 rounded-full text-base font-medium tracking-wide transition-all duration-200 border border-[#E2E8F0]"
                    >
                      <Phone className="w-4 h-4 text-gray-400" />
                      <span>{manager.phone}</span>
                    </a>
                  </div>

                  {/* Divider Line */}
                  <div className="border-t border-gray-100 pt-6" />

                  {/* Covered Areas */}
                  <div className="space-y-2">
                    <p className="text-xs text-gray-400 uppercase tracking-wider">
                      {lang === 'zh' ? '负责区域' : 'Responsible Regions'}
                    </p>
                    <p className="text-sm text-gray-600 font-light leading-relaxed tracking-wider">
                      {lang === 'zh' ? manager.areasZh : manager.areasEn}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-[#F5F5F5] min-h-screen">
      <PageHero 
        title={currentCategory?.name || (lang === 'zh' ? '探索灵感' : 'Explore Inspiration')}
        subtitle={lang === 'zh' ? '灵感实验室' : 'L\'Atelier'}
        image="/atelier-bg.webp"
        fallbackImage="https://images.unsplash.com/photo-1615873968403-89e068629275?auto=format&fit=crop&q=80&w=2000"
      />

      {/* Sub-nav */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-6 flex flex-wrap gap-8">
          {categories.map((cat: any) => (
            <Link
              key={cat.path}
              to={cat.path}
              className={`text-sm tracking-widest uppercase transition-colors ${
                cat.path.includes(sub || '') 
                  ? 'text-gray-900 font-medium' 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Content */}
        <div>
          {sub === 'art' && renderArt()}
          {sub === 'trends' && renderTrends()}
          {sub === 'knowledge' && renderKnowledge()}
          {(sub === 'booking' || sub === 'investment') && renderInvestment()}
        </div>
      </div>
    </div>
  );
};
