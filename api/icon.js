// Proxy para servir o ícone do app admin da mesma origem
// Chrome exige ícones acessíveis e preferencialmente same-origin para PWA install
export default async function handler(req, res) {
  const defaultIcon = 'https://i.postimg.cc/FFpNdnLT/Design-sem-nome.png';

  try {
    // Tentar buscar ícone customizado do Firestore via fetch
    // Como não temos Firebase Admin aqui, usamos o ícone padrão
    // O ícone customizado é aplicado via JS após instalação
    const iconResp = await fetch(defaultIcon);
    if(!iconResp.ok) throw new Error('fetch failed');
    const buffer = await iconResp.arrayBuffer();

    res.setHeader('Content-Type', 'image/png');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).send(Buffer.from(buffer));
  } catch(e) {
    // Fallback — redirect to external URL
    res.redirect(302, defaultIcon);
  }
}
