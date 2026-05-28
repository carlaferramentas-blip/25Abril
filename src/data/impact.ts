import { ImpactArea } from '../types';

export const impactAreas: ImpactArea[] = [
  {
    id: 'censura-liberdade',
    title: 'Fim da Censura ("O Lápis Azul")',
    description: 'A queda do regime restaurou a liberdade de expressão, pondo fim ao odiado Exame Prévio que controlava tudo o que se lia, ouvia e publicava.',
    iconName: 'EyeOff',
    before: {
      title: 'Sob a Ditadura do Estado Novo',
      description: 'O chamado "Lápis Azul" da Censura inspecionava jornais, livros, peças de teatro, filmes e canções. Críticas ao regime, relatos de miséria, greves ou notícias de guerra colonial eram apagados. A oposição era vigiada e reprimida pela polícia política (PIDE/DGS).',
      points: [
        'Comissão de Censura analisava jornais antes de irem ao prelo.',
        'Música de intervenção (Zeca Afonso, Adriano Correia de Oliveira) era proibida.',
        'Inexistência de partidos políticos livres, sindicatos livres e direito à greve.',
        'Prisões políticas e torturas em Peniche, Caxias e Tarrafal.'
      ]
    },
    after: {
      title: 'Com o Regime Democrático',
      description: 'A Constituição de 1976 consagrou a liberdade de pensamento, de imprensa e de associação política. Críticas e sátiras ao governo passaram a ser livres. Jornais independentes surgiram e a vida partidária e sindical floresceu de forma marcante.',
      points: [
        'Fim imediato de qualquer exame ou censura prévia.',
        'Consagração da liberdade constitucional de imprensa e rádio.',
        'Legalização de sindicatos e direito à greve dos trabalhadores.',
        'Liberdade artística total, permitindo cinema e teatro de intervenção livre.'
      ]
    },
    stats: [
      { label: 'Jornais e Revistas Censuradas', beforeVal: '100% (Submetidos ao Lápis Azul)', afterVal: '0% (Fim Total)' },
      { label: 'Partidos Políticos Legais', beforeVal: '0 (Apenas a União Nacional)', afterVal: 'Dezenas (Liberdade Plural)' }
    ]
  },
  {
    id: 'direitos-mulheres',
    title: 'Igualdade e Direitos das Mulheres',
    description: 'Até ao 25 de Abril, as mulheres eram legalmente submetidas aos maridos e pais. A revolução iniciou uma revolução social para a igualdade de género.',
    iconName: 'Female', // represented via custom icon fallback
    before: {
      title: 'Submissão e Falta de Direitos',
      description: 'Segundo o Código Civil do Estado Novo, a mulher casada pertencia à chefia do marido e precisava de autorização para viajar, obter passaporte, abrir conta bancária ou candidatar-se a certas profissões (como magistratura, diplomacia ou enfermagem).',
      points: [
        'Mulheres casadas não podiam sair do país sem consentimento do marido.',
        'O marido podia ler e abrir a correspondência da mulher.',
        'Diferenças salariais abissais consagradas por lei.',
        'Voto feminino limitado apenas a mulheres com cursos secundários ou que fossem chefes de família.'
      ]
    },
    after: {
      title: 'Igualdade de Direitos Consagrada',
      description: 'Após a revolução, a Constituição de 1976 consagrou a igualdade jurídica absoluta entre géneros. O Código Civil foi reformulado em 1977, removendo a supremacia masculina do seio familiar. Instituiu-se a igualdade salarial formal e o voto universal.',
      points: [
        'Igualdade absoluta de direitos e deveres civis no matrimónio.',
        'Livre acesso das mulheres a todas as carreiras (magistratura, diplomacia, etc.).',
        'Sufrágio universal pleno: todas as mulheres têm direito de voto nas mesmas condições.',
        'Direitos de licença de maternidade e planeamento familiar gratuito.'
      ]
    },
    stats: [
      { label: 'Acesso a Carreiras Jurídicas/Diplomáticas', beforeVal: 'Interditado por Lei', afterVal: 'Acesso Pleno Igualitário' },
      { label: 'Taxa de Emprego Feminino', beforeVal: 'Extremamente Reduzida / Doméstica', afterVal: 'Consolidada e Protegida' }
    ]
  },
  {
    id: 'educacao-literacia',
    title: 'Democratização da Educação',
    description: 'A ditadura mantinha o povo sob elevados níveis de iliteracia para evitar a contestação. A democracia criou um ensino público, gratuito e universal.',
    iconName: 'GraduationCap',
    before: {
      title: 'Ensino Elitista e Analfabetismo',
      description: 'O regime de Salazar desvalorizava o ensino formal para as classes populares, defendendo o "saber ler, escrever e contar com simplicidade". O ensino era segregado, elitista e propício ao abandono escolar precoce.',
      points: [
        'Mais de um terço da população portuguesa era completamente analfabeta.',
        'Escolaridade obrigatória fixada em apenas 3 ou 4 anos.',
        'Escolas sem recursos básicos, aquecimento ou material pedagógico.',
        'Ensino superior reservado apenas às elites económicas do país.'
      ]
    },
    after: {
      title: 'Escola Pública para Todos',
      description: 'Criou-se a Rede Nacional de Ensino Primário e Secundário Público, com investimento massivo de modo a reduzir as assimetrias regionais. As propinas universitárias tornaram-se acessíveis e foram lançadas campanhas massivas de alfabetização de adultos.',
      points: [
        'Instalação do Serviço Nacional de Educação Público, Gratuito e Universal.',
        'Aumento gradual da escolaridade obrigatória para as atuais 12 classes.',
        'Criação de novos polos e universidades públicas por todo o país.',
        'Abertura de infantários e jardins de infância públicos.'
      ]
    },
    stats: [
      { label: 'Taxa de Analfabetismo', beforeVal: '33.6% (1970)', afterVal: 'Menos de 4.5% (Atualidade)' },
      { label: 'Estudantes no Ensino Superior', beforeVal: 'Aprox. 50,000', afterVal: 'Mais de 400,000 (Atualidade)' }
    ]
  },
  {
    id: 'paz-guerra',
    title: 'Fim da Guerra Colonial',
    description: 'Durante 13 anos, milhares de jovens foram sacrificados em três frentes de batalha em África. O 25 de Abril trouxe a paz e iniciou a descolonização.',
    iconName: 'Heart',
    before: {
      title: 'O Fardo da Guerra Ultramarina',
      description: 'Desde 1961, Portugal travava uma guerra sangrenta em Angola, Moçambique e Guiné-Bissau para manter as colónias, isolando o país diplomaticamente ("Orgulhosamente sós"). Milhares de jovens morriam ou ficavam mutilados física e psicologicamente.',
      points: [
        'Mais de 1 milhão de jovens mobilizados militarmente ao longo da guerra.',
        'Quase 40% do orçamento do Estado absorvido diretamente por despesas militares.',
        'Serviço militar obrigatório de 2 a 4 anos sob condições duríssimas.',
        'Emigração clandestina massiva ("a salto") de jovens que fugiam à guerra.'
      ]
    },
    after: {
      title: 'Paz, Descolonização e Integração',
      description: 'O MFA decretou o cessar-fogo imediato na Guiné, Angola e Moçambique nas primeiras semanas. Portugal reconheceu o direito à autodeterminação e independência das antigas províncias ultramarinas, pondo termo à guerra civilizacional.',
      points: [
        'Fim imediato dos combates e repatriamento das tropas nacionais.',
        'Independência diplomática dos novos países de expressão portuguesa.',
        'Reinserção e acolhimento dos antigos combatentes mutilados.',
        'Mudança de rumo estratégico de Portugal em direção à integração Europeia.'
      ]
    },
    stats: [
      { label: 'Despesas do Estado em Guerra', beforeVal: '38% do Orçamento', afterVal: '0% (Redirecionado para Saúde e Escolas)' },
      { label: 'Efetivo Militar Ativo em África', beforeVal: '150,000 Soldados em simultâneo', afterVal: 'Nenhum (Paz Consolidada)' }
    ]
  }
];
