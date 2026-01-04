"use strict";
(() => {
    function sumar(a, b) {
        return a + b;
    }
    const contar = (heroes) => {
        return heroes.length;
    };
    const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
    contar(superHeroes);
    const llamarBatman = (llamar) => {
        if (llamar) {
            console.log("Batiseñal activada");
        }
    };
    llamarBatman(true);
    const unirheroes = (personas, ...restPersona) => {
        return `${personas}, ${restPersona.join('')}`;
    };
    const noHaceNada = (numero, texto, booleano, arreglo) => { };
    let noHaceNadaTampoco;
    noHaceNadaTampoco = noHaceNada;
    function saludar(nombre = "Visitante") {
        console.log(`Hola, ${nombre}!`);
    }
    saludar();
    saludar("Carlos");
})();
//# sourceMappingURL=tarea2.js.map