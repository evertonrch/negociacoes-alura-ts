export default abstract class View<T> {

    protected elemento: HTMLElement;
    private escapar = false;

    constructor(seletor: string, escapar?: boolean) {
        const elemento = document.querySelector(seletor);
        console.log(elemento);        
        if(elemento) {
            this.elemento = <HTMLInputElement> elemento;
        }
        else {
            throw new Error(`Seletor não existe (${seletor})`)
        }    

        if(escapar) 
            this.escapar = escapar;
        
    }

    public update(model: T): void {
        let template = this.template(model);
        if(this.escapar) 
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        
        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string;
} 