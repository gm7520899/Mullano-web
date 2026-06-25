import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, CheckCircle, ArrowRight, MapPin, Phone, Mail, Building } from 'lucide-react';
import { PageHero } from '../components/PageHero';

interface AtelierPageProps {
  lang: 'zh' | 'en';
  content: any;
}

export const AtelierPage: React.FC<AtelierPageProps> = ({ lang, content }) => {
  const { sub } = useParams<{ sub: string }>();
  
  const categories = content.nav.atelier.sub;
  const currentCategory = categories.find((c: any) => c.path.includes(sub || ''));

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
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200" 
            alt="Trends" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: { zh: '极简主义', en: 'Minimalism' }, img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=600' },
          { title: { zh: '侘寂之美', en: 'Wabi-sabi' }, img: 'https://images.unsplash.com/photo-1615873968403-89e068629275?auto=format&fit=crop&q=80&w=600' },
          { title: { zh: '工业复兴', en: 'Industrial' }, img: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=600' },
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
              <img src={item.img} alt={item.title[lang]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
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
          {sub === 'trends' && renderTrends()}
          {sub === 'knowledge' && renderKnowledge()}
          {(sub === 'booking' || sub === 'investment') && renderInvestment()}
        </div>
      </div>
    </div>
  );
};
