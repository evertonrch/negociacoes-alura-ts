import Negociacao from "../model/negociacao.js";

export default class NegociacaoService {

    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }

    // Sugar syntax
    listar(): readonly Negociacao[] {
        return this.negociacoes;
    }

}