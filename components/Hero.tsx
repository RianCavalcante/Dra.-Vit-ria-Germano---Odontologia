import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  // Static background image as requested
  const bgImage = 'https://i.postimg.cc/tR5jnd4y/Gemini-Generated-Image-b5z8qrb5z8qrb5z8.png';

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image using <img> for better LCP performance */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="Consultório Dra. Vitória Germano"
          className="w-full h-full object-cover object-[75%_center] md:object-center transition-all duration-700 ease-in-out"
          // @ts-ignore - fetchpriority is a valid attribute but not yet in all React types
          fetchpriority="high"
          loading="eager"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-[#5D2816]/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#5D2816] via-transparent to-transparent opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white mt-16">
        <div className="inline-block border border-brand-accent/50 rounded-full px-4 py-1 mb-6 backdrop-blur-sm bg-white/10">
            <span className="text-brand-accent text-sm font-semibold tracking-wider uppercase">
                Top | A Dentista do Eusébio
            </span>
        </div>
        
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Sorrisos que <br/>
          <span className="text-brand-accent italic">transformam</span> vidas
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8 font-light">
          Eleita a melhor dentista do Eusébio em 2025. Excelência em estética dental, 
          lentes de contato e reabilitação oral.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="https://wa.me/5585999999999" 
            className="bg-brand-accent hover:bg-[#c29263] text-white px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105 flex items-center gap-2"
          >
            Agendar Consulta <ArrowRight size={18} />
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;