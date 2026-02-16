document.addEventListener("DOMContentLoaded", () => {

  ArticleManager.initialize();
  ArticleBoard.render();

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js")
      .then(() => console.log("Service Worker registrado"))
      .catch(error => console.log("Error registrando SW:", error));
  }

});
