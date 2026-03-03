class ArticleBoard {

constructor(manager){
this.manager = manager;
this.board = document.getElementById("article-board");
}

async render(){

this.board.innerHTML="";

this.manager.articles.forEach((a,i)=>{

const card=document.createElement("div");
card.className="article-card";

card.innerHTML=`
<h3>${a.title}</h3>
<p>Autor: ${a.author}</p>
<p>Profesor: ${a.reviewer}</p>

<select>
<option ${a.status==="En revisión"?"selected":""}>En revisión</option>
<option ${a.status==="Aprobado"?"selected":""}>Aprobado</option>
<option ${a.status==="Rechazado"?"selected":""}>Rechazado</option>
</select>
`;

card.querySelector("select")
.addEventListener("change", async (e)=>{

await this.manager.updateStatus(i,e.target.value);

await this.manager.init(); // recarga artículos

});

this.board.appendChild(card);

});

}

}