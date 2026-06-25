import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '../components/PageHero';

interface Project {
  id: string;
  type: string;
  title: { zh: string; en: string };
  image: string;
  fallback?: string;
}

interface ProjectsPageProps {
  lang: 'zh' | 'en';
  content: any;
  projects: Project[];
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ lang, content, projects }) => {
  const { type } = useParams<{ type: string }>();
  
  const filteredProjects = projects.filter(p => p.type === type);
  
  const categories = content.nav.projects.sub;
  const currentCategory = categories.find((c: any) => c.path.includes(type || ''));

  return (
    <div className="bg-[#F5F5F5] min-h-screen">
      <PageHero 
        title={currentCategory?.name || (lang === 'zh' ? '全部项目' : 'All Projects')}
        subtitle={lang === 'zh' ? '空间实景' : 'Space Realities'}
        image="/projects-bg.webp"
        fallbackImage="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000"
      />

      {/* Sub-nav */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-6 flex flex-wrap gap-8">
          {categories.map((cat: any) => (
            <Link
              key={cat.path}
              to={cat.path}
              className={`text-sm tracking-widest uppercase transition-colors ${
                cat.path.includes(type || '') 
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
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden mb-6">
                <img
                  src={project.image}
                  alt={project.title[lang]}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    if (project.fallback && e.currentTarget.src !== project.fallback) {
                      e.currentTarget.src = project.fallback;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-xl font-light text-gray-900 mb-2">
                    {project.title[lang]}
                  </h3>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">
                    {type === 'residential' ? (lang === 'zh' ? '豪宅别墅' : 'Residential') : 
                     type === 'commercial' ? (lang === 'zh' ? '商业空间' : 'Commercial') : 
                     (lang === 'zh' ? '酒店会所' : 'Hospitality')}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-gray-900 group-hover:border-gray-900 transition-all duration-300">
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-gray-400 font-light italic">
              {lang === 'zh' ? '更多案例正在整理中...' : 'More projects coming soon...'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
