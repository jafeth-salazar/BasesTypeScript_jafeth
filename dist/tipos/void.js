"use strict";
(() => {
    function callBatman() {
        console.log(`Esto no esta vacio o si?`);
    }
    const batman = callBatman();
    console.log(batman);
    function mostrarMensaje(mensaje) {
        console.log(mensaje);
    }
    mostrarMensaje(`hola p`);
    const ejercicio1 = mostrarMensaje(`Hola prueba segunda`);
    console.log(ejercicio1);
    function agregarHeroe(lista, heroe) {
        lista.push(heroe);
        for (const element of lista) {
            console.log(element);
        }
    }
    const listaHeroes = ['Goku', 'Broli', 'Vegeta'];
    console.log(agregarHeroe(listaHeroes, 'nada'));
    const Persona = { nombre: 'Jafeth', edad: 22 };
    function cumplirAnios(persona) {
        persona.edad++;
        console.log(persona);
    }
    cumplirAnios(Persona);
    const onClick = (evento) => {
        console.log(`Evento recibido: ${evento}`);
    };
    onClick('Nadar');
    const saludo = (saludo) => {
        console.log(`Hola ${saludo}`);
        return saludo;
    };
    saludo('Aaron pro en programar');
    const suma = (a, b) => {
        console.log(`La suma es : ${a + b}`);
        return a + b;
    };
    suma(22, 11);
    const arregloStrings = ["hola", "typescript", "goku", "broli"];
    const heroesIntermedio = (lista) => {
        const salida = lista.filter(f => f.length >= 5);
        for (const element of salida) {
            console.log(`Estos son los que son mayores a 5 letras: ${element}`);
        }
        return salida;
    };
    heroesIntermedio(arregloStrings);
    const mensaje = (mensaje) => {
        console.log(mensaje);
    };
    mensaje('Este ejercicio intermedio me parecio mas facil que los pasados Hola Chagpt que tal voy?');
    const parImpar = (numero) => {
        const calculo = numero % 2 === 0 ? 'par' : 'impar';
        console.log(`El numero es: ${calculo}`);
        return `El numero es: ${calculo}`;
    };
    parImpar(3);
    const startG = (heroes) => {
        const letraG = heroes.filter(h => h.toLocaleUpperCase().startsWith('G'));
        letraG.forEach(l => console.log(`Los heroes que empiezan con G son: ${l}`));
        return letraG;
    };
    const heroes = ["Goku", "Vegeta", "Gohan", "Broly"];
    startG(heroes);
    const personaNomutada = (persona) => {
        const personaNueva = Object.assign(Object.assign({}, persona), { edad: persona.edad + 1 });
        console.log(personaNueva);
        return personaNueva;
    };
    personaNomutada({ nombre: "Luis", edad: 20 });
})();
//# sourceMappingURL=void.js.map