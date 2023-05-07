import NegociacaoController from "./controller/negociacaoController.js";
const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const negociacaoController = new NegociacaoController();
    negociacaoController.adiciona();
});
