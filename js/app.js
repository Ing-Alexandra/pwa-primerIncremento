document.addEventListener("DOMContentLoaded", () => {

  // Inicializar artículos
  ArticleManager.initialize();
  ArticleBoard.render();

  // Registrar Service Worker
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js")
      .then(() => console.log("Service Worker registrado"))
      .catch(error => console.log("Error registrando SW:", error));
  }

});
