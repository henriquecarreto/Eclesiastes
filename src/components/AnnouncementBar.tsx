import React from "react";

export function AnnouncementBar() {
  return (
    <div className="bg-[#163142] text-[#FFFDF8] py-2.5 px-4 text-center font-sans text-xs sm:text-sm border-b border-[#D1A653]/30">
      <div className="mx-auto max-w-6xl flex items-center justify-center gap-2 font-medium tracking-wide">
        <span className="h-1.5 w-1.5 rounded-full bg-[#C76545] shrink-0" />
        <span>Uma jornada bíblica para quem não quer desperdiçar o presente enquanto espera.</span>
      </div>
    </div>
  );
}
