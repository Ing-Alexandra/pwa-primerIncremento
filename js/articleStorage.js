class ArticleStorage {

  static getAll() {
    const data = localStorage.getItem("articles");
    return data ? JSON.parse(data) : [];
  }

  static saveAll(articles) {
    localStorage.setItem("articles", JSON.stringify(articles));
  }

}
