export default class NegociacaoService {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // Sugar syntax
    listar() {
        return this.negociacoes;
    }
}
