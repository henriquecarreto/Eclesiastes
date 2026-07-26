import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  BookOpen,
  Brain,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  FileText,
  Focus,
  Layers,
  ListChecks,
  Mail,
  Map as MapIcon,
  Menu,
  RefreshCw,
  Route as RouteIcon,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  X,
  Zap,
} from "lucide-react";
import { CONFIG, trackEvent } from "@/lib/landing-config";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: "Guia Visual para o ENEM 2026 | 70 Mapas Mentais" },
      {
        name: "description",
        content:
          "Organize sua revisão do ENEM 2026 com 70 mapas mentais divididos entre Primeiro Dia, Segundo Dia e Atualidades. Produto digital em PDF.",
      },
      { property: "og:title", content: "Guia Visual para o ENEM 2026 | 70 Mapas Mentais" },
      {
        property: "og:description",
        content:
          "Uma rota visual com 70 mapas mentais para organizar sua revisão do ENEM 2026 — Primeiro Dia, Segundo Dia e Atualidades.",
      },
      { property: "og:type", content: "product" },
      { property: "og:url", content: CONFIG.siteUrl },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Guia Visual para o ENEM 2026 | 70 Mapas Mentais" },
      {
        name: "twitter:description",
        content:
          "70 mapas mentais organizados em 3 e-books digitais para revisar o ENEM 2026.",
      },
    ],
    links: [
      { rel: "canonical", href: CONFIG.siteUrl },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@600;700;800&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Guia Visual para o ENEM 2026 — Rota Visual 70",
          description:
            "Coleção de 3 e-books digitais com 70 mapas mentais para revisão do ENEM 2026.",
          brand: { "@type": "Brand", name: CONFIG.companyName },
          category: "Educação",
          offers: {
            "@type": "Offer",
            price: "27.90",
            priceCurrency: "BRL",
            availability: "https://schema.org/InStock",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ_ITEMS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
});

// ─────────────────────────────── data
const NAV_LINKS = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#materiais", label: "Os materiais" },
  { href: "#recebe", label: "O que você recebe" },
  { href: "#oferta", label: "Oferta" },
  { href: "#faq", label: "Dúvidas" },
];

const ROUTES = [
  {
    tag: "ROTA 1",
    title: "Primeiro Dia",
    count: "30 mapas mentais",
    subjects: [
      "Linguagens",
      "Língua Portuguesa",
      "Literatura",
      "Redação",
      "História",
      "Geografia",
      "Filosofia",
      "Sociologia",
    ],
    color: "from-[#0F172A] to-[#2563EB]",
  },
  {
    tag: "ROTA 2",
    title: "Segundo Dia",
    count: "30 mapas mentais",
    subjects: ["Matemática", "Física", "Química", "Biologia"],
    color: "from-[#047857] to-[#10B981]",
  },
  {
    tag: "ROTA 3",
    title: "Atualidades 2026",
    count: "10 mapas mentais",
    subjects: [
      "Temas contemporâneos",
      "Contextualização",
      "Repertório",
      "Debates sociais e ambientais",
      "Debates econômicos",
      "Tecnologia e geopolítica",
    ],
    color: "from-[#EA580C] to-[#FF6B00]",
  },
];

const FEATURES = [
  {
    icon: MapIcon,
    title: "Rota visual dividida por dias",
    text: "Materiais separados entre Primeiro Dia, Segundo Dia e Atualidades para consultar apenas o que você precisa.",
  },
  {
    icon: Brain,
    title: "70 mapas mentais",
    text: "Cada assunto apresentado com relações, conceitos e pontos essenciais organizados visualmente.",
  },
  {
    icon: Search,
    title: "Recuperação e identificação de lacunas",
    text: "Conceitos, relações, fórmulas e pontos essenciais apresentados em uma sequência visual.",
  },
  {
    icon: FileText,
    title: "Arquivos digitais organizados",
    text: "Três e-books separados para facilitar a navegação e a escolha do conteúdo que será revisado.",
  },
];

const BENEFITS = [
  "Pare de procurar o mesmo assunto em vários materiais",
  "Identifique mais facilmente o que ainda precisa de reforço",
  "Visualize como os principais conceitos se relacionam",
  "Consulte conteúdos pelo celular, tablet ou computador",
  "Organize sua revisão entre Primeiro Dia, Segundo Dia e Atualidades",
  "Utilize os mapas como apoio para questões, aulas e aprofundamentos",
];

const PAINS = [
  { icon: Layers, title: "Materiais espalhados", text: "Videoaulas, apostilas, resumos e anotações misturados." },
  { icon: Calendar, title: "Pouco tempo", text: "Rotina apertada e prova cada vez mais próxima." },
  { icon: Search, title: "Dificuldade para recuperar conceitos", text: "Sem saber o que já foi estudado e o que voltar a ver." },
  { icon: Focus, title: "Falta de direção", text: "Sem clareza sobre por onde começar a revisão." },
];

