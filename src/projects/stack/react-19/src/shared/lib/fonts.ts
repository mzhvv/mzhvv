// Подключение веб-шрифтов (fontsource): @font-face + preload против мерцания (font-display: swap).
// Импортировать только за side-effect: import '@shared/lib/fonts';

import '@fontsource-variable/inter';
import '@fontsource-variable/jetbrains-mono';
import interCyrillicUrl from '@fontsource-variable/inter/files/inter-cyrillic-wght-normal.woff2?url';
import interLatinUrl from '@fontsource-variable/inter/files/inter-latin-wght-normal.woff2?url';
import jetbrainsMonoCyrillicUrl from '@fontsource-variable/jetbrains-mono/files/jetbrains-mono-cyrillic-wght-normal.woff2?url';
import jetbrainsMonoLatinUrl from '@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2?url';

for (const href of [
  interLatinUrl,
  interCyrillicUrl,
  jetbrainsMonoLatinUrl,
  jetbrainsMonoCyrillicUrl,
]) {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = 'font';
  link.type = 'font/woff2';
  link.crossOrigin = 'anonymous';
  document.head.appendChild(link);
}
