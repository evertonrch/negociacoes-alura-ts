import Negociacao from "../model/negociacao.js";
import NegociacaoService from "../services/negociacaoService.js";
export default class NegociacaoController {
    constructor() {
        this.negociacaoService = new NegociacaoService();
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        // negociacao.data.setDate(10);
        this.negociacaoService.adiciona(negociacao);
        console.log(this.negociacaoService.listar());
        this.cleanUp();
    }
    criaNegociacao() {
        const data = new Date(this.inputData.value.replace(/-/g, ','));
        return new Negociacao(data, +this.inputQuantidade.value, +this.inputValor.value);
    }
    cleanUp() {
        this.inputData.value = this.inputQuantidade.value = this.inputValor.value = '';
        this.inputData.focus();
    }
}
