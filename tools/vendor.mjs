import { cp, mkdir } from 'node:fs/promises';
const files = {
  'jquery/dist/jquery.min.js': 'jquery.min.js',
  '@emailjs/browser/dist/email.min.js': 'emailjs.min.js',
  'bootstrap/dist/js/bootstrap.bundle.min.js': 'bootstrap.bundle.min.js',
  'bootstrap/dist/css/bootstrap.min.css': 'bootstrap.min.css',
  '@fortawesome/fontawesome-free/css/all.min.css': 'fontawesome/css/all.min.css',
  '@fortawesome/fontawesome-free/webfonts': 'fontawesome/webfonts',
  '@popperjs/core/dist/umd/popper.min.js': 'popper.min.js',
  'tippy.js/dist/tippy-bundle.umd.min.js': 'tippy.min.js',
  'tippy.js/dist/tippy.css': 'tippy.css',
  'jszip/dist/jszip.min.js': 'jszip.min.js'
};
for (const [src, dst] of Object.entries(files)) {
  await mkdir(`assets/vendor/${dst.substring(0, dst.lastIndexOf('/') + 1)}`, { recursive: true });
  await cp(`node_modules/${src}`, `assets/vendor/${dst}`, { recursive: true });
}
for (const name of ['jquery', 'bootstrap', '@fortawesome/fontawesome-free', '@popperjs/core', 'tippy.js', 'jszip', '@emailjs/browser']) {
  const { readdir } = await import('node:fs/promises');
  const candidates = (await readdir(`node_modules/${name}`)).filter(n => /^licen[cs]e/i.test(n));
  if (!candidates.length) throw new Error(`Licença ausente: ${name}`);
  await cp(`node_modules/${name}/${candidates[0]}`, `assets/vendor/${name.replaceAll('/', '-')}-LICENSE`);
}
console.log('Bibliotecas locais atualizadas a partir do package-lock.json.');
