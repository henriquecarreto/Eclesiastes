import { createFileRoute } from "@tanstack/react-router";
import { AnnouncementBar } from "../components/AnnouncementBar";
import { Hero } from "../components/Hero";
import { TrustStrip } from "../components/TrustStrip";
import { ProblemSolution } from "../components/ProblemSolution";
import { Methodology } from "../components/Methodology";
import { PreviewCarousel } from "../components/PreviewCarousel";
import { ProductDetails } from "../components/ProductDetails";
import { Themes } from "../components/Themes";
import { Audience } from "../components/Audience";
import { UsageSteps } from "../components/UsageSteps";
import { Benefits } from "../components/Benefits";
import { Offers } from "../components/Offers";
import { AccessSteps } from "../components/AccessSteps";
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
      { title: `${editableFields.productName} | ${editableFields.companyName}` },
      {
        name: "description",
        content:
          "Uma jornada visual de 50 páginas pelo livro de Eclesiastes, com 20 lições, reflexões, práticas e orações para o cotidiano.",
      },
      { property: "og:title", content: `${editableFields.productName} | ${editableFields.companyName}` },
      {
        property: "og:description",
        content:
          "Uma jornada visual de 50 páginas pelo livro de Eclesiastes, com 20 lições, reflexões, práticas e orações para o cotidiano.",
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
          name: editableFields.productName,
          description:
            "E-book digital com 50 páginas e 20 lições visuais pelo livro de Eclesiastes.",
          brand: { "@type": "Brand", name: editableFields.companyName },
          category: "Livros e Literatura Bíblica",
          offers: {
            "@type": "Offer",
            price: editableFields.singleOfferPrice.replace("R$", "").replace(",", ".").trim(),
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
    <div className="min-h-screen bg-[#FFFDF7] text-[#1D252C] selection:bg-[#C0923E]/30 selection:text-[#071E32]">
      {/* 1. Barra Superior */}
      <AnnouncementBar />

      {/* Main Content Sections */}
      <main id="top">
        {/* 2. Hero */}
        <Hero />

        {/* 3. Faixa de Confiança */}
        <TrustStrip />

        {/* 4. Identificação com o Problema */}
        <ProblemSolution />

        {/* 5. Metodologia */}
        <Methodology />

        {/* 6. Carrossel de Prévia */}
        <PreviewCarousel />

        {/* 7. Apresentação do Produto */}
        <ProductDetails />

        {/* 8. Temas Abordados */}
        <Themes />

        {/* 9. Para Quem É */}
        <Audience />

        {/* 10. Como Utilizar */}
        <UsageSteps />

        {/* 11. Benefícios */}
        <Benefits />

        {/* 12. Ofertas */}
        <Offers />

        {/* 13. Como o Acesso Funciona */}
        <AccessSteps />

        {/* 14. Garantia */}
        <Guarantee />

        {/* 15. FAQ */}
        <FAQ />

        {/* 16. CTA Final */}
        <FinalCTA />
      </main>

      {/* 17. Rodapé */}
      <Footer />

      {/* 18. CTA Fixo Celular */}
      <MobileStickyCTA />

      {/* 19. Botão Voltar ao Topo */}
      <BackToTop />
    </div>
  );
}
