
  // Carrega o arquivo JSON
  async function carregarGabarito() {
  try {
    const response = await fetch("task_76781707.json");
    const questoes = await response.json();

    const container = document.getElementById("gabarito");

    questoes.forEach(q => {
      const card = document.createElement("div");
      card.classList.add("question-card");

      // Cabeçalho
      const header = document.createElement("div");
      header.classList.add("question-header");

      const titulo = document.createElement("h3");
      titulo.textContent = `Questão ${q.questao_numero}`;

      const id = document.createElement("span");
      id.classList.add("question-id");
      id.textContent = `#${q.id_da_questao}`;

      header.appendChild(titulo);
      header.appendChild(id);

      // Enunciado
      const enunciado = document.createElement("p");
      enunciado.classList.add("question-enunciado");
      enunciado.textContent = q.enunciado;

      card.appendChild(header);
      card.appendChild(enunciado);

      // Imagem do enunciado (se existir)
      if (q.imagem_url) {
        const img = document.createElement("img");
        img.src = q.imagem_url;
        img.alt = "Imagem da questão";
        img.classList.add("question-image");
        card.appendChild(img);
      }

      // Resposta correta
      const respostaDiv = document.createElement("div");
      respostaDiv.classList.add("question-resposta");

      const letra = Object.keys(q.alternativa_correta)[0];
      let valor = q.alternativa_correta[letra];

      // Se a resposta contiver "[IMAGEM]" ou parecer uma URL/base64 de imagem
      if (typeof valor === "string" && (valor.includes("http") || valor.startsWith("data:image"))) {
        // Remove marcador [IMAGEM] se existir
        valor = valor.replace("[IMAGEM]", "").trim();

        respostaDiv.innerHTML = `<strong>Resposta [${letra}]:</strong><br>`;
        const img = document.createElement("img");
        img.src = valor;
        img.alt = "Resposta correta";
        img.classList.add("answer-image");
        respostaDiv.appendChild(img);
      } else {
        respostaDiv.innerHTML = `<strong>Resposta [${letra}]:</strong> ${valor}`;
      }

      card.appendChild(respostaDiv);

      container.appendChild(card);
    });

  } catch (error) {
    console.error("Erro ao carregar gabarito:", error);
  }
}

document.addEventListener("DOMContentLoaded", carregarGabarito);
