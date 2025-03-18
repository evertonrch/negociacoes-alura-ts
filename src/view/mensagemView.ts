import View from "./view.js";

export default class MensagemView extends View<string> {

    protected template(msg: string): string {
        return `
            <p class="alert alert-success col-6 offset-3">${msg}</p>
        `;
    }
}