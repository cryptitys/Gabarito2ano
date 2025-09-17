document.addEventListener("DOMContentLoaded", () => {
  fetch("task_76781700.json")
    .then(response => response.json())
    .then(data => renderCards(data))
    .catch(err => console.error("Erro ao carregar JSON:", err));
});

function renderCards(questoes) {
  const container = document.getElementById("cards-container");

  questoes.forEach(q => {
    const card = document.createElement("div");
    card.className = "grade-card";

    // Cabeçalho
    const header = document.createElement("div");
    header.className = "grade-header";
    header.innerHTML = `
      <div class="grade-icon"><i class="fas fa-question"></i></div>
      <h3>Questão ${q.questao_numero}</h3>
    `;
    card.appendChild(header);

    // Enunciado
    const enunciado = document.createElement("p");
    enunciado.textContent = q.enunciado;
    enunciado.style.marginBottom = "16px";
    card.appendChild(enunciado);

    // Imagem (se houver)
    if (q.imagem_url) {
      const img = document.createElement("img");
      img.src = q.imagem_url;
      img.alt = "Imagem da questão";
      img.style.width = "100%";
      img.style.borderRadius = "12px";
      img.style.marginBottom = "16px";
      card.appendChild(img);
    }

    // Resposta
    const resposta = document.createElement("div");
    resposta.className = "subject-item";
    resposta.innerHTML = `<i class="fas fa-check"></i><span><strong>Resposta:</strong> ${Object.values(q.alternativa_correta)[0]}</span>`;
    card.appendChild(resposta);

    container.appendChild(card);
  });
  }
