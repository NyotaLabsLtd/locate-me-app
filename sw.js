// Service Worker for Locate Me PWA
const CACHE_NAME = 'locate-me-v3';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json'
];

// 1. Install Event: Cache the files when the app loads for the first time
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .catch((err) => {
        console.log('Cache install failed: ', err);
      })
  );
});

// 2. Fetch Event: Serve files from cache for speed and offline support
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // If the file is in the cache, return it immediately (FAST!)
        if (response) {
          return response;
        }
        // If it's not in the cache, fetch it from the internet
        return fetch(event.request);
      }
    )
  );
});