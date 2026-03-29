(()=>{
interface Xmens{
    name:string;
    realName:string;
    mutantPower(id:number):string

}

interface azukar{
    age:number;
}

class Muntant implements Xmens, azukar{
    
    constructor(
        public age:number,
        public name:string,
        public realName:string
    ){}
    public mutantPower(id: number): string {
        return this.name
    }
}



})()