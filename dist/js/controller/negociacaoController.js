import Negociacao from "../model/negociacao.js";
import NegociacaoService from "../services/negociacaoService.js";
import MensagemView from "../view/mensagemView.js";
import NegociacaoView from "../view/negociacaoView.js";
export default class NegociacaoController {
    constructor() {
        this.negociacaoService = new NegociacaoService();
        this.negociacaoView = new NegociacaoView("#negociacao-view");
        this.mensagemView = new MensagemView("#mensagem-view");
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacaoView.update(this.negociacaoService);
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        // negociacao.data.setDate(10);
        if (negociacao.data.getDay() > 0 && negociacao.data.getDay() < 6) {
            this.negociacaoService.adiciona(negociacao);
            this.atualizaView();
            this.cleanUp();
        }
        else {
            this.mensagemView.update(`Negociações somente em dias válidos (${negociacao.data.getDay()})`);
        }
    }
    criaNegociacao() {
        const data = new Date(this.inputData.value.replace(/-/g, ','));
        return new Negociacao(data, +this.inputQuantidade.value, +this.inputValor.value);
    }
    cleanUp() {
        this.inputData.value = this.inputQuantidade.value = this.inputValor.value = '';
        this.inputData.focus();
    }
    atualizaView() {
        this.negociacaoView.update(this.negociacaoService);
        this.mensagemView.update("Negociação realizada com sucesso!");
    }
}
