const CACHE_NAME = "elevate-fitness-v1";
const ASSETS = ["/", "/index.html", "/fit-logo.png", "/images/hero-image.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(
      (cache) => cache.addAll(ASSETS.filter(Boolean))
    )
  );
});

// Fetch event — respond with cache or fallback to network
self.addEventListener("fetch", (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});
