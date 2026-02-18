class ArticleBoard {

  static render() {
    const container = document.getElementById("article-board");
    if (!container) return;

    // Limpiar contenedor sin usar innerHTML
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    const articles = ArticleManager.getArticles();

    articles.forEach(article => {
      const card = document.createElement("div");
      card.classList.add("article-card");

      // Título
      const title = document.createElement("h3");
      title.classList.add("article-title");
      title.textContent = article.title;

      // Autor
      const author = document.createElement("p");
      author.classList.add("article-author");
      author.textContent = `Autor: ${article.author}`;

      // Estado actual
      const statusLabel = document.createElement("label");
      statusLabel.textContent = "Estado: ";
      statusLabel.setAttribute("for", `status-${article.id}`);

      const statusSelect = document.createElement("select");
      statusSelect.id = `status-${article.id}`;
      statusSelect.classList.add("article-status");

      const statuses = ["pending", "approved", "rejected"];

      statuses.forEach(status => {
        const option = document.createElement("option");
        option.value = status;
        option.textContent = status.charAt(0).toUpperCase() + status.slice(1);

        if (article.status === status) {
          option.selected = true;
        }

        statusSelect.appendChild(option);
      });

      // Evento para actualizar estado
      statusSelect.addEventListener("change", (e) => {
        const newStatus = e.target.value;
        ArticleManager.updateStatus(article.id, newStatus);
      });

      // Ensamblar tarjeta
      card.appendChild(title);
      card.appendChild(author);
      card.appendChild(statusLabel);
      card.appendChild(statusSelect);

      container.appendChild(card);
    });
  }
}
