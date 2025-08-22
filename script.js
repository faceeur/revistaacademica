let artigos = [
  {
    titulo: "O Papel da Contabilidade na Gestão Pública",
    autor: "Ana Tomás",
    curso: "Contabilidade",
    resumo: "Este artigo analisa o impacto da contabilidade no setor público moçambicano.",
    link: "https://example.com/artigo1.pdf"
  },
  {
    titulo: "Crescimento Económico Sustentável em Moçambique",
    autor: "Carlos Mabunda",
    curso: "Economia",
    resumo: "O trabalho explora os pilares do desenvolvimento económico sustentável.",
    link: "https://example.com/artigo2.pdf"
  }
];

function mostrarSecao(secao) {
  document.querySelectorAll("section").forEach(s => s.style.display = "none");
  document.getElementById(secao).style.display = "block";
  if (secao === "artigos") renderizarArtigos();
}

function renderizarArtigos() {
  const container = document.getElementById("listaArtigos");
  container.innerHTML = "";
  artigos.forEach(artigo => {
    const div = document.createElement("div");
    div.className = "artigo";
    div.innerHTML = `
      <h3><a href="${artigo.link}" target="_blank">${artigo.titulo}</a></h3>
      <p><strong>Autor:</strong> ${artigo.autor}</p>
      <p><strong>Curso:</strong> ${artigo.curso}</p>
      <p>${artigo.resumo}</p>
    `;
    container.appendChild(div);
  });
}

document.getElementById("formSubmissao").addEventListener("submit", function(e) {
  e.preventDefault();
  const titulo = document.getElementById("titulo").value;
  const autor = document.getElementById("autor").value;
  const curso = document.getElementById("curso").value;
  const resumo = document.getElementById("resumo").value;
  const link = document.getElementById("link").value;

  artigos.push({ titulo, autor, curso, resumo, link });

  document.getElementById("mensagem").textContent = "Artigo submetido com sucesso!";
  this.reset();
});
