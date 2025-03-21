import Negociacao from "../model/negociacao.js";

export default class NegociacaoService {

    private negociacoes: Array<Negociacao> = [];

    public adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }

    public listar(): readonly Negociacao[] {
        return this.negociacoes;
    }
}