export interface JourneyMaterial {
  id: number;
  title: string;
  subtitle?: string;
  movement: string;
  movementNum: string;
  formatName: string;
  coverImage: string;
  colorHex: string;
  bgTagColor: string;
  desc: string;
  usageSituation: string;
  highlightText?: string;
  isMain?: boolean;
  pagesInfo?: string;
  lessonsInfo?: string;
}

export interface MovementItem {
  number: string;
  title: string;
  desc: string;
  materialTitle: string;
  colorHex: string;
  colorName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PreviewPage {
  num: number;
  title: string;
  src: string;
}

export const editableFields = {
  productName: "Jornada Debaixo do Sol",
  productSubtitle: "Uma jornada bíblica em 4 movimentos baseada em Eclesiastes",
  companyName: "Acervo Seguro",
  supportEmail: "aprovavisual@gmail.com",
  privacyUrl: "",
  termsUrl: "",
  contactUrl: "",

  // Preço Único da Oferta Consolidada
  singleOfferPrice: "R$ 19,90",
  singleOfferCheckoutUrl: "https://pay.wiapy.com/Vi7TBLHjR1U0",

  guaranteeDays: 7,
};

export const JOURNEY_MATERIALS: JourneyMaterial[] = [
  {
    id: 1,
    title: "Quando Nada Parece Fazer Sentido",
    subtitle: "Uma jornada visual pelo livro de Eclesiastes",
    movement: "MOVIMENTO 1 — COMPREENDER",
    movementNum: "01",
    formatName: "E-book visual",
    coverImage: "/images/capa-quando-nada-parece-fazer-sentido.jpg",
    colorHex: "#163142",
    bgTagColor: "bg-[#163142] text-[#FFFDF8]",
    desc: "Um e-book visual de 50 páginas com 20 lições para compreender as principais ideias de Eclesiastes e relacioná-las ao tempo, ao trabalho, às escolhas, aos relacionamentos e ao propósito.",
    usageSituation: "Use para compreender a confusão, organizar seus pensamentos e observar a fase atual com clareza bíblica.",
    isMain: true,
    pagesInfo: "50 páginas visualmente organizadas",
    lessonsInfo: "20 lições práticas com reflexão e oração",
  },
  {
    id: 2,
    title: "Esperando sem Desperdiçar a Vida",
    subtitle: "Jornada bíblica de 14 dias com Eclesiastes",
    movement: "MOVIMENTO 2 — ESPERAR",
    movementNum: "02",
    formatName: "Jornada bíblica de 14 dias",
    coverImage: "/images/capa-esperando-sem-desperdicar-a-vida.jpg",
    colorHex: "#C76545",
    bgTagColor: "bg-[#C76545] text-[#FFFDF8]",
    desc: "Uma jornada de reflexão para atravessar períodos de espera sem colocar toda a vida em pausa e sem perder de vista aquilo que ainda pode ser vivido no presente.",
    usageSituation: "Use quando perceber que está adiando sua alegria, seus planos e sua presença enquanto espera uma resposta.",
    highlightText: "A espera pode fazer parte da sua história sem precisar ocupar toda a sua vida.",
  },
  {
    id: 3,
    title: "Pause Debaixo do Sol",
    subtitle: "27 cartas de sabedoria para dias de pressa, cansaço e espera",
    movement: "MOVIMENTO 3 — PAUSAR",
    movementNum: "03",
    formatName: "27 cartas de reflexão",
    coverImage: "/images/capa-pausa-debaixo-do-sol.jpg",
    colorHex: "#78836A",
    bgTagColor: "bg-[#78836A] text-[#FFFDF8]",
    desc: "Um material de pausa e reflexão para diminuir o ritmo, sair do automático e observar com mais atenção a vida que está acontecendo agora.",
    usageSituation: "Use quando perceber que a rotina está funcionando, mas você já não consegue descansar, refletir ou estar presente.",
    highlightText: "Nem toda pausa é atraso. Algumas pausas devolvem clareza.",
  },
  {
    id: 4,
    title: "Mapa do Vento",
    subtitle: "Para quem sente que está sustentando responsabilidades demais",
    movement: "MOVIMENTO 4 — REORIENTAR",
    movementNum: "04",
    formatName: "Caderno prático de reflexão",
    coverImage: "/images/capa-mapa-do-vento.jpg",
    colorHex: "#0284C7",
    bgTagColor: "bg-[#0284C7] text-[#FFFDF8]",
    desc: "Um guia para reconhecer buscas, cobranças e movimentos que consomem energia sem produzir clareza, presença ou direção.",
    usageSituation: "Use quando estiver fazendo muitas coisas, mas não conseguir identificar quais delas realmente merecem continuar ocupando seu tempo.",
    highlightText: "Antes de continuar correndo, observe o que está levando sua energia.",
  },
];

export const FOUR_MOVEMENTS: MovementItem[] = [
  {
    number: "01",
    title: "Compreender",
    desc: "Observar com honestidade as perguntas, frustrações e expectativas presentes na fase atual.",
    materialTitle: "Quando Nada Parece Fazer Sentido",
    colorHex: "#163142",
    colorName: "Azul profundo",
  },
  {
    number: "02",
    title: "Esperar",
    desc: "Reconhecer que algumas respostas ainda não chegaram sem transformar a vida inteira em uma sala de espera.",
    materialTitle: "Esperando sem Desperdiçar a Vida",
    colorHex: "#C76545",
    colorName: "Terracota suave",
  },
  {
    number: "03",
    title: "Pausar",
    desc: "Interromper o automático e recuperar espaço para silêncio, reflexão, presença e oração.",
    materialTitle: "Pause Debaixo do Sol",
    colorHex: "#78836A",
    colorName: "Verde-sálvia",
  },
  {
    number: "04",
    title: "Reorientar",
    desc: "Perceber quais movimentos e cobranças estão consumindo energia sem produzir direção verdadeira.",
    materialTitle: "Mapa do Vento",
    colorHex: "#0284C7",
    colorName: "Azul-petróleo",
  },
];

export const METHOD_STEPS = [
  {
    step: "1",
    title: "Leia a referência",
    desc: "Comece pelo trecho bíblico indicado no material.",
  },
  {
    step: "2",
    title: "Observe",
    desc: "Identifique a pergunta central, os símbolos e as ideias apresentadas.",
  },
  {
    step: "3",
    title: "Reflita com sinceridade",
    desc: "Relacione a mensagem com suas escolhas, expectativas, vínculos e rotina.",
  },
  {
    step: "4",
    title: "Pratique algo possível",
    desc: "Transforme a reflexão em uma atitude pequena e concreta.",
  },
  {
    step: "5",
    title: "Ore sem pressão",
    desc: "Converse com Deus utilizando a oração sugerida ou suas próprias palavras.",
  },
];

export const PREVIEW_PAGES: PreviewPage[] = [
  { num: 1, title: "Quando Nada Parece Fazer Sentido", src: "/images/page-1.webp" },
  { num: 2, title: "Ouro e Cinza", src: "/images/page-2.webp" },
  { num: 4, title: "Vaidade de Vaidades", src: "/images/page-4.webp" },
  { num: 5, title: "O Peso das Ocupações", src: "/images/page-5.webp" },
  { num: 7, title: "O Tempo de Deus", src: "/images/page-7.webp" },
  { num: 8, title: "Mapa da Jornada", src: "/images/page-8.webp" },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "O material é físico?",
    answer: "Não. A Jornada Debaixo do Sol é composta por materiais digitais, acessíveis em dispositivos compatíveis.",
  },
  {
    question: "O que está incluído?",
    answer: "Você receberá os quatro materiais da jornada: Quando Nada Parece Fazer Sentido, Esperando sem Desperdiçar a Vida, Pause Debaixo do Sol e Mapa do Vento.",
  },
  {
    question: "Preciso conhecer profundamente a Bíblia?",
    answer: "Não. O conteúdo foi organizado com uma linguagem clara e visual para facilitar a compreensão. As referências bíblicas permitem acompanhar a leitura diretamente na Bíblia.",
  },
  {
    question: "Preciso seguir uma ordem?",
    answer: "A sequência Compreender, Esperar, Pausar e Reorientar foi criada para oferecer uma progressão lógica. Ainda assim, você pode adaptar a leitura ao momento que está vivendo.",
  },
  {
    question: "Posso ler pelo celular?",
    answer: "Sim. Os materiais digitais podem ser acessados em celular, tablet ou computador compatível.",
  },
  {
    question: "Posso imprimir?",
    answer: "Sim, para uso pessoal, respeitando os direitos autorais dos materiais.",
  },
  {
    question: "Posso compartilhar os arquivos?",
    answer: "Não. O acesso é destinado ao uso pessoal. A reprodução, redistribuição ou revenda dos arquivos não é autorizada.",
  },
  {
    question: "O material substitui a leitura da Bíblia?",
    answer: "Não. A jornada foi criada como um recurso complementar de estudo, reflexão e aplicação.",
  },
  {
    question: "Existe garantia?",
    answer: "Sim. A oferta possui garantia de sete dias, conforme as condições apresentadas.",
  },
];
