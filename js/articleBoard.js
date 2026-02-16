class ArticleBoard {

  static render() {
    const container = document.getElementById("article-board");
    container.innerHTML = "";

    const articles = ArticleManager.getArticles();

    articles.forEach(article => {
      const card = document.createElement("div");
      card.className = "article-card";

      const title = document.createElement("div");
      title.className = "article-title";
      title.textContent = article.title;

      const select = document.createElement("select");

      ["Enviado", "En revisión", "Comentado"].forEach(status => {
        const option = document.createElement("option");
        option.value = status;
        option.textContent = status;
        if (status === article.status) {
          option.selected = true;
        }
        select.appendChild(option);
      });

      select.addEventListener("change", (e) => {
        ArticleManager.updateStatus(article.id, e.target.value);
      });

      card.appendChild(title);
      card.appendChild(select);

      container.appendChild(card);
    });
  }

}
