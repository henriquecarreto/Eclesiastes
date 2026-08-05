import React from "react";
import { Zap } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="bg-[#0A1120] text-[#FFFDF7] border-b border-[#C0923E]/20 py-2.5 px-4 text-center text-xs sm:text-sm font-bold tracking-wider uppercase">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-2">
        <Zap className="h-4 w-4 text-[#F97316] shrink-0 fill-[#F97316]" aria-hidden="true" />
        <span>OFERTA ESPECIAL DISPONÍVEL APENAS HOJE</span>
      </div>
    </div>
  );
}
