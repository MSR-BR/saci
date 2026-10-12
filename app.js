const shareButton = document.querySelector('#whatsapp');
const status = document.querySelector('#status');
const fallback = document.querySelector('#share-fallback');
const hint = document.querySelector('#share-hint');
const caption = '31 de outubro é Dia do Saci! 🌪️ Nossa cultura tem história, imaginação e muita coisa para contar. Valorize o folclore brasileiro e ajude a manter nossas tradições vivas. #DiaDoSaci #VivaOFolclore #CulturaBrasileira\n\nhttps://msr-br.github.io/saci/';
document.querySelector('#whatsapp-link').href = 'https://wa.me/?text=' + encodeURIComponent(caption);
let shareFile;

function showFallback() {
  fallback.hidden = false;
  hint.hidden = true;
}

// Prepare the file before the click: native sharing requires user activation.
async function prepareImage() {
  try {
    const response = await fetch('banners/saci-com-data.png');
    if (!response.ok) throw new Error('Image unavailable');
    const blob = await response.blob();
    shareFile = new File([blob], 'dia-do-saci-31-outubro.png', { type: 'image/png' });
  } catch {
    shareFile = null;
  } finally {
    shareButton.disabled = false;
    shareButton.textContent = 'Compartilhar no WhatsApp ↗';
  }
}
prepareImage();

shareButton.addEventListener('click', async () => {
  status.textContent = '';
  fallback.hidden = true;
  if (!shareFile || !navigator.share || !navigator.canShare?.({ files: [shareFile] })) {
    showFallback();
    return;
  }
  shareButton.disabled = true;
  try {
    await navigator.share({ files: [shareFile], text: caption });
    // A resolved share does not prove that a message was sent.
  } catch (error) {
    if (error.name !== 'AbortError') showFallback();
  } finally {
    shareButton.disabled = false;
  }
});
