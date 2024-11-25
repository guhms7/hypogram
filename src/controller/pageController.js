const path = require("path");

const page = {
  aprendaScrum: "aprendaScrum",
  ArtefatosScrum: "ArtefatosScrum",
  cadastro: "cadastro",
  certificado: "certificado",
  culturaMindset: "culturaMindset",
  eventoScrum: "eventoScrum",
  frameworkTrabalho: "frameworkTrabalho",
  home: "index",
  login: "login",
  papeisScrum: "papeisScrum",
  preCertificado: "precertificado",
  principiosValores: "principiosValores",
  questionario: "questionario",
  questionarioPopup: "questionarioPopup",
  selecaoQuestionario: "selecaoQuestionario",
  sobre: "sobre",
  tecnicasFerramentas: "tecnicasFerramentas",
};

const renderPage = (req, res) => {
  const requestedPage = req.params.page;

  if (page[requestedPage]) {
    res.render(page[requestedPage]);
  } else {
    res.sendFile(path.join(__dirname, "..", "404.html"));
  }
};

module.exports = { renderPage };
