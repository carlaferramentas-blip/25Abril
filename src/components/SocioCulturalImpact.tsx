import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { impactAreas } from '../data/impact';
import { ImpactArea } from '../types';
import * as LucideIcons from 'lucide-react';

export default function SocioCulturalImpact() {
  const [activeArea, setActiveArea] = useState<ImpactArea>(impactAreas[0]);

  // Helper to dynamically resolve lucide-react icons or fallback
  const getIcon = (name: string, className?: string) => {
    switch (name) {
      case 'EyeOff': return <LucideIcons.EyeOff className={className} />;
      case 'Female': return <LucideIcons.UserCheck className={className} />; // Custom fallback for gender equality
      case 'GraduationCap': return <LucideIcons.GraduationCap className={className} />;
      case 'Heart': return <LucideIcons.Heart className={className} />;
      default: return <LucideIcons.Tv className={className} />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Introduction text */}
      <div className="border-b border-slate-100 pb-5">
        <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
          <LucideIcons.Globe className="text-red-650 h-5 w-5" />
          Análise de Impacto Sociocultural
        </h3>
        <p className="text-sm text-slate-600 mt-1 max-w-2xl">
          A Revolução de 1974 não foi apenas um golpe militar; foi uma transformação civilizacional profunda que reconfigurou os direitos civis, a educação, as artes e as liberdades individuais.
        </p>
      </div>

      {/* Categories Buttons Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {impactAreas.map(area => {
          const isActive = activeArea.id === area.id;
          return (
            <button
              key={area.id}
              onClick={() => setActiveArea(area)}
              className={`text-left p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between h-32 ${
                isActive
                  ? 'bg-slate-900 border-slate-900 text-white shadow-md'
                  : 'bg-white border-slate-150 hover:border-slate-300 text-slate-850'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <div className={`p-2 rounded-lg ${isActive ? 'bg-slate-800 text-amber-500' : 'bg-red-50 text-red-600'}`}>
                  {getIcon(area.iconName, 'h-5 w-5')}
                </div>
                {isActive && <span className="h-2 w-2 rounded-full bg-amber-500" />}
              </div>
              <div className="space-y-0.5 mt-2">
                <span className="text-xs font-bold font-sans block line-clamp-1">{area.title}</span>
                <span className={`text-[10px] block line-clamp-2 ${isActive ? 'text-slate-400' : 'text-slate-550'}`}>
                  {area.description}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Split Comparison Panel (Old vs New) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeArea.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
        >
          {/* Antes: Estado Novo */}
          <div className="lg:col-span-6 bg-[#2B2D31] rounded-2xl p-6 border border-slate-800 text-slate-100 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 border-b border-slate-700/50 pb-3">
                <span className="flex items-center gap-1.5 text-xs font-mono font-bold text-red-400 uppercase tracking-wider">
                  <LucideIcons.Lock className="h-4 w-4" />
                  O Portugal Velho (Antes de 1974)
                </span>
                <div className="bg-red-950/40 text-red-300 px-3 py-0.5 rounded-full text-[9px] font-mono border border-red-900/30 uppercase">
                  O Lápis Azul e Salazarismo
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-bold text-slate-300 h-6 flex items-center">{activeArea.before.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed mt-1 font-serif">
                    {activeArea.before.description}
                  </p>
                </div>

                <div className="h-[1px] bg-slate-700/40" />

                <div className="space-y-2.5">
                  <h5 className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-sans">
                    Restrições e Realidade Consagrada:
                  </h5>
                  <ul className="space-y-2 text-xs text-slate-300 font-sans">
                    {activeArea.before.points.map((point, index) => (
                      <li key={index} className="flex items-start gap-2 leading-relaxed">
                        <span className="text-red-500 h-4 min-w-4 flex items-center justify-center font-bold text-sm">✕</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 text-[10px] text-slate-500 font-mono">
              REGIME AUTORITÁRIO CORPORATIVO // EXAME PRÉVIO ATIVO
            </div>
          </div>

          {/* Depois: O Portugal Livre */}
          <div className="lg:col-span-6 bg-[#FAF9F5] rounded-2xl p-6 border-2 border-red-50 text-slate-800 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-4 border-b border-amber-200/50 pb-3">
                <span className="flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider animate-pulse">
                  <LucideIcons.Sparkles className="h-4 w-4" />
                  O Portugal Democrático (Depois de 1974)
                </span>
                <div className="bg-emerald-50 text-emerald-700 px-3 py-0.5 rounded-full text-[9px] font-mono border border-emerald-100 uppercase font-medium">
                  Conquistas Fundamentais de Abril
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-bold text-slate-850 h-6 flex items-center">{activeArea.after.title}</h4>
                  <p className="text-xs text-slate-650 leading-relaxed mt-1">
                    {activeArea.after.description}
                  </p>
                </div>

                <div className="h-[1px] bg-amber-200/40" />

                <div className="space-y-2.5">
                  <h5 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-sans">
                    Direitos e Emancipação Conquistados:
                  </h5>
                  <ul className="space-y-2 text-xs text-slate-700 font-sans">
                    {activeArea.after.points.map((point, index) => (
                      <li key={index} className="flex items-start gap-2 leading-relaxed">
                        <span className="text-emerald-600 h-4 min-w-4 flex items-center justify-center font-bold text-sm">✔</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-amber-200/40 text-[10px] text-slate-400 font-mono flex items-center justify-between">
              <span>CONSTITUIÇÃO DA REPÚBLICA INVISÍVEL 1976</span>
              <span className="text-red-650 font-bold">VIVA A LIBERDADE</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Comparison Statistics Highlight */}
      {activeArea.stats && (
        <div className="bg-slate-50 border border-slate-150 rounded-xl p-5 shadow-inner">
          <h4 className="text-xs font-bold font-mono tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
            <LucideIcons.TrendingUp className="h-4 w-4 text-slate-400" />
            INDICADORES E MÉTRICAS COMPARATIVAS DE DESENVOLVIMENTO
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeArea.stats.map((stat, sIndex) => (
              <div key={sIndex} className="bg-white border border-slate-100 p-4 rounded-lg flex flex-col justify-between">
                <span className="text-xs font-bold text-slate-800 block mb-2">{stat.label}</span>
                <div className="flex items-center gap-2 justify-between">
                  <div className="text-center bg-slate-50 border border-slate-100 px-3 py-2 rounded-md flex-grow">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase font-bold text-slate-500">Sob o Fascismo</span>
                    <span className="text-xs text-slate-600 font-sans line-clamp-1">{stat.beforeVal}</span>
                  </div>
                  <div className="text-slate-400 font-bold">&#10142;</div>
                  <div className="text-center bg-emerald-50/50 border border-emerald-100 px-3 py-2 rounded-md flex-grow">
                    <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">Em Democracia</span>
                    <span className="text-xs text-emerald-800 font-bold font-sans line-clamp-1">{stat.afterVal}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
