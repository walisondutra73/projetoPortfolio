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

//Redirecionamento NAV//

const botoesNav = Array.from(document.querySelectorAll(".menu-lista li a"));
const botoesNavFixed = Array.from(
  document.querySelectorAll(".header-menu-fixed li a")
);
const arrayBotoesNav = botoesNav.concat(botoesNavFixed);

function redirectBotoes(event) {
  event.preventDefault();
  const linkHref = event.target.href.split("#")[1];
  const posicaoYElemento = document.getElementById(linkHref).offsetTop;
  window.scrollTo({ top: posicaoYElemento - 131, behavior: "smooth" });
}

function aplicarEventoClick(botao) {
  botao.addEventListener("click", redirectBotoes);
}

arrayBotoesNav.forEach(aplicarEventoClick);

// MODAL SCRIPT

const botaoProjetoVerMais = document.getElementById("projeto-ver-mais");

function exibirModalProjetos(event) {
  event.preventDefault();
  const modalProjetos = document.getElementById("modal-projetos");
  modalProjetos.style.opacity = 1;
  modalProjetos.style.visibility = "visible";
  document
    .querySelector(".botao-fechar-modal")
    .addEventListener("click", function (event) {
      event.preventDefault();
      modalProjetos.style.opacity = 0;
      modalProjetos.style.visibility = "hidden";
    });
}

botaoProjetoVerMais.addEventListener("click", exibirModalProjetos);

// BOTAO DARKMODE

const botaoDarkMode = document.querySelector(".botao-darkmode");

function ativarModoEscuro(event) {
  event.preventDefault();
  const elementoBody = document.querySelector("body");
  const imagemBotao = event.currentTarget.querySelector("img");

  if (elementoBody.getAttribute("id")) {
    elementoBody.setAttribute("id", "");
    imagemBotao.src = "./img/moon-svgrepo-com 2.svg";
  } else {
    elementoBody.setAttribute("id", "light-mode");

    imagemBotao.src = "./img/sun.svg";
  }
}

botaoDarkMode.addEventListener("click", ativarModoEscuro);
