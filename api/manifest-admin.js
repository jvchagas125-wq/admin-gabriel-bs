export default async function handler(req, res) {
  const manifest = {
    name: 'Gabriel Barber Admin',
    short_name: 'GBS Admin',
    description: 'Painel administrativo Gabriel Barber Studio',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#111111',
    theme_color: '#c9a84c',
    orientation: 'portrait',
    icons: [
      { src: 'https://i.postimg.cc/FFpNdnLT/Design-sem-nome.png', sizes: '192x192', type: 'image/png', purpose: 'any maskable' },
      { src: 'https://i.postimg.cc/FFpNdnLT/Design-sem-nome.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' }
    ],
    lang: 'pt-BR'
  };

  res.setHeader('Content-Type', 'application/manifest+json');
  res.setHeader('Cache-Control', 'no-cache');
  res.status(200).json(manifest);
}
