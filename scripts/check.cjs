const { chromium } = require('playwright');
const assert = require('node:assert/strict');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  page.on('response', r => { if (r.status() >= 400) errors.push(`${r.status()} ${r.url()}`); });
  await page.addInitScript(() => {
    window.shareMode = 'success';
    Object.defineProperty(navigator, 'canShare', { configurable: true, value: () => window.shareMode !== 'unsupported' });
    Object.defineProperty(navigator, 'share', { configurable: true, value: async data => {
      if (window.shareMode === 'cancel') throw new DOMException('Cancelled', 'AbortError');
      if (window.shareMode === 'fail') throw new DOMException('Denied', 'NotAllowedError');
      window.shared = { text: data.text, count: data.files.length, name: data.files[0].name, type: data.files[0].type, size: data.files[0].size, signature: Array.from(new Uint8Array(await data.files[0].slice(0,8).arrayBuffer())) };
    }});
  });
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(process.env.SITE_URL || 'http://127.0.0.1:4173');
  await page.waitForFunction(() => !document.querySelector('#whatsapp').disabled);
  assert.equal(await page.locator('#caption, #copy, .banner-grid, .new-art').count(), 0);
  assert.equal(await page.locator('body').innerText().then(t => /nova versão/i.test(t)), false);
  await page.locator('#whatsapp').click();
  await page.waitForFunction(() => window.shared);
  const data = await page.evaluate(() => window.shared);
  assert.equal(data.count, 1); assert.equal(data.type, 'image/png'); assert(data.size > 100000);
  assert.deepEqual(data.signature, [137,80,78,71,13,10,26,10]);
  assert(data.text.includes('31 de outubro')); assert(data.text.includes('https://msr-br.github.io/saci/'));
  for (const mode of ['cancel', 'unsupported', 'fail']) {
    await page.evaluate(m => { window.shareMode = m; }, mode);
    await page.locator('#whatsapp').click();
    await page.waitForFunction(() => !document.querySelector('#whatsapp').disabled);
    assert.equal(await page.locator('#share-fallback').isVisible(), mode !== 'cancel');
  }
  const fallbackUrl = await page.locator('#whatsapp-link').getAttribute('href');
  assert(new URL(fallbackUrl).searchParams.get('text').includes('https://msr-br.github.io/saci/'));
  for (const link of await page.locator('a[download]').all()) {
    const href = await link.getAttribute('href');
    assert(href.endsWith('saci-com-data.png'));
    assert((await page.request.get(new URL(href, page.url()).href)).ok());
  }
  await page.screenshot({ path: '/tmp/saci-desktop.png', fullPage: true });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({ path: '/tmp/saci-mobile.png', fullPage: true });
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
  assert.deepEqual(errors, []);
  console.log('PASS: single artwork, native payload (PNG + caption/link), cancellation, unsupported/error fallback, downloads, mobile');
  await browser.close();
})();
