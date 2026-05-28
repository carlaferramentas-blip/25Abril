import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as LucideIcons from 'lucide-react';

interface PhotoItem {
  id: string;
  url: string;
  title: string;
  date: string;
  author: string;
  description: string;
  category: 'ruas' | 'militares' | 'celebracao' | 'simbolos';
  longStory: string;
}

const photoCollection: PhotoItem[] = [
  {
    id: 'photo-cravo',
    url: '/src/assets/images/cravo_revolucao_1779986151969.png',
    title: 'O Cravo da Liberdade na Calçada',
    date: '25 de Abril de 1974',
    author: 'Arquivo Histórico de Lisboa',
    category: 'simbolos',
    description: 'Um cravo vermelho depositado sobre as pedras de calçada portuguesa, eternizando o símbolo pacífico da mudança política.',
    longStory: 'O cravo vermelho (Dianthus caryophyllus) tornou-se acidentalmente no principal ícone da revolução democrática portuguesa. A flor não foi planeada por qualquer comité de partido ou estratégia militar; nasceu da generosidade espontânea de uma trabalhadora e da adesão imediata de jovens recrutas exaustos, que viram no cravo um sinal de paz contra treze anos de conflitos em África.'
  },
  {
    id: 'photo-fuzil',
    url: '/src/assets/images/tanques_pessoas_1779986174978.png',
    title: 'Flores nos Canos das Espingardas G3',
    date: '25 de Abril de 1974',
    author: 'Eduardo Gageiro (Inspirado em)',
    category: 'militares',
    description: 'A vanguarda militar capitaneada pelo MFA desfila com cravos vermelhos nos seus fusis G3.',
    longStory: 'Esta icónica representação retrata o paradoxo mais belo do 25 de Abril: espingardas automáticas de guerra G3, habitualmente utilizadas no sangrento cenário colonial africano, aparecem agora desarmadas por uma flor silvestre colocada no cano pelas mãos do próprio povo lisboeta que se juntara em comunhão com os militares revoltosos.'
  },
  {
    id: 'photo-festa',
    url: '/src/assets/images/povo_celebracao_1779986196855.png',
    title: 'A Euforia do Povo Português',
    date: '25 de Abril de 1974',
    author: 'Alfredo Cunha (Inspirado em)',
    category: 'celebracao',
    description: 'A multidão festeja a libertação nacional em plena Avenida da Liberdade, de cravos erguidos ao céu.',
    longStory: 'Durante décadas as multidões em Lisboa só eram autorizadas a manifestar-se a favor de Salazar. No dia 25 de Abril, contrariando o pedido dos militares para ficarem guardados em segurança, o povo tomou as ruas, subiu a tanques, entoou hinos de liberdade e confraternizou diretamente com as tropas blindadas. O medo ruiu em poucas horas.'
  },
  {
    id: 'photo-carmo',
    url: 'https://picsum.photos/seed/largo_do_carmo/800/800',
    title: 'O Cerco Histórico ao Quartel do Carmo',
    date: '25 de Abril de 1974 (Tarde)',
    author: 'Câmara Municipal de Lisboa',
    category: 'militares',
    description: 'Milhares de pessoas aglomeradas no Largo do Carmo perante as viaturas de Salgueiro Maia.',
    longStory: 'O Largo do Carmo foi o palco do clímax dramático da revolução. O Quartel da Guarda Nacional Republicana (GNR) serviu de última fortaleza para Marcello Caetano. Ali, Salgueiro Maia comandou posições num cerco pacífico mas inerrável, enquanto uma maré humana cobria as ruas adjacentes gritando pela demissão e rendição imediata da cúpula ditatorial.'
  },
  {
    id: 'photo-caxias',
    url: 'https://picsum.photos/seed/presos_politicos/800/800',
    title: 'A Libertação dos Presos do Forte de Caxias',
    date: '26 de Abril de 1974',
    author: 'Arquivo do Diário de Notícias',
    category: 'celebracao',
    description: 'O momento empolgante em que dezenas de resistentes antifascistas são libertados dos calabouços do regime.',
    longStory: 'Nas primeiras horas do dia 26 de Abril, uma das determinações mais solenes do MFA foi realizada no Forte de Caxias e no Forte de Peniche: as portas das prisões políticas foram arrombadas. Militantes que tinham passado décadas encarcerados pela polícia política PIDE foram recebidos em lágrimas de comoção por uma multidão jubilosa.'
  },
  {
    id: 'photo-primeiro-maio',
    url: 'https://picsum.photos/seed/maio_liberdade/800/800',
    title: 'O Primeiro de Maio em Liberdade',
    date: '1 de Maio de 1974',
    author: 'Associação de Imprensa Livre',
    category: 'ruas',
    description: 'A maior manifestação popular alguma vez registada em Portugal, marcando o novo rumo do país.',
    longStory: 'Exatamente uma semana após a revolução, a celebração do Dia do Trabalhador transformou-se no maior e mais entusiasmante comício público da História portuguesa. Mais de um milhão de cidadãos reuniu-se no Estádio da FNAT (atual Estádio 1º de Maio) e nas artérias de Lisboa num clima de partilha, esperança e fraternidade absoluta.'
  }
];

