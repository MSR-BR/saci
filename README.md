# Dia do Saci

Site estático em português pela valorização do folclore brasileiro.

https://msr-br.github.io/saci/

A página oferece uma única arte: `banners/saci-com-data.png`, com Dia do Saci, 31 de outubro e Viva o folclore brasileiro integrados à ilustração. Arte produzida com o ImageGen integrado, em estilo inspirado em xilogravura e cordel. As fontes históricas estão na página.

## Compartilhamento

O botão prepara o PNG antes do clique e chama a Web Share API com o arquivo e a legenda, incluindo o link da página. O visitante escolhe o WhatsApp no menu do dispositivo. O navegador não pode selecionar o aplicativo automaticamente. A preservação do texto como legenda depende do aplicativo e sistema de destino; a página não pode confirmar o envio.

Quando o compartilhamento de arquivos não está disponível ou falha, a interface oferece download da imagem e envio do link pelo WhatsApp. O link `wa.me` envia texto, não um anexo. Cancelar o menu não dispara outra ação. Não há publicação automática, coleta de contatos ou envio sem confirmação do visitante.

## Desenvolvimento

Execute `python3 -m http.server 4173`. Não há dependências de produção. A publicação via GitHub Actions envia apenas HTML, CSS, JavaScript, assets e banners. O teste opcional `node scripts/check.cjs` requer Playwright e Chromium. Ele verifica o payload do compartilhamento com uma API simulada, os caminhos de cancelamento e indisponibilidade, downloads e layout; não envia mensagens reais.

## Visitas ao site

Cloudflare Web Analytics instalado com o código oficial do cadastro existente `msr-br.github.io`. O token presente no HTML é um identificador público de coleta, não uma chave de acesso à conta.

Painel: https://dash.cloudflare.com/131c31f376caeb268eb06b4efe5b5d4f/web-analytics/overview?siteTag~in=a0365fab61c94016901fe9955d03234e&excludeBots=Yes

Selecione o período e filtre o caminho `/saci/` para separar este site de outros projetos no mesmo hostname. O contador começa a coletar após a instalação; não recupera visitas anteriores. Bloqueadores e navegadores que impedem a coleta podem causar subcontagem. A instalação usa apenas o beacon de visitas e desempenho, sem eventos personalizados de compartilhamento.
