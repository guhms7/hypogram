const pool = require("../database/pgslq");

const listarQuestionarios = async (usuarioId) => {
  try {
    console.log("ID do Usuário:", usuarioId);

    const query = `
      SELECT
        q.questionarioid, 
        q.questionarioordem, 
        uq.usuarioquestionarioestagio
      FROM 
        questionario q
      LEFT JOIN 
        usuarioquestionario uq ON q.questionarioid = uq.questionarioid 
      WHERE 
        uq.usuarioid = $1
      ORDER BY 
        q.questionarioordem;
    `;
    const result = await pool.query(query, [usuarioId]);

    console.log("Dados retornados do banco:", result.rows);

    const capitulosAprovados = result.rows
      .filter((row) => row.usuarioquestionarioestagio === "Aprovado") // Comparando com a string 'Aprovado'
      .map((row) => row.questionarioid);

    console.log("Capítulos Aprovados:", capitulosAprovados);

    return {
      questionarios: result.rows,
      capitulosAprovados: capitulosAprovados,
    };
  } catch (err) {
    console.error(err);
    throw new Error("Erro ao buscar os questionários no banco de dados.");
  }
};

const listarItensQuestionario = async (questionarioId) => {
  try {
    const query = `
      SELECT 
        q.questionarioid AS id,
        q.questionariotitulo AS titulo,
        qi.questionarioitemid AS itemId,
        qi.questionarioitemconteudo AS conteudo,
        qi.questionarioitemrespostacorret AS respostaCorreta
      FROM 
        questionario q
      INNER JOIN 
        questionarioitem qi
      ON 
        q.questionarioid = qi.questionarioid
      WHERE 
        q.questionarioid = $1
    `;

    const result = await pool.query(query, [questionarioId]);

    if (result.rows.length === 0) {
      return null; // Caso o questionário não exista
    }

    // Estrutura o objeto conforme o esperado
    const questionario = {
      id: result.rows[0].id,
      titulo: result.rows[0].titulo,
      questoes: result.rows.map((row) => ({
        id: row.itemid,
        conteudo: row.conteudo,
        respostaCorreta: row.respostacorreta,
      })),
    };

    return questionario;
  } catch (err) {
    console.error(err);
    throw new Error(
      "Erro ao buscar os itens do questionário no banco de dados."
    );
  }
};

const salvarRespostas = async (req, res) => {
  const { questionarioId, respostas } = req.body;
  const usuarioId = req.session.usuario.id;

  const respostasCorretas = await listarItensQuestionario(questionarioId);

  let acertos = 0;

  respostas.forEach((resposta) => {
    const respostaCorreta = respostasCorretas.questoes.find(
      (questao) => questao.id === resposta.id
    );

    if (
      respostaCorreta &&
      respostaCorreta.respostaCorreta === resposta.conteudo
    ) {
      acertos++;
    }
  });

  console.log(`O usuário acertou ${acertos} questões.`);
  try {
    // Iniciar uma transação
    await pool.query("BEGIN");

    //comparar respostas com o banco

    // Finalizar a transação
    await pool.query("COMMIT");

    res.status(201).send("Respostas salvas com sucesso.");
  } catch (err) {
    // Desfazer a transação
    await pool.query("ROLLBACK");

    console.error(err);
    res.status(500).send("Erro ao salvar as respostas.");
  }
};

/**
 * Atualiza ou insere o estágio do questionário do usuário.
 * @param {number} usuarioId - ID do usuário.
 * @param {number} questionarioId - ID do questionário.
 * @param {string} estagio - Estágio do questionário (ex: "Aprovado" ou "Reprovado").
 */
const atualizarEstagioUsuarioQuestionario = async (
  usuarioId,
  questionarioId,
  estagio
) => {
  try {
    await pool.query("BEGIN");

    await pool.query(
      `
      INSERT INTO usuarioquestionario (usuarioid, questionarioid, usuarioquestionarioestagio)
      VALUES ($1, $2, $3)
      ON CONFLICT (usuarioid, questionarioid)
      DO UPDATE SET usuarioquestionarioestagio = EXCLUDED.usuarioquestionarioestagio;
      `,
      [usuarioId, questionarioId, estagio]
    );

    await pool.query("COMMIT");
  } catch (err) {
    await pool.query("ROLLBACK");
    console.error("Erro ao atualizar estágio do questionário:", err);
    throw err; // Repassa o erro para o controller tratar.
  }
};

module.exports = {
  listarQuestionarios,
  listarItensQuestionario,
  atualizarEstagioUsuarioQuestionario,
};
