const {
  listarQuestionarios,
  listarItensQuestionario,
  atualizarEstagioUsuarioQuestionario,
} = require("../models/questionarioModel");
const pool = require("../database/pgslq");

const renderQuestionarios = async (req, res) => {
  try {
    if (!req.session.usuarioLogado) {
      return res.redirect("/login");
    }

    const usuarioId = req.session.usuarioLogado.usuarioid; // Pegue o ID do usuário logado
    const questionarios = await listarQuestionarios(usuarioId); // Passe o ID do usuário para o modelo

    const questionariosAprovados = questionarios.questionarios.filter((q) =>
      questionarios.capitulosAprovados.includes(q.questionarioid)
    );

    res.render("selecaoQuestionario", {
      questionarios: questionariosAprovados, // Passa apenas os questionários aprovados
      capitulosAprovados: questionarios.capitulosAprovados,
    });
  } catch (err) {
    console.error("Erro ao renderizar questionários:", err.message);
    res.status(500).send("Erro ao carregar a página de questionários.");
  }
};

const listaritensquestionario = async (req, res) => {
  const { questionarioId } = req.params;

  try {
    const questionario = await listarItensQuestionario(questionarioId);

    if (!questionario) {
      console.error("Nenhum questionário encontrado.");
      return res.status(404).send("Questionário não encontrado.");
    }

    req.session.questionario = questionario;

    res.render("questionario", { dadosQuestionario: questionario });
  } catch (err) {
    console.error("Erro ao buscar os itens do questionário:", err);
    res.status(500).json({ error: "Erro ao buscar os itens do questionário." });
  }
};

const salvarRespostas = async (req, res) => {
  const respostasUsuario = req.body; // Respostas enviadas pelo formulário
  const { id } = req.params;
  const usuarioLogado = req.session.usuarioLogado; // Dados do usuário logado

  console.log("respostasUsuario:", respostasUsuario);
  console.log("questionarioId:", id);

  if (!usuarioLogado) {
    return res.status(401).send("Usuário não autenticado.");
  }

  try {
    // Pega o questionário do banco de dados
    const questionario = await listarItensQuestionario(id);

    if (!questionario) {
      return res.status(404).send("Questionário não encontrado.");
    }

    // Valida as respostas
    let acertos = 0;
    questionario.questoes.forEach((questao) => {
      const respostaUsuario = respostasUsuario[`questao${questao.id}`];
      if (String(respostaUsuario) === String(questao.respostaCorreta)) {
        acertos++;
      }
    });

    const aprovado = acertos >= 2;

    console.log(`O usuário acertou ${acertos} questões.`);
    console.log(aprovado ? "Usuário aprovado!" : "Usuário reprovado!");

    // Determina o estágio do usuário
    const estagio = aprovado ? "Aprovado" : "Reprovado";

    // Atualiza o banco de dados chamando o método do model
    await atualizarEstagioUsuarioQuestionario(
      usuarioLogado.usuarioid,
      id,
      estagio
    );

    // Retorna o status de aprovação/reprovação para o frontend
    return res.status(200).json({
      aprovado,
      mensagem: aprovado ? "Usuário aprovado!" : "Usuário reprovado!",
    });
  } catch (err) {
    console.error("Erro ao salvar as respostas:", err);
    return res.status(500).send("Erro ao salvar as respostas.");
  }
};

module.exports = {
  renderQuestionarios,
  listaritensquestionario,
  salvarRespostas,
};
