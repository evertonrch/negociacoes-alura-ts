import NegociacaoController from "./controller/negociacaoController.js";


const negociacaoController = new NegociacaoController();
const form = document.querySelector(".form");
if(form) {
    form.addEventListener("submit", (event: Event) => {
        event.preventDefault();
        negociacaoController.adiciona();
    });
} else {
    throw new Error("Aplicação falhou");
}


