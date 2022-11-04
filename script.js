// Creazione html
var head = document.getElementById("header");
var titolo = document.createElement("h1");
var bottone = document.createElement("button");
var contenitore = document.getElementById("container");
titolo.innerHTML = "Campo Minato";
bottone.innerHTML = "Play";
bottone.classList.add("play");
head.appendChild(titolo);
head.appendChild(bottone);

// Aggiunge evenet listener al bottone
bottone.addEventListener("click", () =>{
    var quadrato = document.createElement("div");
    quadrato.classList.add("quadrato");
    contenitore.appendChild(quadrato);
    for (let index = 1; index < 101; index++) {
        const element = array[index];
    }
    bottone.disabled = true;
})