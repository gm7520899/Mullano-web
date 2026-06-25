import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Menu, X, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

type Language = 'zh' | 'en' | 'it';

interface BrandLogoProps {
  variant: 'light' | 'dark';
  textClassName?: string;
}

const BrandLogo = ({ variant, textClassName }: BrandLogoProps) => {
  const [hasError, setHasError] = useState(false);
  const src = variant === 'light' ? '/logo-light.png' : '/logo-dark.png';

  if (hasError) {
    return <span className={textClassName}>Mullano</span>;
  }

  return (
    <img
      src={src}
      alt="MULLANO"
      className="h-[58px] max-w-[350px] object-contain inline-block transition-opacity duration-300"
      onError={() => setHasError(true)}
    />
  );
};

interface NavSubItem {
  name: string;
  path: string;
}

interface NavItemProps {
  title: string;
  sub?: NavSubItem[];
  isScrolled: boolean;
  lang: Language;
}

const NavItem = ({ title, sub, isScrolled }: NavItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const topLevelPath = sub && sub.length > 0 ? sub[0].path : '#';
  
  return (
    <div 
      className="relative group py-4"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link 
        to={topLevelPath}
        className={`nav-link text-[13px] tracking-[0.15em] uppercase font-medium flex items-center space-x-1.5 hover:text-mullano-gold transition-colors cursor-pointer ${isScrolled ? 'text-mullano-black' : 'text-white'}`}
      >
        <span>{title}</span>
        {sub && <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />}
      </Link>
      {sub && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute top-full left-0 w-60 bg-[#faf8f5]/98 border border-stone-200/40 shadow-xl border-t-2 border-t-mullano-gold py-5 z-50 rounded-b-xl"
            >
              {sub.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  className="block px-8 py-3 text-[11px] tracking-[0.15em] text-stone-600 hover:text-mullano-gold hover:bg-mullano-gray/50 transition-colors uppercase font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

interface LayoutProps {
  children: React.ReactNode;
  lang: Language;
  setLang: (lang: Language) => void;
  content: any;
}

export const Layout = ({ children, lang, setLang, content }: LayoutProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isProductPage = location.pathname.startsWith('/product/');
  const hasHeroImage = !isProductPage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset scroll on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const t = content;

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Navigation */}
      <nav className={`fixed w-full z-[100] transition-all duration-700 ${isScrolled || !hasHeroImage ? 'bg-[#faf8f5]/95 backdrop-blur-md border-b border-stone-200/40 py-4' : 'py-8 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <Link 
            to="/" 
            className="relative z-10 flex items-center"
          >
            <BrandLogo 
              variant={isScrolled || !hasHeroImage ? 'dark' : 'light'} 
              textClassName={`logo cursor-pointer text-2xl font-serif tracking-[0.3em] uppercase transition-colors ${isScrolled || !hasHeroImage ? 'text-mullano-black' : 'text-white'}`}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-12">
            <Link to="/" className={`nav-link text-[13px] tracking-[0.15em] uppercase font-medium hover:text-mullano-gold transition-colors ${isScrolled || !hasHeroImage ? 'text-mullano-black' : 'text-white'}`}>
              {t.nav.home}
            </Link>
            <NavItem title={t.nav.heritage.title} sub={t.nav.heritage.sub} isScrolled={isScrolled || !hasHeroImage} lang={lang} />
            <NavItem title={t.nav.collections.title} sub={t.nav.collections.sub} isScrolled={isScrolled || !hasHeroImage} lang={lang} />
            <NavItem title={t.nav.projects.title} sub={t.nav.projects.sub} isScrolled={isScrolled || !hasHeroImage} lang={lang} />
            <NavItem title={t.nav.atelier.title} sub={t.nav.atelier.sub} isScrolled={isScrolled || !hasHeroImage} lang={lang} />
          </div>

          <div className="flex items-center space-x-8">
            <button 
              type="button"
              onClick={() => setLang(lang === 'zh' ? 'en' : lang === 'en' ? 'it' : 'zh')}
              className={`cursor-pointer relative z-10 text-[13px] tracking-[0.15em] uppercase font-medium flex items-center space-x-2 hover:text-mullano-gold transition-colors ${isScrolled || !hasHeroImage ? 'text-mullano-black' : 'text-white'}`}
            >
              <Globe className="w-4 h-4" />
              <span>{lang === 'zh' ? '中文' : lang === 'en' ? 'EN' : 'IT'}</span>
            </button>
            <button className="lg:hidden cursor-pointer" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu className={isScrolled || !hasHeroImage ? 'text-mullano-black' : 'text-white'} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 200 }}
            className="fixed inset-0 z-[110] bg-white p-10 flex flex-col overflow-y-auto"
          >
            <div className="flex justify-between items-center">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center">
                <BrandLogo 
                  variant="dark"
                  textClassName="text-2xl font-serif tracking-[0.3em] uppercase text-mullano-black"
                />
              </Link>
              <button className="p-2 -mr-2 cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>
                <X className="w-8 h-8 text-mullano-black" />
              </button>
            </div>
            <div className="mt-16 space-y-10 pb-10">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block text-3xl font-serif tracking-[0.2em] text-mullano-black">{t.nav.home}</Link>
              
              {/* Heritage */}
              <div className="space-y-6">
                <Link to={t.nav.heritage.sub[0].path} onClick={() => setIsMobileMenuOpen(false)} className="block text-2xl font-serif tracking-[0.2em] text-mullano-black border-b border-black/5 pb-4 uppercase hover:text-mullano-gold transition-colors">
                  {t.nav.heritage.title}
                </Link>
                <div className="pl-6 space-y-4">
                  {t.nav.heritage.sub.map((sub: NavSubItem) => (
                    <Link key={sub.name} to={sub.path} onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-light text-gray-400 tracking-[0.2em] uppercase hover:text-mullano-gold transition-colors">{sub.name}</Link>
                  ))}
                </div>
              </div>

              {/* Collections */}
              <div className="space-y-6">
                <Link to={t.nav.collections.sub[0].path} onClick={() => setIsMobileMenuOpen(false)} className="block text-2xl font-serif tracking-[0.2em] text-mullano-black border-b border-black/5 pb-4 uppercase hover:text-mullano-gold transition-colors">
                  {t.nav.collections.title}
                </Link>
                <div className="pl-6 space-y-4">
                  {t.nav.collections.sub.map((sub: NavSubItem) => (
                    <Link key={sub.name} to={sub.path} onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-light text-gray-400 tracking-[0.2em] uppercase hover:text-mullano-gold transition-colors">{sub.name}</Link>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div className="space-y-6">
                <Link to={t.nav.projects.sub[0].path} onClick={() => setIsMobileMenuOpen(false)} className="block text-2xl font-serif tracking-[0.2em] text-mullano-black border-b border-black/5 pb-4 uppercase hover:text-mullano-gold transition-colors">
                  {t.nav.projects.title}
                </Link>
                <div className="pl-6 space-y-4">
                  {t.nav.projects.sub.map((sub: NavSubItem) => (
                    <Link key={sub.name} to={sub.path} onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-light text-gray-400 tracking-[0.2em] uppercase hover:text-mullano-gold transition-colors">{sub.name}</Link>
                  ))}
                </div>
              </div>

              {/* Atelier / Services */}
              <div className="space-y-6">
                <Link to={t.nav.atelier.sub[0].path} onClick={() => setIsMobileMenuOpen(false)} className="block text-2xl font-serif tracking-[0.2em] text-mullano-black border-b border-black/5 pb-4 uppercase hover:text-mullano-gold transition-colors">
                  {t.nav.atelier.title}
                </Link>
                <div className="pl-6 space-y-4">
                  {t.nav.atelier.sub.map((sub: NavSubItem) => (
                    <Link key={sub.name} to={sub.path} onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-light text-gray-400 tracking-[0.2em] uppercase hover:text-mullano-gold transition-colors">{sub.name}</Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-mullano-black text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
            <div className="lg:col-span-1">
              <div className="mb-10">
                <Link to="/" className="flex items-center">
                  <BrandLogo 
                    variant="light"
                    textClassName="text-3xl font-serif tracking-[0.3em] uppercase text-white"
                  />
                </Link>
              </div>
              <p className="text-[11px] text-white/40 leading-relaxed tracking-[0.2em] uppercase font-light">
                {t.footer.desc}
              </p>
            </div>
            {t.footer.sections.map((section: any) => (
              <div key={section.title}>
                <h4 className="text-[11px] tracking-[0.3em] uppercase mb-10 text-mullano-gold font-semibold">{section.title}</h4>
                <ul className="space-y-5 text-[11px] text-white/50 font-light tracking-[0.2em] uppercase">
                  {section.items.map((item: string) => (
                    <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            <div className="text-[10px] tracking-[0.2em] text-white/30 uppercase font-light">
              {t.footer.copyright}
            </div>
            <div className="flex space-x-10 text-[10px] tracking-[0.2em] text-white/30 uppercase font-light">
              {t.footer.bottom.map((item: string) => (
                <a key={item} href="#" className="hover:text-white transition-colors">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
