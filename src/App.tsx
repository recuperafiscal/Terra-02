/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  ChevronRight, 
  Play, 
  Info, 
  MapPin, 
  MessageCircle, 
  Globe, 
  Layout, 
  CheckCircle2, 
  Calculator,
  ArrowRight,
  Plus
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

// Types
interface LinkCard {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  category: string;
  url: string;
  isTop?: boolean;
}

const WHATSAPP_URL = 'https://wa.me/553192020603';
const LOCATION_URL = 'https://www.google.com/maps/search/?api=1&query=Rua+Serra+Verde+39205-000+Três+Marias+MG';

const LINKS: LinkCard[] = [
  {
    id: 'budget',
    title: 'Quero meu Orçamento Exclusivo',
    subtitle: 'Descubra como economizar até 40% na sua obra hoje.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800',
    category: 'Ação Imediata',
    url: WHATSAPP_URL,
    isTop: true,
  },
  {
    id: 'projects',
    title: 'Projetos que Inspiram',
    subtitle: 'Conheça o padrão de luxo das casas Terrabricks.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    category: 'Galeria',
    url: WHATSAPP_URL,
  },
  {
    id: 'site',
    title: 'Tecnologia de Ponta',
    subtitle: 'O futuro da engenharia em um sistema de encaixe único.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    category: 'Oficial',
    url: WHATSAPP_URL, 
  },
  {
    id: 'how-it-works',
    title: 'O Segredo da Obra Rápida',
    subtitle: 'Entenda o sistema inteligente que elimina desperdícios.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    category: 'Educativo',
    url: WHATSAPP_URL,
  },
  {
    id: 'benefits',
    title: 'Reduza 40% dos Custos',
    subtitle: 'O equilíbrio perfeito entre economia e sustentabilidade.',
    image: 'https://images.unsplash.com/photo-1510627489930-0c1b0ba04d8c?auto=format&fit=crop&q=80&w=800',
    category: 'Vantagens',
    url: WHATSAPP_URL,
  },
  {
    id: 'location',
    title: 'Onde a Mágica Acontece',
    subtitle: 'Visite nossa fábrica e sinta a qualidade de perto.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800',
    category: 'Fábrica',
    url: LOCATION_URL,
  },
  {
    id: 'whatsapp',
    title: 'Consultoria Especializada',
    subtitle: 'Fale com quem entende de construção ecológica agora.',
    image: 'https://images.unsplash.com/photo-1557426272-fc759fbb7a8d?auto=format&fit=crop&q=80&w=800',
    category: 'Suporte',
    url: WHATSAPP_URL,
  },
];

