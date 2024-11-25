import { createHeader } from "/components/header.js";
import { createFooter } from "/components/footer.js";

document.addEventListener("DOMContentLoaded", async () => {
  createHeader();
  createFooter();
  const sessao =  await verificarSessao();
  const login = sessao.logado;
  setupEntrarSair(login);
  setupEntrarSairMobile(login);
  setupQuestionario(login);
  setupCadastro(login);
});

async function verificarSessao() {
  try {
    const response = await fetch("/api/sessao");
    return await response.json();
  } catch (error) {
    console.error("Erro ao verificar sessão:", error);
    return { logado: false };
  }
}

function setupEntrarSair(login) {
  const entrarSair = document.querySelector("#entrarSair");

  if (entrarSair) {
    /* localStorage.setItem("paginaAnterior", window.location.href); */
    console.log(window.location.href)
    entrarSair.addEventListener("click", () => {
      const paginaAnterior = localStorage.getItem("paginaAnterior");
      if (!login) {
        window.location.href = "/login";
      } else {
        fetch("/api/logout", { method: "POST" }).then(() => {
          window.location.href = "/aprendaScrum";
        });
      }
    });
  }
}


function setupEntrarSairMobile(login) {
  const entrarSair = document.querySelector("#entrarSairMobile");

  if (entrarSair) {
    /* localStorage.setItem("paginaAnterior", window.location.href); */
    entrarSair.addEventListener("click", () => {
      const paginaAnterior = localStorage.getItem("paginaAnterior");
      if (!login) {
        window.location.href = "/login";
      } else {
        fetch("/api/logout", { method: "POST" }).then(() => {
          window.location.href = "/aprendaScrum";
        });
      }
    });
  }
}

function setupQuestionario(login) {
  const questionario = document.querySelector("section.questionario");
  if (questionario) {
    if (!login) {
      questionario.style.display = "none";
    } else {
      questionario.style.display = "flex";
    }
  }
}

function setupCadastro(login) {
  const cadastro = document.querySelector("#botao-inscreva");

  if (cadastro) {
    if (login) {
      cadastro.style.display = "none";
    } else {
      cadastro.style.display = "flex";
    }
  }
}
