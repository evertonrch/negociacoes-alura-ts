class Negociacao {

    public constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number    
        ) {}

    public get data(): Date {
        return new Date(this._data.getTime());
    }

    public get volume(): number {
        return this.quantidade * this.valor;
    }

    public static criaDe(dataStr: string, quantidadeStr: string, valorStr: string): Negociacao {
        const data = new Date(dataStr.replace(/-/g, ','));      
        return new Negociacao(data, +quantidadeStr, +valorStr);
    }
}

export default Negociacao;