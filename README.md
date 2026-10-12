# Dia do Saci

Site estático em português, iniciativa independente de MSR-BR pela valorização do folclore brasileiro.

Publicação: https://msr-br.github.io/saci/

## Conteúdo

- História da data, com distinção entre projeto federal e lei estadual.
- Manifesto de valorização cultural e sugestões de celebração.
- Banners PNG: 1080×1080, 1080×1350 e 1080×1920.
- Legenda copiável, compartilhamento via WhatsApp, fontes primárias.

## Desenvolvimento

Não há dependências de produção ou serviço de terceiros. Execute `python3 -m http.server 4173` e abra http://localhost:4173.

Os scripts opcionais de exportação e verificação usam Playwright (`npm install --no-save playwright` e navegador Chromium instalado): `node scripts/banners.cjs` e `node scripts/check.cjs`. A publicação automática pelo GitHub Actions envia apenas HTML, CSS, JavaScript, assets e banners.

## Ilustração e materiais

Ilustração produzida com o ImageGen integrado. Composição e tipografia dos banners feitas em Canvas. As artes podem ser baixadas e compartilhadas na divulgação do Dia do Saci. Imagens estáticas não incluem vídeo ou trilha sonora.

Prompt da ilustração: “Use case: illustration-story. Create an original editorial illustration for a Brazilian Dia do Saci cultural celebration website. Square composition, richly textured Brazilian woodcut / cordel printmaking meets modern folk poster, warm cream paper background #f5eedc, deep forest green foliage, black ink hatching, vermilion red and golden ochre accents. A joyful and dignified Black Brazilian folklore Saci with exactly ONE leg, wearing red shorts and his iconic long floppy red cap, dancing inside a swirling wind spiral among tropical leaves, small stars and sun. Full body, central composition, art fills frame with generous cream edges. Expressive face without racial caricature, playful magical energy, beautiful artisanal print texture. No text, no letters, no watermark. This is artwork only, not a website screenshot.”

Fontes históricas estão vinculadas na própria página. A opinião editorial do manifesto é da campanha, não das instituições citadas.
