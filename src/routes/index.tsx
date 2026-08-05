import { createFileRoute } from "@tanstack/react-router";
import { AnnouncementBar } from "../components/AnnouncementBar";
import { Hero } from "../components/Hero";
import { ProblemSolution } from "../components/ProblemSolution";
import { BeliefBreak } from "../components/BeliefBreak";
import { FourMovements } from "../components/FourMovements";
import { ProductDetails } from "../components/ProductDetails";
import { UsageSteps } from "../components/UsageSteps";
import { PreviewCarousel } from "../components/PreviewCarousel";
import { Benefits } from "../components/Benefits";
import { Audience } from "../components/Audience";
import { Offers } from "../components/Offers";
import { Guarantee } from "../components/Guarantee";
import { FAQ } from "../components/FAQ";
import { FinalCTA } from "../components/FinalCTA";
import { Footer } from "../components/Footer";
import { MobileStickyCTA } from "../components/MobileStickyCTA";
import { BackToTop } from "../components/BackToTop";
import { editableFields, FAQ_ITEMS } from "../data/siteContent";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: "Jornada Debaixo do Sol | 4 Materiais Digitais Baseados em Eclesiastes" },
      {
        name: "description",
        content:
          "Uma jornada bíblica em quatro movimentos para compreender fases de espera, interromper o automático e reorganizar prioridades com mais sabedoria.",
      },
      { property: "og:title", content: "Jornada Debaixo do Sol | 4 Materiais Digitais Baseados em Eclesiastes" },
      {
        property: "og:description",
        content:
          "Uma jornada bíblica em quatro movimentos para compreender fases de espera, interromper o automático e reorganizar prioridades com mais sabedoria.",
      },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Jornada Debaixo do Sol",
          description:
            "Uma jornada bíblica em quatro movimentos para compreender fases de espera, interromper o automático e reorganizar prioridades com mais sabedoria.",
          brand: { "@type": "Brand", name: editableFields.companyName },
          category: "Literatura Bíblica e Recursos Digitais",
          offers: {
            "@type": "Offer",
            price: "19.90",
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
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }),
      },
    ],
  }),
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FFFDF8] text-[#26343B] selection:bg-[#2F6B4F]/20 selection:text-[#163142]">
      {/* 1. Barra Superior */}
      <AnnouncementBar />

      {/* Seções Principais */}
      <main id="top">
        {/* 2. Primeira Dobra (Hero) */}
        <Hero />

        {/* 3. Identificação com a Dor */}
        <ProblemSolution />

        {/* 4. Quebra de Crença */}
        <BeliefBreak />

        {/* 5. Mecanismo dos Quatro Movimentos */}
        <FourMovements />

        {/* 6. Apresentação dos Quatro Materiais Digitais */}
        <ProductDetails />

        {/* 7. Como Utilizar (Método) */}
        <UsageSteps />

        {/* 8. Prévia do Material Principal */}
        <PreviewCarousel />

        {/* 9. Benefícios */}
        <Benefits />

        {/* 10. Para Quem Foi Criado */}
        <Audience />

        {/* 11. Apresentação Consolidada da Oferta */}
        <Offers />

        {/* 12. Garantia */}
        <Guarantee />

        {/* 13. Perguntas Frequentes */}
        <FAQ />

        {/* 14. Chamada Final */}
        <FinalCTA />
      </main>

      {/* 15. Rodapé */}
      <Footer />

      {/* 16. CTA Fixo Celular */}
      <MobileStickyCTA />

      {/* 17. Botão Voltar ao Topo */}
      <BackToTop />
    </div>
  );
}
