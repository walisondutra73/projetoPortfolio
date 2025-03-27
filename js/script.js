//evento de scroll para o menu nav fixo//

function scrollMouse(event) {
  const posicaoYPagina = window.pageYOffset;

  if (posicaoYPagina >= 250) {
    document.querySelector(".header-menu-fixed").style.opacity = 1;
    document.querySelector(".header-menu-fixed").style.top = 0;
  } else {
    document.querySelector(".header-menu-fixed").style.opacity = 0;
    document.querySelector(".header-menu-fixed").style.top = "-131px";
  }
}

window.addEventListener("scroll", scrollMouse);

//evento para o botao Projetos//

const botaoProjetos = document.querySelector(".botao-projetos");

function redirectProjects(event) {
  window.scrollTo({ top: 2128, behavior: "smooth" });
}

botaoProjetos.addEventListener("click", redirectProjects);

//Abertura do modal em Projetos//
