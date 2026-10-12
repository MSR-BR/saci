# Dia do Saci

Site estático em português pela valorização do folclore brasileiro.

https://msr-br.github.io/saci/

A página oferece uma única arte: `banners/saci-com-data.png`, com Dia do Saci, 31 de outubro e Viva o folclore brasileiro integrados à ilustração. Arte produzida com o ImageGen integrado, em estilo inspirado em xilogravura e cordel. As fontes históricas estão na página.

## Compartilhamento

O botão prepara o PNG antes do clique e chama a Web Share API com o arquivo e a legenda, incluindo o link da página. O visitante escolhe o WhatsApp no menu do dispositivo. O navegador não pode selecionar o aplicativo automaticamente. A preservação do texto como legenda depende do aplicativo e sistema de destino; a página não pode confirmar o envio.

Quando o compartilhamento de arquivos não está disponível ou falha, a interface oferece download da imagem e envio do link pelo WhatsApp. O link `wa.me` envia texto, não um anexo. Cancelar o menu não dispara outra ação. Não há publicação automática, coleta de contatos ou envio sem confirmação do visitante.

## Desenvolvimento

Execute `python3 -m http.server 4173`. Não há dependências de produção. A publicação via GitHub Actions envia apenas HTML, CSS, JavaScript, assets e banners. O teste opcional `node scripts/check.cjs` requer Playwright e Chromium. Ele verifica o payload do compartilhamento com uma API simulada, os caminhos de cancelamento e indisponibilidade, downloads e layout; não envia mensagens reais.
