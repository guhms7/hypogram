export function voltar() {
  let tipoRetorno = localStorage.getItem("tipoRetorno");
  localStorage.removeItem("tipoRetorno");
  localStorage.removeItem("questionario");
  if (tipoRetorno != null) {
    if (tipoRetorno.toUpperCase().trim() == "MODAL") {
      const main = document.querySelector("main");
      const secaoQuestoes = main.querySelector("#secao-questoes");
      const body = document.body;
      main.removeChild(secaoQuestoes);
/*       const container = document.querySelector(".container");
      if (container) {
        container.style.backgroundColor = '';
      } 
      body.style.backgroundColor = ''; */
      main.style.backgroundColor = '';
    }
  } else {
    if (window.opener) {
      window.close();
    } else {
      window.history.back();
    }
  }
}
