import Negociacao from "../model/negociacao.js";
import NegociacaoService from "../services/negociacaoService.js";
import MensagemView from "../view/mensagemView.js";
import NegociacaoView from "../view/negociacaoView.js";

export default class NegociacaoController {

    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacaoService = new NegociacaoService();
    private negociacaoView = new NegociacaoView("#negociacao-view");
    private mensagemView = new MensagemView("#mensagem-view");

    public constructor() {
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacaoView.update(this.negociacaoService);
    }

    public adiciona(): void {
        const negociacao = this.criaNegociacao();
        // negociacao.data.setDate(10);
        if(negociacao.data.getDay() > 0 && negociacao.data.getDay() < 6) {
            this.negociacaoService.adiciona(negociacao);
            this.atualizaView();
            this.cleanUp();
        } else {
            this.mensagemView.update(`Negociações somente em dias válidos (${negociacao.data.getDay()})`);
        }        
    }

    public criaNegociacao(): Negociacao {
        const data = new Date(this.inputData.value.replace(/-/g, ','));      
        return new Negociacao(data, +this.inputQuantidade.value, +this.inputValor.value);
    }

    private cleanUp(): void {
        this.inputData.value = this.inputQuantidade.value = this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negociacaoView.update(this.negociacaoService);     
        this.mensagemView.update("Negociação realizada com sucesso!"); 
    }
}