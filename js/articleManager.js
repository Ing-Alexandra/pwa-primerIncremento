class ArticleManager {

constructor(){
this.articles=[];
}

async init(){
this.articles = await ArticleStorage.load();
await board.render();
updateStats(this);
}

async addArticle(article){

await ArticleStorage.add(article);

this.articles = await ArticleStorage.load();

}

async updateStatus(index,status){

const article=this.articles[index];

await ArticleStorage.update(article.id,status);

this.articles = await ArticleStorage.load();

}

getStats(){
return{
review:this.articles.filter(a=>a.status==="En revisión").length,
approved:this.articles.filter(a=>a.status==="Aprobado").length,
rejected:this.articles.filter(a=>a.status==="Rechazado").length
};
}
}