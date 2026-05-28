import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'q-1',
    question: 'Qual foi a primeira canção transmitida na rádio como alerta preliminar secreto aos quartéis revolucionários?',
    options: [
      'Grândola, Vila Morena (Zeca Afonso)',
      'E Depois do Adeus (Paulo de Carvalho)',
      'Tourada (Fernando Tordo)',
      'Canto da Primavera (Adriano Correia de Oliveira)'
    ],
    correctOption: 1,
    explanation: 'A canção "E Depois do Adeus" foi transmitida às 22:55 do dia 24 de Abril pelos Emissores Associados de Lisboa. Era o primeiro sinal combinado para que os militares revoltosos fizessem os preparativos nos seus quartéis.'
  },
  {
    id: 'q-2',
    question: 'Quem foi o histórico capitão de cavalaria que liderou a coluna militar de Santarém e o cerco ao Carmo?',
    options: [
      'Gomes da Costa',
      'António de Spínola',
      'Vasco Gonçalves',
      'Salgueiro Maia'
    ],
    correctOption: 3,
    explanation: 'O Capitão de Abril Fernando Salgueiro Maia comandou os homens da Escola Prática de Cavalaria de Santarém, liderando as forças no Terreiro do Paço e chefiando o cerco decisivo ao Quartel do Carmo.'
  },
  {
    id: 'q-3',
    question: 'Qual foi o gesto de Celeste Caeiro que acabou por dar o nome e símbolo à Revolução?',
    options: [
      'Ofereceu pão aos soldados refugiados',
      'Distribuiu cravos vermelhos que os soldados colocaram nos canos das espingardas',
      'Desfraldou a primeira bandeira de Portugal livre na varanda do Carmo',
      'Escreveu um poema na parede do Quartel da GNR'
    ],
    correctOption: 1,
    explanation: 'Celeste Caeiro trazia cravos vermelhos nos braços que tinham sobrado de um restaurante. Ao ver um soldado pedir-lhe um cigarro, deu-lhe um cravo. Mais soldados quiseram, e rapidamente colocaram as flores nos canos dos fuzis G3.'
  },
  {
    id: 'q-4',
    question: 'Onde se refugiou o líder do governo ditatorial, Marcello Caetano, antes de se render aos revoltosos?',
    options: [
      'Forte de Peniche',
      'Palácio de Belém',
      'Quartel da GNR no Largo do Carmo',
      'Aeroporto da Portela'
    ],
    correctOption: 2,
    explanation: 'Marcello Caetano e os seus ministros refugiaram-se no Quartel do Carmo (Largo do Carmo, Lisboa). O quartel foi cercado pelas forças comandadas por Salgueiro Maia e por uma multidão esmagadora de cidadãos.'
  },
  {
    id: 'q-5',
    question: 'Qual era a emblemática canção proibida de Zeca Afonso que tocou às 00:20, dando o sinal de avanço definitivo?',
    options: [
      'Grândola, Vila Morena',
      'Pedra Filosofal',
      'A Morte Saiu à Rua',
      'Os Índios da Meia-Praia'
    ],
    correctOption: 0,
    explanation: 'A transmissão de "Grândola, Vila Morena" às 00:20 do dia 25 de Abril, no programa "Limite" da Rádio Renascença, serviu como confirmação absoluta de que as operações militares rebeldes tinham começado oficialmente.'
  },
  {
    id: 'q-6',
    question: 'Como ficou conhecida a terrível e opressiva polícia política que vigiava e prendia os opositores do Estado Novo?',
    options: [
      'GNR (Guarda Nacional Republicana)',
      'PIDE / DGS (Polícia Internacional e de Defesa do Estado)',
      'PSP (Polícia de Segurança Pública)',
      'Censura Geral do Regime'
    ],
    correctOption: 1,
    explanation: 'A PIDE (posteriormente renomeada DGS) era a temível polícia política do regime de Salazar e Caetano. Usava de redes de informadores clandestinos, censura ativa, prisões políticas sem julgamento livre e tortura sistemática.'
  },
  {
    id: 'q-7',
    question: 'Como se denominava o regime de ditadura corporativista fascista que governou Portugal durante 41 anos (1933—1974)?',
    options: [
      'A República das Flores',
      'Império do Trigo',
      'Estado Novo',
      'Restauração da Independência'
    ],
    correctOption: 2,
    explanation: 'O "Estado Novo" foi o regime ditatorial autocrático e corporativista fundado em 1933 por António de Oliveira Salazar. Caracterizava-se pelo nacionalismo católico, repressão política, colonialismo intransigente e atraso educativo.'
  },
  {
    id: 'q-8',
    question: 'Qual destas foi uma mudança social e de direitos humanos imediata após a queda da ditadura?',
    options: [
      'Início do serviço militar obrigatório para crianças',
      'Fim da censura prévia à imprensa e libertação de presos políticos',
      'Entrada imediata de Portugal na Organização das Nações Unidas',
      'Aumento de horas de trabalho obrigatório gratuito'
    ],
    correctOption: 1,
    explanation: 'De imediato ao sucesso do dia 25 de Abril de 1974, a censura de imprensa ("Lápis Azul") foi extinta, os presos políticos que resistiam nos fortes de Peniche e Caxias foram libertados, e as liberdades sindicais e partidárias foram legalmente declaradas.'
  }
];
