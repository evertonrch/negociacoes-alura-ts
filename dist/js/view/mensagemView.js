export default class MensagemView {
    constructor(seletor) {
        this.element = document.querySelector(seletor);
    }
    template(msg) {
        return `
            <p class="alert alert-success col-6 offset-3">${msg}</p>
        `;
    }
    update(msg) {
        this.element.innerHTML = this.template(msg);
    }
}
