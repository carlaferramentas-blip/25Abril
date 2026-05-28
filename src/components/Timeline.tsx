import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { timelineEvents } from '../data/timeline';
import { TimelineEvent } from '../types';
import * as LucideIcons from 'lucide-react';

// Dynamic icon resolver helper
const IconHelper = ({ name, className }: { name: string; className?: string }) => {
  const IconComponent = (LucideIcons as any)[name] || LucideIcons.HelpCircle;
  return <IconComponent className={className} />;
};

export default function Timeline() {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent>(timelineEvents[0]);
  const [filter, setFilter] = useState<string>('todos');

  const filteredEvents = timelineEvents.filter(event => {
    if (filter === 'todos') return true;
    return event.type === filter;
  });

  const getCategoryTheme = (type: string) => {
    switch (type) {
      case 'sinal':
        return { bg: 'bg-amber-100', text: 'text-amber-850 font-bold', border: 'border-amber-300' };
      case 'militar':
        return { bg: 'bg-emerald-100', text: 'text-emerald-950 font-bold', border: 'border-emerald-300' };
      case 'popular':
        return { bg: 'bg-brand-red/10', text: 'text-brand-red font-bold', border: 'border-brand-red/30' };
      case 'politico':
        return { bg: 'bg-blue-100', text: 'text-blue-950 font-bold', border: 'border-blue-300' };
      default:
        return { bg: 'bg-brand-beige', text: 'text-brand-charcoal font-bold', border: 'border-brand-red/20' };
    }
  };

  const getCategoryLabel = (type: string) => {
    switch (type) {
      case 'sinal': return 'Transmissões e Sinais';
      case 'militar': return 'Ações Militares';
      case 'popular': return 'Apoio Popular';
      case 'politico': return 'Decisões Políticas';
      default: return 'Geral';
    }
  };

  return (
    <div id="timeline-section" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Sidebar Controls and List */}
      <div className="lg:col-span-7 space-y-6">
        <div>
          <h3 className="text-2xl font-black text-brand-charcoal uppercase tracking-tight mb-2 flex items-center gap-2">
            <LucideIcons.ListCollapse className="text-brand-red h-6 w-6" />
            As Horas da Revolução
          </h3>
          <p className="text-sm text-slate-700 mb-4 leading-relaxed font-sans">
            Navegue pelos momentos marcantes do golpe militar que redefiniu o destino de Portugal desde a noite do dia 24 até à madrugada do dia 26 de Abril de 1974.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {[
              { id: 'todos', label: 'Todos os Eventos', icon: 'List' },
              { id: 'sinal', label: 'Sinais de Rádio', icon: 'Radio' },
              { id: 'militar', label: 'Ações Militares', icon: 'Truck' },
              { id: 'popular', label: 'Apoio Popular', icon: 'Users' },
              { id: 'politico', label: 'Transição Política', icon: 'Scale' }
            ].map(category => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-3 py-1.5 rounded-none text-[11px] font-sans font-black tracking-wider uppercase flex items-center gap-1.5 transition-all cursor-pointer ${
                  filter === category.id
                    ? 'bg-brand-red text-white border-2 border-brand-red'
                    : 'bg-brand-cream text-brand-charcoal hover:bg-brand-beige border-2 border-brand-red/30'
                }`}
              >
                <IconHelper name={category.icon} className="h-3.5 w-3.5" />
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Vertical Timeline List */}
        <div className="relative border-l-2 border-brand-red ml-4 pl-6 space-y-4 max-h-[550px] overflow-y-auto pr-2 scrollbar-thin">
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event, index) => {
              const theme = getCategoryTheme(event.type);
              const isSelected = selectedEvent.id === event.id;

              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className={`relative p-4 rounded-none border-2 transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-brand-beige border-brand-red shadow-sm'
                      : 'bg-brand-cream border-brand-red/25 hover:border-brand-red/60'
                  }`}
                  onClick={() => setSelectedEvent(event)}
                >
                  {/* Timeline point indicator */}
                  <div className={`absolute -left-[33px] top-4 rounded-none border-2 p-1 ${
                    isSelected ? 'bg-brand-red border-brand-red text-white' : 'bg-brand-cream border-brand-red/40 text-brand-red hover:border-brand-red'
                  } transition-all`}>
                    <IconHelper name={event.iconName} className="h-4 w-4" />
                  </div>

                  <div className="flex justify-between items-center mb-1 flex-wrap gap-1">
                    <span className="text-xs font-black text-brand-red tracking-wider font-sans bg-brand-red/10 px-2.5 py-0.5 rounded-none flex items-center gap-1">
                      <LucideIcons.Clock className="h-3.5 w-3.5" />
                      {event.time}
                    </span>
                    <span className={`text-[9px] uppercase tracking-widest font-sans font-bold px-2 py-0.5 border ${theme.border} ${theme.bg} ${theme.text}`}>
                      {getCategoryLabel(event.type)}
                    </span>
                  </div>

                  <h4 className="text-sm md:text-base font-black text-brand-charcoal uppercase tracking-tight line-clamp-1">{event.title}</h4>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed font-sans">{event.description}</p>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Historical Detail Panel (Responsive) */}
      <div className="lg:col-span-5 h-full">
        <div className="border-2 border-brand-red bg-brand-beige rounded-none p-6 shadow-xs flex flex-col min-h-[480px]">
          <div className="border-b-2 border-brand-red/30 pb-4 mb-4">
            <span className="text-[10px] font-sans font-extrabold tracking-widest text-brand-red uppercase">
              DOCUMENTO DE ARQUIVO HISTÓRICO
            </span>
            <h3 className="text-xl md:text-2xl font-serif font-black tracking-tight text-brand-charcoal mt-1">{selectedEvent.title}</h3>
            
            <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-3 text-[11px] font-sans font-bold uppercase tracking-wider text-slate-700">
              <span className="flex items-center gap-1">
                <LucideIcons.Calendar className="h-3.5 w-3.5 text-brand-red" />
                {selectedEvent.date}
              </span>
              <span className="flex items-center gap-1">
                <LucideIcons.MapPin className="h-3.5 w-3.5 text-brand-red" />
                {selectedEvent.location}
              </span>
            </div>
          </div>

          <div className="flex-grow space-y-4">
            <div className="bg-brand-cream border-2 border-brand-red/30 p-4 font-serif text-brand-charcoal border-l-4 border-l-brand-red">
              <p className="text-sm font-medium italic leading-relaxed">
                "{selectedEvent.description}"
              </p>
            </div>

            <div className="space-y-2">
              <h5 className="text-[10px] font-sans font-bold tracking-wider text-[#1a1a1a]/80 uppercase flex items-center gap-1">
                <LucideIcons.BookOpen className="h-3.5 w-3.5 text-brand-red" />
                O Enquadramento Decisivo
              </h5>
              <div className="text-sm text-slate-800 leading-relaxed font-serif space-y-2 max-h-[220px] overflow-y-auto pr-1">
                {selectedEvent.detailedText.split('\n\n').map((para, pIndex) => (
                  <p key={pIndex}>{para}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-brand-red/30 mt-4 flex items-center justify-between text-[11px] text-slate-500 font-sans font-bold uppercase tracking-wider">
            <span>{getCategoryLabel(selectedEvent.type)}</span>
            <span className="flex items-center gap-1 text-brand-red">
              <LucideIcons.Flower className="h-3 w-3" />
              MFA 1974
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
