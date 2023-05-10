import { DiasDaSemana } from "../model/enums/diasDaSemana.js";
import Negociacao from "../model/negociacao.js";
import NegociacaoService from "../services/negociacaoService.js";
import MensagemView from "../view/mensagemView.js";
import NegociacaoView from "../view/negociacaoView.js";

export default class NegociacaoController {

    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacaoService = new NegociacaoService();
    private negociacaoView = new NegociacaoView("#negociacao-view", true);
    private mensagemView = new MensagemView("#mensagem-view");

    public constructor() {
        this.inputData = document.querySelector("#data") as HTMLInputElement;
        this.inputQuantidade = document.querySelector("#quantidade") as HTMLInputElement;
        this.inputValor = document.querySelector("#valor") as HTMLInputElement;
        this.negociacaoView.update(this.negociacaoService);
    }

    public adiciona(): void {
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value);        
        // negociacao.data.setDate(10);
        if(!this.isDiaUtil(negociacao.data)) {           
            this.mensagemView.update(`Negociações somente em dias válidos`);
            return; // Early return
        } 
        this.negociacaoService.adiciona(negociacao);
        this.atualizaView();
        this.cleanUp();       
    }

    private cleanUp(): void {
        this.inputData.value = this.inputQuantidade.value = this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negociacaoView.update(this.negociacaoService);     
        this.mensagemView.update("Negociação realizada com sucesso!"); 
    }

    private isDiaUtil(data: Date): boolean {       
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }
}