(()=>{
// Funciones Básicas
function sumar( a:number, b:number ):number{
  return a + b;
}

const contar = ( heroes:string[] ):number => {
  return heroes.length;
}
const superHeroes:string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);

//Parametros por defecto
const llamarBatman = ( llamar:boolean ):void => {
  if( llamar ){
    console.log("Batiseñal activada");
  }
}

llamarBatman(true);

// Rest?
const unirheroes = ( personas:string, ...restPersona:string[] ):string => {
  return `${personas}, ${restPersona.join('')}`;
}


const noHaceNada = (numero: number, texto: string, booleano: boolean, arreglo: string[]) => {}

let noHaceNadaTampoco: (a: number, t: string, b: boolean, r: string[]) => void;

noHaceNadaTampoco = noHaceNada;


function saludar(nombre: string = "Visitante"): void {
  console.log(`Hola, ${nombre}!`);
}

// Llamada sin enviar el parámetro
saludar(); // Salida: Hola, Visitante!

// Llamada enviando el parámetro
saludar("Carlos"); // Salida: Hola, Carlos!


})()