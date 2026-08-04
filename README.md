# Eclesiastes — Quando Nada Parece Fazer Sentido
## Landing Page de Vendas Oficial

Esta é a página de vendas oficial para o produto digital **"Eclesiastes — Quando Nada Parece Fazer Sentido"** (*Subtítulo: Uma jornada visual pelo livro de Eclesiastes*), desenvolvida com React, TypeScript, Vite, Tailwind CSS e Lucide React.

---

## ⚠️ CAMPOS PENDENTES QUE O PROPRIETÁRIO DEVE FORNECER / REVISAR

O sistema foi programado para **nunca inventar links de checkout, preços fictícios ou contatos**. Enquanto os campos abaixo não forem preenchidos, os botões correspondentes exibirão o aviso `"LINK DE CHECKOUT PENDENTE"` e ficarão desabilitados para proteção do seu negócio.

Edite o arquivo central: `src/data/siteContent.ts`

### Lista de Campos Pendentes:
1. **`singleOfferCheckoutUrl`**: Link do checkout para a oferta individual (E-book principal).
2. **`bundleCheckoutUrl`**: Link do checkout para a oferta completa (Bundle), se ativada.
3. **`singleOfferPrice`**: Preço definitivo da oferta individual (Padrão atual: `R$ 14,90`).
4. **`singleOfferOldPrice`**: Preço anterior/riscado (Preencher apenas se for verdadeiro; caso contrário, deixar `""`).
5. **`bundleEnabled`**: Alterne para `true` quando quiser exibir a segunda oferta (Jornada Completa).
6. **`bundlePrice`**: Preço definitivo da oferta completa (Padrão atual: `R$ 19,90`).
7. **`bundleOldPrice`**: Preço anterior da oferta completa (deixar `""` se não houver).
8. **`bundleMaterials`**: Lista de materiais extras incluídos no bundle (ex: `["Guia de Leitura", "Caderno de Práticas"]`).
9. **`supportEmail`**: E-mail de suporte ao cliente.
10. **`privacyUrl`**: URL da Política de Privacidade.
11. **`termsUrl`**: URL dos Termos de Uso.
12. **`contactUrl`**: URL da página de Contato ou canal de atendimento.
13. **`metaPixelId`**: ID do Meta Pixel (Facebook Ads), se utilizado.
14. **`googleAnalyticsId`**: ID do Google Analytics (GA4), se utilizado.

---

## 🚀 Como Instalar e Executar Localmente

### Requisitos:
- Node.js v18 ou superior

### Passos:
1. **Instalar dependências**:
   ```bash
   npm install
   ```

2. **Executar em ambiente de desenvolvimento**:
   ```bash
   npm run dev
   ```
   Acesse a aplicação no navegador em: `http://localhost:5173`

3. **Gerar build de produção**:
   ```bash
   npm run build
   ```

4. **Visualizar o build de produção**:
   ```bash
   npm run preview
   ```

---

## 🛠️ Como Alterar Conteúdo, Preços e Ofertas

Toda a configuração da landing page está centralizada em um único arquivo:

📍 **`src/data/siteContent.ts`**

### 1. Como Alterar Preços
Abra `src/data/siteContent.ts` e modifique os valores no objeto `editableFields`:
```typescript
export const editableFields = {
  singleOfferPrice: "R$ 14,90", // Altere aqui o preço da oferta individual
  singleOfferOldPrice: "R$ 29,90", // Preço riscado (opcional)
  
  bundlePrice: "R$ 19,90",       // Altere aqui o preço da oferta completa
  bundleOldPrice: "R$ 39,90",     // Preço riscado (opcional)
};
```

### 2. Como Inserir Links de Checkout
Insira os links reais da sua plataforma de pagamento (Hotmart, Kiwify, Eduzz, Monettiz, etc.):
```typescript
export const editableFields = {
  singleOfferCheckoutUrl: "https://pay.suaplataforma.com/checkout-individual",
  bundleCheckoutUrl: "https://pay.suaplataforma.com/checkout-completo",
};
```
*Obs: Quando preenchidos, os botões passarão automaticamente de desabilitados para ativos.*

### 3. Como Ativar uma Segunda Oferta (Bundle)
Por padrão, a segunda oferta está desativada para manter o layout limpo e focado na oferta individual. Para ativá-la lado a lado no desktop e empilhada no mobile:
```typescript
export const editableFields = {
  bundleEnabled: true, // Mude para true para exibir os 2 cards de oferta
  bundleMaterials: [
    "Plano Devocional de 30 Dias em PDF",
    "Caderno de Orações e Anotações",
  ],
};
```

### 4. Como Alterar Textos e FAQ
As perguntas do FAQ, temas abordados, etapas de leitura e textos institucionais também estão no arquivo `src/data/siteContent.ts`. Basta editar as strings e arrays exportados.

### 5. Como Alterar Imagens do Material
As páginas extraídas em WebP do PDF estão armazenadas em:
📍 **`public/images/page-1.webp` até `page-50.webp`**

Se desejar substituir uma imagem de prévia, substitua o arquivo correspondente na pasta `public/images/` mantendo as dimensões de proporção 3:4 (ex: 768x1200 px em formato WebP).

---

## 📈 Rastreamento e Analytics (Meta Pixel & GA4)

Os scripts de rastreamento **não são executados enquanto os IDs estiverem vazios**, prevenindo erros de console ou envios indevidos.

Para ativar:
1. Abra `src/data/siteContent.ts`.
2. Insira o seu ID no campo correspondente:
```typescript
export const editableFields = {
  metaPixelId: "1234567890",
  googleAnalyticsId: "G-XXXXXXXXXX",
};
```

---

## 🌐 Como Publicar (Deploy)

Esta aplicação foi configurada como uma aplicação web estática / SSR compatível com:
- **Vercel**: Conecte o repositório GitHub e o deploy será automático.
- **Netlify**: Arraste a pasta `.output/public` ou conecte via Git (Command: `npm run build`, Directory: `.output/public`).
- **Cloudflare Pages**: Defina o build command `npm run build` e diretório de saída `.output/public`.

---

## 🎨 Identidade Visual e Design System

- **Fundo / Parchment**: `#FFFDF7`, `#F8F0DE`, `#EAD9B5`
- **Marrom Espresso & Cacau**: `#1F1510`, `#2B1D15`, `#1D252C`
- **Azul Marinho Real**: `#071E32`, `#0B2D4A`, `#123B5D`
- **Dourado Nobre / Bronze**: `#C0923E`, `#A97924`, `#DEC28B`
- **Tipografia**: *Cormorant Garamond* / *Cinzel* (Títulos), *Inter* (Corpo)

---

## ⚖️ Direitos Autorais
Todos os direitos reservados à marca **Acervo Seguro**.
