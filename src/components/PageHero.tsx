import React from 'react';
import { motion } from 'motion/react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  fallbackImage?: string;
}

export const PageHero = ({ title, subtitle, image, fallbackImage }: PageHeroProps) => {
  return (
    <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-neutral-900">
      <div className="absolute inset-0 z-0">
        <img 
          src={image}
          className="w-full h-full object-cover opacity-100"
          alt={title}
          referrerPolicy="no-referrer"
          onError={(e) => {
            if (fallbackImage) {
              e.currentTarget.src = fallbackImage;
            }
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="relative z-10 text-center px-8 max-w-4xl mt-16">
        {subtitle && (
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white/70 text-xs md:text-sm tracking-[0.4em] uppercase font-light mb-6 block"
          >
            {subtitle}
          </motion.span>
        )}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-serif text-white tracking-[0.2em] leading-tight uppercase"
        >
          {title}
        </motion.h1>
      </div>
    </section>
  );
};
