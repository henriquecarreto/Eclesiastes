import { createFileRoute } from "@tanstack/react-router";
import { AnnouncementBar } from "../components/AnnouncementBar";
import { Hero } from "../components/Hero";
import { TrustStrip } from "../components/TrustStrip";
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
      { title: "Jornada Debaixo do Sol | 4 Guias Visuais Baseados em Eclesiastes" },
      {
        name: "description",
        content:
          "Uma jornada bíblica em quatro movimentos para compreender fases de espera, sair do automático e reorganizar prioridades com mais sabedoria.",
      },
      { property: "og:title", content: "Jornada Debaixo do Sol | 4 Guias Visuais Baseados em Eclesiastes" },
      {
        property: "og:description",
        content:
          "Uma jornada bíblica em quatro movimentos para compreender fases de espera, sair do automático e reorganizar prioridades com mais sabedoria.",
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
            "Uma jornada bíblica em quatro movimentos para compreender fases de espera, sair do automático e reorganizar prioridades com mais sabedoria.",
          brand: { "@type": "Brand", name: editableFields.companyName },
          category: "Livros e Literatura Bíblica",
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
    <div className="min-h-screen bg-[#FFFDF8] text-[#1F272D] selection:bg-[#B8892E]/30 selection:text-[#0B2942]">
      {/* 1. Barra Superior */}
      <AnnouncementBar />

      {/* Seções Principais */}
      <main id="top">
        {/* 2. Primeira Dobra (Hero) */}
        <Hero />

        {/* 3. Faixa de Confiança */}
        <TrustStrip />

        {/* 4. Identificação com a Dor */}
        <ProblemSolution />

        {/* 5. Quebra de Crença */}
        <BeliefBreak />

        {/* 6. Mecanismo dos Quatro Movimentos */}
        <FourMovements />

        {/* 7. Apresentação dos Quatro Materiais */}
        <ProductDetails />

        {/* 8. Como Utilizar (Método) */}
        <UsageSteps />

        {/* 9. Prévia do Material */}
        <PreviewCarousel />

        {/* 10. Benefícios */}
        <Benefits />

        {/* 11. Para Quem É / Para Quem Não É */}
        <Audience />

        {/* 12. Apresentação Consolidada da Oferta */}
        <Offers />

        {/* 13. Garantia */}
        <Guarantee />

        {/* 14. Perguntas Frequentes */}
        <FAQ />

        {/* 15. Chamada Final */}
        <FinalCTA />
      </main>

      {/* 16. Rodapé */}
      <Footer />

      {/* 17. CTA Fixo Celular */}
      <MobileStickyCTA />

      {/* 18. Botão Voltar ao Topo */}
      <BackToTop />
    </div>
  );
}
