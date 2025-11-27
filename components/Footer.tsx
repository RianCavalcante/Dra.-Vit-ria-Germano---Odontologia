import React from 'react';
import { CONTACT_INFO, NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-b border-white/10 pb-12">
           <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="font-serif text-2xl font-bold">DRA. VITÓRIA GERMANO</h2>
            <p className="text-brand-accent text-sm mt-1">CRO: {CONTACT_INFO.cro}</p>
          </div>

          <nav className="flex gap-6 flex-wrap justify-center">
            {NAV_ITEMS.map((item) => (
               <a 
                key={item.href} 
                href={item.href}
                className="text-white/80 hover:text-brand-accent transition-colors text-sm"
               >
                 {item.label}
               </a>
            ))}
          </nav>
        </div>

        <div className="text-center text-white/40 text-sm">
          <p>&copy; {new Date().getFullYear()} Dra. Vitória Germano. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;