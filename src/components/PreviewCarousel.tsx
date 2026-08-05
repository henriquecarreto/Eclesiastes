import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Maximize2, Sparkles } from "lucide-react";
import { PREVIEW_PAGES } from "../data/siteContent";
import { ImageModal } from "./ImageModal";

export function PreviewCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
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
        <div className="relative mt-10">
          
          {/* Main Embla Viewport */}
          <div className="overflow-hidden py-4" ref={emblaRef}>
            <div className="flex -ml-3 sm:-ml-4">
              {PREVIEW_PAGES.map((page, idx) => (
                <div
                  key={idx}
                  className="flex-[0_0_72%] sm:flex-[0_0_38%] md:flex-[0_0_28%] lg:flex-[0_0_22%] min-w-0 pl-3 sm:pl-4"
                >
                  <div
                    onClick={() => setSelectedImage({ src: page.src, title: `Página ${page.num}: ${page.title}` })}
                    className="group relative cursor-pointer overflow-hidden rounded-2xl border border-[#EAD9B5]/80 bg-[#FFFDF7] p-1.5 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-[#C0923E]"
                  >
                    {/* Visual Card Image */}
                    <div className="relative overflow-hidden rounded-xl bg-[#FFFDF7]">
                      <img
                        src={page.src}
                        alt={`Página ${page.num} — ${page.title}`}
                        className="w-full h-auto block rounded-lg object-contain transition duration-300 group-hover:brightness-95"
                        loading="lazy"
                      />

                      {/* Botão de Ampliação ao passar o mouse */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white font-medium gap-1.5 rounded-lg backdrop-blur-[1px]">
                        <span className="grid h-10 w-10 place-items-center rounded-full bg-[#0F172A]/90 text-[#DEC28B] border border-[#C0923E]/50 shadow-lg">
                          <Maximize2 className="h-4 w-4" />
                        </span>
                        <span className="text-[11px] font-semibold tracking-wider uppercase bg-[#0F172A]/90 px-3 py-1 rounded-full text-[#DEC28B] border border-[#C0923E]/40 shadow-md">
                          Ampliar Página
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Seta Esquerda */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-5 z-10 grid h-11 w-11 place-items-center rounded-full bg-[#0F172A]/90 text-[#DEC28B] border border-[#C0923E]/40 shadow-xl transition hover:bg-[#C0923E] hover:text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#C0923E]"
            aria-label="Página anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Seta Direita */}
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-5 z-10 grid h-11 w-11 place-items-center rounded-full bg-[#0F172A]/90 text-[#DEC28B] border border-[#C0923E]/40 shadow-xl transition hover:bg-[#C0923E] hover:text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#C0923E]"
            aria-label="Próxima página"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Indicadores Dots */}
          <div className="mt-4 flex justify-center gap-2">
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

        {/* Legenda Informativa no Rodapé do Carrossel */}
        <p className="mt-6 text-center text-sm sm:text-base text-[#46515B] max-w-2xl mx-auto font-sans leading-relaxed">
          O <span className="font-semibold text-[#0B2D4A]">E-book Visual Eclesiastes</span> foi pensado para transformar um assunto profundo em um material mais simples e inspirador de visualizar.
        </p>

        {/* CTA do Carrossel */}
        <div className="mt-8 text-center">
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
