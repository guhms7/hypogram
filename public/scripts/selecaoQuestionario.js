document.addEventListener("DOMContentLoaded", async function () {
  try {
    // Fazendo uma requisição para o backend para obter os questionários e os capítulos aprovados
    const response = await fetch("/selecaoQuestionario");

    // Verifica se a resposta é válida
    if (!response.ok) {
      throw new Error("Erro ao carregar os dados.");
    }

    const data = await response.json(); // Converte a resposta para JSON
    console.log(data); // Verifique os dados recebidos

    const capitulosAprovados = data.capitulosAprovados; // Capitulos aprovados
    const questionarios = data.questionarios; // Todos os questionários

    // Percorre todos os artigos para verificar se o capítulo foi aprovado
    document.querySelectorAll("article").forEach((article) => {
      const questionarioId = article.getAttribute("data-id");

      // Verifica se o capítulo foi aprovado
      if (capitulosAprovados.includes(Number(questionarioId))) {
        article.style.display = "none"; // Esconde o capítulo aprovado
      } else {
        article.style.display = "block"; // Mostra o capítulo NÃO aprovado
      }
    });
  } catch (error) {
    console.error("Erro ao carregar os dados:", error);
  }
});
