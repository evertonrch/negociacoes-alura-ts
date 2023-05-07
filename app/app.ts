import NegociacaoController from "./controller/negociacaoController.js";



const form = document.querySelector(".form") as HTMLFormElement;
form.addEventListener("submit", (event: Event) => {
    event.preventDefault();

    const negociacaoController = new NegociacaoController();
    negociacaoController.adiciona();
});

