const CACHE_NAME = "academic-review-cache-v1";

const urlsToCache = [
  "/",
  "/index.html",
  "/css/styles.css",
  "/js/articleStorage.js",
  "/js/articleManager.js",
  "/js/articleBoard.js",
  "/js/app.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
