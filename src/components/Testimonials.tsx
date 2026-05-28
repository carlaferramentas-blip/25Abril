import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { testimonials } from '../data/testimonials';
import { Testimonial } from '../types';
import * as LucideIcons from 'lucide-react';

export default function Testimonials() {
  const [selectedFigure, setSelectedFigure] = useState<Testimonial>(testimonials[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playbackSeconds, setPlaybackSeconds] = useState<number>(0);
  const [systemLogs, setSystemLogs] = useState<string[]>(['SISTEMA PRONTO', 'Tape deck calibrado para 1974']);
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Convert minutes:seconds format to total seconds
  const parseDurationToSeconds = (durationStr: string): number => {
    const parts = durationStr.split(':');
    return parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
  };

  const totalDurationSeconds = parseDurationToSeconds(selectedFigure.audioDuration);

  // Auto-logs when loading a new figure
  useEffect(() => {
    setIsPlaying(false);
    setPlaybackSeconds(0);
    setSystemLogs(prev => [
      `CARREGADA TAPE: ${selectedFigure.name.toUpperCase().replace(' ', '_')}.DAT`,
      `DURAÇÃO DO REGISTO: ${selectedFigure.audioDuration} MINUTOS`,
      ...prev.slice(0, 2)
    ]);
  }, [selectedFigure]);

  // Audio simulation timer ticking loop
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setPlaybackSeconds(prev => {
          if (prev >= totalDurationSeconds) {
            setIsPlaying(false);
            setSystemLogs(logPrev => [`REGISTO CONCLUÍDO COM SUCESSO`, ...logPrev.slice(0, 3)]);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, totalDurationSeconds]);

  // Helpers to design formatting of seconds
  const formatTime = (totalSecs: number) => {
    const m = Math.floor(totalSecs / 60);
    const s = totalSecs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    setSystemLogs(prev => [
      isPlaying ? 'REPRODUÇÃO PAUSADA' : 'INICIANDO LEITURA MAGNÉTICA...',
      ...prev.slice(0, 2)
    ]);
  };

  const handleRewind = () => {
    setPlaybackSeconds(0);
    setIsPlaying(false);
    setSystemLogs(prev => ['BOBINA REBOBINADA PARA O INÍCIO', ...prev.slice(0, 2)]);
  };

  const getAccentBgClass = (color: string) => {
    switch (color) {
      case 'rose': return 'border-t-rose-600 bg-rose-50/20';
      case 'emerald': return 'border-t-emerald-600 bg-emerald-50/20';
      case 'indigo': return 'border-t-indigo-600 bg-indigo-50/20';
      case 'red': return 'border-t-red-650 bg-red-50/20';
      case 'amber': return 'border-t-amber-600 bg-amber-50/20';
      default: return 'border-t-slate-600 bg-slate-50/20';
    }
  };

  const getAccentTextClass = (color: string) => {
    switch (color) {
      case 'rose': return 'text-rose-600';
      case 'emerald': return 'text-emerald-600';
      case 'indigo': return 'text-indigo-600';
      case 'red': return 'text-red-700';
      case 'amber': return 'text-amber-600';
      default: return 'text-slate-600';
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      {/* List of figures */}
      <div className="lg:col-span-4 space-y-4">
        <div className="border border-slate-150 rounded-xl p-4 bg-white/70">
          <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wide flex items-center gap-1.5 mb-2">
            <LucideIcons.ListCollapse className="text-red-650 h-4 w-4" />
            Depoimentos & Figuras
          </h4>
          <p className="text-xs text-slate-550 leading-relaxed mb-4">
            Escolha uma das vozes da revolução portuguesa para escutar e analisar a transcrição das memórias.
          </p>

          <div className="space-y-2">
            {testimonials.map(fig => {
              const isActive = selectedFigure.id === fig.id;
              return (
                <button
                  key={fig.id}
                  onClick={() => setSelectedFigure(fig)}
                  className={`w-full text-left p-3 rounded-lg border cursor-pointer transition-all flex items-center justify-between gap-2 ${
                    isActive
                      ? 'bg-slate-900 border-slate-950 text-white shadow-xs'
                      : 'bg-white border-slate-100 hover:border-slate-350 text-slate-800'
                  }`}
                >
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold block">{fig.name}</span>
                    <span className={`text-[10px] block ${isActive ? 'text-slate-400' : 'text-slate-500'}`}>
                      {fig.role}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px] font-mono opacity-80 flex items-center gap-0.5">
                      <LucideIcons.Tv className="h-3 w-3" />
                      {fig.audioDuration}
                    </span>
                    <LucideIcons.ChevronRight className={`h-4 w-4 ${isActive ? 'text-amber-400' : 'text-slate-400'}`} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* System Monitor Status */}
        <div className="bg-slate-950 text-emerald-400 p-4 rounded-xl border border-slate-850 font-mono text-[10px] space-y-1.5 shadow-inner">
          <div className="flex items-center justify-between border-b border-emerald-950/20 pb-1.5 mb-1.5 text-slate-400 font-bold">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              MONITOR DE ESTADO DO RECEPTOR
            </span>
            <span>MODELO RPC-1974</span>
          </div>
          <div className="space-y-1 h-20 overflow-y-auto scrollbar-none">
            {systemLogs.map((log, idx) => (
              <p key={idx} className="line-clamp-1 opacity-90">
                &gt; {log}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Cassette and Transcription Panel */}
      <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
        {/* Cassette Tape Simulation Frame */}
        <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 text-slate-100 relative shadow-lg overflow-hidden">
          {/* Subtle metal grid pattern background */}
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

          {/* Cassette Core */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Real tape representation */}
            <div className="md:col-span-5 flex flex-col items-center">
              {/* The Cassette body wrapper */}
              <div className="w-56 h-36 bg-slate-820 bg-slate-800 rounded-xl border-4 border-slate-950 px-4 py-2 flex flex-col justify-between shadow-md relative border-t-8">
                {/* Visual Label */}
                <div className={`h-8 border-t-4 rounded flex items-center justify-center font-mono text-center overflow-hidden ${getAccentBgClass(selectedFigure.accentColor)}`}>
                  <span className={`text-[10px] font-bold tracking-tight px-1 uppercase ${getAccentTextClass(selectedFigure.accentColor)}`}>
                    FITA NOVO RUMO // {selectedFigure.name.split(' ')[0]}
                  </span>
                </div>

                {/* Cassette center tape wheels area */}
                <div className="bg-slate-950 rounded-lg h-14 border border-slate-900 flex items-center justify-around px-4 relative overflow-hidden">
                  {/* Left reel gear */}
                  <motion.div
                    animate={{ rotate: isPlaying ? [0, 360] : 0 }}
                    transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
                    className="w-10 h-10 rounded-full border-4 border-slate-750 flex items-center justify-center relative bg-slate-850"
                  >
                    <div className="absolute w-1.5 h-10 bg-slate-700" />
                    <div className="absolute w-10 h-1.5 bg-slate-700" />
                    <div className="w-5 h-5 rounded-full bg-slate-950 z-15 border border-slate-900" />
                  </motion.div>

                  {/* Window comparing remaining tape */}
                  <div className="w-14 bg-amber-500/10 border border-amber-600/20 h-6 rounded flex items-center justify-center font-mono text-amber-500 text-[10px] font-bold">
                    [===]
                  </div>

                  {/* Right reel gear */}
                  <motion.div
                    animate={{ rotate: isPlaying ? [0, 360] : 0 }}
                    transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
                    className="w-10 h-10 rounded-full border-4 border-slate-750 flex items-center justify-center relative bg-slate-850"
                  >
                    <div className="absolute w-1.5 h-10 bg-slate-700" />
                    <div className="absolute w-10 h-1.5 bg-slate-705 bg-slate-700" />
                    <div className="w-5 h-5 rounded-full bg-slate-950 z-15 border border-slate-900" />
                  </motion.div>
                </div>

                {/* Small cassette screws and code */}
                <div className="flex justify-between items-center text-[8px] font-mono text-slate-500 px-1">
                  <span>A/B TYPE I</span>
                  <span>1974/04/25</span>
                </div>
              </div>
            </div>

            {/* Deck Controls and Waveform */}
            <div className="md:col-span-7 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                    FICHEIRO HISTÓRICO AUDIO S/N
                  </span>
                  <h3 className="text-base font-bold text-amber-400">{selectedFigure.name}</h3>
                  <p className="text-[11px] text-slate-400 font-serif leading-tight">{selectedFigure.role} {selectedFigure.birthDeath}</p>
                </div>
                {/* Counter */}
                <div className="bg-slate-950 border border-slate-850 rounded px-2.5 py-1 text-right font-mono">
                  <span className="text-[10px] text-red-500 block uppercase font-bold tracking-wider leading-none">TIME COUNTER</span>
                  <span className="text-amber-400 font-bold text-sm tracking-widest">
                    {formatTime(playbackSeconds)} <span className="text-slate-600">/</span> {selectedFigure.audioDuration}
                  </span>
                </div>
              </div>

              {/* Animated Waveform Display */}
              <div className="bg-slate-950/80 rounded-xl p-3 border border-slate-920 h-16 flex items-end justify-between px-6 gap-[2px]">
                {Array.from({ length: 28 }).map((_, waveIdx) => {
                  // Simulate sound intensity
                  const heightFactor = isPlaying
                    ? Math.max(15, Math.floor(Math.random() * 95))
                    : 12;

                  return (
                    <motion.div
                      key={waveIdx}
                      animate={{ height: `${heightFactor}%` }}
                      transition={{ duration: 0.15, ease: 'easeOut' }}
                      className={`w-1 rounded-sm ${isPlaying ? 'bg-amber-400' : 'bg-slate-700 opacity-60'}`}
                    />
                  );
                })}
              </div>

              {/* Console Deck Buttons */}
              <div className="flex items-center gap-2 pt-2">
                {/* Play / Pause */}
                <button
                  onClick={handlePlayPause}
                  className={`px-4 py-2 cursor-pointer rounded-lg text-xs font-bold tracking-wider flex items-center gap-1.5 transition-all shadow-sm ${
                    isPlaying
                      ? 'bg-amber-500 hover:bg-amber-650 text-slate-950'
                      : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                  }`}
                >
                  {isPlaying ? (
                    <>
                      <LucideIcons.Pause className="h-4 w-4" />
                      PAUSAR TAPE
                    </>
                  ) : (
                    <>
                      <LucideIcons.Play className="h-4 w-4 fill-current" />
                      TOCAR GRAVAÇÃO
                    </>
                  )}
                </button>

                {/* Rewind */}
                <button
                  onClick={handleRewind}
                  className="px-3 py-2 cursor-pointer rounded-lg bg-slate-850 hover:bg-slate-800 border border-slate-750 text-xs text-slate-300 font-bold flex items-center gap-1 transition-all"
                  title="Rebobinar para o início"
                >
                  <LucideIcons.RotateCcw className="h-3.5 w-3.5" />
                  REBOBINAR
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Transcript / Dossier sheet */}
        <div className="bg-[#FAF7F0] border border-amber-205 rounded-xl border-amber-200 p-6 shadow-sm flex-grow">
          <div className="border-b border-amber-200 pb-3 mb-4 flex items-center justify-between flex-wrap gap-2">
            <div>
              <span className="text-[10px] font-mono text-amber-800 font-bold uppercase tracking-wider">
                TRANSCRIÇÃO DO DEPOIMENTO
              </span>
              <h4 className="text-sm font-bold text-slate-800 font-sans">Dossier de Resistência</h4>
            </div>
            <div className="bg-amber-100 rounded-full px-2.5 py-0.5 text-[9px] font-mono text-amber-900 border border-amber-200">
              DOCUMENTO OFICIAL INTEGRAL
            </div>
          </div>

          <div className="space-y-4 font-serif">
            {/* Prominent Quote */}
            <div className="bg-white/80 rounded-lg p-4 border-l-4 border-l-red-600">
              <span className="text-3xl text-red-650 leading-none mr-2 float-left font-sans font-bold">“</span>
              <p className="text-slate-800 italic text-base leading-relaxed font-serif">
                {selectedFigure.quote}
              </p>
            </div>

            {/* Biographic short */}
            <div className="text-xs text-slate-650 font-sans bg-slate-50 p-3 rounded border border-slate-150 leading-relaxed">
              <span className="font-bold text-slate-800 block mb-0.5">Biografia Sumária:</span>
              {selectedFigure.bio}
            </div>

            {/* Narrative Story */}
            <div className="text-xs text-slate-750 leading-relaxed space-y-2 font-sans pt-1">
              <span className="font-bold text-slate-805 text-xs block font-sans tracking-wide text-slate-800">
                REGISTO DETALHADO DO ENCONTRO HISTÓRICO:
              </span>
              <p>{selectedFigure.fullStory}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
