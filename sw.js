const CACHE_NAME = 'subway-pwa-cache-v1';
const ASSETS = [
  '/subway-app/pwa-demo.html',
  '/subway-app/docs/assets/audio/FiestaFajita.mp3',
  '/subway-app/docs/assets/audio/FiestaFajita2.mp3',
  '/subway-app/docs/assets/audio/MightyBMT.mp3',
  '/subway-app/docs/assets/audio/MightyBMT2.mp3',
  '/subway-app/docs/assets/audio/Clubhouse.mp3',
  '/subway-app/docs/assets/audio/clubhouse2.mp3',
  '/subway-app/docs/assets/audio/SteakhouseDesire.mp3',
  '/subway-app/docs/assets/audio/SteakhouseDesire2.mp3'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
