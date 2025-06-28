self.addEventListener('install', event => {
  console.log('Liorae is installing...');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('Liorae is active.');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request));
});
