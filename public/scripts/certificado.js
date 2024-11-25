function preencherNomeAluno(json) {
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
    console.log(usuarioLogado);
    const nomeAluno = usuarioLogado.usuarionome;
    const elementoNomeAluno = document.getElementById("nome-aluno");
    elementoNomeAluno.textContent = nomeAluno;
  }

  const dadosAluno = { nome: "Gustavo Moraes" };
  preencherNomeAluno(dadosAluno);

  function inserirDataAtual() {
    const dataAtual = new Date();

    const dia = String(dataAtual.getDate()).padStart(2, "0");
    const mes = String(dataAtual.getMonth() + 1).padStart(2, "0");
    const ano = dataAtual.getFullYear();
    const dataFormatada = `${dia}/${mes}/${ano}`;

    const elementoData = document.getElementById("data");
    if (elementoData) {
      elementoData.textContent = dataFormatada;
    }
  }

  function imprimirCertificado() {
    const certificado = document.getElementById("certificado");
    if (certificado) {
      window.print();
    }
  }

  inserirDataAtual();