export const editableFields = {
  productName: "Jornada Debaixo do Sol",
  productSubtitle: "Uma jornada bíblica em 4 movimentos baseada em Eclesiastes",
  companyName: "Acervo Seguro",
  supportEmail: "",
  privacyUrl: "",
  termsUrl: "",
  contactUrl: "",
  guaranteeDays: 7,
  accessDurationText: "Acesso ilimitado e download permanente dos arquivos em PDF para uso pessoal",
  
  // Oferta Consolidada da Jornada (4 materiais)
  singleOfferPrice: "R$ 19,90",
  singleOfferOldPrice: "",
  singleOfferCheckoutUrl: "", // Proprietário preencherá link da plataforma de pagamento

  // Rastreamento
  metaPixelId: "",
  googleAnalyticsId: "",
};

export const JOURNEY_MATERIALS = [
  {
    id: 1,
    movement: "MOVIMENTO 1 — COMPREENDER",
    title: "Quando Nada Parece Fazer Sentido",
    subtitle: "Compreender o que está acontecendo por dentro",
    desc: "Um e-book visual de 50 páginas com 20 lições para compreender as principais ideias de Eclesiastes e relacioná-las ao tempo, ao trabalho, às escolhas, aos relacionamentos e ao propósito.",
    highlights: [
      "Explicações claras",
      "Mapas visuais",
      "Perguntas de reflexão",
      "Práticas e orações",
    ],
    pages: 50,
    lessons: 20,
    isMain: true,
    coverSrc: "/images/page-1.webp",
  },
  {
    id: 2,
    movement: "MOVIMENTO 2 — ESPERAR",
    title: "Esperando sem Desperdiçar a Vida",
    subtitle: "Esperar sem abandonar o presente",
    desc: "Reflexões para atravessar períodos de espera sem colocar toda a vida em pausa e sem perder de vista aquilo que ainda pode ser vivido no presente.",
    highlights: [
      "Linguagem simples e direta",
      "Perspectiva bíblica sobre a espera",
      "Foco na presença diária",
    ],
    isMain: false,
    coverSrc: null, // Card visual temporário elegante
  },
  {
    id: 3,
    movement: "MOVIMENTO 3 — PAUSAR",
    title: "Pause Debaixo do Sol",
    subtitle: "Interromper o automático",
    desc: "Um material de pausa e reflexão para diminuir o ritmo, sair do automático e observar com mais atenção a vida que está acontecendo agora.",
    highlights: [
      "Exercícios de reflexão e pausa",
      "Identificação do ritmo acelerado",
      "Momentos de silêncio e presença",
    ],
    isMain: false,
    coverSrc: null, // Card visual temporário elegante
  },
  {
    id: 4,
    movement: "MOVIMENTO 4 — REORIENTAR",
    title: "Mapa do Vento",
    subtitle: "Reorientar prioridades e energia",
    desc: "Um guia de reflexão para reconhecer buscas, cobranças e movimentos que consomem energia sem produzir clareza, presença ou direção.",
    highlights: [
      "Mapeamento de prioridades",
      "Identificação de buscas vazias",
      "Redirecionamento de energia",
    ],
    isMain: false,
    coverSrc: null, // Card visual temporário elegante
  },
];

export const FOUR_MOVEMENTS = [
  {
    step: "1",
    label: "MOVIMENTO 1 — COMPREENDER",
    title: "Compreender o que está acontecendo por dentro",
    desc: "Observar a fase atual com honestidade e compreender as perguntas que Eclesiastes apresenta sobre tempo, trabalho, escolhas e propósito.",
    material: "Quando Nada Parece Fazer Sentido",
  },
  {
    step: "2",
    label: "MOVIMENTO 2 — ESPERAR",
    title: "Esperar sem abandonar o presente",
    desc: "Reconhecer que uma resposta ainda não chegou sem transformar toda a vida em uma sala de espera.",
    material: "Esperando sem Desperdiçar a Vida",
  },
  {
    step: "3",
    label: "MOVIMENTO 3 — PAUSAR",
    title: "Interromper o automático",
    desc: "Criar momentos de silêncio, reflexão e presença para perceber aquilo que a pressa normalmente esconde.",
    material: "Pause Debaixo do Sol",
  },
  {
    step: "4",
    label: "MOVIMENTO 4 — REORIENTAR",
    title: "Reorientar prioridades e energia",
    desc: "Identificar movimentos, expectativas e buscas que ocupam espaço sem produzir direção verdadeira.",
    material: "Mapa do Vento",
  },
];

