const agregarElemento = (texto, id) => {
    let ul = document.getElementById(id);
    let li = document.createElement("li");
    li.textContent = texto;
    ul.appendChild(li);
};

const agregarAmigo = () => {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); 

    if (nombre) {
        agregarElemento(nombre, "listaAmigos");
        input.value = "";
    } else {
        alert("Ingrese un nombre válido.");
    }
};

const limpiarLista = (id) => {
    document.getElementById(id).innerHTML = "";
};

const sortearAmigo = () => {
    let ul = document.getElementById("listaAmigos");
    let items = ul.getElementsByTagName("li");
    let ulResult = document.getElementById("resultado");

    if (items.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    limpiarLista("resultado");

    let randomIndex = Math.floor(Math.random() * items.length);
    let amigoSeleccionado = items[randomIndex].textContent;

    agregarElemento(`🎉 El amigo secreto es: ${amigoSeleccionado}`, "resultado");
};
