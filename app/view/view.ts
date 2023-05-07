import NegociacaoService from "../services/negociacaoService";

export default abstract class View<T> {

    protected elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    update(model: T): void {
        this.elemento.innerHTML = this.template(model);
    }

    abstract template(model: T): string;
} 