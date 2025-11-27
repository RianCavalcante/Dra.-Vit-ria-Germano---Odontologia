import React from 'react';
import { Award, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side - Simulating the Instagram profile vibe */}
          <div className="w-full lg:w-1/2">
            <div className="relative max-w-sm mx-auto">
              <div className="relative rounded-t-[10rem] rounded-b-[2rem] overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src="https://i.postimg.cc/rpJBRMqW/Gemini-Generated-Image-fm02sbfm02sbfm02.png" 
                  alt="Dra. Vitória Germano" 
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  width="384"
                  height="500"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-8">
                  <p className="text-white font-serif text-xl italic">"Se encabule não, pode chegar!"</p>
                </div>
              </div>
              {/* Floating Badge */}
              <div className="absolute top-10 -right-4 bg-brand-accent text-white p-4 rounded-xl shadow-lg flex items-center gap-3 animate-pulse-slow">
                <Award size={32} />
                <div>
                  <p className="text-xs font-bold uppercase">Eleita</p>
                  <p className="font-bold">Melhor de 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-brand-primary font-serif text-4xl lg:text-5xl font-bold mb-6">
              Dra. Vitória Germano
            </h2>
            <p className="text-brand-secondary font-medium mb-6 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-brand-secondary"></span>
              CRO: 8038
            </p>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Com uma paixão inabalável pela odontologia estética, a Dra. Vitória Germano construiu sua carreira baseada em confiança e resultados de excelência. Seu consultório no Eusébio tornou-se referência para quem busca não apenas tratar os dentes, mas transformar a autoestima.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Especialista em harmonização do sorriso, utiliza as técnicas mais modernas de lentes de contato e resinas, sempre prezando pela naturalidade e pela saúde do paciente.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Atendimento Humanizado e Personalizado",
                "Tecnologia de Ponta em Diagnóstico",
                "Ambiente Confortável e Acolhedor",
                "Materiais de Alta Performance"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle size={20} className="text-brand-primary" />
                  {item}
                </li>
              ))}
            </ul>

            <a href="#contato" className="inline-block border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
              Conhecer o Consultório
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;