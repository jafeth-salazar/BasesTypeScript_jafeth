(()=>{
const a: boolean = false
console.log(a)
let isSuperma: boolean = true;
let isBatman: boolean = false;
console.log({isSuperma})

isSuperma = true && false
isSuperma = (isBatman) ? true: false
})();
(()=>{
const edad: number = 15;
const tieneEntrada: boolean = false;

const puedeEntrar: boolean =(edad>=18 || tieneEntrada)? true: false
console.log(puedeEntrar);



// 🧠 Ejercicio: Verificación de usuarios activos
// Tienes una lista de usuarios en una aplicación.
// Cada usuario tiene:
// nombre (string)
// activo (boolean)
// edad (number)
// Objetivos:
// Usar .filter() para obtener solo los usuarios activos (activo === true).
// Usar .some() para verificar si hay al menos un usuario menor de edad (edad < 18).
// Usar .every() para verificar si todos los usuarios activos son mayores de edad (edad >= 18).
// Imprimir:
// La lista de usuarios activos.
// El resultado de las dos verificaciones (some y every).
// 💡 Pista:
// .some() devuelve true si al menos uno cumple la condición.
// .every() devuelve true si todos la cumplen.
interface Usuarios{
    nombre:string,
    activo:boolean,
    edad:number
}
const UsuariosLista: Usuarios[]=[
    {nombre:'Jafeth',activo:true,edad:44},
    {nombre:'Aaron',activo:false,edad:77},
    {nombre:'David',activo:false,edad:18},
    {nombre:'Roneil',activo:true,edad:21},
]
const usuariosActivos:Usuarios[]= UsuariosLista.filter(n=> n.activo)
const menores:boolean=UsuariosLista.some(n=>n.edad<18)
const mayores:boolean =UsuariosLista.every(n=> n.edad>=18)
console.log(menores)
console.log(mayores)
console.log(usuariosActivos)


})()