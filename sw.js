self.addEventListener('install', (e) => {
  console.log('[Service Worker] installed');
});

self.addEventListener('activate', (e) => {
  console.log('[Service Worker] actived', e);
});

self.addEventListener('fetch', (e) => {
  console.log('[Service Worker] fetched resource ' + e.request.url);
});
