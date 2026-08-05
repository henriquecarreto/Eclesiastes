import React from "react";
import { editableFields } from "../data/siteContent";

export function Footer() {
  const supportEmail = editableFields.supportEmail || "aprovavisual@gmail.com";

  return (
    <footer className="bg-black text-white font-sans border-t border-zinc-900 py-10 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        
        {/* Parte Superior */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8">
          
          {/* Logo AS & Marca */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3">
              <img
                src="/logo-as.png"
                alt="Acervo Seguro"
                className="h-10 sm:h-11 w-auto object-contain"
              />
            </div>

            <p className="mt-3 text-xs sm:text-sm text-zinc-400 max-w-md leading-relaxed">
              Coleção digital sobre o Livro de Eclesiastes — Jornada Debaixo do Sol. Desenvolvido para auxílio no estudo, leitura e reflexão bíblica.
            </p>
          </div>

          {/* Suporte ao Cliente */}
          <div className="flex flex-col items-start md:items-end text-left md:text-right">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              SUPORTE AO CLIENTE
            </h4>
            <p className="mt-2 text-xs sm:text-sm text-zinc-400">
              E-mail de suporte:{" "}
              <a
                href={`mailto:${supportEmail}`}
                className="font-bold text-[#D6B76C] hover:underline"
              >
                {supportEmail}
              </a>
            </p>
          </div>

        </div>

        {/* Divisor */}
        <div className="border-t border-zinc-900" />

        {/* Parte Inferior Centralizada */}
        <div className="pt-8 text-center text-xs text-zinc-400 space-y-3 max-w-4xl mx-auto leading-relaxed">
          <p className="text-zinc-300">
            © {new Date().getFullYear()} {editableFields.companyName}. Todos os direitos reservados.
          </p>

          <p className="text-[11px] sm:text-xs text-zinc-500">
            Aviso legal: Este produto é um recurso educativo digital comercializado como acervo complementar. As marcas e plataformas de checkout terceiras mencionadas são de propriedade de seus respectivos titulares.
          </p>
        </div>

      </div>
    </footer>
  );
}