export const PREVIEW_PAGES = [
  { num: 1, title: "Capa do E-book", desc: "Design elegante com iluminação clássica", src: "/images/page-1.webp" },
  { num: 2, title: "Apresentação", desc: "Visão geral e propósito da obra", src: "/images/page-2.webp" },
  { num: 4, title: "Como Utilizar a Jornada", desc: "Instruções e passo a passo de leitura", src: "/images/page-4.webp" },
  { num: 5, title: "O que é Eclesiastes", desc: "Contexto histórico e autoria", src: "/images/page-5.webp" },
  { num: 7, title: "Quatro Chaves de Leitura", desc: "Fundamentos para interpretação", src: "/images/page-7.webp" },
  { num: 8, title: "Mapa da Jornada", desc: "Estrutura visual completa dos temas", src: "/images/page-8.webp" },
];

export const METHOD_STEPS = [
  { step: "1", title: "Leia a referência", desc: "Comece pelo trecho bíblico indicado no material." },
  { step: "2", title: "Observe", desc: "Identifique a pergunta central, os símbolos e as ideias principais." },
  { step: "3", title: "Reflita com sinceridade", desc: "Relacione a mensagem com suas escolhas, expectativas, vínculos e rotina." },
  { step: "4", title: "Pratique algo pequeno", desc: "Transforme a reflexão em uma ação concreta e possível." },
  { step: "5", title: "Ore sem pressão", desc: "Converse com Deus utilizando a oração sugerida ou suas próprias palavras." },
];

export const FAQ_ITEMS = [
  {
    question: "O material é físico?",
    answer: "Não. A Jornada Debaixo do Sol é composta por materiais digitais, acessíveis em dispositivos compatíveis."
  },
  {
    question: "O que está incluído?",
    answer: "Você receberá os quatro materiais da jornada: Quando Nada Parece Fazer Sentido, Esperando sem Desperdiçar a Vida, Pause Debaixo do Sol e Mapa do Vento."
  },
  {
    question: "Preciso conhecer profundamente a Bíblia?",
    answer: "Não. O conteúdo foi organizado com uma linguagem clara e visual para facilitar a compreensão. As referências bíblicas permitem que você acompanhe a leitura diretamente na Bíblia."
  },
  {
    question: "Preciso seguir uma ordem?",
    answer: "A sequência Compreender, Esperar, Pausar e Reorientar foi criada para oferecer uma progressão lógica. Ainda assim, você pode adaptar a leitura ao momento que está vivendo."
  },
  {
    question: "Posso ler pelo celular?",
    answer: "Sim. Os materiais digitais podem ser acessados em celular, tablet ou computador compatível."
  },
  {
    question: "Posso imprimir?",
    answer: "Sim, para uso pessoal, respeitando os direitos autorais dos materiais."
  },
  {
    question: "Posso compartilhar os arquivos?",
    answer: "Não. O acesso é destinado ao uso pessoal. A reprodução, redistribuição ou revenda dos arquivos não é autorizada."
  },
  {
    question: "O material substitui a leitura da Bíblia?",
    answer: "Não. A jornada foi criada como um recurso complementar de estudo, reflexão e aplicação."
  },
  {
    question: "Existe garantia?",
    answer: "Sim. A oferta possui garantia de 7 dias, conforme as condições apresentadas."
  }
];
