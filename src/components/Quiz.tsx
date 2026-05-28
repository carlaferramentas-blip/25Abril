import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { quizQuestions } from '../data/quiz';
import * as LucideIcons from 'lucide-react';

export default function Quiz() {
  const [studentName, setStudentName] = useState<string>('');
  const [quizStarted, setQuizStarted] = useState<boolean>(false);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  const currentQuestion = quizQuestions[currentIdx];

  const handleStartQuiz = (e: React.FormEvent) => {
    e.preventDefault();
    if (studentName.trim()) {
      setQuizStarted(true);
    }
  };

  const handleOptionSelect = (optionIdx: number) => {
    if (isAnswerRevealed) return;
    setSelectedOpt(optionIdx);
  };

  const handleVerifyAnswer = () => {
    if (selectedOpt === null || isAnswerRevealed) return;
    setIsAnswerRevealed(true);
    if (selectedOpt === currentQuestion.correctOption) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOpt(null);
    setIsAnswerRevealed(false);
    if (currentIdx < quizQuestions.length - 1) {
      setCurrentIdx(prev => prev + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentIdx(0);
    setSelectedOpt(null);
    setIsAnswerRevealed(false);
    setScore(0);
    setQuizFinished(false);
    setQuizStarted(false);
    setStudentName('');
  };

  // Score description evaluation
  const getScoreTitle = (finalScore: number) => {
    const ratio = finalScore / quizQuestions.length;
    if (ratio === 1) return 'Capitão da Liberdade';
    if (ratio >= 0.75) return 'Defensor Alerta de Abril';
    if (ratio >= 0.5) return 'Estudante Constitucionalista';
    return 'Recruta Aprendiz de Abril';
  };

  return (
    <div className="max-w-3xl mx-auto bg-white border border-slate-150 rounded-2xl shadow-sm overflow-hidden min-h-[460px] flex flex-col justify-between">
      {/* Quiz Intro Screen */}
      <AnimatePresence mode="wait">
        {!quizStarted && (
          <motion.div
            key="quiz-intro"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="p-8 text-center space-y-6 flex-grow flex flex-col justify-center items-center"
          >
            <div className="h-16 w-16 bg-red-50 text-red-650 rounded-full flex items-center justify-center border-2 border-red-100">
              <LucideIcons.Award className="h-8 w-8 animate-bounce" />
            </div>

            <div className="space-y-2 max-w-md">
              <h3 className="text-xl font-bold text-slate-800">Quiz Educativo: Teste o Teu Conhecimento</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Descobre se sabes tudo sobre as senhas secretas de rádio, as viaturas de Salgueiro Maia, os cravos vermelhos e a fundação da democracia portuguesa. Introduz o teu nome para começares e obteres o teu certificado final de mérito!
              </p>
            </div>

            <form onSubmit={handleStartQuiz} className="w-full max-w-sm space-y-3 pt-2">
              <div className="text-left">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-sans block mb-1">
                  Nome do Aluno / Cidadão:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Maria Santos ou João Silva"
                  value={studentName}
                  onChange={e => setStudentName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-400/50 bg-slate-50 transition-all font-sans text-xs font-semibold text-slate-800"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 cursor-pointer text-white text-xs font-bold py-3 px-6 rounded-xl shadow-md shadow-red-600/25 flex items-center justify-center gap-2 transition-all"
              >
                <LucideIcons.PlayCircle className="h-4 w-4" />
                Iniciar Desafios de Abril
              </button>
            </form>
          </motion.div>
        )}

        {/* Quiz Active Gameplay Screen */}
        {quizStarted && !quizFinished && (
          <motion.div
            key="quiz-play"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-6 md:p-8 flex flex-col h-full justify-between flex-grow"
          >
            {/* Play header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
              <div>
                <span className="text-[9px] font-mono font-bold uppercase text-slate-400 tracking-wider">
                  SESSÃO ATIVA // INTERATIVIDADE EDUCATIVA
                </span>
                <p className="text-xs font-bold text-slate-700">Aluno: {studentName}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-600">
                  Pergunta {currentIdx + 1} de {quizQuestions.length}
                </span>
                <div className="w-24 bg-slate-100 h-2 rounded overflow-hidden">
                  <div
                    className="bg-red-600 h-full transition-all duration-350"
                    style={{ width: `${((currentIdx + 1) / quizQuestions.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Question body */}
            <div className="space-y-5 flex-grow">
              <h4 className="text-base font-bold text-slate-850 leading-snug font-sans">
                {currentQuestion.question}
              </h4>

              {/* Options list */}
              <div className="grid grid-cols-1 gap-3 pt-2">
                {currentQuestion.options.map((option, oIdx) => {
                  const isSelected = selectedOpt === oIdx;
                  const isCorrect = currentQuestion.correctOption === oIdx;
                  
                  let optionStyle = 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50';
                  
                  if (isAnswerRevealed) {
                    if (isCorrect) {
                      optionStyle = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-semibold';
                    } else if (isSelected) {
                      optionStyle = 'bg-red-50 border-red-300 text-red-900 line-through';
                    } else {
                      optionStyle = 'bg-white border-slate-100 text-slate-400 opacity-60';
                    }
                  } else if (isSelected) {
                    optionStyle = 'bg-red-50 border-red-500 text-red-950 font-bold ring-2 ring-red-400/20';
                  }

                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleOptionSelect(oIdx)}
                      className={`w-full text-left p-3.5 rounded-xl border text-xs cursor-pointer transition-all flex items-start gap-3 justify-between ${optionStyle}`}
                      disabled={isAnswerRevealed}
                    >
                      <div className="flex items-start gap-2.5">
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center font-mono font-bold text-[10px] sm:text-xs mt-0.2 ${
                          isSelected ? 'bg-red-650 text-white' : 'bg-slate-100 text-slate-600'
                        }`}>
                          {String.fromCharCode(65 + oIdx)}
                        </span>
                        <span className="leading-relaxed font-medium">{option}</span>
                      </div>
                      {isAnswerRevealed && isCorrect && (
                        <LucideIcons.CheckCircle className="h-4.5 w-4.5 text-emerald-600 shrink-0" />
                      )}
                      {isAnswerRevealed && isSelected && !isCorrect && (
                        <LucideIcons.XCircle className="h-4.5 w-4.5 text-red-650 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation Overlay */}
              <AnimatePresence>
                {isAnswerRevealed && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl text-xs flex gap-3 ${
                      selectedOpt === currentQuestion.correctOption
                        ? 'bg-emerald-50/70 border border-emerald-150 text-emerald-950'
                        : 'bg-red-50/70 border border-red-150 text-red-950'
                    }`}
                  >
                    <div className="shrink-0 mt-0.5">
                      <LucideIcons.BookOpen className="h-4.5 w-4.5 text-slate-600" />
                    </div>
                    <div className="space-y-1">
                      <span className="font-bold block text-[10px] uppercase font-mono tracking-wider">
                        ENQUADRAMENTO PEDAGÓGICO:
                      </span>
                      <p className="leading-relaxed font-sans">{currentQuestion.explanation}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Verification and Navigation Controls */}
            <div className="flex items-center justify-end gap-3 pt-6 border-t border-slate-100 mt-6">
              {!isAnswerRevealed ? (
                <button
                  onClick={handleVerifyAnswer}
                  disabled={selectedOpt === null}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold tracking-wide flex items-center gap-1.5 transition-all shadow-sm ${
                    selectedOpt === null
                      ? 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200'
                      : 'bg-slate-900 hover:bg-slate-950 text-white cursor-pointer shadow-slate-900/10'
                  }`}
                >
                  <LucideIcons.Check className="h-4 w-4" />
                  Verificar Resposta
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="px-5 py-2.5 cursor-pointer rounded-xl bg-red-650 hover:bg-red-700 text-white text-xs font-bold tracking-wide flex items-center gap-1.5 transition-all shadow-md shadow-red-600/20"
                >
                  {currentIdx === quizQuestions.length - 1 ? (
                    <>
                      <LucideIcons.Award className="h-4 w-4 animate-spin-slow" />
                      Concluir e Obter Certificado
                    </>
                  ) : (
                    <>
                      Continuar
                      <LucideIcons.ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              )}
            </div>
          </motion.div>
        )}

        {/* Certificate / Results Screen */}
        {quizFinished && (
          <motion.div
            key="quiz-finished"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="p-8 space-y-6 flex-grow flex flex-col items-center justify-center text-center bg-amber-50/20"
          >
            {/* Certificado de Cidadão de Abril rendering frame */}
            <div className="w-full max-w-2xl bg-[#FFFFFC] border-8 border-amber-900/25 p-6 rounded-2xl shadow-xl relative border-double flex flex-col justify-between min-h-[380px]">
              {/* Filigree decorative corners */}
              <div className="absolute top-2 left-2 text-amber-950/20 font-serif text-lg">✻</div>
              <div className="absolute top-2 right-2 text-amber-950/20 font-serif text-lg">✻</div>
              <div className="absolute bottom-2 left-2 text-amber-950/20 font-serif text-lg">✻</div>
              <div className="absolute bottom-2 right-2 text-amber-950/20 font-serif text-lg">✻</div>

              {/* Title group */}
              <div className="space-y-1 text-center">
                <span className="text-[10px] font-bold tracking-widest text-amber-950/60 uppercase block font-mono">
                  REPÚBLICA PORTUGUESA // COMISSÃO DE EDUCAÇÃO CÍVICA
                </span>
                <h4 className="text-xl md:text-2xl font-serif text-amber-900 border-b border-amber-200/60 pb-3 font-bold">
                  Certificado de Mérito
                </h4>
              </div>

              {/* Certificate wording body */}
              <div className="py-4 space-y-3 font-serif">
                <p className="text-xs text-slate-500 italic">Certifica-se solemnemente que</p>
                <h5 className="text-lg md:text-2xl font-bold font-serif text-slate-900 tracking-tight">
                  {studentName}
                </h5>
                <p className="text-xs text-slate-650 leading-relaxed max-w-md mx-auto">
                  concluiu com sucesso o teste de cidadania e história e detém o estatuto oficial e moral de <span className="font-bold text-red-750 text-red-700 underline">{getScoreTitle(score)}</span>, tendo acertado na proporção brilhante de <span className="font-mono font-bold bg-amber-100 px-2.5 py-0.5 rounded border border-amber-200 text-amber-900">{score} em {quizQuestions.length}</span> questionários sobre a Revolução dos Cravos de 25 de Abril de 1974.
                </p>
              </div>

              {/* Hand signatures simulated below */}
              <div className="border-t border-amber-200/50 pt-4 grid grid-cols-2 gap-4 text-[10px] text-slate-500 font-mono items-center">
                <div className="space-y-1">
                  <span className="signature-style block text-amber-950/70 font-serif border-b border-slate-300 italic h-6">
                    Salgueiro Maia
                  </span>
                  <span>O Júri do Posto de Comando</span>
                </div>
                <div className="space-y-1">
                  <span className="signature-style block text-amber-950/70 font-serif border-b border-slate-300 italic h-6">
                    Celeste Caeiro
                  </span>
                  <span>A Comissão dos Cravos</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-3 items-center justify-center pt-2">
              <button
                onClick={handleRestartQuiz}
                className="px-5 py-2.5 cursor-pointer rounded-lg bg-slate-900 hover:bg-slate-950 text-white text-xs font-bold tracking-wide flex items-center gap-1.5 transition-all shadow-md"
              >
                <LucideIcons.RotateCcw className="h-4 w-4" />
                Refazer Quiz de Novo
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
