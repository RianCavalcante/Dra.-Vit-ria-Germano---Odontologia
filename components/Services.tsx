import React from 'react';
import { Smile, ScanFace, HeartPulse, Sparkles } from 'lucide-react';
import { SERVICES } from '../constants';

const iconMap = {
  Smile: Smile,
  ScanFace: ScanFace,
  HeartPulse: HeartPulse,
  Sparkles: Sparkles
};

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-brand-primary font-serif text-4xl font-bold mb-4">Nossas Especialidades</h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Tratamentos personalizados para elevar a estética e a saúde do seu sorriso com a mais alta tecnologia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.iconName];
            return (
              <div 
                key={service.id} 
                className="group p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-brand-accent/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-default"
              >
                <div className="w-14 h-14 bg-brand-primary/5 text-brand-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                  {service.iconUrl ? (
                    <img 
                      src={service.iconUrl} 
                      alt={service.title} 
                      className="w-8 h-8 object-contain"
                    />
                  ) : (
                    <Icon size={28} strokeWidth={1.5} />
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 font-serif group-hover:text-brand-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;