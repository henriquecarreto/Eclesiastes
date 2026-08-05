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
        <h1 className="text-7xl font-serif font-bold text-[#163142]">404</h1>
        <h2 className="mt-4 text-xl font-serif font-semibold text-[#163142]">
          Página não encontrada
        </h2>
        <p className="mt-2 text-sm text-[#60686C]">
          A página que você está procurando não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl bg-[#2F6B4F] px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-[#FFFDF8] transition-colors hover:bg-[#24563F]"
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
        <h1 className="text-xl font-serif font-semibold tracking-tight text-[#163142]">
          Esta página não carregou corretamente
        </h1>
        <p className="mt-2 text-sm text-[#60686C]">
          Ocorreu um erro inesperado. Tente recarregar a página.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-xl bg-[#2F6B4F] px-4 py-2 text-sm font-bold text-[#FFFDF8] transition-colors hover:bg-[#24563F]"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-xl border border-[#EADBC4] bg-[#FFFDF8] px-4 py-2 text-sm font-medium text-[#163142] transition-colors hover:bg-[#FBF5E9]"
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
          "Uma jornada bíblica em quatro movimentos para compreender fases de espera, interromper o automático e reorganizar prioridades com mais sabedoria.",
      },
      { name: "author", content: editableFields.companyName },
      { property: "og:title", content: `${editableFields.productName} | ${editableFields.companyName}` },
      {
        property: "og:description",
        content:
          "Uma jornada bíblica em quatro movimentos para compreender fases de espera, interromper o automático e reorganizar prioridades com mais sabedoria.",
      },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "icon", href: "/logo-acervo-oficial.jpg", type: "image/jpeg" },
      { rel: "shortcut icon", href: "/logo-acervo-oficial.jpg", type: "image/jpeg" },
      { rel: "apple-touch-icon", href: "/logo-acervo-oficial.jpg" },
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
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '915965607725635');
fbq('track', 'PageView');`,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=915965607725635&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
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
