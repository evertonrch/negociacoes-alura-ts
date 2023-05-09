export default class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        const elemento = document.querySelector(seletor);
        if (this.elemento)
            this.elemento = elemento;
        else
            throw new Error(`Seletor não existe (${seletor})`);
        this.escapar = escapar;
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar)
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        this.elemento.innerHTML = template;
    }
}
