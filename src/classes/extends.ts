(()=>{

class Avenger{

    constructor(
        public name:string,
        public realname:string,
        
    ){
        console.log('Constructor Avenger futbol')
    }
    protected getFullname(){
        return `${this.name} ${this.realname}`
    }
}
class Xmen extends Avenger{
    constructor(
        name:string,
        realname:string,
        public isMutant:boolean
    ){
        super(name,realname)
        console.log('Constructor LLamado  XMEN')
    }
    get fullname(){
        return `${this.name}- ${this.realname}`
    }

    set fullname(name:string){
        if(name.length <= 3) throw new Error('El nombre tiene que tener mas de 3 caracteres bruto');
        
        this.name = name;
    }
    getFullnameDesdeXmen(){
        console.log(super.getFullname)
    }

}
const wolverine = new Xmen('Wolverine','Logan',true)
// wolverine.fullname ='Go32'
// console.log(wolverine.fullname);

})()