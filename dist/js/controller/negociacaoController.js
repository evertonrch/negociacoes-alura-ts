import { DiasDaSemana } from "../model/enums/diasDaSemana.js";
import Negociacao from "../model/negociacao.js";
import NegociacaoService from "../services/negociacaoService.js";
import MensagemView from "../view/mensagemView.js";
import NegociacaoView from "../view/negociacaoView.js";
export default class NegociacaoController {
    constructor() {
        this.negociacaoService = new NegociacaoService();
        this.negociacaoView = new NegociacaoView("#negociacao-view", true);
        this.mensagemView = new MensagemView("#mensagem-view");
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacaoView.update(this.negociacaoService);
    }
    adiciona() {
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.isDiaUtil(negociacao.data)) {
            this.mensagemView.update(`Negociações somente em dias válidos`);
            return;
        }
        this.negociacaoService.adiciona(negociacao);
        this.atualizaView();
        this.cleanUp();
    }
    cleanUp() {
        this.inputData.value = this.inputQuantidade.value = this.inputValor.value = '';
        this.inputData.focus();
    }
    atualizaView() {
        this.negociacaoView.update(this.negociacaoService);
        this.mensagemView.update("Negociação realizada com sucesso!");
    }
    isDiaUtil(data) {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }
}
