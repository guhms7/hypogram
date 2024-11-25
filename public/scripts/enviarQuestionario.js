// src/public/js/enviarQuestionario.js

document.addEventListener("DOMContentLoaded", function () {
  // Evento de envio do formulário
  document
    .getElementById("form-questionario")
    .addEventListener("submit", async (event) => {
      event.preventDefault();

      const respostasUsuario = {};
      const formData = new FormData(event.target);

      formData.forEach((value, key) => {
        respostasUsuario[key] = value;
      });

      const questionarioId = document.getElementById("questionarioId").value;

      try {
        const response = await fetch(`/questionario/${questionarioId}/enviar`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(respostasUsuario),
        });

        const data = await response.json();

        // Exibe o resultado do questionário
        exibirModalResultado(data.aprovado);
      } catch (error) {
        console.error("Erro ao enviar respostas:", error);
      }
    });
});

// Função para exibir o modal de resultado
function exibirModalResultado(aprovado) {
  const modal = document.getElementById("modal-resultado");
  const modalTitulo = document.getElementById("resultado-titulo");
  const modalMensagem = document.getElementById("resultado-mensagem");
  const modalContent = document.querySelector(".modal-content");
  const botaoEnviar = document.getElementById("button-enviar");
  const botoes = document.querySelector(".botoes");

  if (aprovado) {
    modalTitulo.textContent = "Aprovado!";
    modalMensagem.textContent = "Parabéns, você foi aprovado no questionário!";
    modalContent.classList.remove("reprovado");
    modalContent.classList.add("aprovado");
    botaoEnviar.style.display = "none";
    botoes.classList.add("centralizado");
  } else {
    modalTitulo.textContent = "Reprovado!";
    modalMensagem.textContent =
      "Infelizmente, você não foi aprovado. Tente novamente!";
    modalContent.classList.remove("aprovado");
    modalContent.classList.add("reprovado");
    botaoEnviar.style.display = "inline-block";
    botoes.classList.remove("centralizado");
  }

  modal.style.display = "flex";

  setTimeout(() => {
    modal.classList.add("fade-out");
  }, 3000);

  setTimeout(() => {
    modal.style.display = "none";
    modal.classList.remove("fade-out");
  }, 4000);
}

function voltar() {
  window.location.href = "/selecaoQuestionarios";
}
