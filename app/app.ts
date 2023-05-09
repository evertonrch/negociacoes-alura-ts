import NegociacaoController from "./controller/negociacaoController.js";


const negociacaoController = new NegociacaoController();
const form = document.querySelector(".form") as HTMLFormElement;
form.addEventListener("submit", (event: Event) => {
    event.preventDefault();
    negociacaoController.adiciona();
});

