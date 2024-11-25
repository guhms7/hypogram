function getUsuario() {
  const form = document.querySelector("#FormLogin");
  const email = form.querySelector("#email");
  const senha = form.querySelector("#password");
  let isusuarioEncontrado = false;
  localStorage.removeItem("usuarioLogado");
  usuario.forEach((element) => {
    if (
      (element.usuarionome == email.value ||
        element.usuarioemail == email.value) &&
      element.usuariosenha == senha.value
    ) {
      isusuarioEncontrado = true;
      localStorage.setItem("usuarioLogado", JSON.stringify(element));
    }
  });

  if (!isusuarioEncontrado) {
    alert("Usuário não encontrado.");
  } else {
    const paginaAnterior = localStorage.getItem("paginaAnterior");
    if (paginaAnterior) {
      window.location.href = paginaAnterior;
    } else {
      window.location.href = "/aprendaScrum";
    }
  }

  localStorage.setItem("login", isusuarioEncontrado);
}
