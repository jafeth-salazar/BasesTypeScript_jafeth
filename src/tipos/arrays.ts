(() => {
    //const numbers:(string | number)[] = [1,2,4,5,'33',5,6,7,8,22];
    const villians: string[] = ['canserbero', 'Tempo', 'willie Colon', 'Antiguo Compadre']
    villians.forEach(v => console.log(v.toLocaleUpperCase()));

    const heroes: string[] = ['batman', 'spiderman', 'ironman'];
    heroes.forEach(v => v.toLocaleUpperCase())
    //const uppecaseheroes: string[]= (heroes.map(v => v.toUpperCase()));
    heroes.map(v => console.log(v.toUpperCase()));
    const numbers: number[] = [1, 5, 12, 3, 8, 20];
    numbers.filter(n => n > 10).forEach(n => console.log(n));
    // console.log( numbers.filter(n => (n>10)));

    const pokemons: string[] = ['Pikachu', 'Charmander', 'Bulbasaur'];
    pokemons.forEach(Pokemon => console.log({ Pokemon }));
    const precios: number[] = [10, 25, 40, 15];
    // precios.reduce(p => p++)
    const total = precios.reduce((total, p) => total + p, 0);
    console.log(total + 'hola'); // 90

    interface Venta {
        producto: string;
        precio: number;
    }


    const ventas:Venta[] = [
        { producto: 'Camisa', precio: 25 },
        { producto: 'Pantalón', precio: 40 },
        { producto: 'Zapatos', precio: 60 },
        { producto: 'Gorra', precio: 15 }
    ];

    const totalVentas: number= ventas.reduce((totalVentas,v)=>totalVentas + v.precio,0);
    const promedio:number = totalVentas/ventas.length;
    console.log(totalVentas);
    console.log('El promedio es '+promedio);
    
    const masCaro:Venta = ventas.reduce((mayor,actual)=> {
        return actual.precio > mayor.precio ? actual:mayor;
    });
  console.log(masCaro)

   interface Producto {
        nombre: string;
        precio: number;
        cantidad: number;
    }

    const productos: Producto[] = [
        { nombre: 'Mouse', precio: 15, cantidad: 8 },
        { nombre: 'Teclado', precio: 30, cantidad: 5 },
        { nombre: 'Monitor', precio: 120, cantidad: 3 },
        { nombre: 'USB', precio: 10, cantidad: 20 }
    ];
// Ejercicio: Calcular el inventario total y encontrar el producto más barato

// Tienes una lista de productos con su nombre, precio y cantidad en inventario.
// Usa reduce() para obtener:

// 💰 El valor total del inventario (precio × cantidad de cada producto).

// 🧾 El producto más barato.
const masBarato:Producto =productos.reduce((masBarato,actual)=>actual.precio>masBarato.precio? masBarato:actual);
console.log(masBarato)

const totalInve:number = productos.reduce((total,p)=> total + (p.precio * p.cantidad),0)
console.log(totalInve);

// Crear un nuevo array solo con los números pares.

// Crear otro array con los cuadrados de esos números pares.

// Imprimir ambos resultados en consola.
const numeross: number[] = [1, 4, 7, 10, 13, 16, 19];
const numerosPares:number[] = numeross.filter(n=> n % 2 === 0)
console.log(numerosPares)

const numerosDobles:number[]= numeross.map(n=> n * 2)
console.log(numerosDobles)

// Crear un nuevo array con solo los nombres que empiecen con la letra "l" o "L".

// Crear otro array con todos los nombres en mayúsculas.

// Imprimir ambos resultados en consola.
const nombres: string[] = ['ana', 'Luis', 'marta', 'Pedro', 'lucas', 'sofia'];


// const nombresiL:string[]= nombres.filter(n=> n[0]==='l'||n[0]==='L' )
// console.log(nombresiL);

const pruebaN:string[]= nombres.filter(n=> n.toUpperCase().startsWith('L'))

const nombresMays:string[]=nombres.map(n=> n.toUpperCase())
console.log(nombresMays);


// Usar .map() para crear un nuevo array donde cada estudiante tenga su promedio agregado, así:

// { nombre: 'Ana', promedio: 90 }


// Usar .filter() para obtener solo los estudiantes aprobados (promedio >= 70).

// Imprimir ambos resultados:

// El array con todos los promedios.

// El array con los aprobados.

interface estudiantes{
    nombre:string,
    notas:number[]
}

interface EstudianteConPromedio {
  nombre: string;
  promedio: number;
}


const estudiantes:estudiantes[] = [
  { nombre: 'Ana', notas: [80, 90, 100] },
  { nombre: 'Luis', notas: [60, 70, 65] },
  { nombre: 'Marta', notas: [95, 85, 92] },
  { nombre: 'Pedro', notas: [50, 55, 58] }
];
// const promedioAgregado:any =estudiantes.map(total=>total.notas.reduce((t,a)=>t+a,0))
// console.log(promedioAgregado)
const promedioestudiante:EstudianteConPromedio[] = estudiantes.map(pr => {
    const suma:number =pr.notas.reduce((total,actual)=>total+actual,0)
    const promedio:number = suma/pr.notas.length
    return {nombre: pr.nombre,promedio}
})
console.log(promedioestudiante)
const estudiantesAprobados:EstudianteConPromedio[] =promedioestudiante.filter(n=> n.promedio >=70)
console.log(estudiantesAprobados)


// Ejercicio nuevo:

// Queremos trabajar con productos de una tienda.
// Cada producto tiene:

// nombre

// precio

// stock (cantidad disponible)

// Queremos:

// Crear un nuevo arreglo con el precio con descuento (10% menos).
// → Ejemplo: { nombre: 'Teclado', precioConDescuento: 27000 }

// Obtener solo los productos que tengan stock mayor a 0 (es decir, los disponibles).

// Imprimir ambos resultados.
interface productosNuevos{
    nombre:string,
    precio:number,
    stock:number,
}

interface productoDESCUENTADO{
    nombre: string,
    precioConDescuento:number
}

const productosNuevos:productosNuevos[]=[
    {nombre:'Cigarretes', precio:100,stock:40},
    {nombre:'Alcohol', precio:45,stock:22},
    {nombre:'cohete', precio:88,stock:52},
    {nombre:'Yomero', precio:199,stock:10},
    {nombre:'goku figura', precio:239,stock:0},
]
const productoNuevosDes:productoDESCUENTADO[]=productosNuevos.map(n=>{
    const precioConDescuento:number =n.precio * (1 - 0.1)
    return{nombre:n.nombre,precioConDescuento}
})
console.log(productoNuevosDes);
const DisponibilidadProducto:productosNuevos[]=productosNuevos.filter(n=> n.stock>0)
console.log(DisponibilidadProducto);


// 🧾 Ejercicio: Clientes y sus compras

// Tienes una lista de clientes, cada uno con su nombre y una lista de montos de compras.

// Objetivos:

// Usar .map() para crear un nuevo arreglo con el total gastado por cada cliente.
// 👉 Ejemplo: { nombre: 'Carlos', total: 150 }

// Usar .filter() para obtener solo los clientes que gastaron más de 100.

// Imprimir ambos resultados.

interface Clientes{
    nombre:string,
    montos:number[]
}
interface ClienteGasto{
    nombre:string,
    total:number,
}

const listaClientes:Clientes[]= [
    {nombre:'Fiorella',montos:[80,44,55,88]},
    {nombre:'Matias',montos:[80,44,55,88]},
    {nombre:'Jafeth',montos:[80,44,55,88]},
    {nombre:'Yoslyn',montos:[10,10,10,10]},
]

const totalGastado:ClienteGasto[]= listaClientes.map(n=>{
    const total:number = n.montos.reduce((total,actual)=>total+actual,0)
    return{nombre:n.nombre,total}
})
const clientesGastones:ClienteGasto[]=totalGastado.filter(n=> n.total>=100)
console.log(clientesGastones)


})()