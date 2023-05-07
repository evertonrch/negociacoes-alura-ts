export default class MensagemView {

    private element: HTMLElement;

    constructor(seletor: string) {
        this.element = document.querySelector(seletor);
    }

    template(msg: string): string {
        return `
            <p class="alert alert-success col-6 offset-3">${msg}</p>
        `;
    }

    update(msg: string): void {
        this.element.innerHTML = this.template(msg);
    }
}