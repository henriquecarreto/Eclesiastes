import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { editableFields } from "../data/siteContent";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FFFDF7] px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-serif font-bold text-[#0B2D4A]">404</h1>
        <h2 className="mt-4 text-xl font-serif font-semibold text-[#0B2D4A]">
          Página não encontrada
        </h2>
        <p className="mt-2 text-sm text-[#46515B]">
          A página que você está procurando não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl bg-[#C0923E] px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-[#071E32] transition-colors hover:bg-[#A97924]"
          >
            Voltar ao Início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FFFDF7] px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-serif font-semibold tracking-tight text-[#0B2D4A]">
          Esta página não carregou corretamente
        </h1>
        <p className="mt-2 text-sm text-[#46515B]">
          Ocorreu um erro inesperado. Tente recarregar a página.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-xl bg-[#C0923E] px-4 py-2 text-sm font-bold text-[#071E32] transition-colors hover:bg-[#A97924]"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-xl border border-[#EAD9B5] bg-[#FFFDF7] px-4 py-2 text-sm font-medium text-[#0B2D4A] transition-colors hover:bg-[#F8F0DE]"
          >
            Ir ao início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${editableFields.productName} | ${editableFields.companyName}` },
      {
        name: "description",
        content:
          "Uma jornada visual de 50 páginas pelo livro de Eclesiastes, com 20 lições, reflexões, práticas e orações para o cotidiano.",
      },
      { name: "author", content: editableFields.companyName },
      { property: "og:title", content: `${editableFields.productName} | ${editableFields.companyName}` },
      {
        property: "og:description",
        content:
          "Uma jornada visual de 50 páginas pelo livro de Eclesiastes, com 20 lições, reflexões, práticas e orações para o cotidiano.",
      },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800&family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
