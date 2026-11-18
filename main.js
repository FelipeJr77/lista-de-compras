const inputItem = document.getElementById("input-item")
const addBotão = document.getElementById("adicionar-item")
const listaDeCompra = document.getElementById("lista-de-compras")
let contador = 0;


addBotão.addEventListener("click", (evento) => {
    evento.preventDefault();
    if (inputItem.value === "") {
        alert("Por favor, digite um item.");
        return
    }

    const ItemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");
    const InputCheckbox = document.createElement("input");
    InputCheckbox.type = "checkbox";
    InputCheckbox.id = "checkbox-" + contador++;
    const nomeItem = document.createElement("p");  
    nomeItem.innerText = inputItem.value;

    containerItemDaLista.appendChild(InputCheckbox);
    containerItemDaLista.appendChild(nomeItem);
    ItemDaLista.appendChild(containerItemDaLista);

    const DiaDaSemana = new Date().toLocaleDateString("pt-BR", { weekday: "long" });
    const Data = new Date().toLocaleDateString("pt-BR");
    const hora = new Date().toLocaleTimeString("pt-BR");
    const DataCompleta = `${DiaDaSemana}, (${Data}) às ${hora}`;

    const itemData = document.createElement("p");
    itemData.innerText = DataCompleta;

    ItemDaLista.appendChild(itemData);
    listaDeCompra.appendChild(ItemDaLista);
})