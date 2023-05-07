import Negociacao from "../model/negociacao.js";
import NegociacaoService from "../services/negociacaoService.js";
import NegociacaoView from "../view/negociacaoView.js";

export default class NegociacaoController {

    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacaoService = new NegociacaoService();
    private negociacaoView = new NegociacaoView("#negociacao-view");

    constructor() {
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacaoView.update(this.negociacaoService);
    }

    adiciona(): void {
        const negociacao = this.criaNegociacao();
        // negociacao.data.setDate(10);
        this.negociacaoService.adiciona(negociacao);
        this.negociacaoView.update(this.negociacaoService);        
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