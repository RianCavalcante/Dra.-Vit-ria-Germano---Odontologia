import React from 'react';
import { MapPin, Phone, Clock, Instagram, Send } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
          
          {/* Contact Details */}
          <div className="p-10 lg:p-16 flex flex-col justify-center">
            <h2 className="text-brand-primary font-serif text-4xl font-bold mb-8">
              Vamos agendar sua avaliação?
            </h2>
            <p className="text-gray-600 mb-10">
              Estamos prontos para receber você com todo o conforto e segurança que você merece. Entre em contato pelos canais abaixo.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center text-brand-primary flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">Localização</h3>
                  <a 
                    href={CONTACT_INFO.addressLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-brand-primary transition-colors block mt-1"
                  >
                    Eusébio, Ceará<br/>
                    <span className="text-sm text-brand-accent underline">Ver no mapa</span>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center text-brand-primary flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">Contatos</h3>
                  <p className="text-gray-600">{CONTACT_INFO.phone}</p>
                  <a href={`https://instagram.com/${CONTACT_INFO.instagram.replace('@','')}`} className="text-gray-600 hover:text-brand-primary transition-colors flex items-center gap-1">
                    <Instagram size={14}/> {CONTACT_INFO.instagram}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center text-brand-primary flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">Horário</h3>
                  <p className="text-gray-600">Segunda a Sexta: 08h às 18h</p>
                  <p className="text-gray-600">Sábado: 08h às 12h</p>
                </div>
              </div>
            </div>

            <a 
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              className="mt-10 bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-green-600/30"
            >
              <Send size={20} />
              Enviar Mensagem no WhatsApp
            </a>
          </div>

          {/* Map Embed */}
          <div className="h-[400px] lg:h-auto bg-gray-200 relative">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63688.88936306059!2d-38.4900595!3d-3.8893649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c75b05a5a0a381%3A0x7d2829158c9735a7!2sEus%C3%A9bio%2C%20CE!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
                title="Mapa Eusébio"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;