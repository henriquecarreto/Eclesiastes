import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Maximize2, Sparkles } from "lucide-react";
import { PREVIEW_PAGES, editableFields } from "../data/siteContent";
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
    <section className="py-16 sm:py-24 bg-[#F7F0E3] text-[#1F272D] border-b border-[#EADDC5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#B8892E]/30 bg-[#FFFDF8] px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#B8892E]">
            <Sparkles className="h-3.5 w-3.5 text-[#B8892E]" />
            VEJA POR DENTRO
          </span>
          <h2 className="mt-5 font-serif text-3xl sm:text-4xl lg:text-4.5xl font-normal text-[#0B2942] tracking-tight">
            Conheça a experiência visual da jornada
          </h2>
          <p className="mt-3 text-base text-[#5C6062]">
            Explore algumas páginas reais e observe como as reflexões, os mapas e as aplicações foram organizados.
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
                    className="group relative cursor-pointer overflow-hidden rounded-2xl border border-[#EADDC5] bg-[#FFFDF8] p-1.5 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-[#B8892E]"
                  >
                    {/* Visual Card Image */}
                    <div className="relative overflow-hidden rounded-xl bg-[#FFFDF8]">
                      <img
                        src={page.src}
                        alt={`Página ${page.num} — ${page.title}`}
                        className="w-full h-auto block rounded-lg object-contain transition duration-300 group-hover:brightness-95"
                        loading="lazy"
                      />

                      {/* Botão de Ampliação ao passar o mouse */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white font-medium gap-1.5 rounded-lg backdrop-blur-[1px]">
                        <span className="grid h-10 w-10 place-items-center rounded-full bg-[#0B2942]/90 text-[#D6B76C] border border-[#B8892E]/50 shadow-lg">
                          <Maximize2 className="h-4 w-4" />
                        </span>
                        <span className="text-[11px] font-semibold tracking-wider uppercase bg-[#0B2942]/90 px-3 py-1 rounded-full text-[#D6B76C] border border-[#B8892E]/40 shadow-md">
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
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-5 z-10 grid h-11 w-11 place-items-center rounded-full bg-[#0B2942]/90 text-[#D6B76C] border border-[#B8892E]/40 shadow-xl transition hover:bg-[#B8892E] hover:text-[#0B2942] focus:outline-none focus:ring-2 focus:ring-[#B8892E]"
            aria-label="Página anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Seta Direita */}
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-5 z-10 grid h-11 w-11 place-items-center rounded-full bg-[#0B2942]/90 text-[#D6B76C] border border-[#B8892E]/40 shadow-xl transition hover:bg-[#B8892E] hover:text-[#0B2942] focus:outline-none focus:ring-2 focus:ring-[#B8892E]"
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
                    ? "w-8 bg-[#B8892E]"
                    : "w-2.5 bg-[#EADDC5] hover:bg-[#B8892E]/50"
                }`}
                aria-label={`Ir para a prévia ${idx + 1}`}
              />
            ))}
          </div>

        </div>

        {/* Legenda Explicativa no Rodapé da Galeria */}
        <p className="mt-8 text-center text-sm sm:text-base text-[#5C6062] max-w-2xl mx-auto font-sans leading-relaxed">
          Cada página foi pensada para transformar uma leitura profunda em uma experiência mais clara, organizada e aplicável.
        </p>

        {/* Botão de Ação Padronizado */}
        <div className="mt-8 text-center">
          <a
            href="#ofertas"
            onClick={scrollToOffers}
            className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-[#0B2942] px-8 py-3.5 text-base font-bold uppercase tracking-wider text-[#FFFDF8] shadow-md transition-all hover:bg-[#153B59] hover:scale-[1.01] active:scale-[0.99]"
          >
            Quero iniciar a Jornada por {editableFields.singleOfferPrice}
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
