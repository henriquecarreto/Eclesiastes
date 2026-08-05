import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Maximize2, Sparkles, ArrowRight } from "lucide-react";
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

    return () => {
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
    <section className="py-16 sm:py-24 bg-[#FBF5E9] text-[#26343B] border-b border-[#EADBC4]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#2F6B4F]/30 bg-[#FFFDF8] px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#2F6B4F]">
            <Sparkles className="h-3.5 w-3.5 text-[#2F6B4F]" />
            VEJA POR DENTRO DO MATERIAL PRINCIPAL
          </span>
          <h2 className="mt-5 font-serif text-3xl sm:text-4xl lg:text-4.5xl font-normal text-[#163142] tracking-tight">
            Veja por dentro do material principal
          </h2>
          <p className="mt-3 text-base text-[#60686C]">
            Explore algumas páginas reais de <em>Quando Nada Parece Fazer Sentido</em> e observe como o conteúdo foi organizado de forma visual, clara e aplicável.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative mt-10">
          <div className="overflow-hidden py-4" ref={emblaRef}>
            <div className="flex -ml-3 sm:-ml-4">
              {PREVIEW_PAGES.map((page, idx) => (
                <div
                  key={idx}
                  className="flex-[0_0_75%] sm:flex-[0_0_40%] md:flex-[0_0_30%] lg:flex-[0_0_24%] min-w-0 pl-3 sm:pl-4"
                >
                  <div
                    onClick={() => setSelectedImage({ src: page.src, title: `Página ${page.num}: ${page.title}` })}
                    className="group relative cursor-pointer overflow-hidden rounded-2xl border border-[#EADBC4] bg-[#FFFDF8] p-1.5 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-[#2F6B4F]"
                  >
                    <div className="relative overflow-hidden rounded-xl bg-[#FFFDF8]">
                      <img
                        src={page.src}
                        alt={`Página ${page.num} — ${page.title}`}
                        className="w-full h-auto block rounded-lg object-contain transition duration-300 group-hover:brightness-95"
                        loading="lazy"
                      />

                      {/* Botão de Ampliação */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white font-medium gap-1.5 rounded-lg backdrop-blur-[1px]">
                        <span className="grid h-10 w-10 place-items-center rounded-full bg-[#163142]/90 text-[#D1A653] border border-[#D1A653]/50 shadow-lg">
                          <Maximize2 className="h-4 w-4" />
                        </span>
                        <span className="text-[11px] font-semibold tracking-wider uppercase bg-[#163142]/90 px-3 py-1 rounded-full text-[#FFFDF8] border border-[#D1A653]/40 shadow-md">
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
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-5 z-10 grid h-11 w-11 place-items-center rounded-full bg-[#163142]/90 text-[#D1A653] border border-[#D1A653]/40 shadow-xl transition hover:bg-[#2F6B4F] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#9BC8A8]"
            aria-label="Página anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Seta Direita */}
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-5 z-10 grid h-11 w-11 place-items-center rounded-full bg-[#163142]/90 text-[#D1A653] border border-[#D1A653]/40 shadow-xl transition hover:bg-[#2F6B4F] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#9BC8A8]"
            aria-label="Próxima página"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots */}
          <div className="mt-4 flex justify-center gap-2">
            {scrollSnaps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(idx)}
                className={`h-2.5 rounded-full transition-all duration-200 ${
                  idx === selectedIndex
                    ? "w-8 bg-[#2F6B4F]"
                    : "w-2.5 bg-[#EADBC4] hover:bg-[#2F6B4F]/50"
                }`}
                aria-label={`Ir para a prévia ${idx + 1}`}
              />
            ))}
          </div>

        </div>

        {/* Rodapé da Galeria */}
        <p className="mt-8 text-center text-sm sm:text-base text-[#60686C] max-w-2xl mx-auto font-sans leading-relaxed">
          Cada página foi pensada para transformar uma leitura profunda em uma experiência mais organizada e acessível.
        </p>

        {/* Botão Verde Profundo */}
        <div className="mt-8 text-center">
          <a
            href="#ofertas"
            onClick={scrollToOffers}
            className="inline-flex min-h-[54px] items-center justify-center gap-2.5 rounded-xl bg-[#2F6B4F] px-8 py-4 text-base font-bold uppercase tracking-wider text-[#FFFDF8] btn-green-glow transition-all duration-200 hover:bg-[#24563F] hover:scale-[1.01] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-[#9BC8A8]"
          >
            <span>Quero começar minha jornada</span>
            <ArrowRight className="h-4 w-4" />
          </a>
          <p className="mt-2 text-xs font-medium text-[#60686C]">
            4 materiais digitais por {editableFields.singleOfferPrice}
          </p>
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
