import Negociacao from "../model/negociacao.js";
import NegociacaoService from "../services/negociacaoService.js";

export default class NegociacaoController {

    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacaoService = new NegociacaoService();

    constructor() {
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }

    adiciona(): void {
        const negociacao = this.criaNegociacao();
        // negociacao.data.setDate(10);
        this.negociacaoService.adiciona(negociacao);
        console.log(this.negociacaoService.listar());        
        this.cleanUp();
    }

    criaNegociacao(): Negociacao {
        const data = new Date(this.inputData.value.replace(/-/g, ','));
        return new Negociacao(data, +this.inputQuantidade.value, +this.inputValor.value);
    }

    cleanUp(): void {
        this.inputData.value = this.inputQuantidade.value = this.inputValor.value = '';
        this.inputData.focus();
    }
}