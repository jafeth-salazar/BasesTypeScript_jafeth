(()=>{
    const hero:[string,number,boolean] = ['Dr Strange',100,true];
     console.log(hero)
    hero[0]= 'Goku le gana'
    hero[1]= 22
    hero[2]= false
    console.log(hero)


//     ⚔️ Ejercicios de práctica (de fácil a intermedio)
// 🥉 Nivel 1 — Básico

// Crea una tupla llamada coordenada que almacene una posición en 2D:

// Primer valor: x (number)

// Segundo valor: y (number)
// Luego imprime ambas coordenadas.
    const tuplaEjercicio:[number,number]=[33,44]
    console.log('Cordenada x: ',tuplaEjercicio[0])
    console.log('Cordenada y: ',tuplaEjercicio[1])

//     🥈 Nivel 2 — Práctico
// Crea una tupla llamada productoInfo que contenga:
// El nombre del producto (string)
// Su precio (number)
// Si está disponible (boolean)
// Luego crea una función que reciba una tupla de ese tipo y muestre un mensaje como:
// "El producto Mouse cuesta $25 y está disponible".
const productoInfo:[string,number,boolean]=['Mouse',222,false]
function tuplaMensaje([nombre,precio,disponible]:[string,number,boolean]):void{
    const mensaje = disponible? 'Esta Disponible':'No esta disponible'
    console.log(`El producto ${nombre} cuesta $${precio} y ${mensaje}.`);
}
tuplaMensaje(productoInfo)

// 🥇 Nivel 3 — Más desafiante
// Crea un array de tuplas llamado puntuaciones, donde cada tupla contenga:
// Nombre del jugador (string)
// Puntaje (number)
// Usa un bucle o .forEach() para mostrar:
// "Jugador: Ana — Puntaje: 120"

const puntuaciones:[string,number][]= [
    [ 'goku ',22],
    ['Nestor',33],
    ['Gabriel',55],
]
puntuaciones.forEach(pun=> console.log('Jugador:',pun[0],pun[1]))


// ⚔️ Ejercicio: Registro de pedidos
// Tienes un arreglo de tuplas llamado pedidos, donde cada tupla contiene:
// Nombre del cliente (string)
// Monto del pedido (number)
// Estado del pedido ("pendiente" | "enviado" | "entregado")
// 👉 Objetivos:
// Crear el arreglo de tuplas.
// Recorrerlo con .forEach() usando desestructuración.
// Imprimir mensajes como:
// Cliente: Ana — Monto: $120 — Estado: enviado
enum pedidosEstado{
     PENDIENTE = 'Pendiente',
  ENVIADO = 'Enviado',
  ENTREGADO = 'Entregado',
}

const pedidos:[string,number,pedidosEstado][]=[
    ['Jafeth',22,pedidosEstado.PENDIENTE],
    ['Aaron',33,pedidosEstado.ENVIADO],
    ['Matias',44,pedidosEstado.ENTREGADO],
    ['GOKU',55,pedidosEstado.PENDIENTE]
]
//const imprimirPedidos:[string,number,pedidosEstado][]= pedidos.forEach(pr=> console.log(pr[0],pr[1],[2]))
pedidos.forEach(pr=> console.log('Cliente:',pr[0],'Monto: ',pr[1],'Estado: ',pr[2]))


const empleados: [string, number, number][] = [
  ['Ana', 40, 10],
  ['Luis', 35, 12],
  ['Marta', 20, 15],
  ['Pedro', 50, 9],
];
empleados.forEach(([nombre,horas,tarifa])=>{
console.log(`Empleado: ${nombre} Horas: ${horas} Tarifa: ${tarifa}`)
})
const sueldosTotales: [string,number][]= empleados.map(em=>{
    const total:number =em[1]*em[2]
    return [em[0],total]
})
//sueldosTotales.forEach(to=> console.log(`Empleado: ${to[0]} Sueldo total ${to[1]}`))
sueldosTotales.forEach(([nombre,total])=>{
    console.log(`Empleado: ${nombre} Sueldo total: ${total}`)
})


// ⚔️ Ejercicio: Gestor de estudiantes
// 🎯 Objetivo:
// Vas a crear un pequeño sistema que maneje información de estudiantes y sus notas, usando tuplas, arrays, enum y bucles.
// 📋 Instrucciones paso a paso
// Crea un enum llamado EstadoEstudiante con los valores:
// APROBADO
// REPROBADO
// Crea un arreglo de tuplas llamado estudiantes, donde cada tupla contenga:
// Nombre del estudiante (string)
// Nota obtenida (number)
// Estado (EstadoEstudiante)
// Ejemplo:
// const estudiantes: [string, number, EstadoEstudiante][] = [
//   ['Ana', 85, EstadoEstudiante.APROBADO],
//   ['Luis', 45, EstadoEstudiante.REPROBADO],
// ];
// Recorre el arreglo con un for...of e imprime:
// Estudiante: Ana — Nota: 85 — Estado: Aprobado
// Crea una función llamada calcularPromedio que reciba el arreglo y devuelva el promedio de notas.
// Filtra a los estudiantes aprobados y muestra solo sus nombres en consola.
// (Opcional 💪) Crea una nueva lista que muestre el nombre y si tiene derecho a beca:
// Si la nota es mayor o igual a 90, tiene beca.
// Si no, no tiene.
// Ejemplo:
// Ana tiene derecho a beca
// Luis no tiene derecho a beca

enum EstadoEstudiante{
    APROBADO = 'APROBADO',
    REPROBADO='REPROBADO',
}
type estudiante = [string,number,EstadoEstudiante];
const estudiantes:estudiante[]=[
    ['AARON',66,EstadoEstudiante.APROBADO],
    ['MATIAS',99,EstadoEstudiante.REPROBADO],
    ['FIORELLA',44,EstadoEstudiante.APROBADO],
    ['YOSLYN',33,EstadoEstudiante.APROBADO]
]

for (const [nombre,notas,estado] of estudiantes) {
    console.log(`Nombre del estudiante: ${nombre} su nota es: ${notas} y su estado es: ${estado}`)
    // if(notas>=90){
    //     console.log(`Tiene derecho a beca ${nombre}`)
    // }else{console.log(`No tiene derecho a Beca ${nombre}`)}
 const helper:string  = notas >= 90 ? `Tiene derecho a Beca: ${nombre}`:`no tiene derecho a Beca ${nombre}`
 console.log(helper);
}
function calcularPromedioHermanitos(lista:estudiante[]):number{
const total:number= lista.reduce((acumulado,[, nota])=> acumulado +nota,0);
return total/ lista.length
}
const calcularPromedioFN = calcularPromedioHermanitos(estudiantes);
console.log(`El promedio de los estudiantes es ${calcularPromedioFN.toFixed(2)}`)
const aprabadosEstudiantes:estudiante[]=estudiantes.filter(ap=> ap[2]===EstadoEstudiante.APROBADO);
aprabadosEstudiantes.forEach(([nombre,nota,estado])=> console.log(`Tu nombre es: ${nombre} y  tu nota es: ${nota} su estado es: ${estado}`))

// const becados:estudiante[]= estudiantes.filter(([nombre,nota])=> nota>=90);
// becados.forEach(([nombre])=> console.log(nombre))

})()