const Background = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Deep Black Base */}
      <div className="absolute inset-0 bg-premium-black" />
      
      {/* Concrete Texture overlay */}
      <div className="absolute inset-0 concrete-texture" />
      
      {/* Ambient Copper Lighting */}
      <div className="absolute inset-0 ambient-light" />
      
      {/* Particles effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-premium-copper/20 blur-[2px]"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{ 
              y: ["-10%", "110%"],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: Math.random() * 20 + 20, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * -20
            }}
            style={{ 
              width: Math.random() * 4 + 2 + "px",
              height: Math.random() * 4 + 2 + "px"
            }}
          />
        ))}
      </div>
    </div>
  );
};

const Card = ({ card }: { card: LinkCard }) => {
  return (
    <motion.div
      id={`card-${card.id}`}
      className="relative flex-shrink-0 w-[45vw] md:w-[220px] aspect-[2/3] group cursor-pointer"
      whileHover={{ scale: 1.05, zIndex: 10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={() => window.open(card.url, '_blank')}
    >
      {/* Glow Effect on Hover */}
      <div className="absolute inset-[-2px] bg-gradient-to-tr from-premium-copper to-premium-orange rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300" />
      
      <div className="relative h-full w-full bg-premium-graphite rounded-lg overflow-hidden shadow-netflix">
        <img 
          src={card.image} 
          alt={card.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
        
        {/* Top Badge */}
        {card.isTop && (
          <div className="absolute top-2 left-2 flex items-center gap-1 bg-red-600 px-1.5 py-0.5 rounded-sm text-[10px] font-bold uppercase tracking-wider">
            <span className="text-[12px]">TOP</span>
            <span>1</span>
          </div>
        )}

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform">
          <h3 className="font-display font-bold text-[14px] leading-tight text-white mb-1 group-hover:text-premium-copper transition-colors">
            {card.title}
          </h3>
          <p className="text-[10px] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity line-clamp-2">
            {card.subtitle}
          </p>
        </div>

        {/* Interactive icons on hover */}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex gap-1.5">
            <div className="p-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/10 hover:bg-white/40">
              <Plus className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function App() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollY, scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 1.1]);

  return (
    <div className="relative min-h-screen font-sans selection:bg-premium-copper selection:text-white">
      <Background />
      
      {/* Navigation / Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-center items-center bg-gradient-to-b from-black/90 to-transparent">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-gradient-to-br from-premium-copper to-premium-orange flex items-center justify-center shadow-glow-copper rotate-3">
              <span className="text-white font-display font-black text-2xl -rotate-3">T</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-[900] text-2xl tracking-tighter text-white text-glow-copper leading-none">TERRABRICKS</span>
              <span className="text-[10px] text-premium-copper font-medium tracking-[0.4em] uppercase ml-1">Fábrica de Tijolos</span>
            </div>
          </div>
        </motion.div>
      </header>

      <main className="pb-24">
        {/* Hero Section */}
        <section className="relative h-[85vh] md:h-[90vh] overflow-hidden">
          <motion.div 
            style={{ opacity: heroOpacity, scale: heroScale }}
            className="absolute inset-0 h-full"
          >
            <img 
              src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1600"
              alt="Terrabricks Hero House"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Cinematic Overlay Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-premium-black via-premium-black/40 to-transparent" />
            <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-premium-black via-premium-black/20 to-transparent" />
          </motion.div>

          <div className="absolute inset-0 flex flex-col justify-end px-6 pb-20 md:px-12 md:pb-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-px bg-premium-copper" />
                <span className="text-premium-copper font-display font-medium text-xs tracking-[0.3em] uppercase">Ecológico & Sustentável</span>
              </div>
              
              <h1 className="font-display font-black text-4xl md:text-7xl leading-[1.1] text-white mb-6 uppercase tracking-tight">
                Construímos o <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-premium-copper to-premium-orange">Futuro</span> da sua Obra
              </h1>
              
              <p className="text-sm md:text-lg text-gray-300 mb-8 max-w-lg font-light leading-relaxed">
                Economia • Sustentabilidade • Resistência. A próxima geração da construção civil chegou com tecnologia de encaixe estrutural.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded font-bold hover:bg-white/90 transition-all shadow-xl"
                  onClick={() => window.open(WHATSAPP_URL, '_blank')}
                >
                  <Play className="fill-black w-4 h-4" />
                  INICIAR MEU PROJETO
                </motion.button>
                
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-gray-500/30 backdrop-blur-xl text-white border border-white/20 px-8 py-3 rounded font-bold hover:bg-gray-500/50 transition-all"
                  onClick={() => window.open(WHATSAPP_URL, '_blank')}
                >
                  <Info className="w-5 h-5" />
                  POR QUE TERRABRICKS?
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Catalog Sections - Like Netflix Rows */}
        <section className="relative z-10 -mt-20 md:-mt-32 space-y-12">
          {/* Main Links Row */}
          <div className="pl-6 md:pl-12">
            <div className="flex items-center gap-2 mb-4 group cursor-pointer">
              <h2 className="font-display font-bold text-lg md:text-2xl text-white group-hover:text-premium-copper tracking-tight transition-colors">Destaques TERRABRICKS</h2>
              <ChevronRight className="w-5 h-5 text-premium-copper opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
            </div>
            
            <div 
              className="flex gap-4 overflow-x-auto scrollbar-hide pb-8 pr-6 md:pr-12 snap-x"
            >
              {LINKS.slice(0, 4).map((link) => (
                <div key={link.id} className="snap-start">
                  <Card card={link} />
                </div>
              ))}
            </div>
          </div>

          {/* Second Row */}
          <div className="pl-6 md:pl-12">
            <div className="flex items-center gap-2 mb-4 group cursor-pointer">
              <h2 className="font-display font-bold text-lg md:text-2xl text-white group-hover:text-premium-copper tracking-tight transition-colors">Explore Mais</h2>
              <ChevronRight className="w-5 h-5 text-premium-copper opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
            </div>
            
            <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-8 pr-6 md:pr-12 snap-x">
              {LINKS.slice(4).map((link) => (
                <div key={link.id} className="snap-start">
                  <Card card={link} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 px-6 py-12 text-center border-t border-white/10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="space-y-6"
          >
            <div className="flex justify-center items-center gap-2 opacity-50">
              <span className="w-12 h-px bg-white/20" />
              <div className="w-4 h-4 rounded-full bg-premium-copper/20 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-premium-copper" />
              </div>
              <span className="w-12 h-px bg-white/20" />
            </div>
            
            <h3 className="font-display font-bold text-xl text-white tracking-tighter">TERRABRICKS — Fábrica de Tijolos</h3>
            <p className="text-gray-500 text-sm max-w-xs mx-auto">
              Construção ecológica inteligente. Qualidade e resistência para o seu projeto.
            </p>
            
            <div className="flex justify-center gap-8 pt-4">
              <MessageCircle 
                className="w-6 h-6 text-gray-500 hover:text-premium-copper cursor-pointer transition-colors" 
                onClick={() => window.open(WHATSAPP_URL, '_blank')}
              />
              <Globe 
                className="w-6 h-6 text-gray-500 hover:text-premium-copper cursor-pointer transition-colors" 
                onClick={() => window.open(WHATSAPP_URL, '_blank')}
              />
              <MapPin 
                className="w-6 h-6 text-gray-500 hover:text-premium-copper cursor-pointer transition-colors" 
                onClick={() => window.open(LOCATION_URL, '_blank')}
              />
            </div>
          </motion.div>
        </footer>
      </main>

      {/* Floating CTA */}
      <motion.div
        id="floating-cta"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-xs md:max-w-none"
      >
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(184, 115, 51, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-premium-copper to-premium-orange text-white px-8 py-4 rounded-full font-display font-bold shadow-2xl transition-all"
          onClick={() => window.open(WHATSAPP_URL, '_blank')}
        >
          <Calculator className="w-5 h-5" />
          SOLICITAR ORÇAMENTO
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </motion.div>

      {/* Scroll indicator - Top bar progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-premium-copper z-[60] origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
}
