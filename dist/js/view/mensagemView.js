import View from "./view.js";
export default class MensagemView extends View {
    template(msg) {
        return `
            <p class="alert alert-success col-6 offset-3">${msg}</p>
        `;
    }
    update(msg) {
        this.elemento.innerHTML = this.template(msg);
    }
}
