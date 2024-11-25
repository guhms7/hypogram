import { voltar } from "/scripts/voltar.js";
import { enviarQuestionario } from "/scripts/enviarQuestionario.js";

window.voltar = voltar;
window.enviarQuestionario = enviarQuestionario;

export function createQuestionario() {
  const dadosQuestionario = JSON.parse(localStorage.getItem("questionario"));
  if (!dadosQuestionario) {
    console.error("Nenhum questionário encontrado no localStorage.");
    return;
  }
  const main = document.querySelector("main");
  const section = document.createElement("section");
  section.id = "secao-questoes";
  section.innerHTML = `
        <section class="cabecalho">
            <h1>${dadosQuestionario.titulo}</h1>
            <p>
                Você está prestes a iniciar o teste sobre o conteúdo do capítulo um. Para ser aprovado é necessário acertar pelo menos 2 questões. Leia atentamente cada pergunta e selecione a resposta que considerar correta. Boa sorte!
            </p>
        </section>
        <section class="questoes">
            <form action="#" method="POST" id="form-questionario"> 
                <ol class="lista-questoes">
                </ol>
                <div class="botoes">
                    <button type="button" id="button-voltar" onclick="voltar()">Voltar</button>
                    <button type="submit" id="button-enviar" onclick="enviarQuestionario()">Enviar</button>
                </div>
            </form>
        </section>
  `;

  let ol = section.querySelector("ol");
  ol.innerHTML = dadosQuestionario.questoes
    .map((element, index) => {
      return `
      <article>
        <li>
          ${element.conteudo}
        </li>
        <fieldset class="alternativas">
          <div class="alternativa-verdadeira">
            <input type="radio" name="alternativa${element.id}" id="alternativa-verdadeira${element.id}">
            <label for="alternativa-verdadeira${element.id}">verdadeiro</label>
          </div>
          <div class="alternativa-falsa">
            <input type="radio" name="alternativa${element.id}" id="alternativa-falsa${element.id}">
            <label for="alternativa-falsa${element.id}">falso</label>
          </div>
          <div class="feedback">
            <span id="check-icon" class="feedback-icon" style="display: none;">✔</span>
            <span id="x-icon" class="feedback-icon" style="display: none;">✘</span>
          </div>
        </fieldset>
      </article>
    `;
    })
    .join("");
  main.appendChild(section);

  const modal = document.createElement("section");
  modal.id = "modal-resultado";
  modal.className = "modal";
  modal.style.display = "none";
  modal.innerHTML = `
    <div class="modal-content">
        <h2 id="resultado-titulo">Resultado</h2>
        <p id="resultado-mensagem"></p>
    </div>
  `;
  main.appendChild(modal);
}
