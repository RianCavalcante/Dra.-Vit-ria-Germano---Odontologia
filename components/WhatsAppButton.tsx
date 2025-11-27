import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-110 hover:rotate-3 flex items-center justify-center"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={32} fill="white" className="text-green-500" />
    </a>
  );
};

export default WhatsAppButton;