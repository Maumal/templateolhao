const CACHE_NAME = 'postfacil-v1';
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/login.html',
    '/app.html',
    '/manifest.json',
    '/assets/logo.png',
    '/assets/icon-192.png',
    '/assets/icon-512.png',
    '/assets/whatsapp-icon.png',
    '/assets/produto_beleza_mock.png',
    'https://fonts.googleapis.com/css2?family=Archivo+Black&family=Bebas+Neue&family=Inter:wght@300;400;500;600;700;900&family=Oswald:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700;800;900&family=Roboto:wght@400;500;700;900&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js'
];

// Instalação - cacheia todos os assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('📦 PostFácil: Cacheando arquivos para uso offline...');
                return cache.addAll(ASSETS_TO_CACHE);
            })
            .then(() => self.skipWaiting())
    );
});

// Ativação - limpa caches antigos
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('🗑️ PostFácil: Removendo cache antigo:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch - estratégia Cache First, com fallback para network
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Retorna do cache se disponível
                if (response) {
                    return response;
                }

                // Senão, busca da rede e cacheia
                return fetch(event.request).then((networkResponse) => {
                    // Só cacheia requests GET bem sucedidos
                    if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                        return networkResponse;
                    }

                    // Clona a resposta para cachear
                    const responseToCache = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseToCache);
                    });

                    return networkResponse;
                });
            })
            .catch(() => {
                // Fallback para página offline (se necessário)
                console.log('📴 PostFácil: Sem conexão');
            })
    );
});
