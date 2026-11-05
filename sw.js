/* VOSER–pDMFT offline cache. Change VERSION whenever you upload new files. */
const VERSION = "voser-v4";
const FILES = ["./", "./index.html", "./vi.html", "./manifest.webmanifest", "./lib/xlsx.full.min.js", "./lib/jszip.min.js",
  "./icons/icon-192.png", "./icons/icon-512.png", "./icons/icon-maskable-512.png", "./icons/apple-touch-icon.png", "./fonts/fonts.css",
  "./fonts/be-vietnam-pro-latin-400-normal.woff2", "./fonts/be-vietnam-pro-vietnamese-400-normal.woff2", "./fonts/be-vietnam-pro-latin-500-normal.woff2", "./fonts/be-vietnam-pro-vietnamese-500-normal.woff2", "./fonts/be-vietnam-pro-latin-600-normal.woff2", "./fonts/be-vietnam-pro-vietnamese-600-normal.woff2", "./fonts/be-vietnam-pro-latin-700-normal.woff2", "./fonts/be-vietnam-pro-vietnamese-700-normal.woff2", "./fonts/jetbrains-mono-latin-500-normal.woff2", "./fonts/jetbrains-mono-latin-700-normal.woff2"];
self.addEventListener("install", e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
/* network first for the page (gets updates when online), cache first for the rest */
self.addEventListener("fetch", e => {
  const r = e.request; if (r.method !== "GET" || new URL(r.url).origin !== location.origin) return;
  if (r.mode === "navigate") {
    e.respondWith(fetch(r).then(res => { const c = res.clone(); caches.open(VERSION).then(x => x.put(r, c)); return res; })
      .catch(() => caches.match(r, { ignoreSearch: true }).then(m => m || caches.match("./index.html"))));
    return;
  }
  e.respondWith(caches.match(r).then(m => m || fetch(r).then(res => { const c = res.clone(); caches.open(VERSION).then(x => x.put(r, c)); return res; })));
});
