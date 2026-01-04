"use strict";
(() => {
    console.log('Esta funkando');
    const num = 22;
    const pares = num % 2 === 0 ? 'Este numero es par' : 'Este numero es impar';
    console.log(pares);
    const edad = 13;
    const edadVerifi = edad > 18 ? 'Es mayor de edad' : 'Es menor de edad';
    console.log(edadVerifi);
    const numeroDes = 33;
    const descuentoF = numeroDes >= 10 ? '20% de descuento' : '5% de descuento';
    console.log(descuentoF);
    const descuentoH = numeroDes >= 10 ? numeroDes * (1 - 0.2) : numeroDes * (1 - 0.05);
    console.log(descuentoH);
    const nota = 91;
    const evalua = nota >= 90 ? 'Execelente' :
        nota >= 70 ? 'Aprobado' : 'reprobado';
    console.log(evalua);
})();
//# sourceMappingURL=ejercicios.js.map