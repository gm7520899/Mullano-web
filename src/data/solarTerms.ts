export interface SolarTerm {
  id: string;
  season: 'spring' | 'summer' | 'autumn' | 'winter';
  term: string; // e.g. "立春"
  name: { zh: string; en: string }; // e.g. "春山醒"
  quote: { zh: string; en: string }; // e.g. "墙面泛起新绿，与春天一同苏醒。"
  desc: { zh: string; en: string };
  materials: { zh: string; en: string };
  technique: { zh: string; en: string };
  image: string;
  steps: { zh: string; en: string }[];
}

export const solarTermsData: SolarTerm[] = [
  // 春季 (Spring)
  {
    id: 'st-1',
    season: 'spring',
    term: '立春',
    name: { zh: '春山醒', en: 'Spring Mountain Awakens' },
    quote: { zh: '墙面泛起新绿，与春天一同苏醒。', en: 'Wall ripples with new green, awakening with Spring.' },
    desc: {
      zh: '微风吹拂，新绿初萌。墙面运用 MULLANO Gesso 艺术灰泥与微水泥，雕琢出春山初醒的层叠微澜。自然纯粹的绿色，让一室春光跃然墙面，充满盎然生气。',
      en: 'Gentle breeze blows, new green sprouts. Uses MULLANO Gesso and mineral microcement to carve the layered ripples of early spring peaks, bringing vivid life to the interior.'
    },
    materials: { zh: 'MULLANO Gesso (艺术灰泥) + 矿物绿泥', en: 'MULLANO Gesso + Forest Green Mineral Pigment' },
    technique: { zh: '意式馒刀多层慢批、局部生态拉毛、微糙肌理塑造', en: 'Italian trowelling, local organic texturing, and matte fine-sand shaping' },
    image: '/01.webp',
    steps: [
      { zh: '渗透防固：涂刷底漆稳固墙面，提升后续厚浆材料的附着力。', en: 'Consolidation: Apply high-grip primer to strengthen the substrate.' },
      { zh: '春绿铺底：以淡绿矿物泥平批打底，定下大自然万物复苏的主色调。', en: 'Green Base: Trowel a light green mineral layer to set the organic background.' },
      { zh: '春山起伏：手持 MULLANO Gesso 慢批出微小重叠的起伏，如同初醒的山脊。', en: 'Ridge Shaping: Trowel wavy, soft overlapping textures resembling young mountain ridges.' },
      { zh: '防污固封：滚涂高透哑光保护釉，防水防污，长效锁色。', en: 'Matte Seal: Coat with transparent ultra-matte glaze to prevent dust and stains.' }
    ]
  },
  {
    id: 'st-2',
    season: 'spring',
    term: '雨水',
    name: { zh: '润如酥', en: 'Moist like Drizzle' },
    quote: { zh: '雨润万物，墙面也生出麂皮般的温柔。', en: 'Rain moistens all things, the wall develops a suede-like gentleness.' },
    desc: {
      zh: '好雨知时节，润物细无声。选用 MULLANO Suede 高定丝绒漆，通过多角度交叠批扫，在温润多孔的雅致感中，勾勒出如真丝面料与高定麂皮般的极度温柔与温暖触感。',
      en: 'Fuses organic drizzle feeling with premium suede textures. Built with MULLANO Suede to cast a velvet, fabric-like finish that is soft to touch and comforting to look at.'
    },
    materials: { zh: 'MULLANO Suede (丝绒漆) + 天然天鹅绒中涂浆', en: 'MULLANO Suede + Premium Velvet Midcoat' },
    technique: { zh: '超微短毛辊筒底涂、双手圆形交错揉刮、边缘柔化微扫', en: 'Short-nap roller coat, dual-handed round-buffing, and edge softening' },
    image: '/02.webp',
    steps: [
      { zh: '找平基底：刷涂高强渗透抗碱底漆，确保墙体零返碱。', en: 'Anti-Alkali Prep: Apply high-penetration sealer to ensure no salt-out.' },
      { zh: '真丝铺饰：辊涂两遍细腻天鹅绒中涂，让墙面具有极佳的吸音与触感。', en: 'Velvet Base: Roll two coats of premium mid-coat for extreme texture and sound absorbing.' },
      { zh: '麂皮慢揉：手持专用海绵揉盘，将 MULLANO Suede 沿八字形多角度交叠慢揉，使漆膜泛起缎光。', en: 'Suede Polishing: Use sponge float in figure-8 motions to align pearl flakes into suede luster.' },
      { zh: '超干罩面：喷涂超哑抗指纹保护涂层，阻绝指纹，持久温柔。', en: 'Anti-Fingerprint Coat: Airless spray ultra-matte protective film to keep texture clean.' }
    ]
  },
  {
    id: 'st-3',
    season: 'spring',
    term: '惊蛰',
    name: { zh: '惊鸿墨', en: 'Surprising Ink' },
    quote: { zh: '惊雷掠过墨绿深潭，唤醒一墙生机。', en: 'Thunder passes over deep dark-green pools, awakening a wall of life.' },
    desc: {
      zh: '春雷破土，惊醒蛰伏。深邃高贵的祖母绿底色，运用意大利高密大理石厚浆矿砂，辅以纯手工艺术描白与裂缝拉线，勾勒出闪电与深谷岩石交织的宏伟张力。',
      en: 'A striking tribute to spring thunder breaking the earth. Jade/emerald tones pair with custom-cured natural fissures, hand-detailed with micro-gilding to represent the awakening of nature.'
    },
    materials: { zh: 'MULLANO Plaster (祖母绿) + 艺术裂纹泥 + 水性描白釉', en: 'MULLANO Plaster (Emerald) + Crackle Medium + White Glaze' },
    technique: { zh: '局部温差热脱水裂纹、纯手工不锈钢细针描绘白边、超高亮打磨抛光', en: 'Thermal dehydration crackle, manual precision line detailing, and high-gloss burnishing' },
    image: '/03.webp',
    steps: [
      { zh: '祖母绿饰泥平批：厚批 MULLANO Plaster 祖母绿矿物艺术泥浆，并打磨光滑。', en: 'Emerald Base: Trowel a thick layer of emerald green MULLANO Plaster and sand it flat.' },
      { zh: '急剧干缩裂：喷刷特效裂纹剂，局部使用温风枪急干，迫使其产生纵横交错的雷击裂痕。', en: 'Thunder cracks: Spray crackle activator and apply heat gun to trigger dramatic rifts.' },
      { zh: '银润描白：待干结后，手持极细针笔将亮白/亮银色釉料手工填补至缝隙中，仿若雷光掠过。', en: 'White Detail: Use ultra-fine detail brush to fill gaps with silver-white glaze, like sparks.' },
      { zh: '蜡合抛光：涂刷天然硬质蜂蜡，配合羊毛轮高频抛光，使石材折射出温润玉石质感。', en: 'Wax Buffing: Apply natural hard beeswax and polish with wool disc for a semi-translucent jade sheen.' }
    ]
  },
  {
    id: 'st-4',
    season: 'spring',
    term: '春分',
    name: { zh: '春半分', en: 'Balanced Spring' },
    quote: { zh: '光影在此平衡，色彩在家中找到它的中心。', en: 'Light and shadow balance here, color finds its center in the home.' },
    desc: {
      zh: '春分之日，昼夜均分。经典双色蚕丝米兰天鹅绒在冷暖交界的光影下展现出无与伦比的优雅平衡，多角度展现高级灰蓝与沙金的丝丝交融。',
      en: 'A harmonious blend representing the spring equinox where day and night are equal. Fuses mineral slate blue with gold dust velvet, shifting gracefully under ambient lighting.'
    },
    materials: { zh: 'MULLANO Milan Velvet (双色沙金/灰蓝)', en: 'MULLANO Milan Velvet (Dual-tone Sand-gold & Blue-gray)' },
    technique: { zh: '意式双手圆形慢抹法、对角线阴影过渡、光亮压实', en: 'Double-handed circular smoothing, diagonal transition polishing, and luster tightening' },
    image: '/04.webp',
    steps: [
      { zh: '平衡底色：均匀滚涂一层高固含灰蓝色中涂底漆，完全覆盖墙面杂色。', en: 'Balanced Base: Evenly roll blue-gray premium primer to cover any substrate spots.' },
      { zh: '天鹅绒揉批：馒刀平批第一层 MULLANO Milan Velvet，使微米云母薄片在墙体上紧密舒展。', en: 'Velvet Base: Trowel the first thin layer of Milan Velvet, aligning mica flakes.' },
      { zh: '十字交叠揉光：第二遍湿浆层上，运用专用双手不锈钢收光抹刀以8字形交叉揉光。', en: 'Figure-8 Polish: On the second wet coat, work stainless trowels in intersecting orbits to generate dual shades.' },
      { zh: '亮光锁定：不磨损抛光，直接以自然风干锁色，展现犹如蚕丝缎面的轻奢反光。', en: 'Silk Finish: Allow to cure naturally without sanding to preserve the silky glow.' }
    ]
  },
  {
    id: 'st-5',
    season: 'spring',
    term: '清明',
    name: { zh: '天水碧', en: 'Sky Celadon' },
    quote: { zh: '雨过天青处，有一面墙为你放晴。', en: 'Where rain clears to sky-blue, there is a wall clearing up for you.' },
    desc: {
      zh: '春雨洗涤尘埃，天青倒映溪流。以高透光保护晶釉与天青色大理石饰面泥配合，在墙面再现宋徽宗笔下“雨过天晴云破处”的极致瓷釉美学。',
      en: 'Captures the serene celadon sky after a spring shower. Inspired by imperial Song porcelain, this finish pairs high-translucent glaze with pale sky-blue stone stucco.'
    },
    materials: { zh: 'MULLANO Gesso (宋瓷天青色) + 亮光高透防污保护釉', en: 'MULLANO Gesso (Sky Blue) + Translucent Anti-Stain Porcelain Glaze' },
    technique: { zh: '高频研磨打光、干扫半干套色、纳米微粒抛光', en: 'High-frequency fine sanding, dry-brush overlay, and nano-particle wax-polishing' },
    image: '/05.webp',
    steps: [
      { zh: '细腻石粉：大面积满批 MULLANO Gesso 极细天青色泥，干后用3000目砂纸精细打磨。', en: 'Celadon Base: Spread pastel sky celadon Gesso and sand with 3000-grit paper to absolute smoothness.' },
      { zh: '微云出岫：局部使用特制艺术海绵球蘸淡白云母釉轻揉，形成如破晓云烟般的半透明飘逸感。', en: 'Dawn Mist: Dab white-tinted pearlescent glaze locally with a sea sponge for cloud-like translucent wisps.' },
      { zh: '瓷面玉化：多次揉压抹光，使石英微粒紧密重组，表面呈现坚硬瓷化状态。', en: 'Porcelain Hardening: Trowel firmly multiple times to crystalize quartz sand into a hardened porcelain finish.' },
      { zh: '亮光晶封：满涂双组份亮光晶石防污面漆，呈现莹润如玉的水光感。', en: 'Crystal Seal: Roll transparent crystalline finish for a wet-look glaze.' }
    ]
  },
  {
    id: 'st-6',
    season: 'spring',
    term: '谷雨',
    name: { zh: '云水谣', en: 'Ballad of Cloud and Water' },
    quote: { zh: '云与海的狂想，奏响于墙面之上。', en: 'The fantasy of clouds and oceans, playing upon the wall.' },
    desc: {
      zh: '春季的终曲，百谷滋生。狂放而富有生命力的深海蔚蓝，在闪亮纯银色云母颗粒的牵引下如洋流、如风暴般在室壁中奔涌，展现出惊心动魄的大宅气势。',
      en: 'The grand finale of spring. High-density indigo mineral plaster is dragged in massive waves, highlighted by hand-applied silver leaf fragments to evoke a majestic ocean ballad.'
    },
    materials: { zh: 'MULLANO Plaster (深海蓝) + 极细纯银色云母粉 + 手工银箔碎屑', en: 'MULLANO Plaster (Deep Sea Blue) + Silver Mica Dust + Hand-pressed Silver Flakes' },
    technique: { zh: '巨浪形扭批法、湿膜拉毛、手工银箔嵌入、高透水性保护', en: 'Gigantic wave trowelling, wet-layer scoring, hand-silvering, and high-transparency glaze lock' },
    image: '/06.webp',
    steps: [
      { zh: '深海大浪铺筑：大馒刀饱蘸 MULLANO Plaster 深蓝色泥，大弧度波浪状挥洒堆筑。', en: 'Ocean Waves: Trowel deep blue mineral slurry in giant, expressive ocean-wave formations.' },
      { zh: '风暴刻线：利用长毛软质硬刷，在未干大波浪一侧拉擦出海潮细纹，强化风暴动感。', en: 'Wave Ridges: Sweep long-hair textured brushes along wave flanks to create dynamic salt-water details.' },
      { zh: '晶莹点银：趁半干用气喷嘴点喷云母银屑，再用精细镊子在褶皱最深处压敷片片手工银箔。', en: 'Silver Spray: Blow silver mica dust across the surface, using tweezers to set silver leaf in the deep crevasses.' },
      { zh: '抗碱防剥封：涂布双组份极干高透罩面防护，将银粒和厚泥完全锁定在墙体之中。', en: 'Heavy Duty Lock: Apply dual-component sealing coat to guarantee mineral stability.' }
    ]
  },

  // 夏季 (Summer)
  {
    id: 'st-7',
    season: 'summer',
    term: '立夏',
    name: { zh: '初夏光', en: 'Early Summer Light' },
    quote: { zh: '撷取第一缕初夏的阳光，让家永远走在季节前面。', en: 'Capture the first ray of early summer sun, keeping the home ahead of the season.' },
    desc: {
      zh: '初夏温风，绿满群山。选用夺目的朝霞暖橙与金粉母，通过丝滑的 Suede 绒面质感套染，如同清晨阳光大面积泼洒向卧室，灿烂温暖、充满希望。',
      en: 'An energetic blend of warm apricot orange and liquid gold pearl. Uses MULLANO Suede to cast a velvet, sunny glow that floods any space with endless vitality.'
    },
    materials: { zh: 'MULLANO Suede (阳光橙) + 沙金金属珍珠漆', en: 'MULLANO Suede (Warm Orange) + Golden Pearl glaze' },
    technique: { zh: '长毛滚筒厚滚渐变、天然海绵大面积螺旋晕染、暗光精刮', en: 'Roller gradient coat, large spiral blending via natural sea sponge, and matte tightening' },
    image: '/07.webp',
    steps: [
      { zh: '极亮中涂：辊涂高饱满暖黄色中涂底，为暖橙表层提供极其璀璨的折射背景。', en: 'Bright Base: Apply solid canary-yellow midcoat to offer glowing background reflectiveness.' },
      { zh: '橙红叠刷：用艺术刷以十字无规则笔触将暖橙色 Suede 满铺，制造饱满流云。', en: 'Orange Sweep: Apply sunset-orange Suede in criss-cross overlapping strokes for a dreamy sky look.' },
      { zh: '金晖掠染：海藻棉略蘸沙金珍珠釉，采用轻拍和揉圆手法，在隆起处擦涂金晖。', en: 'Gold Sponge: Dab warm gold glaze on high-relief points using a sea sponge.' },
      { zh: '超哑抗污：辊涂进口哑光封底保护，隔绝磨损，保留如粉末般阳光触感。', en: 'Velvet Seal: Protect with advanced stain-shield coating, preserving the dusty sunlit warmth.' }
    ]
  },
  {
    id: 'st-8',
    season: 'summer',
    term: '小满',
    name: { zh: '绛玉沉', en: 'Crimson Jade Sinking' },
    quote: { zh: '红玉入夜，其华自彰。', en: 'Red jade sinks into the night, its beauty naturally manifest.' },
    desc: {
      zh: '红玉沉香，夜色渐深。选用高贵的深红宝石色 MULLANO Plaster，在温润厚实的磨砂背景下，打磨出如古代宫廷玉器般的暗红色油亮光泽。',
      en: 'Red gemstone glowing in pitch black. Features a deep ruby red MULLANO Plaster, dry-burnished to achieve the oily, luxurious semi-translucency of aged imperial jade.'
    },
    materials: { zh: 'MULLANO Plaster (深绛红) + 玛瑙红微晶蜡', en: 'MULLANO Plaster (Deep Ruby) + Onyx Wax Seal' },
    technique: { zh: '意式双铲高压平推、反复揉磨生热使结晶玉化、手工蜂蜡压光', en: 'Dual-spatula high-pressure compacting, rapid friction-buffing for stone crystallization, and wax finish' },
    image: '/08.webp',
    steps: [
      { zh: '绛红厚批：选用大颗粒大理石粉配方的深绛红 Plaster 批涂两层，压实基层。', en: 'Crimson Base: Trowel two layers of coarse marble-dust crimson plaster.' },
      { zh: '精细研磨：待九成干，使用800目和1500目细砂纸对高低起伏进行精细打平磨光。', en: 'Precision Sanding: At 90% dryness, hand-sand surface using progressive fine grits.' },
      { zh: '高温高压玉化：手持钢铲呈30度角，施以全身重力在墙面高频快速揉刮，利用摩擦力实现矿物玉化。', en: 'Friction Polishing: Hold steel blade at 30 degrees and swipe rapidly to burnish marble quartz into glassy shine.' },
      { zh: '微晶红蜡锁色：纯手工揉抹含有红玛瑙晶粒的天然蜂蜡，使色彩深邃有油脂光泽。', en: 'Red Wax Buffing: Buff on special agate-dust beeswax to preserve rich depth.' }
    ]
  },
  {
    id: 'st-9',
    season: 'summer',
    term: '芒种',
    name: { zh: '大地陶', en: 'Earthen Terracotta' },
    quote: { zh: '时间的耕耘，在墙上结出陶土般的温暖。', en: 'Cultivation of time, yielding a clay-like warmth on the wall.' },
    desc: {
      zh: '芒种插秧，汗洒热土。选用粗犷而富含天然凝灰岩火山沙的雅典娜真石，模拟陶罐烧制过程中的粗粝感，温暖、厚实而饱含生命对大地的尊崇。',
      en: 'A gorgeous rust terracotta texture. Aitena Stone enriched with volcanic sands replicates raw sun-baked clay, generating an organic thermal feel in minimalistic villas.'
    },
    materials: { zh: 'MULLANO Aitena Stone (暖陶色) + 细烧陶粉末', en: 'MULLANO Aitena Stone (Terracotta) + Fine Ceramic Dust' },
    technique: { zh: '横刮拖线、尼龙丝刷大面积揉糙、不规整抛刮', en: 'Horizontal dragging, nylon brush textured rubbing, and uneven trowel-flattening' },
    image: '/09.webp',
    steps: [
      { zh: '陶土粗刷：批涂粗质感雅典娜真石，使用钢齿铲横向无规则拖拉，形成天然粗沙纹。', en: 'Clay Trowel: Apply coarse Aitena Stone, dragging steel-tooth spatula horizontally to define sedimentary lines.' },
      { zh: '刷毛戳刺：趁湿使用高强韧尼龙硬刷在拉线空缺处轻轻戳击，形成斑驳的小多孔蜂窝。', en: 'Pitting: Tap hard nylon brushes onto the wet plaster to generate volcanic micro-pockets.' },
      { zh: '馒刀平压：稍收水后，用塑胶抹刀将隆起的高峰抹平压实，呈现高处平滑、深处斑驳的古城墙质地。', en: 'Trowel Leveling: Lightly flatten peak points with plastic trowel, leaving deep cells intact.' },
      { zh: '多重锁砂：双层涂刷无高光固砂防护液，防止掉砂起灰，锁住泥土芳香。', en: 'Strata Lock: Apply non-reflective binding coat twice to secure quartz grit.' }
    ]
  },
  {
    id: 'st-10',
    season: 'summer',
    term: '夏至',
    name: { zh: '白永昼', en: 'Eternal Day' },
    quote: { zh: '采撷最长的日光，藏于室壁。', en: 'Harvest the longest sunlight, storing it inside the room walls.' },
    desc: {
      zh: '夏至白昼，璀璨不息。高浓度香槟金珠光与象牙白 MULLANO Milan Velvet 丝绸漆精妙融合，采用大弧度扇面波光技法，最大程度折射自然光，室内全天熠熠生辉。',
      en: 'Maximum sunlight captured in silk. Ivory velvet and gold mica flakes merge, trowelled in large circular fans to capture and amplify natural lighting.'
    },
    materials: { zh: 'MULLANO Milan Velvet (香槟金色/象牙白)', en: 'MULLANO Milan Velvet (Champagne Gold & Soft Ivory)' },
    technique: { zh: '圆刷弧形拖扫、双不锈钢抹刀同步收光、边缘无缝过渡', en: 'Circular fan scrubbing, synchronous steel trowel收光, and seamless edge blending' },
    image: '/10.webp',
    steps: [
      { zh: '亮白打底：全满批涂象牙白艺术中涂底漆，打磨光滑。', en: 'White Base: Apply a seamless ivory-white basecoat and hand-sand flat.' },
      { zh: '丝织批布：辊涂第一层米兰天鹅绒，使白色微粒如缎布般平铺。', en: 'Velvet Base: Apply first thin coat of Milan Velvet, aligning pearlescent fibers.' },
      { zh: '巨浪扇光：第二遍时，采用直径30公分的圆形艺术毛刷，沿太极弧线交错推扫，使其反光定向。', en: 'Giant Swirls: Sweep a 30cm circular wool brush in crescent patterns on wet second coat.' },
      { zh: '高频压亮：在反光最集中的对角线上，用刮铲轻轻收光提亮，呈现流光溢彩之效。', en: 'Light Compression: Firmly slide smooth blade across center sheen axis to lock pearlescent glory.' }
    ]
  },
  {
    id: 'st-11',
    season: 'summer',
    term: '小暑',
    name: { zh: '丹霞序', en: 'Prelude of Sunset Red' },
    quote: { zh: '落霞与晚空，漫天红叶丹霞，拉开盛夏的序幕。', en: 'Evening glow and mountains, crimson sunset clouds prelude the midsummer.' },
    desc: {
      zh: '温风至，炎光始。将壮丽的丹霞地貌搬进客厅，使用红、黄、红褐三色矿物大理石泥，在湿润状态下交融馒批，仿佛晚风拂过天空，拉开热烈盛夏的壮丽序幕。',
      en: 'Breathtaking cinnabar and ochre cloud formations. Features multiple hues of wet mineral plaster swirled organically to evoke dramatic desert sunset scenery.'
    },
    materials: { zh: 'MULLANO Gesso (铁红色) + 赭石、姜黄渐变矿物浆', en: 'MULLANO Gesso (Cinnabar) + Ochre and Saffron Slurries' },
    technique: { zh: '三色“湿碰湿”馒刀交汇糅合、微拉风波纹、双组份高抗磨晶石封釉', en: 'Three-color wet-on-wet trowel merging, fine wind ripples, and crystalline sealing' },
    image: '/11.webp',
    steps: [
      { zh: '暖黄平铺底：滚涂高附着力姜黄色底色，奠定温暖饱满的夕阳折射背景。', en: 'Yellow Base: Roll an even coat of saffron yellow primer for deep sunset glow.' },
      { zh: '三色并置：将朱红、赭石、熟褐三色 Gesso 泥并排放在抹刀上，一铲批刮出斑驳晕染。', en: 'Tri-Color Blend: Load cinnabar, ochre, and warm brown clay side-by-side on one trowel, applying in single sweeps.' },
      { zh: '湿碰湿拉丝：趁泥浆湿润，运用专配软刮以高频正弦曲线轻轻抚过，形成波浪云线。', en: 'Wet Combing: Gently draw a soft squeegee along the wet borders to create fluid wind curves.' },
      { zh: '水晶固封：喷刷两层耐磨水晶罩光面油，防潮耐水，将丹霞瞬间永久定格。', en: 'Crystal Glaze: Airless-spray clear crystalline lacquer to preserve the vivid sunset.' }
    ]
  },
  {
    id: 'st-12',
    season: 'summer',
    term: '大暑',
    name: { zh: '熔金石', en: 'Molten Gold' },
    quote: { zh: '以熔金般的炽烈，回应盛夏的极致。', en: 'With molten gold intensity, responding to mid-summer\'s extreme.' },
    desc: {
      zh: '大暑极热，如炉火纯青。粗矿的浅灰大理石厚泥底面开裂出深不见底的微小裂谷，纯手工贴嵌 24K 璀璨金箔碎屑，如熔岩在岩隙深处静默沸腾，高调奢华。',
      en: 'Molten golden magma glowing in deep rocky rifts. Recreated with structural Plaster, thermal-shocked for rugged crackles, and meticulously hand-gilded with premium gold flakes.'
    },
    materials: { zh: 'MULLANO Plaster + 24K 手工贴金箔碎 + 水性金箔胶', en: 'MULLANO Plaster + 24K Hand-applied Gold Leaf Fragments + Gilder\'s Glue' },
    technique: { zh: '特种脱水裂痕工艺、手工极细点金、大理石纳米保护', en: 'Controlled cracking, manual precision gilding, and nano protective sealing' },
    image: '/12.webp',
    steps: [
      { zh: '岩磐筑基：用不锈钢抹刀在墙面粗批 MULLANO Plaster 岩石泥，厚度达3mm，提供饱满立体感。', en: 'Rock Foundation: Trowel a thick 3mm base of MULLANO Plaster for robust mineral mass.' },
      { zh: '熔岩干缩：涂刷急干剂，通过烘灯多点炙烤，促使其产生粗犷张扬、深及见底的爆裂口。', en: 'Volcanic Fissures: Apply dehydrator and cure with warm air to trigger bold magma-like splits.' },
      { zh: '描胶贴金：将水性金箔胶水细致注入裂口内侧，半干时用羊毛笔将金碎屑扫入缝中压实。', en: 'Gilding Crevices: Carefully brush gold glue inside rifts, then sweep real gold leaf flakes inside.' },
      { zh: '锁色亮透：涂刷两遍超亮高透防酸保护釉，牢牢封住金箔，防止岁月氧化发黑。', en: 'Luster Shield: Apply double protective coats to secure the gilded volcanic cracks.' }
    ]
  },

  // 秋季 (Autumn)
  {
    id: 'st-13',
    season: 'autumn',
    term: '立秋',
    name: { zh: '一叶秋', en: 'A Single Autumn Leaf' },
    quote: { zh: '倾听墙面，那是时光与落叶的密语。', en: 'Listen to the wall, those are the whispers of time and falling leaves.' },
    desc: {
      zh: '立秋叶落，时光驻足。雅晶石的质感磨砂质地与复古古铜色完美交融，用长硬鬃刷在未干墙面划拉出秋叶叶脉般的细腻肌理，古朴悠远，富含历史感。',
      en: 'Replicates wind-eroded sandstones in late autumn. Crafted with MULLANO Yajingshi, gently combed with long bristles to represent the fine fibers of falling leaves and rustic dunes.'
    },
    materials: { zh: 'MULLANO Yajingshi (雅晶石) + 古铜色艺术釉料', en: 'MULLANO Yajingshi + Copper-gold Metallic Glaze' },
    technique: { zh: '高负荷石英沙批刮、马尾硬刷单向拉丝、擦染哑光色浆', en: 'Quartz sand plastering, single-direction horsehair combing, and matte ochre wash' },
    image: '/13.webp',
    steps: [
      { zh: '磨砂石英打底：平批 MULLANO Yajingshi，使内含的石英晶沙颗粒紧密附着。', en: 'Quartz Sand Base: Trowel Yajingshi firmly to build a fine granular background.' },
      { zh: '落叶脉络刮刻：手持高弹力马尾艺术梳，由上自下轻拉出连绵不断的直线条。', en: 'Vein Combing: Drag vertical combs downward smoothly to shape natural leafy fibers.' },
      { zh: '平整表层：用不锈钢抹刀平压高起的颗粒，使表面形成极其美妙的“见光不见影”斑驳美。', en: 'Spatula Smoothing: Flatten peaks gently with clean steel trowel for satin smooth finish.' },
      { zh: '古铜擦染：使用专用擦色布将古铜珍珠漆作打圈揉擦，多余处擦除，强化凹凸色彩。', en: 'Bronze Rubbing: Buff on copper glaze and gently wipe back to highlight deep combing groves.' }
    ]
  },
  {
    id: 'st-14',
    season: 'autumn',
    term: '处暑',
    name: { zh: '暑色尽', en: 'Heat Dissipates' },
    quote: { zh: '暑气散作天上褐，余温染成地下橘。', en: 'Heat dissolves into brown in the heavens, remaining warmth stains orange on the earth.' },
    desc: {
      zh: '暑气渐消，天高气爽。采用铁锈红与温暖陶土橘进行精妙的水洗渐变批叠，由浅灰慢慢晕染至丰盈的大地橘红色，展现空间冷暖交织的至臻张力。',
      en: 'A beautiful earthy gradient representing late summer cooling. Deep soot grey and warm pumpkin-orange mineral stucco are layered and washed into a spectacular organic composition.'
    },
    materials: { zh: 'MULLANO Gesso (铁锈红色) + 熟褐、橙黄矿物釉', en: 'MULLANO Gesso (Rust) + Burnt Sienna and Ochre Glazes' },
    technique: { zh: '多重天然海藻绵叠套晕染、大弧慢扫、双组份超哑防护', en: 'Multi-layer sea sponge rubbing, large brush sweeping, and ultra-matte protective glaze' },
    image: '/14.webp',
    steps: [
      { zh: '底涂暖橘：辊涂陶土橘中涂，奠定饱满温和的大地色彩。', en: 'Warm Base: Apply deep terracotta orange basecoat for earth-tone heat.' },
      { zh: '红褐批层：批刮一层 MULLANO Gesso 铁锈红泥，保留细微的馒刀起伏印记。', en: 'Rust Trowelling: Sweep a coat of MULLANO Gesso rust red stucco, leaving subtle trowel marks.' },
      { zh: '海藻绵叠套晕色：手持海藻绵蘸取黑褐色，轻拍于墙面高处和缝隙间，晕染出“天上褐”。', en: 'Sponge Detailing: Use a sea sponge to dab soot brown glaze around borders, blending into the orange base.' },
      { zh: '保护固化：施加双组份超低透光哑光面漆，抵抗污渍同时锁住渐变颜色。', en: 'Matte Curing: Apply heavy duty matte glaze to bind pigment and ensure long-term beauty.' }
    ]
  },
  {
    id: 'st-15',
    season: 'autumn',
    term: '白露',
    name: { zh: '古鎏金', en: 'Ancient Gilt Gold' },
    quote: { zh: '白露为霜，为时光镀上古老的鎏金。', en: 'White dew becomes frost, gilding time with ancient gold.' },
    desc: {
      zh: '白露秋野，凝光流金。在天然风化沉积大理石粗矿质地上，由高级画师扫拂含有真金成分的流金釉料，让墙面泛起斑驳的金属岁月微光，古朴、显赫、华贵至极。',
      en: 'Ancient gilded stone textures. Features coarse MULLANO Plaster, hand-buffed with real metallic gold glazes that settle into deep carvings, giving a rich historical ambiance.'
    },
    materials: { zh: 'MULLANO Plaster (浅香槟) + 手工流金艺术釉料 + 24K 璨金金箔', en: 'MULLANO Plaster (Champagne) + Venetian Gold Glaze + 24K Gold Leaves' },
    technique: { zh: '馒刀多层揉批、极细毛刷半干扫描、手工金页贴嵌、蜡物封存', en: 'Trowel rubbing, horsehair dry-brushing, gold-leaf embedding, and beeswax burnishing' },
    image: '/15.webp',
    steps: [
      { zh: '香槟打底：将含有大颗粒矿砂的香槟色 Plaster 均匀批刮，展现沙石断崖质感。', en: 'Champagne Base: Apply coarse-grained Plaster, creating limestone cliff structures.' },
      { zh: '精细扫扫金釉：待八成干，使用宽头羊毛刷饱蘸古金釉料，进行大面积半干擦扫，凸显微起伏。', en: 'Gold Glaze Combing: Brush rich gold glazes over the textured edges for a metallic shine.' },
      { zh: '描点碎金箔：由手工匠人在中缝及深凹槽处镶嵌细微金箔碎纸。', en: 'Gilding Highlights: Place tiny gold leaf fragments inside deep fissures.' },
      { zh: '手工蜡晶封：揉抹高品质天然精蜡，高频打磨抛光，形成莹润保护层。', en: 'Wax Polish: Buff with natural carnauba wax to secure the golden fragments.' }
    ]
  },
  {
    id: 'st-16',
    season: 'autumn',
    term: '秋分',
    name: { zh: '秋之汐', en: 'Autumn Tides' },
    quote: { zh: '光与影在此刻平衡，如潮汐在墙面涨落。', en: 'Light and shadow balance at this moment, like tides rising and falling on the wall.' },
    desc: {
      zh: '平分秋色，昼夜平分。流动饱满的焦糖色与香槟金 MULLANO Milan Velvet 丝绸漆配合，沿对角线扫抹出如大河浪潮般澎湃的沙丘波光，金沙流动，华彩流溢。',
      en: 'Warm sand waves in late autumn. Rich caramel orange velvet and gold-sand mica are swept horizontally to evoke massive shifting desert dunes under the harvest moon.'
    },
    materials: { zh: 'MULLANO Milan Velvet (焦糖色) + 流沙金金属珍珠漆', en: 'MULLANO Milan Velvet (Caramel) + Gold sand glaze' },
    technique: { zh: '中毛辊筒打底、专用齿耙波浪式推扫、不锈钢抹面抛亮', en: 'Short roller foundation, specialized combing wave scraping, and steel trowel polishing' },
    image: '/16.webp',
    steps: [
      { zh: '同色中涂：辊两层焦糖橙色艺术中涂漆，完全覆盖底墙。', en: 'Caramel Base: Apply matching caramel-orange midcoat to guarantee smooth background.' },
      { zh: '丝绒上料：辊两遍高厚度 Suede 丝绸层，确保漆面饱满。', en: 'Velvet Base: Coat two plump layers of Suede paint to allow deep texture.' },
      { zh: '横扫秋潮：手持太极刷，以优雅的水平波浪横扫，激活定向亮片折射。', en: 'Wave Combing: Use a sweeping brush in continuous wave curves to align pearlescent micas.' },
      { zh: '刀面收光：待稍干用钢抹刀大面积推光，使高光处泛起金灿波澜。', en: 'Steel Burnishing: Lightly sweep wide steel blade across surface for maximum silky reflection.' }
    ]
  },
  {
    id: 'st-17',
    season: 'autumn',
    term: '寒露',
    name: { zh: '秋意浓', en: 'Deep Autumn' },
    quote: { zh: '当秋意渐寒，大地在墙上写下更深的诗行。', en: 'As autumn chills, the earth writes deeper lines of poetry on the wall.' },
    desc: {
      zh: '寒气逼人，落叶归根。大理石沉积岩质地，以饱满厚实的熟褐、红赭与深咖啡色 MULLANO Aitena Stone 矿泥层层堆叠，勾勒出如风化沉积岩断崖的深邃，苍劲孤绝。',
      en: 'Rugged sedimentary rock strata. Rich volcanic sand stone in shades of soot black, warm brown, and raw umber, layered aggressively to bring great scale and nature to major villa projects.'
    },
    materials: { zh: 'MULLANO Aitena Stone (红赭/咖啡色) + 火山浮石细沙', en: 'MULLANO Aitena Stone (Umber/Espresso) + Volcanic Pumice Sands' },
    technique: { zh: '双手对开抹刮、厚浆拉缝、干扫熟褐矿物色浆', en: 'Symmetric double trowel layering, heavy-slurry scoring, and dry burnt sienna brushing' },
    image: '/17.webp',
    steps: [
      { zh: '灰底打底：批刮第一层深灰色微水泥，打下扎实基底。', en: 'Sub-Cement Coat: Spread slate gray microcement basecoat for structural stability.' },
      { zh: '赭红堆叠：交错批批赭红、熟褐 Aitena Stone，厚度不一，形成天然石磐层叠。', en: 'Strata Layering: Trowel amber red and soot brown Aitena Stone in rich, jagged bands.' },
      { zh: '水平切缝：在半湿涂料上用长硬针刻划出横向断层，用软扫帚扫清毛边。', en: 'Fissure Scoring: Pull hard pins horizontally to score rock fissures, brushing away debris.' },
      { zh: '保护固封：涂刷高耐磨哑光保护，使矿泥牢牢稳定，永不掉粉。', en: 'Heavy Seal: Roll top-grade transparent matte sealant to secure thick earth layers.' }
    ]
  },
  {
    id: 'st-18',
    season: 'autumn',
    term: '霜降',
    name: { zh: '暮霜融', en: 'Plum Frost Melt' },
    quote: { zh: '经霜的暮色，沉淀为墙上的金属诗篇。', en: 'Evening sky tested by frost, condensing into metallic verses on the wall.' },
    desc: {
      zh: '霜降叶红，露水凝冰。深紫罗兰与冷灰的双色微天鹅绒 MULLANO Suede 交叠，配合手工细扫纯银金属釉料，展现清晨露霜消融在古铜叶片上的静穆诗意。',
      en: 'A gorgeous dusty plum and cool lavender gray velvet finish. Pearlescent silver mineral glazes are lightly rubbed to capture frost melting across autumn leaves.'
    },
    materials: { zh: 'MULLANO Suede (深紫罗兰/钛灰) + 银光金属釉', en: 'MULLANO Suede (Plum/Titanium Gray) + Crystalline Silver Glaze' },
    technique: { zh: '双手太极双色揉滚、海绵微压擦银、超哑固封保护', en: 'Dual-handed dual-color buffing, sea-sponge silver wiping, and anti-reflective sealing' },
    image: '/18.webp',
    steps: [
      { zh: '同色中层：辊涂钛灰色中层漆，展现饱满纯正色彩背景。', en: 'Lavender Base: Apply deep titanium gray midcoat to serve as elegant background.' },
      { zh: '双色叠滚：两名匠人交替滚涂深紫色与冷灰色 Suede，湿碰湿揉和，界线朦胧。', en: 'Dual-Color Fusion: Blend deep plum and titanium gray Suede wet-on-wet via synchronised roller work.' },
      { zh: '露霜擦银：用微干海绵略沾银色珍珠釉，在交界处作大片横扫，如晨霜轻凝。', en: 'Frost Highlights: Dab silver glaze across the borders with sea sponge, simulating morning frost.' },
      { zh: '哑光固色：喷涂高耐候超哑面漆，锁死色彩，隔绝划痕。', en: 'Matte Protection: Airless spray ultimate matte shield to protect the delicate plum silk.' }
    ]
  },

  // 冬季 (Winter)
  {
    id: 'st-19',
    season: 'winter',
    term: '立冬',
    name: { zh: '万物藏', en: 'All Things Hiding' },
    quote: { zh: '色彩与时光，一同在此安然栖居。', en: 'Color and time safely nestle here together.' },
    desc: {
      zh: '立冬始寒，万物敛藏。极致静谧、极其雅致的浅灰色 MULLANO Microcement 微水泥，大面积无缝批敷。零杂质的极简质感，传达出沉静、纯正与绝对安心的包覆感。',
      en: 'The pure aesthetic of winter quiet. High-performance MULLANO Microcement in soft alabaster grey is seamlessly trowelled, offering a clean, calm, and protective haven.'
    },
    materials: { zh: 'MULLANO Microcement (灰白极简砂) + 耐候抗划水晶底封', en: 'MULLANO Microcement (Minimalist Gray) + Anti-scratch Crystal Wax' },
    technique: { zh: '意式双钢刮铲细刮平扫、超高频紧密压实、硬膜高亮抛光', en: 'Italian stainless steel fine scraping, high-pressure burnishing, and wax buffing' },
    image: '/19.webp',
    steps: [
      { zh: '底涂加固：刷涂双组份环氧耐磨底漆，加固基层并防潮。', en: 'Epoxy Primer: Roll premium dual-component epoxy primer to stabilize the wall.' },
      { zh: '微泥平批：大馒刀平刮第一层 MULLANO 矿物微水泥，使其平整，阴干24小时。', en: 'Microcement Coat 1: Spread the first layer of MULLANO microcement mineral paste.' },
      { zh: '精细批压：批涂第二层，稍干后持钢刀呈极低弧度高频压抹，迫使石粉晶体完全闭合。', en: 'Ultra-Burnish: Apply fine second layer, then tightly compress with high steel pressure.' },
      { zh: '天然面蜡封：大面积均匀擦涂德国高硬度天然蜂蜡，手工擦光，质感温润如脂。', en: 'Wax Finish: Rub protective carnauba wax to secure water-resistance and a smooth sheen.' }
    ]
  },
  {
    id: 'st-20',
    season: 'winter',
    term: '小雪',
    name: { zh: '远山雪', en: 'Snow on Distant Peaks' },
    quote: { zh: '雪落远山，凝成一堵青蓝色的寂静。', en: 'Snow falls on distant peaks, condensing into a wall of blue-green silence.' },
    desc: {
      zh: '雪花初飘，远山寂静。以幽深的靛蓝和普鲁士蓝大理石灰泥 MULLANO Gesso 大开大合刮抹，并在表面吹喷含有白云母的白闪微颗粒，如小雪轻凝山岭。',
      en: 'A poetic contrast of midnight blue and snowy white dust. Dark indigo plaster is swirled dramatically, while fine white mica granules are blown to mimic winter snowflakes.'
    },
    materials: { zh: 'MULLANO Gesso (深普鲁士蓝) + 细亮闪白云母砂颗', en: 'MULLANO Gesso (Midnight Blue) + Sparkling White Mica Flakes' },
    technique: { zh: '巨幅起伏批刮、半干吹喷工艺、海绵球边缘轻柔过渡', en: 'Large textured swiping, pneumatic mica dust spraying, and sponge softening' },
    image: '/20.webp',
    steps: [
      { zh: '幽蓝平底：选用深普鲁士蓝中涂，高压喷涂两层，确保没有杂色。', en: 'Indigo Primer: Airless-spray midnight blue basecoat twice to cover any wall stains.' },
      { zh: '靛蓝大笔批刮：馒刀饱蘸靛蓝色 Gesso 泥浆，进行大起伏批涂，制造寒风刮过的山岳感。', en: 'Expressive Swipes: Sweep midnight blue Gesso in majestic slopes to mimic cold peaks.' },
      { zh: '雪花喷涂：趁漆膜半干，利用专用气压喷枪将雪白云母颗粒抛洒喷射于高耸肌理，如落雪轻附。', en: 'Snow Flakes: Blow fine sparkling white mica across wet ridges using a hand pressure nozzle.' },
      { zh: '水晶固封：涂敷超哑高渗透水性清漆，锁定雪屑不脱落。', en: 'Clear Glaze: Apply ultra-matte protective glaze to lock in the fragile snowflake details.' }
    ]
  },
  {
    id: 'st-21',
    season: 'winter',
    term: '冬至',
    name: { zh: '守夜光', en: 'Guardian of Night' },
    quote: { zh: '在最长的夜里，墙面是守护你的最暖光源。', en: 'In the longest night, the wall is the warmest source of light guarding you.' },
    desc: {
      zh: '极夜已至，一室温情。在纯黑高密矿石沙雅晶石背景上，以大面积气枪点喷玫瑰金与沙金闪烁釉微粒，当射灯亮起，整面墙如浩瀚星河般温存闪耀。',
      en: 'A celestial black quartz background decorated with warm starry gold dust. Features deep charcoal Yajingshi, mist-sprayed with metallic gold droplets that sparkle wonderfully.'
    },
    materials: { zh: 'MULLANO Yajingshi (纯墨黑) + 璨金、玫瑰金双色金属釉', en: 'MULLANO Yajingshi (Charcoal Black) + Rose Gold & Saffron Gold Glazes' },
    technique: { zh: '细沙泥揉压平抹、多点气喷枪扫闪金、羊毛轮轻扫抛砂', en: 'Fine quartz compacting, dual-color metallic mist spraying, and wool-wheel buffing' },
    image: '/21.webp',
    steps: [
      { zh: '黑晶铺涂：选用墨黑色雅晶石，全铲揉刮批抹，形成微细孔洞的深黑夜空背景。', en: 'Dark Night Base: Trowel deep black Yajingshi for a subtle porous black-sky texture.' },
      { zh: '压平抛亮：用不锈钢抹刀平推，使粗砂表面平整亮洁，颗粒凸显。', en: 'Granular Polish: Swipe clean steel trowel across the sand to level the quartz heads.' },
      { zh: '金河雾喷：采用特制喷嘴，将沙金与玫瑰金艺术珍珠釉以雾化粒子点喷到墙面，如璀璨繁星。', en: 'Galaxy Spray: Blow atomized gold and copper pearl glazes to yield microscopic stardust dots.' },
      { zh: '高硬固砂封：辊涂两遍进口环保固砂防护漆，防止掉砂，固守永恒温暖。', en: 'Grit Lock: Coat with hard-wearing binding seal to maintain a scratch-free obsidian skin.' }
    ]
  },
  {
    id: 'st-22',
    season: 'winter',
    term: '大雪',
    name: { zh: '山河寂', en: 'Quiet Mountains & Rivers' },
    quote: { zh: '以雪为墨，为家染就一幅水墨山河。', en: 'Using snow as ink, painting a wash-ink landscape for the home.' },
    desc: {
      zh: '大雪覆地，黑白极简。利用白色与钛灰色双组份微水泥交融平批，由高深画师手拿大羊毛笔在未干涂层上勾勒大写意水墨裂纹，将东方大宅的大气与神韵融进墙体。',
      en: 'A gorgeous Chinese wash-ink landscape. Alabaster white and mountain-gray microcement are blended wet-on-wet, detailed with swift charcoal veins to form a grand, tranquil scroll.'
    },
    materials: { zh: 'MULLANO Microcement (雪白) + 钛灰、炭黑水墨浆料', en: 'MULLANO Microcement (Snow White) + Soot-gray and Charcoal slurries' },
    technique: { zh: '双色湿碰湿交融平抹、写意水墨羊毛大笔泼墨划线、纳米精压玉化', en: 'Dual-color wet-on-wet blending, freehand wash-ink ink-painting, and high steel polishing' },
    image: '/22.webp',
    steps: [
      { zh: '雪白铺天：馒刀平批第一遍 MULLANO 纯白色微水泥，阴干。', en: 'White Sky: Trowel the first layer of pure white mineral microcement and dry.' },
      { zh: '水墨渐变：批涂第二层白色湿浆，同时用抹刀揉入少许钛灰色微泥，形成远山浮云渐变。', en: 'Wash Blending: Apply second wet layer, blending titanium gray micro-slurry for fading cloud shapes.' },
      { zh: '大笔划山河：由匠人手执大号中国毛笔蘸取高浓炭黑色浆，沿山川走势划抹出写意枯笔黑纹。', en: 'Brush Strokes: Sweep large paintbrushes loaded with charcoal mineral black across wet areas for bold ink veins.' },
      { zh: '高强蜡封：待完全干透，大面积刷涂多重防指纹渗透水晶蜡，展现温雅如纸的书香质感。', en: 'Wax Shellac: Buff on premium protective sealant to preserve the gorgeous wash-ink texture.' }
    ]
  },
  {
    id: 'st-23',
    season: 'winter',
    term: '小寒',
    name: { zh: '寒凝色', en: 'Frozen Deep Blue' },
    quote: { zh: '为空间注入一种冷静的秩序，与深邃的静谧。', en: 'Injecting a cool order and deep serenity into the space.' },
    desc: {
      zh: '寒梅暗香，冷凝冬深。深邃高贵的幽深墨蓝与铁灰色 MULLANO Gesso 艺术灰泥大块交叠，配合精细的纵向多层次手工拉丝工艺，为奢华大宅空间注入绝对的理性与静穆之美。',
      en: 'A deep metallic royal blue paired with ice stone textures. Highly structured and combed vertically to introduce a cold, intellectual order and deep serenity to master halls.'
    },
    materials: { zh: 'MULLANO Gesso (冷钛灰) + 靛青蓝珠光艺术釉', en: 'MULLANO Gesso (Cool Gray) + Deep Cobalt Blue Metallic Glaze' },
    technique: { zh: '不锈钢抹刀横平竖直高压批刮、精细拉丝梳双向划纹、蜡晶收亮', en: 'Rigid trowel straight-line compacting, vertical combing, and wax burnishing' },
    image: '/23.webp',
    steps: [
      { zh: '冷灰找平底：大抹刀平批冷钛灰色 Gesso 泥打底，打磨到绝对平整。', en: 'Cool Gray: Trowel titanium gray Gesso stucco as clean, flat background.' },
      { zh: '蓝釉拉线：薄批一层靛青蓝珠光釉，趁其湿润用高密度胶梳，自上而下顺直垂直刮拉。', en: 'Cobalt Combing: Spread cobalt blue pearlescent glaze, combing vertically from top to bottom with precision.' },
      { zh: '轻压边缘：用平铲抹刀微力平抚拉起多余的泥毛，使肌理既有深度又光滑舒适。', en: 'Spatula Lightening: Gently slide steel blade to flatten combing ridges for a smooth velvet skin.' },
      { zh: '纳米保护封：满刷防磨水晶面漆，锁死蓝色微光，抗压抗划。', en: 'Anti-Wear Lock: Seal with transparent varnish for heavy-duty protection.' }
    ]
  },
  {
    id: 'st-24',
    season: 'winter',
    term: '大寒',
    name: { zh: '艺境泊', en: 'Deep Ocean Harbor' },
    quote: { zh: '将恣意流淌的蓝绿，柏成一墙静谧的诗篇。', en: 'Mooring arbitrary blue-greens into a quiet wall of poetry.' },
    desc: {
      zh: '岁暮大寒，寒极生温。深孔雀绿、祖母绿与宝石蓝的米兰天鹅绒 MULLANO Milan Velvet 在双向羊毛毛扫的牵引下灵动揉和，如北欧深海峡湾里静默流动、永不停息的浪漫潮汐，大美无言。',
      en: 'The ultimate winter masterpiece. Shimmering peacock green, emerald, and ocean blue velvet are layered and hand-brushed into seamless waves to resemble arctic ocean currents.'
    },
    materials: { zh: 'MULLANO Milan Velvet (孔雀绿/深海蓝) + 极地闪光金粉', en: 'MULLANO Milan Velvet (Teal & Ocean Blue) + Polar Gold Glitter Glaze' },
    technique: { zh: '多重辊涂打底、长毛圆刷双向弧形扭揉、钢刮高光压实', en: 'Multi-layer roller prep, wool brush diagonal sweeping, and steel-blade polishing' },
    image: '/24.webp',
    steps: [
      { zh: '深海底色：用大号滚筒满布孔雀绿底涂底漆，打下深蓝绿色彩底色。', en: 'Abyss Base: Roll deep emerald green primer to provide rich dark ocean depth.' },
      { zh: '双色伴批：左手持深蓝、右手持孔雀绿天鹅绒，交替刮涂，大面晕染交汇。', en: 'Teal & Blue Blend: Spread teal and royal blue velvet paint side-by-side, swirling wet-on-wet.' },
      { zh: '星辉揉光：在湿面上点喷星闪金粉，并手持宽羊毛圆刷，以八字扇形在墙面弧形打圈收光。', en: 'Swirl Polishing: Mist golden glitter across wet surface, sweeping a wide fan brush in arcs.' },
      { zh: '封蜡固色：阴干完全固化后，刷涂纳米防酸封釉面漆，大寒之境完美定型。', en: 'Luster Glaze: Apply nanotech protective seal to preserve the mesmerizing teal sea.' }
    ]
  }
];
