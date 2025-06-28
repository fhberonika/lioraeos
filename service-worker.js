self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("liorae-cache").then(cache => {
      return cache.addAll([
        "./",
        "index.html",
        "manifest.json",
        "icon.png"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    }).catch(() => {
      return new Response("You're offline, but Liorae is still thinking of you. 🤍", {
        headers: { 'Content-Type': 'text/html' }
      });
    })
  );
});
