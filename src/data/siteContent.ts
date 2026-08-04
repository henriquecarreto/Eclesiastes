export const editableFields = {
  productName: "Eclesiastes — Quando Nada Parece Fazer Sentido",
  productSubtitle: "Uma jornada visual pelo livro de Eclesiastes",
  companyName: "Acervo Seguro",
  supportEmail: "", // Proprietário preencherá
  privacyUrl: "",   // Proprietário preencherá
  termsUrl: "",     // Proprietário preencherá
  contactUrl: "",   // Proprietário preencherá
  guaranteeDays: 7,
  accessDurationText: "Acesso ilimitado e download permanente dos arquivos em PDF",
  
  // Oferta Individual
  singleOfferPrice: "R$ 14,90",
  singleOfferOldPrice: "",
  singleOfferCheckoutUrl: "", // Deixar vazio por padrão

  // Oferta Completa (Bundle)
  bundleEnabled: false, // Se falso, oculta a segunda oferta
  bundleName: "Jornada Completa de Eclesiastes",
  bundleOldPrice: "",
  bundlePrice: "R$ 19,90",
  bundleCheckoutUrl: "", // Deixar vazio por padrão
  bundleMaterials: [] as string[],

  // Rastreamento
  metaPixelId: "",
  googleAnalyticsId: "",
};

export const offerConfig = {
  single: {
    enabled: true,
    name: "E-book Eclesiastes",
    price: editableFields.singleOfferPrice,
    oldPrice: editableFields.singleOfferOldPrice,
    checkoutUrl: editableFields.singleOfferCheckoutUrl,
    pages: 50,
    features: [
      "E-book digital completo de Eclesiastes",
      "50 páginas com mapas visuais",
      "20 lições práticas e contemplativas",
      "Reflexões, perguntas e orações sugeridas",
      "Arquivo em formato PDF de alta resolução",
      "Acesso e leitura pelo celular, tablet ou PC",
      "Permissão de impressão para uso pessoal",
    ],
  },
  bundle: {
    enabled: editableFields.bundleEnabled,
    name: editableFields.bundleName,
    price: editableFields.bundlePrice,
    oldPrice: editableFields.bundleOldPrice,
    checkoutUrl: editableFields.bundleCheckoutUrl,
    materials: editableFields.bundleMaterials,
  },
};

export const PREVIEW_PAGES = [
  { num: 1, title: "Capa do E-book", desc: "Design elegante com iluminação clássica", src: "/images/page-1.webp" },
  { num: 2, title: "Apresentação", desc: "Visão geral e propósito da obra", src: "/images/page-2.webp" },
  { num: 4, title: "Como Utilizar a Jornada", desc: "Instruções e passo a passo de leitura", src: "/images/page-4.webp" },
  { num: 5, title: "O que é Eclesiastes", desc: "Contexto histórico e autoria", src: "/images/page-5.webp" },
  { num: 7, title: "Quatro Chaves de Leitura", desc: "Fundamentos para interpretação", src: "/images/page-7.webp" },
  { num: 8, title: "Mapa da Jornada", desc: "Estrutura visual completa dos temas", src: "/images/page-8.webp" },
  { num: 11, title: "Hevel: A Vida como Vapor", desc: "Explicação sobre a transitoriedade", src: "/images/page-11.webp" },
  { num: 19, title: "Trabalho, Cansaço e Legado", desc: "Reflexão sobre limites no trabalho", src: "/images/page-19.webp" },
  { num: 23, title: "Tempo para Cada Propósito", desc: "Estudo sobre Eclesiastes 3", src: "/images/page-23.webp" },
  { num: 31, title: "Dois são Melhores do que Um", desc: "Companheirismo e cooperação", src: "/images/page-31.webp" },
  { num: 35, title: "Quando o Dinheiro Nunca é Suficiente", desc: "Contentamento vs Falsa Segurança", src: "/images/page-35.webp" },
  { num: 47, title: "Lembre-se do Criador", desc: "Orientação para os dias da juventude e velhice", src: "/images/page-47.webp" },
  { num: 49, title: "O que Eclesiastes nos Ensina", desc: "Síntese dos aprendizados vitais", src: "/images/page-49.webp" },
  { num: 50, title: "Oração Final", desc: "Encerramento devocional e reverente", src: "/images/page-50.webp" },
];

