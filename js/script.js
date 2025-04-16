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

//ARRAY MODAL SCRIPT
const arrayInfoProjetos = [
  {
    titulo: "./img/titulochristianeestefani.svg",
    descricao:
      "1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum. orem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum orem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum",
    imagem: "./img/site_christian_projetos.gif",
  },
  {
    titulo: "./img/titulobikcraft.svg",

    descricao:
      "2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum. orem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum orem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum",
    imagem:
      "https://static-cse.canva.com/blob/1256154/feature_free-gifs_hero.gif",
  },
  {
    titulo: "./img/tituloportfolio.svg",
    descricao:
      "3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum. orem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum orem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum",
    imagem: "./img/site_christian_projetos.gif",
  },
  {
    titulo: "./img/titulodogs.svg",
    descricao:
      "4Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum. orem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum orem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum",
    imagem: "./img/site_christian_projetos.gif",
  },
  {
    titulo: "./img/titulolobo.svg",
    descricao:
      "5Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum. orem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum orem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum",
    imagem: "./img/site_christian_projetos.gif",
  },
  {
    titulo: "./img/titulogato.svg",
    descricao:
      "6Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum. orem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum orem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum",
    imagem: "./img/site_christian_projetos.gif",
  },
];

// MODAL SCRIPT

const botaoProjetoVerMais = document.querySelectorAll(".projeto-ver-mais");

function exibirModalProjetos(event) {
  event.preventDefault();
  const idProjeto = event.target.getAttribute("projeto-id");
  const modalProjetos = document.getElementById("modal-projetos");
  modalProjetos.querySelector(
    ".grid-modal-projetos .descricao-modal-projetos h3"
  ).style.backgroundImage = "url(" + arrayInfoProjetos[idProjeto].titulo + ")";
  modalProjetos.querySelector(
    ".grid-modal-projetos .descricao-modal-projetos p"
  ).innerHTML = arrayInfoProjetos[idProjeto].descricao;
  modalProjetos.querySelector(
    ".grid-modal-projetos .img-modal-projetos img"
  ).src = arrayInfoProjetos[idProjeto].imagem;
  const fundoModalP = document.getElementById("fundo-modal-projetos");

  modalProjetos.style.opacity = 1;
  modalProjetos.style.visibility = "visible";
  fundoModalP.style.opacity = 1;
  fundoModalP.style.visibility = "visible";
  document
    .querySelector(".botao-fechar-modal")
    .addEventListener("click", function (event) {
      event.preventDefault();
      modalProjetos.style.opacity = 0;
      modalProjetos.style.visibility = "hidden";
      fundoModalP.style.opacity = 0;
      fundoModalP.style.visibility = "hidden";
    });
  document
    .getElementById("fundo-modal-projetos")
    .addEventListener("click", function (event) {
      modalProjetos.style.opacity = 0;
      modalProjetos.style.visibility = "hidden";
      fundoModalP.style.opacity = 0;
      fundoModalP.style.visibility = "hidden";
    });
}

botaoProjetoVerMais.forEach(function (projeto) {
  projeto.addEventListener("click", exibirModalProjetos);
});

// BOTAO DARKMODE

const botaoDarkMode = Array.from(document.querySelectorAll(".botao-darkmode"));

function ativarModoEscuro(event) {
  event.preventDefault();
  const elementoBody = document.querySelector("body");
  const imagemBotao = event.currentTarget.querySelector("img");
  const imagensProjeto = Array.from(
    document.querySelectorAll(".titulo-projeto")
  );

  if (elementoBody.getAttribute("id")) {
    elementoBody.setAttribute("id", "");
    imagemBotao.src = "./img/moon-svgrepo-com 2.svg";
  } else {
    elementoBody.setAttribute("id", "light-mode");

    imagemBotao.src = "./img/sun.svg";
  }
  let bgImageOriginal = "";
  let bgImageModificado = "";
  imagensProjeto.forEach(function (logoProjeto) {
    const urlLogo = logoProjeto.style.backgroundImage;

    const urlDividida = urlLogo.split('"', 2);

    const caminhoImg = urlDividida[1].split(".svg");

    if (elementoBody.getAttribute("id")) {
      logoProjeto.style.backgroundImage =
        'url("' + caminhoImg[0] + '-dark.svg")';
    } else {
      logoProjeto.style.backgroundImage =
        'url("' + caminhoImg[0].split("-dark").join(".svg") + '")';
    }
  });
}

botaoDarkMode.forEach(function (botao) {
  botao.addEventListener("click", ativarModoEscuro);
});

//ARRAY SELETORES MENU FORMAÇÃO //
const arrayMenuFormacao = [
  [
    {
      curso: "Análise e Desenvolvimento de sistemas",
      instituição: "Unisinos",
      data: "02/12/2024 - 02/12/2080",
      descricao:
        "1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum. orem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum orem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum",
    },
  ],
  [
    {
      curso: "JavaScript Completo - 80 horas",
      instituição: "Origamid",
      data: "02/12/2024 - 02/12/2060",
      descricao:
        "O curso vai do básico ao avançado com compreensão total da linguagem, dos seus principais métodos e da sua sintaxe. Aprendizado da linguagem, aplicação será na web, através de manipulações do DOM e requisições via Fetch API.",
    },
    {
      curso: "HTML e CSS para Iniciantes",
      instituição: "Origamid",
      data: "02/12/2024 - 02/12/2055",
      descricao:
        "Foco na teoria + prática, você aprende os fundamentos por trás de cada decisão de código. E após isso você implementa em um projeto real — bikcraft.com. Você já sai do curso com um primeiro site profissional construído. Nele aprende-se CSS Flexbox e Grid Layout para construir os projetos responsivos e totalmente do zero, sem usar nada pronto.",
    },
    {
      curso: "UI Design para Iniciantes",
      instituição: "Origamid",
      data: "02/12/2024 - 02/12/2055",
      descricao:
        "Foco na teoria + prática, você aprende os fundamentos por trás de cada decisão de código. E após isso você implementa em um projeto real.",
    },
  ],
  [
    {
      curso: "Técnico de informática",
      instituição: "Alcione",
      data: "02/12/2024 - 02/12/2080",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum. orem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ],
];

// SELETORES DO MENU FORMAÇÃO //
const seletorFormacao = Array.from(
  document.querySelectorAll(".seletor-formacao")
);

function alterarSeletorFormacao(event) {
  event.preventDefault();
  const formacaoId = event.target.getAttribute("formacao-id");
  const elementoCursosFormacao = document.querySelector(".cursos-formacao");
  const cursosFormacao = [];

  if (arrayMenuFormacao[formacaoId].length) {
    arrayMenuFormacao[formacaoId].forEach(function (formacao) {
      cursosFormacao.push("teste");
    });
    console.log(cursosFormacao);
  }
}

seletorFormacao.forEach(function (seletor) {
  seletor.addEventListener("click", alterarSeletorFormacao);
});
