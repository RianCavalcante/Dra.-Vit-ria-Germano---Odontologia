import { ContactInfo, NavItem, ServiceItem, Testimonial } from './types';

export const CONTACT_INFO: ContactInfo = {
  phone: "(85) 99999-9999", // Placeholder based on intent
  whatsapp: "5585999999999", // Placeholder format
  addressLink: "https://share.google/2NFz6LRo6gEWfmFY3", // Provided in prompt
  instagram: "@dentistanoeusebio",
  cro: "8038"
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "lentes",
    title: "Lentes de Contato",
    description: "Transforme seu sorriso com facetas de porcelana ultrafinas que corrigem cor, formato e tamanho dos dentes com naturalidade.",
    iconName: "ScanFace"
  },
  {
    id: "resinas",
    title: "Resinas Compostas",
    description: "Restaurações estéticas de alta performance para um sorriso harmônico e funcional, sem desgastes excessivos.",
    iconName: "Smile"
  },
  {
    id: "protese",
    title: "Prótese Dentária",
    description: "Reabilitação oral completa. Devolva a função mastigatória e a estética do seu sorriso com próteses modernas.",
    iconName: "HeartPulse"
  },
  {
    id: "clareamento",
    title: "Clareamento",
    description: "Técnicas avançadas de clareamento a laser e caseiro para dentes mais brancos e um sorriso iluminado.",
    iconName: "Sparkles",
    iconUrl: "https://i.postimg.cc/65DqMsF1/dente-de-ouro.png"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Rosemery Cavalcante",
    text: "A Dra. Vitória é maravilhosa! Transformou meu sorriso com uma delicadeza incrível. O ambiente é super acolhedor.",
    role: "Paciente"
  },
  {
    id: "2",
    name: "João Silva",
    text: "Profissionalismo nota 1000. Fiz minhas lentes de contato e ficou super natural. Recomendo demais!",
    role: "Paciente"
  },
  {
    id: "3",
    name: "Mariana Costa",
    text: "Sem dúvidas a melhor do Eusébio. Atendimento humanizado e resultado impecável.",
    role: "Paciente"
  }
];