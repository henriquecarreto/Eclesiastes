import React from "react";
import { editableFields } from "../data/siteContent";

export function Footer() {
  return (
    <footer className="bg-[#0B2942] text-[#F7F0E3]/70 border-t border-[#B8892E]/20 py-12 px-4 sm:px-6 font-sans text-xs sm:text-sm">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-[#B8892E]/10 pb-8">
          
          {/* Logo & Marca */}
          <div className="flex items-center gap-3">
            <span className="font-serif text-xl font-bold tracking-tight text-[#FFFDF8]">
              {editableFields.companyName}
            </span>
            <span className="text-[#B8892E]">•</span>
            <span className="text-xs text-[#D6B76C]">
              {editableFields.productName}
            </span>
          </div>

          {/* Links Legais */}
          <div className="flex flex-wrap justify-center gap-6 text-xs text-[#D6B76C]">
            {editableFields.privacyUrl ? (
              <a href={editableFields.privacyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                Política de Privacidade
              </a>
            ) : (
              <span className="opacity-60">Política de Privacidade</span>
            )}

            {editableFields.termsUrl ? (
              <a href={editableFields.termsUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                Termos de Uso
              </a>
            ) : (
              <span className="opacity-60">Termos de Uso</span>
            )}

            {editableFields.contactUrl ? (
              <a href={editableFields.contactUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                Contato
              </a>
            ) : editableFields.supportEmail ? (
              <a href={`mailto:${editableFields.supportEmail}`} className="hover:underline">
                Suporte
              </a>
            ) : (
              <span className="opacity-60">Suporte ao Cliente</span>
            )}
          </div>
        </div>

        {/* Texto Institucional & Não Afiliação */}
        <div className="mt-8 space-y-3 text-center md:text-left text-[11px] sm:text-xs leading-relaxed opacity-75">
          <p>
            Este site não é afiliado ao Facebook™, Instagram™, Google™ ou a outras plataformas mencionadas.
          </p>
          <p>
            Todos os direitos sobre a obra “Jornada Debaixo do Sol” são reservados à marca Acervo Seguro. A reprodução, redistribuição ou revenda não autorizada dos materiais é proibida.
          </p>
          <p className="pt-2 text-[10px] uppercase tracking-wider text-[#D6B76C]">
            © {new Date().getFullYear()} {editableFields.companyName}. Todos os direitos reservados. Produto 100% Digital.
          </p>
        </div>

      </div>
    </footer>
  );
}