const AUDIENCE = [
  { title: "Revisar sem recomeçar tudo", text: "Consulte estruturas visuais antes de retornar a aulas e capítulos completos." },
  { title: "Organizar conteúdos espalhados", text: "Tenha uma referência visual dividida por áreas e dias de prova." },
  { title: "Estudar mesmo com pouco tempo", text: "Escolha um tema e faça uma revisão direcionada dentro da sua rotina." },
  { title: "Saber por onde começar", text: "Escolha entre Primeiro Dia, Segundo Dia e Atualidades conforme sua prioridade." },
  { title: "Identificar suas lacunas", text: "Perceba quais conceitos estão claros e quais precisam de aprofundamento." },
  { title: "Utilizar uma estrutura visual", text: "Observe relações, sequências, fórmulas e conceitos apresentados de forma organizada." },
];

const METHOD_STEPS = [
  { n: "1", title: "Escolha sua rota", text: "Comece pelo Primeiro Dia, Segundo Dia ou Atualidades." },
  { n: "2", title: "Visualize o mapa", text: "Observe o tema central, os conceitos essenciais e as relações apresentadas." },
  { n: "3", title: "Recupere o conteúdo", text: "Feche o material e tente explicar os principais pontos com suas próprias palavras." },
  { n: "4", title: "Identifique as lacunas", text: "Perceba quais conceitos estão claros e quais ainda precisam de reforço." },
  { n: "5", title: "Direcione o próximo estudo", text: "Retorne às aulas, questões ou materiais complementares apenas nos pontos necessários." },
];

const NOT_FOR = [
  "Não é um curso completo em vídeo",
  "Não substitui automaticamente aulas, questões e simulados",
  "Não oferece garantia de aprovação",
  "Não oferece garantia de determinada nota",
  "Não é um material oficial do Inep ou do MEC",
  "Não pretende aprofundar academicamente todos os conteúdos",
  "Funciona como ferramenta de revisão, organização e identificação de lacunas",
];

const BONUSES = [
  { title: "Plano de Revisão Visual de 14 Dias", text: "Uma sequência prática para distribuir os mapas ao longo de duas semanas." },
  { title: "Checklist dos 70 Mapas", text: "Uma ferramenta para acompanhar o que já foi revisado e o que precisa de reforço." },
  { title: "Guia de Recuperação Ativa", text: "Orientações simples para utilizar os mapas de maneira mais ativa durante a revisão." },
];

const FAQ_ITEMS = [
  {
    q: "O material é físico ou digital?",
    a: "O produto é 100% digital em formato PDF. Nenhum material físico será enviado para a sua residência.",
  },
  {
    q: "Como receberei os arquivos?",
    a: "O acesso aos arquivos é disponibilizado imediatamente após a confirmação do pagamento, direto no seu e-mail de compra.",
  },
  {
    q: "Posso acessar pelo celular?",
    a: "Sim! Os arquivos em PDF podem ser abertos e consultados perfeitamente pelo celular, tablet ou computador.",
  },
  {
    q: "Preciso estudar todo o material de uma vez?",
    a: "Não. O material foi organizado em 3 rotas (Primeiro Dia, Segundo Dia e Atualidades) justamente para você consultar por partes, de acordo com a sua prioridade de revisão.",
  },
  {
    q: "Os mapas substituem aulas e exercícios?",
    a: "Não. Os mapas funcionam como uma ferramenta de organização visual e identificação de lacunas. Aulas, resolução de questões e simulados continuam sendo fundamentais.",
  },
  {
    q: "Por quanto tempo terei acesso?",
    a: "Você poderá baixar os arquivos em PDF para o seu dispositivo e manter o acesso para consultar sempre que precisar durante sua preparação.",
  },
  {
    q: "Quais formas de pagamento estão disponíveis?",
    a: "O pagamento é processado com segurança via PIX ou Cartão de Crédito.",
  },
];

