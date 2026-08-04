import React from "react";
import { Sparkles } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="bg-[#071E32] text-[#FFFDF7] border-b border-[#A97924]/20 py-2.5 px-4 text-center text-xs sm:text-sm font-medium tracking-wide">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-2">
        <Sparkles className="h-4 w-4 text-[#C0923E] shrink-0" aria-hidden="true" />
        <span>CONDIÇÃO ESPECIAL DE LANÇAMENTO • MATERIAL 100% DIGITAL</span>
      </div>
    </div>
  );
}
