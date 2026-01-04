(()=>{
console.log('Esta funkando')
//Crea una variable num y usa un operador ternario para mostrar si el número es par o impar.
const num:number= 22;
//num / 2 ? 'Este numero es par':'Este numero es impar'
const pares:string = num % 2  === 0 ? 'Este numero es par':'Este numero es impar'

console.log(pares)
//Crea una variable edad y usa un ternario para mostrar si la persona es mayor o menor de edad.

const edad:number = 13
const edadVerifi:string = edad>18 ? 'Es mayor de edad':'Es menor de edad'
console.log(edadVerifi)

// Dado un número cantidad, usa un ternario para aplicar un descuento:

// Si la cantidad es mayor o igual a 10 → 20% de descuento

// Si no → 5% de descuento
const numeroDes:number =33
const descuentoF:string =numeroDes>=10 ? '20% de descuento':'5% de descuento'
console.log(descuentoF)

const descuentoH:number = numeroDes >=10 ?numeroDes * (1 - 0.2) : numeroDes * (1 - 0.05);
console.log(descuentoH)

// Usa un ternario anidado para clasificar una nota:

// >= 90: Excelente

// >= 70: Aprobado

    // < 70: Reprobado
    const nota: number = 91;
    const evalua: string = nota >= 90 ? 'Execelente' :
                           nota >= 70 ? 'Aprobado' :'reprobado'
                           

console.log(evalua)




})()