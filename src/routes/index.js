const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const certificadoController = require("../controller/certificadoController");
const questionarioController = require("../controller/questionarioController");

// router.get("/:page", pageController.renderPage);

const autenticarUsuario = (req, res, next) => {
  if (!req.session.usuarioLogado) {
    return res.redirect("/login"); // Redireciona para a página de login
  }
  next();
};

router.get("/api/sessao", (req, res) => {
  if (req.session.usuarioLogado) {
    return res.json({ logado: true, usuario: req.session.usuarioLogado });
  }
  return res.json({ logado: false });
});

router.post("/api/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Erro ao encerrar sessão:", err);
      return res.status(500).send("Erro ao encerrar sessão");
    }
    res.clearCookie("connect.sid");
    return res.status(200).send("Sessão encerrada com sucesso");
  });
});

router.post("/criarUsuario", userController.criarUsuario);

router.post("/loginUser", userController.loginUser);

router.get(
  "/questionario/:questionarioId",
  questionarioController.listaritensquestionario
);

router.post(
  "/questionario/:id/enviar",
  autenticarUsuario,
  questionarioController.salvarRespostas
);

router.get("/selecaoQuestionario", questionarioController.renderQuestionarios);

router.get("/aprendaScrum", (req, res) => {
  res.render("aprendaScrum"); // Renderiza a página 'aprendaScrum.ejs'
});

router.get("/ArtefatosScrum", (req, res) => {
  res.render("ArtefatosScrum"); // Renderiza a página 'ArtefatosScrum.ejs'
});

router.get("/cadastro", (req, res) => {
  res.render("cadastro"); // Renderiza a página 'cadastro.ejs'
});

router.get("/certificado", userController.mostrarCertificado);

router.get("/culturaMindset", (req, res) => {
  res.render("culturaMindset"); // Renderiza a página 'culturaMindset.ejs'
});

router.get("/eventoScrum", (req, res) => {
  res.render("eventoScrum"); // Renderiza a página 'eventoScrum.ejs'
});

router.get("/frameworkTrabalho", (req, res) => {
  res.render("frameworkTrabalho"); // Renderiza a página 'frameworkTrabalho.ejs'
});

router.get("/home", (req, res) => {
  res.render("index"); // Renderiza a página 'index.ejs'
});

router.get("/login", (req, res) => {
  res.render("login"); // Renderiza a página 'login.ejs'
});

router.get("/papeisScrum", (req, res) => {
  res.render("papeisScrum"); // Renderiza a página 'papeisScrum.ejs'
});

router.get("/preCertificado", (req, res) => {
  res.render("precertificado"); // Renderiza a página 'precertificado.ejs'
});

router.get("/principiosValores", (req, res) => {
  res.render("principiosValores"); // Renderiza a página 'principiosValores.ejs'
});

router.get("/questionario", (req, res) => {
  res.render("questionario"); // Renderiza a página 'questionario.ejs'
});

router.get("/questionarioPopup", (req, res) => {
  res.render("questionarioPopup"); // Renderiza a página 'questionarioPopup.ejs'
});

router.get("/sobre", (req, res) => {
  res.render("sobre"); // Renderiza a página 'sobre.ejs'
});

router.get("/tecnicasFerramentas", (req, res) => {
  res.render("tecnicasFerramentas"); // Renderiza a página 'tecnicasFerramentas.ejs'
});

// router.get("/certificado", questionarioController.gerarCertificado);

module.exports = router;
