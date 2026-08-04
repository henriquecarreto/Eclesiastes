import React, { useEffect } from "react";
import { X, ZoomIn } from "lucide-react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  title?: string;
}

export function ImageModal({ isOpen, onClose, imageSrc, imageAlt, title }: ImageModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title || "Ampliação da imagem"}
    >
      <div
        className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-2xl border border-[#C0923E]/40 bg-[#071E32] p-2 sm:p-4 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão de Fechar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-[#071E32]/80 text-[#DEC28B] border border-[#C0923E]/40 hover:bg-[#C0923E] hover:text-[#071E32] transition"
          aria-label="Fechar ampliação"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Título */}
        {title && (
          <div className="mb-2 px-2 text-center font-serif text-lg font-bold text-[#FFFDF7]">
            {title}
          </div>
        )}

        {/* Container da Imagem */}
        <div className="relative overflow-hidden rounded-xl bg-[#1D252C] flex items-center justify-center max-h-[78vh]">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="max-h-[78vh] w-auto object-contain rounded-lg"
          />
          {/* Marca d'água discreta */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-[#071E32]/90 border border-[#C0923E]/40 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#DEC28B] backdrop-blur-md pointer-events-none">
            PRÉVIA DO MATERIAL • ACERVO SEGURO
          </div>
        </div>
      </div>
    </div>
  );
}
