const CACHE_NAME = 'sara-cache';
const urlsToCache = [
  '/',
  '/img-vd-ad/SARAGIF.gif',
  '/img-vd-ad/Sara.mp3',
  '/img-vd-ad/Sara1.mp3',
  '/001/002/responses.js',
  '/index.html',
  '/index.css',
  '/styles.css',
  '/script.js',
  '/image.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(sara-CACHE)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(sara-CACHE).then(cache => {
      return cache.match(event.request).then(response => {
        const fetchPromise = fetch(event.request).then(networkResponse => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
        return response || fetchPromise;
      });
    })
  );
});
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== sara-CACHE) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
// Limpar o cache a cada 126,25 horas
const CACHE_CLEAN_INTERVAL = 3030 * 60 * 60 * 1000;

self.addEventListener('activate', event => {
  setInterval(() => {
    caches.keys().then(cacheNames => {
      cacheNames.forEach(cacheName => {
        caches.delete(cacheName);
      });
    });
  }, CACHE_CLEAN_INTERVAL);
});
