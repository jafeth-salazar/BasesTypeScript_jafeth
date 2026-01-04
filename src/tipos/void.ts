(()=>{

function callBatman(): void{
console.log(`Esto no esta vacio o si?`)
}
const batman:void =callBatman();
console.log(batman);

// ✅ Ejercicio 1 — Crear una función con void
// Crea una función mostrarMensaje que reciba un texto y lo imprima en consola.
// Retorno: void.
// Objetivo: practicar retorno vacío.
function mostrarMensaje(mensaje:string):void{
console.log(mensaje);
}
mostrarMensaje(`hola p`)
const ejercicio1:void = mostrarMensaje(`Hola prueba segunda`);
// esto imprime undefined porque la variable esta undefined y el mostrar mensaje imprime el mensaje
console.log(ejercicio1);

// Crea una función:
// function agregarHeroe(lista: string[], heroe: string): void
// La función debe agregar el héroe al arreglo, pero no retornar nada.
// Objetivo: usar void cuando la función solo produce efectos.
function agregarHeroe(lista: string[], heroe: string): void{
lista.push(heroe);
for (const element of lista) {
    console.log(element);
}
}
const listaHeroes:string[]= ['Goku','Broli','Vegeta']
//agregarHeroe(listaHeroes,'Matias')
console.log(agregarHeroe(listaHeroes,'nada'))


const Persona:persona={nombre:'Jafeth',edad:22};
function cumplirAnios(persona:persona):void{
    persona.edad++
    console.log(persona)

}
cumplirAnios(Persona);
const onClick = (evento: string): void => {
    console.log(`Evento recibido: ${evento}`);
};
onClick('Nadar')

// Entrada: "Aaron"
// Salida esperada: "Hola Aaron!"

const saludo = (saludo:string):string =>{
    console.log(`Hola ${saludo}`)
    return saludo
}
saludo('Aaron pro en programar')

const suma = (a:number, b:number):number => {
    console.log(`La suma es : ${a+b}`)
    return a + b
}
suma(22,11);

// Entrada: ["hola", "typescript", "goku", "broli"]
// Salida: ["typescript"]
const arregloStrings:string[]= ["hola", "typescript", "goku", "broli"]

const heroesIntermedio = (lista:string[]):string[] =>{
    const salida:string[] =lista.filter(f => f.length>=5)
    for (const element of salida) {
        console.log(`Estos son los que son mayores a 5 letras: ${element}`)
        
    }
    return salida
}
heroesIntermedio(arregloStrings);
// 5️⃣ Función flecha con void
// Crea una función flecha que reciba un mensaje y lo muestre en consola, pero no retorne nada.
const mensaje =(mensaje:string):void => {
    console.log(mensaje)
}
mensaje('Este ejercicio intermedio me parecio mas facil que los pasados Hola Chagpt que tal voy?')


//6️⃣ Función flecha que reciba un número y devuelva "par" o "impar"
// Entrada: 7 → "impar"
// Entrada: 4 → "par"

const parImpar =(numero:number):string =>{
   const calculo:string = numero % 2 === 0 ? 'par':'impar'
   console.log(`El numero es: ${calculo}`)
    return `El numero es: ${calculo}`
}
parImpar(3)

//7️⃣ Función flecha que reciba un array de héroes y devuelva solo los que comienzan con la letra “G”
// Entrada: ["Goku","Vegeta","Gohan","Broly"]
// Salida: ["Goku","Gohan"]
const startG =(heroes:string[]):string[]=>{
    const letraG:string[] = heroes.filter(h=> h.toLocaleUpperCase().startsWith('G'))
    letraG.forEach(l=> console.log(`Los heroes que empiezan con G son: ${l}`))
    return letraG;
}
const heroes:string[]= ["Goku","Vegeta","Gohan","Broly"]
startG(heroes);
interface persona{
    nombre:string,
    edad:number,
}

// 8️⃣ Función flecha que reciba un objeto persona y retorne una nueva persona con +1 año (sin mutarlo)

// Ejemplo:
// Entrada: { nombre: "Luis", edad: 20 }
// Salida: { nombre: "Luis", edad: 21 }
// const personaAno =(persona:persona):persona =>{
//     persona.edad++
//     console.log(persona)
//     return persona;
// }
// personaAno({ nombre: "Luis", edad: 20 });
const personaNomutada = (persona:persona):persona =>{
    const personaNueva:persona = {...persona, edad:persona.edad+1};
    console.log(personaNueva);
    return personaNueva;
}
personaNomutada({ nombre: "Luis", edad: 20 });



})()