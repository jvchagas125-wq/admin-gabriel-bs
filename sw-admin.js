// Service Worker mínimo para PWA do painel admin
const CACHE = 'gbs-admin-v1';

self.addEventListener('install', e=>{
  self.skipWaiting();
});

self.addEventListener('activate', e=>{
  e.waitUntil(clients.claim());
});

// Network first — sempre busca a versão mais atual do admin
self.addEventListener('fetch', e=>{
  if(e.request.mode === 'navigate'){
    e.respondWith(
      fetch(e.request).catch(()=> caches.match(e.request))
    );
  }
});
