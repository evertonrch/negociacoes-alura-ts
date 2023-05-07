import NegociacaoService from "../services/negociacaoService";

export default abstract class View {

    protected elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    abstract update(msg: string | NegociacaoService): void 
}