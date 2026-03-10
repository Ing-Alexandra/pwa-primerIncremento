class articleStorage {

static DB_NAME = "AcademicReviewDB";
static STORE_NAME = "articles";
static DB_VERSION = 1;

/* abrir base */
static openDB(){

return new Promise((resolve,reject)=>{

const request = indexedDB.open(
this.DB_NAME,
this.DB_VERSION
);

request.onupgradeneeded = e => {

const db = e.target.result;

if(!db.objectStoreNames.contains(this.STORE_NAME)){
db.createObjectStore(
this.STORE_NAME,
{ keyPath:"id" }
);
}

};

request.onsuccess = () =>
resolve(request.result);

request.onerror = () =>
reject(request.error);

});

}


/* guardar artículo */
static async add(article){

const db = await this.openDB();

return new Promise((resolve,reject)=>{

const tx = db.transaction(
this.STORE_NAME,
"readwrite"
);

const store = tx.objectStore(this.STORE_NAME);

store.add(article);

tx.oncomplete = ()=>resolve();
tx.onerror = ()=>reject(tx.error);

});

}


/* obtener todos */
static async load(){

const db = await this.openDB();

return new Promise((resolve,reject)=>{

const tx = db.transaction(
this.STORE_NAME,
"readonly"
);

const store = tx.objectStore(this.STORE_NAME);

const request = store.getAll();

request.onsuccess = () =>
resolve(request.result || []);

request.onerror = ()=>reject(request.error);

});

}


/* actualizar artículo completo */
static async updateArticle(updatedArticle){

const db = await this.openDB();

return new Promise((resolve,reject)=>{

const tx = db.transaction(
this.STORE_NAME,
"readwrite"
);

const store = tx.objectStore(this.STORE_NAME);

store.put(updatedArticle);

tx.oncomplete = ()=>resolve();
tx.onerror = ()=>reject(tx.error);

});

}


/* eliminar artículo */
static async delete(id){

const db = await this.openDB();

return new Promise((resolve,reject)=>{

const tx = db.transaction(
this.STORE_NAME,
"readwrite"
);

const store = tx.objectStore(this.STORE_NAME);

store.delete(id);

tx.oncomplete = ()=>resolve();
tx.onerror = ()=>reject(tx.error);

});

}

}