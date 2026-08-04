import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="hidden md:grid fixed bottom-6 right-6 z-40 h-11 w-11 place-items-center rounded-full bg-[#071E32]/90 text-[#DEC28B] border border-[#C0923E]/40 shadow-xl transition-all duration-200 hover:bg-[#C0923E] hover:text-[#071E32] focus:outline-none focus:ring-2 focus:ring-[#C0923E]"
      aria-label="Voltar ao topo da página"
    >
      <ChevronUp className="h-6 w-6" />
    </button>
  );
}
