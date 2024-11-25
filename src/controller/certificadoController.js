const pool = require("../database/pgslq");

const mostrarCertificado2 = async (req, res) => {
  try {
    if (!req.session.usuarioLogado) {
      return res.redirect("/login"); // Redireciona para o login se o usuário não estiver logado
    }

    const usuarioId = req.session.usuarioLogado.usuarioid; // ID do usuário logado

    // Verifica os questionários aprovados do usuário na tabela usuario_questionario
    const questionariosAprovados = await pool.query(
      `
      SELECT COUNT(*) AS aprovados
      FROM usuarioquestionario
      WHERE usuarioid = $1 AND usuarioquestionarioestagio = 'Aprovado'
    `,
      [usuarioId]
    );

    // Se o usuário tiver todos os 7 questionários aprovados
    if (questionariosAprovados.rows[0].aprovados === 7) {
      const usuarioNome = req.session.usuarioLogado.usuarionome; // Nome do usuário
      return res.render("certificado", { nomeAluno: usuarioNome }); // Renderiza o certificado
    } else {
      // Se não tiver todos os questionários aprovados
      return res.render("erro", {
        mensagem:
          "Você precisa concluir todos os questionários para gerar o certificado.",
      });
    }
  } catch (error) {
    console.error("Erro ao verificar questionários:", error);
    res.render("erro", {
      mensagem:
        "Erro ao verificar seus questionários. Tente novamente mais tarde.",
    });
  }
};

module.exports = { mostrarCertificado2 };