export const THEMES_LIST = [
  { id: 1, title: "Quando tudo parece vazio", desc: "Compreender os momentos de frustração e transitoriedade." },
  { id: 2, title: "Hevel: a vida como vapor", desc: "O conceito bíblico de ilusão, sopro e limitações humanas." },
  { id: 3, title: "Nada é tão novo quanto parece", desc: "Perspectiva sobre os ciclos históricos e a busca pelo inédito." },
  { id: 4, title: "Os limites da sabedoria", desc: "Reconhecer que o conhecimento humano não resolve o mistério da vida." },
  { id: 5, title: "Prazer e conquistas", desc: "Por que acumular bens e entretenimento não preenche a alma." },
  { id: 6, title: "Trabalho, cansaço e legado", desc: "Trabalhar com propósito sem ser consumido pelo ativismo." },
  { id: 7, title: "O cotidiano como dom", desc: "Desfrutar do pão, da família e do dia a dia como presente divino." },
  { id: 8, title: "Um tempo para cada propósito", desc: "Entender as estações da vida sem ansiedade pelo futuro." },
  { id: 9, title: "Eternidade no coração", desc: "O anseio humano pelo infinito e as respostas em Deus." },
  { id: 10, title: "Injustiça e temor de Deus", desc: "Como viver com integridade mesmo em um mundo imperfeito." },
  { id: 11, title: "Comparação e descanso", desc: "Libertar-se da competição e cultivar a quietude interior." },
  { id: 12, title: "Companheirismo e cooperação", desc: "A força das alianças genuínas: dois são melhores do que um." },
  { id: 13, title: "Reverência diante de Deus", desc: "Postura nas orações, nos votos e na presença do Criador." },
  { id: 14, title: "Dinheiro e falsa segurança", desc: "Como a riqueza pode escravizar quando se torna um ídolo." },
  { id: 15, title: "Contentamento", desc: "A arte de viver satisfeito com o que se possui no presente." },
  { id: 16, title: "Sabedoria em dias bons e maus", desc: "Equilíbrio emocional nas adversidades e nas alegrias." },
  { id: 17, title: "Equilíbrio e humildade", desc: "Evitar os extremos do moralismo e da libertinagem." },
  { id: 18, title: "Autoridade e justiça", desc: "Discernimento diante dos poderes e aparentes demoras de Deus." },
  { id: 19, title: "Diligência em tempos incertos", desc: "Semear a semente sem tentar controlar o vento ou a chuva." },
  { id: 20, title: "Lembrar-se do Criador", desc: "Honrar a Deus na juventude antes que venham os dias difíceis." },
];

export const METHOD_STEPS = [
  { step: "1", title: "Leia a referência", desc: "Start pelo trecho bíblico indicado na lição." },
  { step: "2", title: "Observe o mapa", desc: "Identifique a pergunta central, os símbolos e a estrutura visual." },
  { step: "3", title: "Reflita com sinceridade", desc: "Examine como a mensagem se aplica ao seu trabalho, vínculos e rotina." },
  { step: "4", title: "Pratique algo pequeno", desc: "Aplique uma mudança simples, concreta e possível no seu dia." },
  { step: "5", title: "Ore sem pressão", desc: "Encerre conversando com Deus usando a oração sugerida ou suas palavras." },
];

export const FAQ_ITEMS = [
  {
    question: "O material é físico?",
    answer: "Não. O produto é 100% digital e entregue em formato PDF. Você poderá acessá-lo instantaneamente em dispositivos compatíveis e imprimir para seu uso pessoal."
  },
  {
    question: "Quantas páginas possui?",
    answer: "O e-book principal possui 50 páginas organizadas com esquemas visuais, ilustrações clássicas, reflexões e orações."
  },
  {
    question: "Preciso conhecer profundamente a Bíblia?",
    answer: "Não. O material foi estruturado de forma didática para apresentar o contexto, ideias centrais, versículos e aplicações práticas com muita clareza."
  },
  {
    question: "Posso usar em pequenos grupos?",
    answer: "Sim! É um excelente recurso para apoiar conversas, estudos devocionais e reflexões conduzidas pelo comprador, desde que os arquivos não sejam redistribuídos."
  },
  {
    question: "Posso imprimir o e-book?",
    answer: "Sim. A impressão para uso pessoal do comprador é totalmente permitida."
  },
  {
    question: "Posso compartilhar o arquivo com outras pessoas?",
    answer: "Não. A compra concede licença individual e pessoal. A redistribuição, revenda ou compartilhamento público é proibido por lei."
  },
  {
    question: "Como receberei o material?",
    answer: "Após a confirmação do pagamento, você receberá um e-mail da plataforma de checkout com o link seguro para download dos arquivos."
  },
  {
    question: "Por quanto tempo terei acesso?",
    answer: editableFields.accessDurationText,
  },
  {
    question: "O material substitui a leitura da Bíblia?",
    answer: "Não. Trata-se de um recurso visual complementar que ajuda você a compreender e aplicar os ensinamentos do livro de Eclesiastes."
  },
  {
    question: "Quais são as formas de pagamento?",
    answer: "As opções disponíveis (como Pix, Cartão de Crédito ou Boleto) serão apresentadas na tela segura de checkout."
  }
];
