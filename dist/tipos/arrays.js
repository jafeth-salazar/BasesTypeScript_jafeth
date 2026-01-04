"use strict";
(() => {
    const villians = ['canserbero', 'Tempo', 'willie Colon', 'Antiguo Compadre'];
    villians.forEach(v => console.log(v.toLocaleUpperCase()));
    const heroes = ['batman', 'spiderman', 'ironman'];
    heroes.forEach(v => v.toLocaleUpperCase());
    heroes.map(v => console.log(v.toUpperCase()));
    const numbers = [1, 5, 12, 3, 8, 20];
    numbers.filter(n => n > 10).forEach(n => console.log(n));
    const pokemons = ['Pikachu', 'Charmander', 'Bulbasaur'];
    pokemons.forEach(Pokemon => console.log({ Pokemon }));
    const precios = [10, 25, 40, 15];
    const total = precios.reduce((total, p) => total + p, 0);
    console.log(total + 'hola');
    const ventas = [
        { producto: 'Camisa', precio: 25 },
        { producto: 'Pantalón', precio: 40 },
        { producto: 'Zapatos', precio: 60 },
        { producto: 'Gorra', precio: 15 }
    ];
    const totalVentas = ventas.reduce((totalVentas, v) => totalVentas + v.precio, 0);
    const promedio = totalVentas / ventas.length;
    console.log(totalVentas);
    console.log('El promedio es ' + promedio);
    const masCaro = ventas.reduce((mayor, actual) => {
        return actual.precio > mayor.precio ? actual : mayor;
    });
    console.log(masCaro);
    const productos = [
        { nombre: 'Mouse', precio: 15, cantidad: 8 },
        { nombre: 'Teclado', precio: 30, cantidad: 5 },
        { nombre: 'Monitor', precio: 120, cantidad: 3 },
        { nombre: 'USB', precio: 10, cantidad: 20 }
    ];
    const masBarato = productos.reduce((masBarato, actual) => actual.precio > masBarato.precio ? masBarato : actual);
    console.log(masBarato);
    const totalInve = productos.reduce((total, p) => total + (p.precio * p.cantidad), 0);
    console.log(totalInve);
    const numeross = [1, 4, 7, 10, 13, 16, 19];
    const numerosPares = numeross.filter(n => n % 2 === 0);
    console.log(numerosPares);
    const numerosDobles = numeross.map(n => n * 2);
    console.log(numerosDobles);
    const nombres = ['ana', 'Luis', 'marta', 'Pedro', 'lucas', 'sofia'];
    const pruebaN = nombres.filter(n => n.toUpperCase().startsWith('L'));
    const nombresMays = nombres.map(n => n.toUpperCase());
    console.log(nombresMays);
    const estudiantes = [
        { nombre: 'Ana', notas: [80, 90, 100] },
        { nombre: 'Luis', notas: [60, 70, 65] },
        { nombre: 'Marta', notas: [95, 85, 92] },
        { nombre: 'Pedro', notas: [50, 55, 58] }
    ];
    const promedioestudiante = estudiantes.map(pr => {
        const suma = pr.notas.reduce((total, actual) => total + actual, 0);
        const promedio = suma / pr.notas.length;
        return { nombre: pr.nombre, promedio };
    });
    console.log(promedioestudiante);
    const estudiantesAprobados = promedioestudiante.filter(n => n.promedio >= 70);
    console.log(estudiantesAprobados);
    const productosNuevos = [
        { nombre: 'Cigarretes', precio: 100, stock: 40 },
        { nombre: 'Alcohol', precio: 45, stock: 22 },
        { nombre: 'cohete', precio: 88, stock: 52 },
        { nombre: 'Yomero', precio: 199, stock: 10 },
        { nombre: 'goku figura', precio: 239, stock: 0 },
    ];
    const productoNuevosDes = productosNuevos.map(n => {
        const precioConDescuento = n.precio * (1 - 0.1);
        return { nombre: n.nombre, precioConDescuento };
    });
    console.log(productoNuevosDes);
    const DisponibilidadProducto = productosNuevos.filter(n => n.stock > 0);
    console.log(DisponibilidadProducto);
    const listaClientes = [
        { nombre: 'Fiorella', montos: [80, 44, 55, 88] },
        { nombre: 'Matias', montos: [80, 44, 55, 88] },
        { nombre: 'Jafeth', montos: [80, 44, 55, 88] },
        { nombre: 'Yoslyn', montos: [10, 10, 10, 10] },
    ];
    const totalGastado = listaClientes.map(n => {
        const total = n.montos.reduce((total, actual) => total + actual, 0);
        return { nombre: n.nombre, total };
    });
    const clientesGastones = totalGastado.filter(n => n.total >= 100);
    console.log(clientesGastones);
})();
//# sourceMappingURL=arrays.js.map