// ─────────────────────────────── shared UI
function CTAButton({
  kind = "combo",
  children,
  event,
  size = "lg",
  variant = "primary",
  className = "",
}: {
  kind?: "combo" | "firstDay";
  children: React.ReactNode;
  event: string;
  size?: "md" | "lg";
  variant?: "primary" | "gold" | "outline";
  className?: string;
}) {
  const url = kind === "combo" ? CONFIG.comboCheckoutUrl : CONFIG.firstDayCheckoutUrl;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackEvent(event);
    if (url) {
      window.location.href = url;
    } else {
      e.preventDefault();
      const el = document.getElementById("oferta");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.hash = "oferta";
      }
    }
  };

  const sizeCls = size === "lg" ? "px-7 py-4 text-base sm:text-lg" : "px-5 py-3 text-sm";
  const variantCls =
    variant === "gold"
      ? "bg-gold text-navy hover:brightness-105"
      : variant === "outline"
        ? "bg-white text-navy border-2 border-navy hover:bg-navy hover:text-white"
        : "bg-green text-white hover:bg-green-dark";

  return (
    <a
      href={url || "#oferta"}
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-bold uppercase tracking-wide shadow-lg shadow-green/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl cursor-pointer ${sizeCls} ${variantCls} ${className}`}
    >
      {children}
    </a>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-navy-2">
      <Sparkles className="h-3.5 w-3.5 text-gold" />
      {children}
    </span>
  );
}

// ─────────────────────────────── page
function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!CONFIG.showStickyMobileCta || !CONFIG.comboCheckoutUrl) return;
    const heroEl = heroRef.current;
    const footerEl = footerRef.current;
    if (!heroEl) return;
    let heroPassed = false;
    let footerVisible = false;
    const update = () => setShowSticky(heroPassed && !footerVisible);
    const heroObs = new IntersectionObserver(
      ([e]) => {
        heroPassed = !e.isIntersecting && e.boundingClientRect.top < 0;
        update();
      },
      { threshold: 0 },
    );
    heroObs.observe(heroEl);
    let footerObs: IntersectionObserver | null = null;
    if (footerEl) {
      footerObs = new IntersectionObserver(
        ([e]) => {
          footerVisible = e.isIntersecting;
          update();
        },
        { threshold: 0 },
      );
      footerObs.observe(footerEl);
    }
    return () => {
      heroObs.disconnect();
      footerObs?.disconnect();
    };
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Announcement bar */}
      <div className="bg-navy text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 py-2 text-center text-[11px] font-semibold uppercase tracking-wider sm:text-xs">
          <Zap className="h-3.5 w-3.5 shrink-0 text-gold" aria-hidden />
          <span>70 mapas mentais • 3 e-books digitais • acesso após a confirmação do pagamento</span>
        </div>
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 z-40 border-b border-transparent transition-all ${
          scrolled ? "border-border-soft bg-white/85 shadow-sm backdrop-blur" : "bg-white"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-2.5 font-display text-base font-extrabold text-navy sm:text-lg">
            <img src="/logo.png" alt="Acervo Seguro Logo" className="h-9 w-auto object-contain shrink-0" />
            <span className="tracking-tight">Guia Visual ENEM 2026</span>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 transition hover:text-navy">
                {l.label}
              </a>
            ))}
            <a
              href="#oferta"
              onClick={() => trackEvent("view_offer")}
              className="rounded-full bg-green px-5 py-2 text-sm font-bold text-white shadow-md transition hover:bg-green-dark"
            >
              Ver oferta
            </a>
          </nav>

          <button
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border-soft text-navy"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-border-soft bg-white lg:hidden">
            <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={closeMenu}
                  className="border-b border-border-soft/60 py-3 text-sm font-medium text-foreground/90"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#oferta"
                onClick={() => {
                  trackEvent("view_offer");
                  closeMenu();
                }}
                className="mt-3 inline-flex items-center justify-center rounded-full bg-green px-5 py-3 text-sm font-bold text-white"
              >
                Ver oferta
              </a>
            </nav>
          </div>
        )}
      </header>

      <main id="top">
        {/* HERO */}
        <section ref={heroRef} className="relative overflow-hidden bg-gradient-to-b from-cream via-white to-white">
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gold-soft blur-3xl" />
            <div className="absolute -bottom-32 -right-16 h-80 w-80 rounded-full bg-[color:var(--gold-soft)] blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <SectionEyebrow>Guia Visual para o ENEM 2026</SectionEyebrow>
              <h1 className="mt-5 font-display text-3xl font-extrabold leading-[1.1] text-black sm:text-5xl lg:text-6xl">
                Organize sua revisão com <span className="marker-underline text-black">70 mapas mentais</span> divididos entre o
                Primeiro Dia, o Segundo Dia e Atualidades.
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base text-muted-fg sm:text-lg">
                Uma rota visual para recuperar os principais conteúdos, identificar lacunas e saber o que precisa ser
                reforçado antes da prova.
              </p>

              <ul className="mx-auto mt-7 flex max-w-2xl flex-col gap-2 text-left text-sm text-foreground sm:text-base">
                {[
                  "Três e-books digitais organizados por rota",
                  "70 mapas mentais para consulta e revisão",
                  "Acesso pelo celular, tablet ou computador",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green" aria-hidden />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col items-center gap-3">
                <div className="text-sm text-muted-fg">
                  Combo completo por{" "}
                  <span className="text-lg font-extrabold text-navy">{CONFIG.comboPrice}</span>
                </div>
                <CTAButton event="cta_combo_click">Quero acessar os 70 mapas mentais</CTAButton>
                <p className="max-w-md text-xs text-muted-fg">
                  Produto 100% digital. Acesso disponibilizado após a confirmação do pagamento.
                </p>
              </div>
            </div>

            {/* Mockup image */}
            <div className="mx-auto mt-8 max-w-xl">
              <div className="relative mx-auto overflow-hidden rounded-3xl border border-navy/10 bg-white/80 p-2 shadow-xl backdrop-blur transition-all duration-300 hover:shadow-2xl">
                <img
                  src="/ebooks-mockup.jpg"
                  alt="Guia Visual para o ENEM 2026 - Mockup dos 3 E-books e Mapas Mentais"
                  className="h-auto w-full rounded-2xl object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>

          {/* Full-width Autoplay Mind Map Carousel */}
          <MindMapCarousel />
        </section>

        {/* Trust strip (Faixa de Confiança Redesenhada) */}
        <section className="border-y border-border-soft bg-gradient-to-b from-[#FFFDF8] via-[#FFFDF5] to-[#F8FAFC] py-14 sm:py-16">
          <div className="mx-auto max-w-[1240px] px-5 sm:px-6">
            <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-10">
              <h2 className="font-display text-2xl sm:text-[30px] font-extrabold text-navy tracking-tight uppercase">
                TUDO PREPARADO PARA VOCÊ COMEÇAR SUA REVISÃO
              </h2>
              <p className="mt-2 text-base sm:text-[17px] text-muted-fg leading-relaxed">
                Acesso digital, materiais separados por rota e leitura em diferentes dispositivos.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
              {/* CARD 1 */}
              <div className="relative overflow-hidden rounded-[18px] border border-border-soft/80 bg-white p-5 sm:p-6 shadow-md shadow-navy/5 min-h-[115px] flex items-start gap-4 transition hover:shadow-lg">
                <div className="absolute top-0 inset-x-0 h-1 bg-green" />
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-emerald-50 text-green shadow-xs">
                  <FileText className="h-6 w-6" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-[17px] font-bold text-navy leading-snug">
                    Acesso digital
                  </h3>
                  <p className="mt-1 text-sm sm:text-[15px] text-muted-fg leading-relaxed">
                    PDFs liberados após a confirmação do pagamento.
                  </p>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="relative overflow-hidden rounded-[18px] border border-border-soft/80 bg-white p-5 sm:p-6 shadow-md shadow-navy/5 min-h-[115px] flex items-start gap-4 transition hover:shadow-lg">
                <div className="absolute top-0 inset-x-0 h-1 bg-navy" />
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-slate-100 text-navy shadow-xs">
                  <BookOpen className="h-6 w-6" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-[17px] font-bold text-navy leading-snug">
                    3 e-books organizados
                  </h3>
                  <p className="mt-1 text-sm sm:text-[15px] text-muted-fg leading-relaxed">
                    Primeiro Dia, Segundo Dia e Atualidades.
                  </p>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="relative overflow-hidden rounded-[18px] border border-border-soft/80 bg-white p-5 sm:p-6 shadow-md shadow-navy/5 min-h-[115px] flex items-start gap-4 transition hover:shadow-lg">
                <div className="absolute top-0 inset-x-0 h-1 bg-gold" />
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-amber-50 text-amber-600 shadow-xs">
                  <Brain className="h-6 w-6" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-[17px] font-bold text-navy leading-snug">
                    70 mapas mentais
                  </h3>
                  <p className="mt-1 text-sm sm:text-[15px] text-muted-fg leading-relaxed">
                    Conteúdos distribuídos por áreas e rotas de revisão.
                  </p>
                </div>
              </div>

              {/* CARD 4 */}
              <div className="relative overflow-hidden rounded-[18px] border border-border-soft/80 bg-white p-5 sm:p-6 shadow-md shadow-navy/5 min-h-[115px] flex items-start gap-4 transition hover:shadow-lg">
                <div className="absolute top-0 inset-x-0 h-1 bg-green" />
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-emerald-50 text-green shadow-xs">
                  <Smartphone className="h-6 w-6" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-[17px] font-bold text-navy leading-snug">
                    Acesse onde preferir
                  </h3>
                  <p className="mt-1 text-sm sm:text-[15px] text-muted-fg leading-relaxed">
                    Utilize pelo celular, tablet ou computador.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Demonstration visual (real gallery placeholder — hidden in prod until real images provided) */}
        <section id="materiais" className="py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <SectionEyebrow>Demonstração visual</SectionEyebrow>
              <h2 className="mt-4 font-display text-3xl font-extrabold text-navy sm:text-4xl">
                Veja como sua revisão fica <span className="marker-underline">mais clara</span> quando os conteúdos
                estão organizados visualmente.
              </h2>
              <p className="mt-4 text-muted-fg">
                Cada rota apresenta os assuntos em uma sequência visual, com conceitos centrais, relações e pontos
                essenciais para a revisão.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {ROUTES.map((r) => (
                <article
                  key={r.title}
                  className="group relative overflow-hidden rounded-3xl border border-border-soft bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className={`inline-flex rounded-full bg-gradient-to-r ${r.color} px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white`}>
                    {r.tag}
                  </div>
                  <h3 className="mt-4 font-display text-xl font-extrabold text-navy">{r.title}</h3>
                  <div className="mt-1 text-sm font-semibold text-green">{r.count}</div>
                  <ul className="mt-4 space-y-1.5 text-sm text-foreground/80">
                    {r.subjects.map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Feature cards */}
        <section id="como-funciona" className="bg-surface py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <SectionEyebrow>Como funciona</SectionEyebrow>
              <h2 className="mt-4 font-display text-3xl font-extrabold text-navy sm:text-4xl">
                Um material pensado para <span className="marker-underline">revisar com clareza</span>.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {FEATURES.map((f) => (
                <div key={f.title} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-border-soft transition hover:-translate-y-1 hover:shadow-md">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cream text-navy">
                    <f.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-extrabold text-navy">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-fg">{f.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <CTAButton event="cta_combo_click" variant="primary">
                Quero organizar minha revisão
              </CTAButton>
            </div>
          </div>
        </section>

        {/* Direct benefit — dark */}
        <section className="relative overflow-hidden bg-navy py-16 text-white sm:py-24">
          <div className="pointer-events-none absolute inset-0 opacity-20">
            <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-green blur-3xl" />
            <div className="absolute bottom-0 -left-16 h-72 w-72 rounded-full bg-gold blur-3xl" />
          </div>
          <div className="relative mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <SectionEyebrow>Benefício direto</SectionEyebrow>
              <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
                Revise de uma forma mais <span className="text-gold">visual, prática e organizada</span>.
              </h2>
              <ul className="mt-6 space-y-3">
                {BENEFITS.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-white/90">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <CTAButton event="cta_combo_click" variant="gold">
                  Quero acessar a Rota Visual 70
                </CTAButton>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {ROUTES.map((r) => (
                <div key={r.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-gold">{r.tag}</div>
                  <div className="mt-1 font-display text-lg font-extrabold">{r.title}</div>
                  <div className="text-sm text-white/70">{r.count}</div>
                </div>
              ))}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="text-[11px] font-bold uppercase tracking-widest text-gold">Total</div>
                <div className="mt-1 font-display text-2xl font-extrabold">70 mapas mentais</div>
                <div className="text-sm text-white/70">3 e-books digitais</div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <SectionEyebrow>O problema</SectionEyebrow>
              <h2 className="mt-4 font-display text-3xl font-extrabold text-navy sm:text-4xl">
                Quanto tempo você ainda vai perder tentando revisar conteúdos espalhados?
              </h2>
              <p className="mt-4 text-muted-fg">
                Durante a preparação, é comum acumular videoaulas, apostilas, exercícios, resumos e anotações. O
                problema aparece quando chega a hora de revisar e você não sabe o que retomar primeiro.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {PAINS.map((p) => (
                <div key={p.title} className="rounded-2xl border border-border-soft bg-white p-5 shadow-sm">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-cream text-navy">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <div className="mt-3 font-display text-base font-extrabold text-navy">{p.title}</div>
                  <p className="mt-1 text-sm text-muted-fg">{p.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <CTAButton event="cta_combo_click">Quero uma rota para minha revisão</CTAButton>
            </div>
          </div>
        </section>

        {/* Ideal para você */}
        <section className="bg-cream py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <SectionEyebrow>Para quem é</SectionEyebrow>
              <h2 className="mt-4 font-display text-3xl font-extrabold text-navy sm:text-4xl">
                Este material é ideal para você que deseja:
              </h2>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {AUDIENCE.map((c) => (
                <div
                  key={c.title}
                  className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-border-soft transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-green/10 text-green">
                      <Target className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-base font-extrabold text-navy">{c.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-muted-fg">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product stack — tudo que recebe */}
        <section id="recebe" className="py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <SectionEyebrow>3 e-books digitais • 70 mapas mentais</SectionEyebrow>
              <h2 className="mt-4 font-display text-3xl font-extrabold text-navy sm:text-4xl">
                Tudo o que você vai receber
              </h2>
              <p className="mt-4 text-muted-fg">
                Tudo organizado para ser visual, prático e fácil de consultar.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {ROUTES.map((r, i) => (
                <article key={r.title} className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-border-soft">
                  <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${r.color}`} />
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-navy text-white">
                      <RouteIcon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-widest text-navy-2">{r.tag}</div>
                      <div className="font-display text-lg font-extrabold text-navy">{r.title}</div>
                    </div>
                  </div>
                  <div className="mt-4 inline-flex rounded-full bg-cream px-3 py-1 text-xs font-bold text-navy">
                    {r.count}
                  </div>
                  <ul className="mt-4 grid grid-cols-1 gap-y-1.5 text-sm text-foreground/80 sm:grid-cols-2">
                    {r.subjects.map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div className="pointer-events-none absolute -bottom-6 -right-6 text-6xl font-black text-navy/5">
                    0{i + 1}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-3xl border border-border-soft bg-gradient-to-r from-cream to-white p-6 text-center sm:p-8">
              <p className="font-display text-xl font-extrabold text-navy sm:text-2xl">
                70 mapas mentais organizados em três rotas.
              </p>
              <div className="mt-5">
                <CTAButton event="cta_combo_click">Quero receber os três e-books</CTAButton>
              </div>
            </div>
          </div>
        </section>

        {/* Bonuses (conditional) */}
        {CONFIG.showBonuses && (
          <section className="bg-surface py-16 sm:py-24">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <div className="mx-auto max-w-3xl text-center">
                <SectionEyebrow>Bônus incluídos</SectionEyebrow>
                <h2 className="mt-4 font-display text-3xl font-extrabold text-navy sm:text-4xl">
                  Ferramentas complementares
                </h2>
              </div>
              <div className="mt-10 grid gap-5 lg:grid-cols-3">
                {BONUSES.map((b) => (
                  <div key={b.title} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-border-soft">
                    <span className="inline-flex rounded-full bg-gold-soft px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-navy">
                      Bônus
                    </span>
                    <h3 className="mt-3 font-display text-lg font-extrabold text-navy">{b.title}</h3>
                    <p className="mt-2 text-sm text-muted-fg">{b.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Method steps */}
        <section className="bg-surface py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <SectionEyebrow>Como aplicar</SectionEyebrow>
              <h2 className="mt-4 font-display text-3xl font-extrabold text-navy sm:text-4xl">
                Como utilizar a Rota Visual 70
              </h2>
            </div>

            <ol className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {METHOD_STEPS.map((s) => (
                <li key={s.n} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-border-soft">
                  <div className="font-display text-3xl font-black text-gold">{s.n}</div>
                  <div className="mt-1 font-display text-base font-extrabold text-navy">{s.title}</div>
                  <p className="mt-1 text-sm text-muted-fg">{s.text}</p>
                </li>
              ))}
            </ol>

            <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-navy sm:text-sm">
              {["Visualizar", "Recuperar", "Identificar", "Direcionar"].map((w, i, arr) => (
                <span key={w} className="flex items-center gap-2">
                  <span className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-border-soft">{w}</span>
                  {i < arr.length - 1 && <span className="text-gold">→</span>}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Not for you */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="rounded-3xl border border-border-soft bg-white p-6 sm:p-8">
              <h2 className="font-display text-xl font-extrabold text-navy sm:text-2xl">
                Antes de escolher, veja o que este material não promete.
              </h2>
              <ul className="mt-5 space-y-2 text-sm text-muted-fg">
                {NOT_FOR.map((n) => (
                  <li key={n} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-2/50" />
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="oferta" className="bg-gradient-to-b from-white to-cream py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <SectionEyebrow>Oferta</SectionEyebrow>
              <h2 className="mt-4 font-display text-3xl font-extrabold text-navy sm:text-4xl">
                Escolha a opção que combina com sua revisão
              </h2>
            </div>

            <div className={`mx-auto mt-12 grid max-w-5xl gap-6 ${CONFIG.showFirstDayOffer ? "lg:grid-cols-2" : "lg:grid-cols-1"}`}>
              {CONFIG.showFirstDayOffer && (
                <div className="flex flex-col justify-between rounded-3xl border border-border-soft bg-white p-6 shadow-sm sm:p-8">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-widest text-navy-2">Opção primária</div>
                    <h3 className="mt-2 font-display text-2xl font-extrabold text-navy">Primeiro Dia + Segundo Dia</h3>
                    <ul className="mt-5 space-y-2 text-sm text-foreground/80">
                      {[
                        "PDF do Primeiro Dia e Segundo Dia",
                        "60 mapas mentais no total",
                        "Linguagens, Redação e Ciências Humanas",
                        "Matemática e Ciências da Natureza",
                        "Acesso após confirmação do pagamento",
                      ].map((i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                          {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="mt-6 border-t border-border-soft pt-6">
                      <div className="text-sm text-muted-fg">Opção primária</div>
                      <div className="font-display text-4xl font-black text-navy">{CONFIG.firstDayPrice}</div>
                    </div>
                    <div className="mt-5">
                      <CTAButton kind="firstDay" event="cta_first_day_click" className="w-full">
                        Quero Primeiro + Segundo Dia
                      </CTAButton>
                    </div>
                    <p className="mt-3 text-center text-xs text-muted-fg">
                      Produto digital. Acesso após a confirmação do pagamento.
                    </p>
                  </div>
                </div>
              )}

              <div className="relative flex flex-col rounded-3xl border-2 border-green bg-white p-6 shadow-xl shadow-green/10 sm:p-8 lg:scale-[1.02]">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-green px-4 py-1 text-[11px] font-bold uppercase tracking-widest text-white shadow-md">
                    Oferta mais completa
                  </span>
                </div>
                <div className="text-[11px] font-bold uppercase tracking-widest text-green">Combo completo</div>
                <h3 className="mt-2 font-display text-2xl font-extrabold text-navy">Rota Visual 70</h3>
                <ul className="mt-5 space-y-2 text-sm text-foreground/80">
                  {[
                    "Primeiro Dia (30 mapas mentais)",
                    "Segundo Dia (30 mapas mentais)",
                    "Atualidades 2026 (10 mapas mentais)",
                    "Três e-books digitais",
                    "70 mapas mentais no total",
                    "Acesso após confirmação do pagamento",
                  ].map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                      {i}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-border-soft pt-6">
                  <div className="text-sm text-muted-fg">Combo completo</div>
                  <div className="font-display text-4xl font-black text-navy">{CONFIG.comboPrice}</div>
                </div>
                <div className="mt-5">
                  <CTAButton event="cta_combo_click" className="w-full">
                    Quero os 70 mapas mentais
                  </CTAButton>
                </div>
                <p className="mt-3 text-center text-xs text-muted-fg">
                  Produto digital. Acesso após a confirmação do pagamento.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Value justification */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="font-display text-2xl font-extrabold text-navy sm:text-3xl">
              Uma única estrutura visual pode evitar horas procurando o mesmo conteúdo em materiais diferentes.
            </h2>
            <p className="mt-4 text-muted-fg">
              Você não está adquirindo apenas arquivos digitais. Está recebendo uma rota organizada para consultar
              conteúdos, recuperar conceitos e decidir o que precisa ser estudado depois.
            </p>
          </div>
        </section>

        {/* Access steps */}
        <section className="bg-surface py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="text-center">
              <SectionEyebrow>Como você recebe</SectionEyebrow>
              <h2 className="mt-4 font-display text-2xl font-extrabold text-navy sm:text-3xl">Passo a passo do acesso</h2>
            </div>
            <ol className="mt-10 grid gap-5 sm:grid-cols-3">
              {[
                { n: "1", t: "Escolha a opção", d: "Combo completo ou apenas o Primeiro Dia." },
                { n: "2", t: "Finalize a compra", d: "Preencha os dados no checkout seguro." },
                { n: "3", t: "Acesse os materiais", d: "Receba os PDFs após a confirmação do pagamento." },
              ].map((s) => (
                <li key={s.n} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-border-soft">
                  <div className="font-display text-3xl font-black text-gold">{s.n}</div>
                  <div className="mt-1 font-display text-base font-extrabold text-navy">{s.t}</div>
                  <p className="mt-1 text-sm text-muted-fg">{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="text-center">
              <SectionEyebrow>Dúvidas frequentes</SectionEyebrow>
              <h2 className="mt-4 font-display text-3xl font-extrabold text-navy sm:text-4xl">Perguntas comuns</h2>
            </div>
            <FAQ />
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-green-dark py-20 text-white">
          <div className="pointer-events-none absolute inset-0 opacity-20">
            <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-gold blur-3xl" />
            <div className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-green blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
            <SectionEyebrow>Última seção</SectionEyebrow>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
              Transforme materiais espalhados em uma <span className="text-gold">rota visual de revisão</span>.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/85">
              Tenha acesso aos três e-books e consulte 70 mapas mentais organizados entre o Primeiro Dia, Segundo Dia e
              Atualidades 2026.
            </p>
            <ul className="mx-auto mt-6 flex max-w-md flex-col gap-2 text-left text-sm text-white/90">
              {[
                "Três e-books digitais",
                "70 mapas mentais",
                "Acesso após confirmação do pagamento",
                "Leitura em diferentes dispositivos",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  {i}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col items-center gap-3">
              <div className="text-sm text-white/80">
                Combo completo por <span className="text-lg font-extrabold text-gold">{CONFIG.comboPrice}</span>
              </div>
              <CTAButton event="cta_combo_click" variant="gold">
                Quero acessar os 70 mapas mentais
              </CTAButton>
              <p className="text-xs text-white/70">Produto digital. Nenhum material físico será enviado.</p>
            </div>
          </div>
        </section>
      </main>

      <footer ref={footerRef} className="bg-black text-gray-300 pb-24 pt-12 sm:pb-14 border-t border-gray-800">
        <div className="mx-auto max-w-4xl px-4 text-center space-y-4 text-xs leading-relaxed text-gray-400">
          <h3 className="text-base font-bold text-white tracking-wide">Direitos Reservados</h3>

          <p>
            Este site não é afiliado ao Facebook™, Instagram™, Google™ ou qualquer outra plataforma mencionada.
          </p>

          <p>
            Todos os direitos sobre a obra <strong className="text-white">"Guia Visual para o ENEM 2026"</strong> são reservados à marca{" "}
            <strong className="text-white">{CONFIG.companyName}</strong>, nos termos da Lei nº 9.610/98 (Lei de Direitos Autorais).
          </p>

          <p>
            A reprodução não autorizada desta publicação, no todo ou em parte, por quaisquer meios, constitui violação dos direitos autorais (Art. 184 do Código Penal e Lei 9.610/98), sujeitando os infratoras às sanções cíveis e criminais previstas na legislação aplicável.
          </p>

          <div className="pt-6 border-t border-gray-800/80 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-xs text-gray-400">
            <span>
              Suporte:{" "}
              <a href={`mailto:${CONFIG.supportEmail}`} className="text-white hover:underline">
                {CONFIG.supportEmail}
              </a>
            </span>
            <span className="hidden sm:inline text-gray-600">•</span>
            <span>© {new Date().getFullYear()} {CONFIG.companyName}. Todos os direitos reservados.</span>
            <span className="hidden sm:inline text-gray-600">•</span>
            <span>Produto 100% digital.</span>
          </div>
        </div>
      </footer>

      {/* Mobile sticky CTA */}
      {showSticky && (
        <div
          className="fixed inset-x-0 bottom-0 z-50 border-t border-border-soft bg-white/95 backdrop-blur lg:hidden"
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
            <div className="min-w-0">
              <div className="truncate text-[11px] font-bold uppercase tracking-widest text-navy-2">70 mapas mentais</div>
              <div className="font-display text-lg font-extrabold text-navy">{CONFIG.comboPrice}</div>
            </div>
            <CTAButton event="cta_combo_click" size="md">
              Quero acessar
            </CTAButton>
          </div>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────── MindMap Carousel component
const CAROUSEL_IMAGES = [
  {
    src: "/carousel/mapa-1.jpg",
    alt: "Capa O Primeiro Dia - Guia Visual ENEM 2026",
    title: "Capa • O Primeiro Dia (30 Mapas)",
  },
  {
    src: "/carousel/mapa-2.jpg",
    alt: "Mapa 1: Gêneros Textuais e Situação Comunicativa",
    title: "1. Gêneros Textuais e Situação Comunicativa",
  },
  {
    src: "/carousel/mapa-3.jpg",
    alt: "Mapa 2: Sequências Textuais",
    title: "2. Sequências Textuais",
  },
  {
    src: "/carousel/mapa-4.jpg",
    alt: "Capa O Segundo Dia - Guia Visual ENEM 2026",
    title: "Capa • O Segundo Dia (30 Mapas)",
  },
  {
    src: "/carousel/mapa-5.jpg",
    alt: "Mapa 1: Números e Operações",
    title: "1. Números e Operações",
  },
  {
    src: "/carousel/mapa-6.jpg",
    alt: "Mapa 2: Razão, Proporção e Escalas",
    title: "2. Razão, Proporção e Escalas",
  },
];

function MindMapCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  // Autoplay interval (3 seconds)
  useEffect(() => {
    if (!emblaApi) return;
    const timer = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      clearInterval(timer);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="mt-12 w-full py-8 bg-gradient-to-b from-cream/40 via-white to-surface border-y border-border-soft overflow-hidden">
      <div className="mx-auto max-w-3xl text-center mb-6 px-4">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-800">
          <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
          Conheça o material por dentro
        </span>
        <h3 className="mt-3 font-display text-2xl font-extrabold text-black sm:text-3xl">
          Veja os Mapas Mentais por dentro
        </h3>
        <p className="mt-1 text-sm text-muted-fg">
          Imagens passando automaticamente. Você também pode arrastar para os lados.
        </p>
      </div>

      <div className="relative w-full px-2 sm:px-6">
        <div className="overflow-hidden py-3" ref={emblaRef}>
          <div className="flex gap-4 sm:gap-6">
            {CAROUSEL_IMAGES.map((img) => (
              <div
                key={img.src}
                className="flex-[0_0_78%] sm:flex-[0_0_42%] md:flex-[0_0_30%] lg:flex-[0_0_24%] xl:flex-[0_0_20%] min-w-0"
              >
                <div className="group relative overflow-hidden rounded-2xl border border-border-soft bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="aspect-[3/4.2] w-full overflow-hidden bg-surface">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-3 text-center bg-white border-t border-border-soft">
                    <span className="text-xs font-bold text-navy truncate block">
                      {img.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          type="button"
          onClick={scrollPrev}
          aria-label="Mapa anterior"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/90 text-navy shadow-lg backdrop-blur border border-border-soft transition hover:bg-white hover:scale-110 active:scale-95"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          type="button"
          onClick={scrollNext}
          aria-label="Próximo mapa"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/90 text-navy shadow-lg backdrop-blur border border-border-soft transition hover:bg-white hover:scale-110 active:scale-95"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Pagination Dots */}
        <div className="mt-5 flex justify-center gap-2">
          {CAROUSEL_IMAGES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Ir para mapa ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                selectedIndex === i ? "w-8 bg-green" : "w-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────── FAQ component
function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const items = useMemo(() => FAQ_ITEMS, []);
  return (
    <div className="mt-10 divide-y divide-border-soft overflow-hidden rounded-3xl border border-border-soft bg-white">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <button
              type="button"
              onClick={() => {
                setOpen(isOpen ? null : i);
                if (!isOpen) trackEvent("faq_open", { index: i });
              }}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-cream/50"
            >
              <span className="font-display text-base font-bold text-navy">{f.q}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-navy-2 transition-transform ${isOpen ? "rotate-180" : ""}`}
                aria-hidden
              />
            </button>
            {isOpen && <div className="px-5 pb-5 text-sm text-muted-fg">{f.a}</div>}
          </div>
        );
      })}
    </div>
  );
}
