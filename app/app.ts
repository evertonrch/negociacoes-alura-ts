import {Person} from './model/person.js';

function isSomething(name: any): boolean {
    return false;
}

function testObj(person:{name; job?: undefined}) {
    console.log("ssdf");
    
    if(!person.job){
        console.log("Job e undefined");
    }
    console.log(`${person.name} e ${person.job}`);
}
const person = {name: "Everton"};
testObj(person);

function unionTypes(x: string[] | string | number): number {
    if(typeof x === 'string') {
        console.log(x.concat(" something"));
    }else if(typeof x === 'number') {
        console.log(x.toFixed(2));
    }else {
        return x.length;
    }
}

type Tax = { brazilianTax: number};
function taxs(z: Tax): Tax {
    
    return {
        brazilianTax: 23
    }
}

interface Department {
    name: string,
    sector: string,
    employess: number,
    some: Date
}

function departmentImpl(dep: Department) : void{};

const p = new Person("Everton", new Date("1997-06-03"), "Programmer");
console.log(p);
console.log(p.age);

