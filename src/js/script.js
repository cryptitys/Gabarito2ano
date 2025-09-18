document.addEventListener("DOMContentLoaded", () => {
  // Carrega o arquivo JSON
  fetch("task_76781707.json")
    .then(response => {
      if (!response.ok) throw new Error("Erro ao carregar JSON");
      return response.json();
    })
    .then(data => renderCards(data))
    .catch(err => console.error("Erro:", err));
});

function renderCards(questoes) {
  const container = document.getElementById("cards-container");
  container.innerHTML = ""; // limpa antes de renderizar

  questoes.forEach(q => {
    // Card
    const card = document.createElement("div");
    card.className = "grade-card";

    // Cabeçalho com número e ID
    const header = document.createElement("div");
    header.className = "grade-header";
    header.innerHTML = `
      <div class="grade-icon"><i class="fas fa-question"></i></div>
      <h3>Questão ${q.questao_numero} 
        <small style="color:var(--text-muted)">#${q.id_da_questao}</small>
      </h3>
    `;
    card.appendChild(header);

    // Enunciado
    const enunciado = document.createElement("p");
    enunciado.textContent = q.enunciado;
    enunciado.style.marginBottom = "16px";
    card.appendChild(enunciado);

    // Imagem (se existir)
    if (q.imagem_url) {
      const img = document.createElement("img");
      img.src = q.imagem_url;
      img.alt = "Imagem da questão";
      img.style.width = "100%";
      img.style.borderRadius = "12px";
      img.style.marginBottom = "16px";
      card.appendChild(img);
    }

    // Resposta correta (destacada)
    const resposta = document.createElement("div");
    resposta.className = "resposta-correta";

    const letra = Object.keys(q.alternativa_correta)[0]; // ex: "E"
    const texto = Object.values(q.alternativa_correta)[0]; // ex: "idealização..."

    resposta.innerHTML = `
      <i class="fas fa-check-circle"></i>
      <span><strong>Resposta:</strong> [${letra}] ${texto}</span>
    `;
    card.appendChild(resposta);

    // Adiciona o card no container
    container.appendChild(card);
  });
}
