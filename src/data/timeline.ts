import { TimelineEvent } from '../types';

export const timelineEvents: TimelineEvent[] = [
  {
    id: 'sinal-1',
    time: '22:55',
    date: '24 de Abril de 1974',
    title: 'O Primeiro Sinal: "E Depois do Adeus"',
    description: 'A canção de Paulo de Carvalho é transmitida pelos Emissores Associados de Lisboa. Era o primeiro sinal de rádio combinado.',
    type: 'sinal',
    location: 'Lisboa (Emissores Associados)',
    iconName: 'Radio',
    detailedText: 'Este foi o sinal de alerta secreto emitido para garantir que as unidades militares rebeldes estavam prontas. A canção de Paulo de Carvalho tinha representado Portugal no Festival Eurovisão da Canção semanas antes. Como era uma canção de amor banal, a censura do regime nunca desconfiou. Ao ouvirem a canção, os militares do Movimento das Forças Armadas (MFA) começaram a preparar as suas viaturas e armamentos nos quartéis.'
  },
  {
    id: 'sinal-2',
    time: '00:20',
    date: '25 de Abril de 1974',
    title: 'O Sinal Definitivo: "Grândola, Vila Morena"',
    description: 'A canção de Zeca Afonso é transmitida na Rádio Renascença. Confirma o golpe militar em curso.',
    type: 'sinal',
    location: 'Lisboa (Rádio Renascença)',
    iconName: 'Music',
    detailedText: 'O sinal de confirmação definitivo e irrevogável para o início das operações de avanço militar foi a transmissão da canção de intervenção de Zeca Afonso, "Grândola, Vila Morena", que estava proibida pelo regime. Foi transmitida pelo jornalista Limite da Rádio Renascença. A canção cantava o povo que governa na terra da fraternidade, tornando-se o hino eterno do 25 de Abril e da liberdade em Portugal.'
  },
  {
    id: 'militar-vanguarda',
    time: '03:00',
    date: '25 de Abril de 1974',
    title: 'O Avanço das Colunas Militares',
    description: 'Forças capitaneadas pelo MFA saem dos quartéis em todo o país. O capitão Salgueiro Maia lidera a coluna de Santarém.',
    type: 'militar',
    location: 'Santarém a Lisboa',
    iconName: 'Truck',
    detailedText: 'Sob o comando de capitães revolucionários, unidades militares de peso saíram das casernas. O capitão Salgueiro Maia, comandante da Escola Prática de Cavalaria de Santarém, comandou uma coluna blindada com 10 autometralhadoras e mais de 200 homens em direção a Lisboa. Ao partir, Maia proferiu a icónica frase: "Há diversas modalidades de Estado: os estados socialistas, os estados corporativos e o estado a que isto chegou. Ora, nesta noite solene, vamos pôr fim a este estado!"'
  },
  {
    id: 'ocupacao-lisboa',
    time: '04:20',
    date: '25 de Abril de 1974',
    title: 'Controlo dos Meios de Comunicação',
    description: 'Unidades do MFA tomam o Rádio Clube Português, o aeroporto de Lisboa e a RTP.',
    type: 'militar',
    location: 'Rua Sampaio e Pina, Lisboa',
    iconName: 'Server',
    detailedText: 'Para garantir o sucesso sem derramamento de sangue, o MFA tomou pontos de comunicação cruciais. Ao controlar o Rádio Clube Português (RCP), o MFA começou a transmitir comunicados apelando aos cidadãos para que permanecessem nas suas casas e aos polícias para não oferecerem resistência.'
  },
  {
    id: 'terreiro-paco',
    time: '06:15',
    date: '25 de Abril de 1974',
    title: 'O Cerco ao Terreiro do Paço',
    description: 'A coluna liderada por Salgueiro Maia ocupa o Terreiro do Paço, cercando os ministérios principais do governo.',
    type: 'militar',
    location: 'Terreiro do Paço, Lisboa',
    iconName: 'Shield',
    detailedText: 'Maia e os seus homens tomam posições no Terreiro do Paço, onde ficavam os órgãos ministeriais. Forças fiéis ao regime recebem ordens para disparar sobre a coluna revolucionária, mas os soldados recusam-se a obedecer aos seus generais loyalistas. Os oficiais opressores são confrontados pelo heroísmo pacífico dos revoltosos, acabando por se render.'
  },
  {
    id: 'flores-canhao',
    time: '09:00',
    date: '25 de Abril de 1974',
    title: 'A Origem dos Cravos Vermelhos',
    description: 'Celeste Caeiro distribui cravos vermelhos nos soldados e estes colocam as flores nas bocas dos fuzis.',
    type: 'popular',
    location: 'Chiado, Lisboa',
    iconName: 'Flower',
    detailedText: 'Celeste Caeiro trabalhava num restaurante que celebrava o seu primeiro aniversário a 25 de Abril de 1974. Tendo o festejo sido cancelado devido ao golpe, o gerente deu-lhe os cravos vermelhos que tinham comprado para decoração. Ao caminhar pela rua, Celeste encontrou os militares e, a pedido de um soldado que queria um cigarro, deu-lhe um cravo vermelho, que ele colocou no cano da sua G3. O gesto repetiu-se imediatamente nos restantes soldados, batizando a revolução.'
  },
  {
    id: 'cerco-carmo',
    time: '11:00',
    date: '25 de Abril de 1974',
    title: 'O Cerco ao Quartel do Carmo',
    description: 'O povo junta-se aos militares de Salgueiro Maia para sitiar o Quartel da GNR no Carmo, onde está Marcello Caetano.',
    type: 'popular',
    location: 'Largo do Carmo, Lisboa',
    iconName: 'Users',
    detailedText: 'Ignorando os apelos do MFA para ficarem em casa, milhares de lisboetas saem às ruas apoiando os militares. Rodeiam Salgueiro Maia no Largo do Carmo. Dentro do Quartel do Carmo, o sucessor de António de Oliveira Salazar, Marcello Caetano, e vários governantes, encontravam-se encurralados.'
  },
  {
    id: 'rendicao-caetano',
    time: '18:00',
    date: '25 de Abril de 1974',
    title: 'A Queda do Regime: Rendição de Caetano',
    description: 'Marcello Caetano aceita render-se e entrega o poder ao General António de Spínola.',
    type: 'politico',
    location: 'Quartel do Carmo, Lisboa',
    iconName: 'FileText',
    detailedText: 'Marcello Caetano pede para falar com um oficial de patente elevada e recusa render-se a Salgueiro Maia (que era apenas capitão). O General António de Spínola, que tinha divergências profundas sobre a governação colonialistas, é chamado para receber a rendição, a fim de evitar que, segundo Caetano, "o poder caia na rua". Caetano é deposto e exilado para o Brasil.'
  },
  {
    id: 'junta-salvacao',
    time: '01:30',
    date: '26 de Abril de 1974',
    title: 'A Proclamação da Democracia',
    description: 'É apresentada a Junta de Salvação Nacional na RTP. Terminam oficialmente 48 anos de ditadura.',
    type: 'politico',
    location: 'Estúdios da RTP, Lisboa',
    iconName: 'Tv',
    detailedText: 'Durante a madrugada do dia 26 de Abril de 1974, a Junta de Salvação Nacional (composta por generais das Forças Armadas) proclama um manifesto ao país. Promete o fim da polícia política (PIDE/DGS), a libertação de todos os presos políticos, o fim da censura à imprensa e a realização de eleições livres num ano.'
  }
];
