document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("articleForm");
    const pdfInput = document.getElementById("pdfFile");

    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const reviewer = document.getElementById("reviewer").value;
        const file = pdfInput.files[0];

        if (!file) {
            alert("Debes seleccionar un PDF");
            return;
        }

        const article = {
            id: Date.now(),
            title,
            author,
            reviewer,
            pdfName: file.name,
            pdfFile: file,
            status: "En revisión",
            synced: false,
            createdAt: new Date()
        };

        try {
            await articleStorage.add(article);
            alert("Artículo guardado en IndexedDB (modo offline)");
            form.reset();
            loadArticles();
        } catch (error) {
            console.error(error);
            alert("Error al guardar artículo");
        }

    });

    loadArticles();
    setupNavigation();

});


/* Cargar artículos */
async function loadArticles(){
    const articles = await articleStorage.load();
    console.log("Artículos en IndexedDB:", articles);
    renderArticles(articles);
    updateStats(articles); // ← actualiza contadores automáticamente
}


/* Renderizar artículos */
function renderArticles(articles){

    const board = document.getElementById("article-board");
    board.innerHTML = "";

    articles.forEach(article => {

        const card = document.createElement("div");
        card.className = "article-card";

        card.innerHTML = `
            <h3>${article.title}</h3>
            <p><strong>Autor:</strong> ${article.author}</p>
            <p><strong>Revisor:</strong> ${article.reviewer}</p>
            <p><strong>Estado:</strong> ${article.status}</p>
            <button onclick="deleteArticle(${article.id})">Eliminar</button>
        `;

        board.appendChild(card);
    });

}


/* Actualizar estadísticas */
function updateStats(articles){

    const reviewCount = document.getElementById("reviewCount");
    const approvedCount = document.getElementById("approvedCount");
    const rejectedCount = document.getElementById("rejectedCount");

    const inReview = articles.filter(a => a.status === "En revisión").length;
    const approved = articles.filter(a => a.status === "Aprobado").length;
    const rejected = articles.filter(a => a.status === "Rechazado").length;

    reviewCount.textContent = inReview;
    approvedCount.textContent = approved;
    rejectedCount.textContent = rejected;
}


/* Eliminar artículo */
async function deleteArticle(id){
    await articleStorage.delete(id);
    loadArticles();
}


/* Navegación Sidebar */
function setupNavigation(){

    const navLinks = document.querySelectorAll(".sidebar a");

    navLinks.forEach(link => {

        link.addEventListener("click", function(e){
            e.preventDefault();

            navLinks.forEach(l => l.classList.remove("active"));
            this.classList.add("active");

            const view = this.dataset.view;

            const board = document.getElementById("article-board");
            const reviewers = document.getElementById("reviewers");

            if(view === "articles"){
                board.classList.remove("hidden");
                reviewers.classList.add("hidden");
            } else {
                board.classList.add("hidden");
                reviewers.classList.remove("hidden");
            }

        });

    });

}