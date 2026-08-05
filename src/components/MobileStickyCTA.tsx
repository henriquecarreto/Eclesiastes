import React, { useState, useEffect } from "react";
import { editableFields } from "../data/siteContent";
import { Lock } from "lucide-react";

export function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offersEl = document.getElementById("ofertas");
      
      let isOverOffers = false;
      if (offersEl) {
        const rect = offersEl.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          isOverOffers = true;
        }
      }

      if (scrollY > 350 && !isOverOffers) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  const price = editableFields.singleOfferPrice;
  const checkoutUrl = editableFields.singleOfferCheckoutUrl;
  const isPending = !checkoutUrl || checkoutUrl.trim() === "";

  const handleClick = (e: React.MouseEvent) => {
    if (isPending) {
      e.preventDefault();
      const el = document.getElementById("ofertas");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#163142]/95 border-t border-[#D1A653]/40 p-3 shadow-2xl backdrop-blur-md pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col text-left">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#D1A653]">
            Jornada Debaixo do Sol
          </span>
          <span className="text-base font-bold text-[#FFFDF8]">
            {price}
          </span>
        </div>

        {isPending ? (
          <a
            href="#ofertas"
            onClick={handleClick}
            className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#C76545] px-4 py-2.5 text-xs font-extrabold uppercase tracking-wider text-[#FFFDF8] shadow-md terracota-glow"
          >
            <Lock className="h-3.5 w-3.5" />
            <span>QUERO COMEÇAR A JORNADA</span>
          </a>
        ) : (
          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#C76545] px-4 py-2.5 text-xs font-extrabold uppercase tracking-wider text-[#FFFDF8] shadow-md terracota-glow"
          >
            <Lock className="h-3.5 w-3.5" />
            <span>QUERO COMEÇAR A JORNADA</span>
          </a>
        )}
      </div>
    </div>
  );
}
