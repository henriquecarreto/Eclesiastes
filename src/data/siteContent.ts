export interface JourneyMaterial {
  id: number;
  title: string;
  movement: string;
  movementNum: string;
  colorHex: string;
  bgTagColor: string;
  desc: string;
  highlightText?: string;
  isMain?: boolean;
  pagesInfo?: string;
  lessonsInfo?: string;
  symbol: string;
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
  singleOfferCheckoutUrl: "https://pay.kiwify.com.br/checkout/link-placeholder",

  guaranteeDays: 7,
};

export const JOURNEY_MATERIALS: JourneyMaterial[] = [
  {
    id: 1,
    title: "Quando Nada Parece Fazer Sentido",
    movement: "MOVIMENTO 1 — COMPREENDER",
    movementNum: "01",
    colorHex: "#163142",
    bgTagColor: "bg-[#163142] text-[#FFFDF8]",
    desc: "Um e-book visual de 50 páginas com 20 lições para compreender as principais ideias de Eclesiastes e relacioná-las ao tempo, ao trabalho, às escolhas, aos relacionamentos e ao propósito.",
    isMain: true,
    pagesInfo: "50 páginas visualmente organizadas",
    lessonsInfo: "20 lições práticas com reflexão e oração",
    symbol: "Caminho com névoa",
  },
  {
    id: 2,
    title: "Esperando sem Desperdiçar a Vida",
    movement: "MOVIMENTO 2 — ESPERAR",
    movementNum: "02",
    colorHex: "#C76545",
    bgTagColor: "bg-[#C76545] text-[#FFFDF8]",
    desc: "Reflexões para atravessar períodos de espera sem colocar toda a vida em pausa e sem perder de vista aquilo que ainda pode ser vivido no presente.",
    highlightText: "A espera pode fazer parte da sua história sem precisar ocupar toda a sua vida.",
    symbol: "Ampulheta / Janela",
  },
  {
    id: 3,
    title: "Pause Debaixo do Sol",
    movement: "MOVIMENTO 3 — PAUSAR",
    movementNum: "03",
    colorHex: "#78836A",
    bgTagColor: "bg-[#78836A] text-[#FFFDF8]",
    desc: "Um material de pausa e reflexão para diminuir o ritmo, sair do automático e observar com mais atenção a vida que está acontecendo agora.",
    highlightText: "Nem toda pausa é atraso. Algumas pausas devolvem clareza.",
    symbol: "Sombra da árvore / Folha",
  },
  {
    id: 4,
    title: "Mapa do Vento",
    movement: "MOVIMENTO 4 — REORIENTAR",
    movementNum: "04",
    colorHex: "#0284C7",
    bgTagColor: "bg-[#0284C7] text-[#FFFDF8]",
    desc: "Um guia de reflexão para reconhecer buscas, cobranças e movimentos que consomem energia sem produzir clareza, presença ou direção.",
    highlightText: "Antes de continuar correndo, observe o que está levando sua energia.",
    symbol: "Bússola / Coordenadas",
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
    colorName: "Terracota",
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
    colorName: "Azul claro com dourado",
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
