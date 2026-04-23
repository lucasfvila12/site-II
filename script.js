const jogos = [
  { nome: "Brawlhalla", link: "brawlhalla.html", id: "aval1", img: "https://cdn2.steamgriddb.com/thumb/c549e510d2c4ee6a339eb2a8bbadb263.jpg" },
  { nome: "ARK Survival Evolved", link: "ark.html", id: "aval2", img: "https://cdn.cloudflare.steamstatic.com/steam/apps/346110/header.jpg" },
  { nome: "Counter Strike 2", link: "cs2.html", id: "aval3", img: "https://www.memorypc.de/media/6e/45/79/1712144854/cs2-server.webp" },
  { nome: "God of War (2018)", link: "gow.html", id: "aval4", img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/header.jpg" },
  { nome: "Rocket League", link: "rocket.html", id: "aval5", img: "https://cdn.cloudflare.steamstatic.com/steam/apps/252950/header.jpg" },
  { nome: "Elden Ring", link: "elden.html", id: "aval6", img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg" }
];

function carregarCatalogo() {
  const catalogo = document.getElementById("catalogo");
  catalogo.innerHTML = "";

  jogos.forEach(jogo => {
    let nota = localStorage.getItem(jogo.id) || "0";

    catalogo.innerHTML += `
      <div class="card">
        <img src="${jogo.img}">
        <h2>${jogo.nome}</h2>
        <div class="nota">⭐ ${nota}/5</div>
        <a href="${jogo.link}">Abrir</a>
      </div>
    `;
  });
}

function avaliar(id, nota) {
  localStorage.setItem(id, nota);
  location.reload();
}

function carregar(id) {
  let nota = localStorage.getItem(id);
  if (!nota) return;

  let estrelas = document.querySelectorAll(`#${id} span`);
  estrelas.forEach((e, i) => {
    e.style.color = i < nota ? "gold" : "gray";
  });
}

function buscar() {
  let input = document.getElementById("busca").value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.style.display = card.innerText.toLowerCase().includes(input)
      ? "block"
      : "none";
  });
}

function abrirImagem(src) {
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("img-lightbox");

  img.src = src;
  lightbox.style.display = "flex";
}

function fecharImagem() {
  document.getElementById("lightbox").style.display = "none";
}


