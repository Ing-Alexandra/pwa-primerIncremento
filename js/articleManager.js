class ArticleManager {

  static initialize() {
    const existing = ArticleStorage.getAll();

    if (existing.length === 0) {
      const defaultArticles = [
        { id: 1, title: "Optimización de Redes Neuronales Profundas", status: "Enviado" },
        { id: 2, title: "Arquitectura Escalable en Computación en la Nube", status: "En revisión" },
        { id: 3, title: "Seguridad de Datos mediante Blockchain", status: "Comentado" }
      ];
      ArticleStorage.saveAll(defaultArticles);
    }
  }

  static getArticles() {
    return ArticleStorage.getAll();
  }

  static updateStatus(id, newStatus) {
    const articles = ArticleStorage.getAll();
    const updated = articles.map(article => {
      if (article.id === id) {
        article.status = newStatus;
      }
      return article;
    });

    ArticleStorage.saveAll(updated);
  }

}
