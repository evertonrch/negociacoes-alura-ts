class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        return new Date(this._data.getTime());
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    static criaDe(dataStr, quantidadeStr, valorStr) {
        const data = new Date(dataStr.replace(/-/g, ','));
        return new Negociacao(data, +quantidadeStr, +valorStr);
    }
}
export default Negociacao;
