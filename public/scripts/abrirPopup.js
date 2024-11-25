function abrirPopup(tela) {
  const larguraPopup = 900;
  const alturaPopup = 800;

  const larguraTela = window.innerWidth;
  const alturaTela = window.innerHeight;

  const esquerda = (larguraTela - larguraPopup) / 2;
  const topo = (alturaTela - alturaPopup) / 2;

  window.open(
    `${tela}`,
    "popup",
    `width=${larguraPopup}, height=${alturaPopup}, top=${topo}, left=${esquerda}`
  );

}
