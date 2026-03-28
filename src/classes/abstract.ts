(()=>{

   abstract class Mutante{

        constructor(
            public name:string,
            public realname:string,

        ){}
    }

    class Xmen extends Mutante{

        salvarMundo(){
            return `Salvamos el mundo`
        }
    }
    class villians extends Mutante{
        destruirMundo(){
            return `Destruimos el mundo`
        }
    }
const wolverine:Xmen = new Xmen('Goku','LeGana')
const magneto:villians = new villians('Charli','Charli')
console.log(wolverine.salvarMundo());
console.log(magneto.destruirMundo());

const printName = (character:Mutante)=>{
console.log(character.realname);

}

})()