(()=>{

    type heroes={
        nick:string,
        Pedri:string,
        vision:string,
        activo:boolean,
        poder:number,
    }
const avengers:heroes ={
    nick:'Samuel eto',
    Pedri:'Ramon Baldes',
    vision:'Goukul',
    activo:true,
    poder:15000,

}
const {poder,nick } = avengers
console.log(poder.toFixed(3), nick.toUpperCase());

const printAvengers =({nick, ...resto}:heroes):void=>{


    console.log(nick);
    console.log(resto)
}
printAvengers(avengers)


// Ejercicio 1: Desestructuración básica
// Crea un type llamado Producto con estas propiedades:
// nombre (string)
// precio (number)
// disponible (boolean)
// Luego:
// Crea un objeto con ese tipo
// Desestructura nombre y precio
// Imprime el nombre en mayúsculas y el precio con 2 decimales

type Producto={
    nombre:string,
    precio:number,
    disponible:boolean,
    descuento?:number
}
const ComputadoraPremiun:Producto={
    nombre:'AsusVivok',
    precio: 1000000,
    disponible:true,
    //descuento:11000
}
// const {nombre,precio}=ComputadoraPremiun;
// console.log(nombre.toUpperCase(),precio.toFixed(2))


// Ejercicio 2: Renombrar variables al desestructurar
// Usando el mismo objeto Producto:
// Desestructura precio pero renómbralo a costo
// Usa costo en un console)
const {precio:costo}= ComputadoraPremiun
console.log(costo)


// 🟢 Ejercicio 3: Rest operator (...rest)
// Desestructura el objeto Producto de forma que:
// Extraigas nombre
// El resto de propiedades queden en un objeto llamado resto
// Imprime:
// nombre
// resto
const {nombre,...resto }=ComputadoraPremiun
console.log(nombre)
console.log(resto)



// Ejercicio 4: Desestructuración en parámetros de función
// Crea una función que:
// Reciba un Producto
// Desestructure nombre y precio directamente en los parámetros
// Imprima ambos valores
function producto({nombre,precio}:Producto):void{
console.log(nombre,precio)
}
producto(ComputadoraPremiun);





// 🟢 Ejercicio 5: Propiedad opcional
// Modifica el type Producto para que tenga una propiedad opcional:
// descuento?: number
// Luego:
// Desestructura descuento
// Imprime el descuento o un mensaje si no existe
const {descuento}=ComputadoraPremiun
descuento? console.log(descuento):console.log('no existe')


const avengersArr:string[]= ['Goku','Nospin','Junior']
const [,gok,]=avengersArr;
console.log(gok);
})()