export default function PhotoArchive() {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [colorEffect, setColorEffect] = useState<'original' | 'grayscale' | 'sepia' | 'restore'>('original');

  const filteredPhotos = photoCollection.filter(photo => {
    if (activeCategory === 'todos') return true;
    return photo.category === activeCategory;
  });

  const getFilterStyle = (effect: typeof colorEffect) => {
    switch (effect) {
      case 'grayscale':
        return 'grayscale contrast-125 brightness-95';
      case 'sepia':
        return 'sepia brightness-90 contrast-110 saturate-120';
      case 'restore':
        return 'contrast-135 brightness-105 saturate-125';
      default:
        return 'brightness-100 contrast-100';
    }
  };

  return (
    <div className="space-y-6">
      {/* Introduction and Category Selectors */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 border-b-2 border-brand-red/30 pb-5">
        <div>
          <h3 className="text-2xl font-black text-brand-charcoal uppercase tracking-tight flex items-center gap-2">
            <LucideIcons.Image className="text-brand-red h-6 w-6" />
            Arquivo Fotográfico e Restauro de Memória
          </h3>
          <p className="text-sm text-slate-800 mt-1 max-w-2xl font-serif">
            Clique nas imagens históricas para as examinar no nosso laboratório de restauro. Pode aplicar lentes de época e aceder a relatórios pormenorizados de cada registo.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-1.5 matches-art-strip">
          {[
            { id: 'todos', label: 'Todos os Registos' },
            { id: 'simbolos', label: 'Símbolos' },
            { id: 'militares', label: 'Operações' },
            { id: 'celebracao', label: 'Efervescência' },
            { id: 'ruas', label: 'As Ruas' }
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 cursor-pointer rounded-none text-[11px] font-sans font-black uppercase tracking-wider transition-all ${
                activeCategory === cat.id
                  ? 'bg-brand-red text-white border-2 border-brand-red'
                  : 'bg-brand-cream hover:bg-brand-beige text-brand-charcoal border-2 border-brand-red/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Lab controls */}
      <div className="bg-[#120406] text-slate-100 p-4 rounded-none border-2 border-brand-red flex flex-col md:flex-row gap-3 items-center justify-between shadow-sm">
        <div className="flex items-center gap-2">
          <LucideIcons.Tv className="text-brand-red h-4 w-4 animate-pulse" />
          <span className="text-xs font-sans font-bold tracking-widest uppercase">
            Mesa de Revelação Analógica • Retícula & Filtro
          </span>
        </div>
        <div className="flex items-center gap-1.5 bg-[#1C1717] p-1.5 border border-brand-red/30 rounded-none">
          <span className="text-[10px] text-slate-400 px-2 font-sans font-black uppercase tracking-wider">LENTE FILTRO:</span>
          {(['original', 'grayscale', 'sepia', 'restore'] as const).map(effect => (
            <button
              key={effect}
              onClick={() => setColorEffect(effect)}
              className={`px-3 py-1 cursor-pointer rounded-none text-[10px] font-sans font-black tracking-widest transition-all uppercase ${
                colorEffect === effect
                  ? 'bg-brand-red text-white'
                  : 'text-slate-350 hover:bg-brand-red/20'
              }`}
            >
              {effect === 'restore' ? 'Restauro' : effect}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Photographies */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPhotos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ y: -4 }}
            className="bg-brand-beige rounded-none border-2 border-brand-red p-3.5 flex flex-col justify-between cursor-pointer"
            onClick={() => setSelectedPhoto(photo)}
          >
            {/* Photographic Frame Container */}
            <div className="relative bg-[#120406] aspect-[4/3] overflow-hidden flex items-center justify-center border border-brand-red/40 group">
              <img
                src={photo.url}
                alt={photo.title}
                referrerPolicy="no-referrer"
                className={`w-full h-full object-cover transition-all duration-350 ${getFilterStyle(colorEffect)} group-hover:scale-105`}
              />
              <div className="absolute top-2 right-2 bg-brand-red text-white px-2 py-0.5 rounded-none text-[9px] font-sans font-black uppercase tracking-wider">
                {photo.date.split(' de ')[0]}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all flex items-end p-3">
                <span className="text-white text-xs font-sans font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <LucideIcons.Search className="h-3.5 w-3.5 text-brand-red" />
                  Examinar Chapa
                </span>
              </div>
            </div>

            {/* Photo Info */}
            <div className="pt-4 flex-grow flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-sans tracking-widest font-black text-brand-red uppercase">
                  {photo.category === 'simbolos' ? 'ÍCONES & CRAWOS' : photo.category === 'militares' ? 'GENEALOGIA MILITAR' : photo.category === 'celebracao' ? 'EFERVESCÊNCIA POPULAR' : 'REGISTOS DE RUA'}
                </span>
                <h4 className="text-base font-serif font-black text-brand-charcoal uppercase tracking-tight mt-0.5 line-clamp-1">{photo.title}</h4>
                <p className="text-xs text-slate-700 mt-1 line-clamp-2 leading-relaxed font-serif">{photo.description}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-brand-red/20 flex items-center justify-between text-[11px] font-serif text-slate-600 font-bold">
                <span className="flex items-center gap-1">
                  <LucideIcons.Camera className="h-3 w-3 text-brand-red" />
                  {photo.author}
                </span>
                <LucideIcons.ArrowUpRight className="h-3.5 w-3.5 text-brand-red" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal - Photographic Zoom and Historical Analysis */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-black/95"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-brand-cream rounded-none w-full max-w-4xl max-h-[90vh] overflow-hidden border-4 border-brand-red text-brand-charcoal shadow-2xl flex flex-col lg:flex-row"
              onClick={e => e.stopPropagation()}
            >
              {/* Photo Frame */}
              <div className="lg:w-1/2 bg-[#120406] flex flex-col items-center justify-center relative p-3 min-h-[300px] lg:min-h-0">
                <img
                  src={selectedPhoto.url}
                  alt={selectedPhoto.title}
                  referrerPolicy="no-referrer"
                  className={`w-full h-full max-h-[45vh] lg:max-h-full object-contain ${getFilterStyle(colorEffect)}`}
                />
                
                {/* Vintage stamp effect */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black/75 py-1.5 px-3 rounded-none border border-brand-red/30 text-white/90 text-[10px] font-sans font-bold uppercase tracking-wider">
                  <span>Autor: {selectedPhoto.author}</span>
                  <span>{selectedPhoto.date}</span>
                </div>
              </div>

              {/* Document/Analysis Frame */}
              <div className="lg:w-1/2 p-6 overflow-y-auto flex flex-col justify-between max-h-[45vh] lg:max-h-full space-y-6">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-sans font-extrabold tracking-widest text-brand-red border border-brand-red/30 uppercase bg-brand-cream py-1 px-2.5 rounded-none">
                      REGISTO HISTÓRICO Nº {selectedPhoto.id.toUpperCase()}
                    </span>
                    <button
                      onClick={() => setSelectedPhoto(null)}
                      className="text-slate-500 hover:text-brand-red hover:bg-brand-red/10 p-1.5 rounded-none cursor-pointer"
                    >
                      <LucideIcons.X className="h-5 w-5" />
                    </button>
                  </div>

                  <h3 className="text-xl md:text-2xl font-serif font-black tracking-tight text-brand-charcoal mt-1 uppercase">{selectedPhoto.title}</h3>
                  <p className="text-xs text-slate-500 font-sans font-bold uppercase mt-1 flex items-center gap-1">
                    <LucideIcons.Calendar className="h-3.5 w-3.5 text-brand-red" />
                    Datação: {selectedPhoto.date}
                  </p>

                  <div className="h-[2px] bg-brand-red/30 my-4" />

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-[10px] font-sans font-bold uppercase tracking-widest text-slate-500 mb-1.5">
                        Transgresso de Legenda
                      </h4>
                      <p className="text-sm text-slate-800 italic border-l-4 border-brand-red pl-3 leading-relaxed font-serif">
                        "{selectedPhoto.description}"
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#1a1a1a]/70 mb-1.5">
                        Relatório & Enquadramento Colonial-Histórico
                      </h4>
                      <p className="text-xs md:text-sm text-slate-800 leading-relaxed font-serif">
                        {selectedPhoto.longStory}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-red/30 flex flex-wrap gap-2 items-center justify-between text-xs font-sans font-bold uppercase tracking-wider text-slate-500">
                  <span className="tracking-wide">ARQUIVO DE ABRIL 1974</span>
                  <button
                    onClick={() => setSelectedPhoto(null)}
                    className="bg-brand-red hover:bg-brand-red/90 cursor-pointer text-white text-[11px] font-black uppercase tracking-widest px-4 py-2 rounded-none shadow-sm flex items-center gap-1.5"
                  >
                    <LucideIcons.X className="h-4 w-4" />
                    Fechar Ficha
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
