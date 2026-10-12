const caption = document.querySelector('#caption');
document.querySelector('#whatsapp').href = 'https://wa.me/?text=' + encodeURIComponent(caption.textContent);
const copy = document.querySelector('#copy');
copy.addEventListener('click', async () => {
  const text = document.querySelector('#caption').textContent;
  const status = document.querySelector('#status');
  try { await navigator.clipboard.writeText(text); status.textContent = 'Legenda copiada! Agora é só colar.'; }
  catch { const range = document.createRange(); range.selectNodeContents(document.querySelector('#caption')); const selection = window.getSelection(); selection.removeAllRanges(); selection.addRange(range); status.textContent = 'Selecione e copie a legenda acima.'; }
});
