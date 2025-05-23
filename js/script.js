//evento de scroll para o menu nav fixo//

function scrollMouse(event) {
  const posicaoYPagina = window.pageYOffset;

  if (window.outerWidth > 700) {
    if (posicaoYPagina >= 250) {
      document.querySelector(".header-menu-fixed").style.opacity = 1;
      document.querySelector(".header-menu-fixed").style.top = 0;
    } else {
      document.querySelector(".header-menu-fixed").style.opacity = 0;
      document.querySelector(".header-menu-fixed").style.top = "-131px";
    }
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
const botoesHamburguerNav = Array.from(
  document.querySelectorAll(".menu-hamburguer nav ul li a")
);
const arrayBotoesNav = botoesNav
  .concat(botoesNavFixed)
  .concat(botoesHamburguerNav);

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
    imagem: "./img/giff_portfolio.gif",
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
const arraySeletorFormacao = [
  {
    titulo: "Graduação",
  },
  {
    titulo: "Cursos - Origamid",
  },
  {
    titulo: "Técnico",
  },
];
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
      curso: "UI Design para Iniciantes",
      instituição: "Origamid",
      data: "02/12/2024 - 02/12/2055",
      descricao:
        "Foco na teoria + prática, você aprende os fundamentos por trás de cada decisão de código. E após isso você implementa em um projeto real.",
    },
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

// REFRESH PAGINA - MENU FORMACAO //
const arrayCursosFormacao = [];
arrayMenuFormacao[0].forEach(function (formacao) {
  document.querySelectorAll(".slider > a").forEach(function (seta) {
    arrayMenuFormacao[0].length <= 1
      ? seta.classList.add("ocultar-seta")
      : seta.classList.remove("ocultar-seta");
  });
  arrayCursosFormacao.push(`
  <div class="curso">
    <h4 class="font-1-s-b cor0">${formacao.curso}</h4>
    <span class="formacao-data font-2-xs cor0">${formacao.data}</span>
    <span class="font-1-s cor6">${formacao.instituição}</span>
    <p class="font-2-s cor3">${formacao.descricao}</p>
  </div>
  `);
});
document.querySelector(".cursos-formacao").innerHTML = arrayCursosFormacao;

// SELETORES DO MENU FORMAÇÃO //
const containerSeletorFormacao = document.querySelector(
  ".formacao-conteudo .formacao-lista ul"
);

const formacaoLista = [];

arraySeletorFormacao.forEach(function (
  seletorFormacaoItem,
  indiceFormacaoItem
) {
  formacaoLista.push(` 
  <li><a href="#" class="${
    arrayMenuFormacao[indiceFormacaoItem].length > 1 ? "icone-adicional" : ""
  } seletor-formacao" formacao-id="${indiceFormacaoItem}">${
    seletorFormacaoItem.titulo
  }</a></li>
  `);
});
containerSeletorFormacao.innerHTML = formacaoLista.join("");

const seletorFormacao = Array.from(
  document.querySelectorAll(".seletor-formacao")
);

function alterarSeletorFormacao(event) {
  event.preventDefault();
  const formacaoId = event.target.getAttribute("formacao-id");
  const elementoCursosFormacao = document.querySelector(".cursos-formacao");
  const setasFormacao = document.querySelectorAll(".slider > a");
  let elementoCursosFormacaoLeft = "-790px";
  if (window.innerWidth <= 1405 && window.innerWidth >= 901) {
    elementoCursosFormacaoLeft = "-560px";
  } else if (window.innerWidth <= 900 && window.innerWidth >= 701) {
    elementoCursosFormacaoLeft = "-430px";
  } else if (window.innerWidth <= 700) {
    elementoCursosFormacaoLeft = "-316px";
  } else {
    elementoCursosFormacaoLeft = "-790px";
  }
  console.log(window.innerWidth);

  let posicaoSlider = 0;
  const cursosFormacao = [];

  if (arrayMenuFormacao[formacaoId].length) {
    arrayMenuFormacao[formacaoId].forEach(function (formacao) {
      setasFormacao.forEach(function (seta) {
        arrayMenuFormacao[formacaoId].length <= 1
          ? seta.classList.add("ocultar-seta")
          : seta.classList.remove("ocultar-seta");
      });
      cursosFormacao.push(`
      <div class="curso">
        <h4 class="font-1-s-b cor0">${formacao.curso}</h4>
        <span class="formacao-data font-2-xs cor0">${formacao.data}</span>
        <span class="font-1-s cor6">${formacao.instituição}</span>
        <p class="font-2-s cor3">${formacao.descricao}</p>
      </div>
      `);
    });
    elementoCursosFormacao.innerHTML = cursosFormacao;
    arrayMenuFormacao[formacaoId].length > 1
      ? (elementoCursosFormacao.style.left = elementoCursosFormacaoLeft)
      : (elementoCursosFormacao.style.left = "0px");
  }

  //SLIDER//

  const sliderItens = Array.from(
    document.querySelectorAll(".slider .cursos-formacao .curso")
  );

  setasFormacao[1].addEventListener("click", function (event) {
    event.preventDefault();
    elementoCursosFormacao.appendChild(sliderItens[0]);
    sliderItens.push(sliderItens.shift());
  });
  setasFormacao[0].addEventListener("click", function (event) {
    event.preventDefault();
    elementoCursosFormacao.prepend(sliderItens[sliderItens.length - 1]);
    sliderItens.unshift(sliderItens.pop());
  });
}

seletorFormacao.forEach(function (seletor) {
  seletor.addEventListener("click", alterarSeletorFormacao);
});

//Fundo Menu Hamburguer
const fundoMenuHamburguer = document.querySelector("#fundo-menu-hamburguer");

fundoMenuHamburguer.addEventListener("click", function (event) {
  event.target.style.opacity = 0;
  event.target.style.visibility = "hidden";
  document.querySelector(".menu-hamburguer").classList.remove("ativo");
  document.querySelector("#menu-hamburguer-icone-fechar").style.opacity = 0;
  document.querySelector("#menu-hamburguer-icone-fechar").style.visibility =
    "hidden";
});

const menuHamburguerIconeFechar = document.querySelector(
  "#menu-hamburguer-icone-fechar"
);

menuHamburguerIconeFechar.addEventListener("click", function (event) {
  event.target.style.opacity = 0;
  event.target.style.visibility = "hidden";
  document.querySelector(".menu-hamburguer").classList.remove("ativo");
  fundoMenuHamburguer.style.opacity = 0;
  fundoMenuHamburguer.style.visibility = "hidden";
});

//Menu Hamburguer
const iconeHamburguer = document
  .querySelector("#menu-hamburguer-icone")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".menu-hamburguer").classList.toggle("ativo");
    fundoMenuHamburguer.style.opacity = 1;
    fundoMenuHamburguer.style.visibility = "visible";
    menuHamburguerIconeFechar.style.opacity = 1;
    menuHamburguerIconeFechar.style.visibility = "visible";
  });
