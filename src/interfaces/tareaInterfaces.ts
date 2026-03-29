(()=>{


    interface auto{
        encender:boolean;
        velocidadMaxima:number;
        acelear():void
    }
    interface conducirAuto{
        (auto:auto):void
    }

    // Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil:conducirAuto = ( auto:auto):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}


const batimovil:auto = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales
interface guson{
    reir?:boolean;
    comer?:boolean;
    llorar?:boolean;
}

const guason:guson = {
  reir: true,
  comer:true,
  llorar:false
}
interface gusa{
    (guason:guson):void
}

const reir:gusa = ( guason ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


interface gotica{
    (ciudadanos:string[]):number
}

// Cree una interfaz para la siguiente funcion

const ciudadGotica:gotica = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}


interface claseObligada{
    nombre:string;
    edad:number;
    sexo:string;
    estadoCivil:string;
    imprimirBio():void;
}
// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements claseObligada{
    constructor(
        public nombre:string,
        public edad:number,
        public sexo:string,
        public estadoCivil:string,
    ){}
    // imprimirBio=():void => {
    //     console.log('SOftCONTROl')
    // }
    imprimirBio(): void {
        console.log('No imprimo nada')
    }
}

})()