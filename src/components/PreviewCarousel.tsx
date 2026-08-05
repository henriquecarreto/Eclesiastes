import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Maximize2, Sparkles } from "lucide-react";
import { PREVIEW_PAGES } from "../data/siteContent";
import { ImageModal } from "./ImageModal";

export function PreviewCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    // Slow Autoplay timer (5 seconds)
    const interval = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 5000);

    return () => {
      clearInterval(interval);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollToOffers = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("ofertas");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF7] text-[#1D252C]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#C0923E]/30 bg-[#F8F0DE] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#A97924]">
            <Sparkles className="h-3.5 w-3.5 text-[#C0923E]" />
            VEJA POR DENTRO
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-normal text-[#0B2D4A] tracking-tight">
            Conheça algumas páginas da jornada
          </h2>
          <p className="mt-3 text-base text-[#46515B]">
            Arraste para os lados ou use os controles para visualizar exemplos reais do material.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative mt-12">
          
          {/* Main Embla Viewport */}
          <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex gap-6">
              {PREVIEW_PAGES.map((page, idx) => (
                <div
                  key={idx}
                  className="flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_32%] min-w-0"
                >
                  <div className="group relative overflow-hidden rounded-2xl border border-[#EAD9B5] bg-[#FFFDF7] p-3 shadow-md transition-all duration-300 hover:shadow-xl hover:border-[#C0923E]">
                    
                    {/* Image Aspect Box */}
                    <div className="relative overflow-hidden rounded-xl bg-[#1D252C] aspect-[3/4.5] flex items-center justify-center">
                      <img
                        src={page.src}
                        alt={`Página ${page.num} — ${page.title}`}
                        className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-[1.02]"
                        loading="lazy"
                      />

                      {/* Discreta Marca d'água */}
                      <div className="absolute top-2 right-2 bg-[#071E32]/90 border border-[#C0923E]/40 px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-widest text-[#DEC28B] backdrop-blur-md">
                        PRÉVIA
                      </div>

                      {/* Botão de Ampliação ao passar o mouse */}
                      <button
                        onClick={() => setSelectedImage({ src: page.src, title: `Página ${page.num}: ${page.title}` })}
                        className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white font-medium gap-2"
                        aria-label={`Ampliar página ${page.num}`}
                      >
                        <span className="grid h-12 w-12 place-items-center rounded-full bg-[#071E32]/90 text-[#DEC28B] border border-[#C0923E]/40 shadow-lg">
                          <Maximize2 className="h-5 w-5" />
                        </span>
                        <span className="text-xs font-serif tracking-wider uppercase bg-[#071E32]/90 px-3 py-1 rounded-full text-[#DEC28B] border border-[#C0923E]/30">
                          Ampliar Página
                        </span>
                      </button>
                    </div>

                    {/* Descrição em rodapé do card */}
                    <div className="mt-3 px-1 text-left">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#A97924]">
                        Página {page.num}
                      </div>
                      <h3 className="font-serif text-base font-bold text-[#0B2D4A]">
                        {page.title}
                      </h3>
                      <p className="text-xs text-[#46515B] line-clamp-1 mt-0.5">
                        {page.desc}
                      </p>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Seta Esquerda */}
          <button
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 grid h-11 w-11 place-items-center rounded-full bg-[#071E32]/90 text-[#DEC28B] border border-[#C0923E]/40 shadow-lg transition hover:bg-[#C0923E] hover:text-[#071E32] focus:outline-none focus:ring-2 focus:ring-[#C0923E]"
            aria-label="Página anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Seta Direita */}
          <button
            onClick={scrollNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 grid h-11 w-11 place-items-center rounded-full bg-[#071E32]/90 text-[#DEC28B] border border-[#C0923E]/40 shadow-lg transition hover:bg-[#C0923E] hover:text-[#071E32] focus:outline-none focus:ring-2 focus:ring-[#C0923E]"
            aria-label="Próxima página"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Indicadores Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {scrollSnaps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(idx)}
                className={`h-2.5 rounded-full transition-all duration-200 ${
                  idx === selectedIndex
                    ? "w-8 bg-[#C0923E]"
                    : "w-2.5 bg-[#EAD9B5] hover:bg-[#C0923E]/50"
                }`}
                aria-label={`Ir para a prévia ${idx + 1}`}
              />
            ))}
          </div>

        </div>

        {/* CTA do Carrossel */}
        <div className="mt-10 text-center">
          <a
            href="#ofertas"
            onClick={scrollToOffers}
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#16A34A] via-[#22C55E] to-[#15803D] px-8 py-3.5 text-base font-extrabold uppercase tracking-wider text-white shadow-xl shadow-green-900/30 transition hover:scale-[1.02] hover:brightness-110 active:scale-[0.99]"
          >
            QUERO ACESSAR O E-BOOK
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage?.src || ""}
        imageAlt={selectedImage?.title || ""}
        title={selectedImage?.title}
      />
    </section>
  );
}
