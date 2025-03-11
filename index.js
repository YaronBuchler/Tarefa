const inputItem = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");
let contador = 0;

botaoAdicionar.addEventListener("click", (evento)=> {
  evento.preventDefault();
 if (inputItem.value===""){
    alert("Por favor, insira um item!");
return 
}

const ItemDaLista = document.createElement("li");
const containerItemDaLista = document.createElement("div");
containerItemDaLista.classList.add("container-item-lista");
const inputCheckbox = document.createElement("input");
inputCheckbox.type="checkbox";
inputCheckbox.id="checkbox-"+contador++;
const nomeItem = document.createElement("p");
nomeItem.innerText = inputItem.value;

container.ItemDaLista.appendchild(inputCheckbox);
container.ItemDaLista.appendchild(nomeItem);

itemDaLista.appendchild(containerItemDaLista)
listaDeCompras.appendchild(itemDaLista);

})