export class Person {
    
    private _name:string;
    private _birthDate: Date;
    private _job: string;

    constructor(name, birthDate, job) {
        this._name = name;
        this._birthDate = birthDate;
        this._job = job;
    }

    public get name() {
        return this._name;
    }

    public get birthDate() {
       return this._birthDate;
    }

    public get job(): string {
        return this._job;
    }

    public get age(): number {
        return this.calcAge();
    }

    private calcAge(): number {
        const tmpDate = this._birthDate.getFullYear();
        return new Date().getFullYear() - tmpDate;
    }
}