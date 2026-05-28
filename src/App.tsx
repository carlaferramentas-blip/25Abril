import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as LucideIcons from 'lucide-react';

// Components imports
import Timeline from './components/Timeline';
import PhotoArchive from './components/PhotoArchive';
import Testimonials from './components/Testimonials';
import SocioCulturalImpact from './components/SocioCulturalImpact';
import Quiz from './components/Quiz';

type TabId = 'timeline' | 'gallery' | 'testimonials' | 'impact' | 'quiz';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('timeline');

  const tabList = [
    { id: 'timeline', label: 'Cronologia', icon: 'Clock', num: '01', tagline: 'Minuto a minuto do golpe' },
    { id: 'gallery', label: 'Arquivo Gráfico', icon: 'Image', num: '02', tagline: 'O laboratório de fotos' },
    { id: 'testimonials', label: 'Vozes de Abril', icon: 'Radio', num: '03', tagline: 'Os depoimentos magnéticos' },
    { id: 'impact', label: 'Impacto Social', icon: 'Globe', num: '04', tagline: 'Antes e Depois do regime' },
    { id: 'quiz', label: 'Quiz Escolar', icon: 'Award', num: '05', tagline: 'Avaliação para estudantes' },
  ] as const;

  const renderActiveSection = () => {
    switch (activeTab) {
      case 'timeline':
        return <Timeline />;
      case 'gallery':
        return <PhotoArchive />;
      case 'testimonials':
        return <Testimonials />;
      case 'impact':
        return <SocioCulturalImpact />;
      case 'quiz':
        return <Quiz />;
      default:
        return <Timeline />;
    }
  };

  const getTabIcon = (iconName: string, className?: string) => {
    switch (iconName) {
      case 'Clock': return <LucideIcons.Clock className={className} />;
      case 'Image': return <LucideIcons.Image className={className} />;
      case 'Radio': return <LucideIcons.Radio className={className} />;
      case 'Globe': return <LucideIcons.Globe className={className} />;
      case 'Award': return <LucideIcons.Award className={className} />;
      default: return <LucideIcons.FileText className={className} />;
    }
  };

  return (
    <div className="min-h-screen border-[8px] md:border-[12px] border-brand-red bg-brand-cream text-brand-charcoal font-serif flex flex-col selection:bg-brand-red/20 selection:text-brand-red">
      {/* Editorial Header / Brand bar */}
      <header className="border-b-2 border-brand-red py-5 px-6 md:px-10 bg-brand-cream flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex flex-col">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-sans font-extrabold text-brand-red">
            Arquivo Histórico Nacional • Portugal
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-none mt-1.5 uppercase">
            25 DE ABRIL <span className="text-brand-red">1974</span>
          </h1>
        </div>
        <div className="flex items-center gap-4 text-[10px] font-sans font-bold uppercase tracking-wider text-brand-charcoal/80">
          <span>PORTUGAL LIVRE</span>
          <span className="text-brand-red font-black">•</span>
          <span className="text-brand-red">52 ANOS DE DEMOCRACIA</span>
        </div>
      </header>

      {/* Cinematic Hero Section */}
      <section className="relative bg-[#120406] text-white border-b-2 border-brand-red overflow-hidden min-h-[340px] md:min-h-[400px] flex items-center">
        {/* Absolute Background Image with vintage color overlay */}
        <div className="absolute inset-0 opacity-40 select-none">
          <img
            src="/src/assets/images/cravo_revolucao_1779986151969.png"
            alt="Cravo de Abril Hero"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover saturate-125 brightness-50 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-5">
            <div className="inline-flex items-center gap-2 bg-brand-red text-white font-sans text-[10px] font-black tracking-widest px-3 py-1.5 rounded-none uppercase border border-brand-red/30">
              <LucideIcons.Flower className="h-3.5 w-3.5 fill-current animate-pulse" />
              O DIA EM QUE O MEDO ACABOU
            </div>

            <div className="space-y-1">
              <h1 className="text-3xl md:text-5xl font-serif font-black tracking-tight text-white leading-tight">
                A Revolução dos Cravos
              </h1>
              <h2 className="text-base md:text-xl font-serif text-brand-beige italic">
                Democracia, Paz e Progresso • 25 de Abril de 1974
              </h2>
            </div>

            <p className="text-xs md:text-sm text-slate-300 leading-relaxed max-w-2xl font-sans">
              Em poucas horas e sem derramamento de sangue, um movimento de jovens capitães depôs a ditadura mais antiga da Europa Ocidental. O cravo na espingarda consagrou o símbolo de uma transição pacífica para a liberdade plena, restabelecendo a soberania popular, os direitos fundamentais e o fim da opressão colonial.
            </p>

            {/* Quick stats ribbon */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10 max-w-lg">
              <div>
                <span className="text-lg md:text-2xl font-bold text-brand-red font-display block">48 Anos</span>
                <span className="text-[9px] text-slate-400 font-sans block uppercase font-bold tracking-wider">DURAÇÃO DA DITADURA</span>
              </div>
              <div>
                <span className="text-lg md:text-2xl font-bold text-amber-500 font-display block">0 Vítimas</span>
                <span className="text-[9px] text-slate-400 font-sans block uppercase font-bold tracking-wider">CIVIS COORDENADAS</span>
              </div>
              <div>
                <span className="text-lg md:text-2xl font-bold text-emerald-500 font-display block font-serif">1 Flor</span>
                <span className="text-[9px] text-slate-400 font-sans block uppercase font-bold tracking-wider">SÍMBOLO INTERNACIONAL</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 hidden lg:flex justify-end pr-4">
            <div className="bg-[#1C1717]/90 backdrop-blur-md rounded-none p-5 border-l-4 border-brand-red text-slate-300 space-y-4 max-w-xs shadow-2xl">
              <div className="flex items-center gap-2">
                <LucideIcons.ShieldAlert className="text-brand-red h-5 w-5" />
                <span className="text-xs font-bold font-sans uppercase tracking-wider text-[#F7F3ED]">
                  Declaração Histórica
                </span>
              </div>
              <p className="text-xs italic leading-relaxed font-serif">
                "Esta é a noite solene onde vamos pôr fim a este estado de coisas. Fiquem em paz, fiquem em liberdade."
              </p>
              <div className="h-[1px] bg-slate-800" />
              <div className="text-[10.5px] font-sans font-bold uppercase tracking-tight text-slate-400 flex items-center justify-between">
                <span>Capitão de Abril:</span>
                <span className="text-brand-red font-black">Salgueiro Maia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Sticky Tab Navigation Grid */}
      <nav className="sticky top-0 z-30 bg-brand-cream border-b-2 border-brand-red/40 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto scrollbar-none">
          <div className="flex space-x-1 py-3 px-1 min-w-[620px]">
            {tabList.map(tab => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 text-left px-5 py-3 rounded-none transition-all border-2 cursor-pointer ${
                    isSelected
                      ? 'bg-brand-red border-brand-red text-white shadow-md'
                      : 'bg-brand-cream hover:bg-brand-beige border-brand-red/30 text-brand-charcoal'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className={`text-[10px] font-sans font-black tracking-widest ${isSelected ? 'text-[#F7F3ED]/80' : 'text-brand-red/70'}`}>
                      {tab.num}
                    </span>
                    {getTabIcon(tab.icon, `h-4 w-4 ${isSelected ? 'text-[#FAF9F5]' : 'text-brand-red'}`)}
                  </div>
                  <span className="text-xs font-bold font-sans block leading-tight uppercase tracking-wider">{tab.label}</span>
                  <span className={`text-[9px] block leading-none font-medium mt-0.5 filter italic ${isSelected ? 'text-slate-200' : 'text-slate-500'}`}>
                    {tab.tagline}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Dynamic Workspace Frame */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 md:px-8 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="p-5 md:p-8 bg-brand-cream border-2 border-brand-red shadow-sm"
          >
            {renderActiveSection()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer Details */}
      <footer className="border-t-2 border-brand-red bg-white py-8 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand stamp footer */}
          <div className="space-y-1 text-center md:text-left">
            <span className="font-sans font-black text-xs tracking-widest uppercase text-brand-charcoal">
              © MEMÓRIA DA LIBERDADE — 52 ANOS DE DEMOCRACIA
            </span>
            <p className="text-[10px] text-slate-500 font-sans block uppercase font-bold tracking-tight">
              Iniciativa Pedagógica e Digital de Divulgação da Cidadania Portuguesa.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-slate-400">CORES NACIONAIS:</span>
            <div className="flex gap-2">
              <span className="w-4 h-4 bg-[#006633] inline-block border border-black/10"></span>
              <span className="w-4 h-4 bg-[#FF0000] inline-block border border-black/10"></span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
