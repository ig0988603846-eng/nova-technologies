const CACHE_NAME = "nova-technologies-v3";
const CORE_FILES = [
  "./", "./index.html", "./manifest.webmanifest",
  "./css/style.css", "./js/config.js", "./js/translations.js", "./js/main.js",
  "./assets/nova-symbol.png", "./assets/nova-symbol-tight.png", "./assets/nova-logo.png", "./assets/apple-touch-icon.png", "./assets/favicon-48.png",
  "./assets/icon-192.png", "./assets/icon-512.png"
];
self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(CORE_FILES)));
  self.skipWaiting();
});
self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))));
  self.clients.claim();
});
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET" || new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
    if (response && response.ok) { const copy = response.clone(); caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy)); }
    return response;
  }).catch(() => caches.match("./index.html"))));
});
