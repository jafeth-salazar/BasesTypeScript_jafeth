(()=>{

    type AvengersExtremos = {

        name:string,
        weapon:string,
    }
    const iroman:AvengersExtremos ={
        name:'Iroman',
        weapon:'Traje',
    }
    const thor:AvengersExtremos ={
        name:'thor',
        weapon:'martillo',
    }
    const cap:AvengersExtremos ={
        name:'cap',
        weapon:'escudo',
    }
    const avengers = [iroman, thor,cap]


    for (const i of avengers) {
        console.log(i.name);
    }

//     🟢 Ejercicio 1 – Mostrar armas
// Usando el mismo arreglo avengers:
// Objetivo:
// Mostrar en consola solo las armas.
// Salida esperada (ejemplo):
// Traje
// martillo
// escudo

for (const element of avengers) {
    console.log(element.weapon)
}

// 🟢 Ejercicio 2 – Mensaje personalizado
// Usando for...of:
// Objetivo:
// Mostrar un mensaje por cada vengador con este formato:
// Thor usa martillo
// 💡 Usá name y weapon.
for (const element of avengers) {
    console.log(`${element.name} usa ${element.weapon}`)
}


// 🟡 Ejercicio 3 – Contador manual
// Objetivo:
// Contar cuántos vengadores hay sin usar length.
// Pista:
// Usá una variable contador
// Incrementala dentro del for...of
let contador:number = 0
for (const element of avengers) {
    contador++
    // console.log(`Hay ${contador} vengadores`)
}
console.log(`Hay ${contador} vengadores`)



// 🟡 Ejercicio 4 – Filtrar por condición
// Objetivo:
// Mostrar solo los vengadores cuya arma NO sea "escudo".
// Ejemplo de salida:
// Iroman
// thor

//Ha que soy muy bueno chagpt?
for (const element of avengers.filter(shild=> shild.weapon!= 'escudo')) {
    console.log(element.name)
}

// 🟡 Ejercicio 5 – Crear un nuevo arreglo
// Objetivo:
// Crear un arreglo nuevo llamado weapons que contenga solo las armas.
// Resultado esperado:
// ['Traje', 'martillo', 'escudo']
// ⚠️ No usar map, solo for...of.

// const weapons:string[]= avengers.map(weapons => weapons.weapon);
// for (const element of weapons) {
//     console.log(element);
// }
// for (const element of avengers) {
//     const nuevoWeapons:string=element.weapon
   
//     return nuevoWeapons
    
// }

// 🔵 Ejercicio 6 – Buscar un elemento
// Objetivo:
// Buscar si existe un vengador con el nombre "thor".
// Si existe:
// Thor encontrado
// Si no:
// Thor no encontrado

for (const element of avengers) {
    if (element.name === 'thor') {
        console.log(`Encontrado`)
    }else{
        console.log(`No Encontrado`)
    }
}

// 🔵 Ejercicio 7 – for...of con strings
// Objetivo:
// Usar for...of para recorrer el string:
// const hero = 'Iroman'
// Mostrar cada letra en una línea.


const hero:string ='IROMAN'
for (const element of hero) {
    console.log(element)
}


let encontrado:boolean = false
for (const element of avengers) {
    if (element.name==='thor') {
        encontrado = true;
        break
    }
}
if (encontrado) {
    console.log('thor encontrado')
}else{
    console.log('thor No encontrado')
}
})()