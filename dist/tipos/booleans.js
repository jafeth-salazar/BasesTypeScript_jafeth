"use strict";
(() => {
    const a = false;
    console.log(a);
    let isSuperma = true;
    let isBatman = false;
    console.log({ isSuperma });
    isSuperma = true && false;
    isSuperma = (isBatman) ? true : false;
})();
(() => {
    const edad = 15;
    const tieneEntrada = false;
    const puedeEntrar = (edad >= 18 || tieneEntrada) ? true : false;
    console.log(puedeEntrar);
    const UsuariosLista = [
        { nombre: 'Jafeth', activo: true, edad: 44 },
        { nombre: 'Aaron', activo: false, edad: 77 },
        { nombre: 'David', activo: false, edad: 18 },
        { nombre: 'Roneil', activo: true, edad: 21 },
    ];
    const usuariosActivos = UsuariosLista.filter(n => n.activo);
    const menores = UsuariosLista.some(n => n.edad < 18);
    const mayores = UsuariosLista.every(n => n.edad >= 18);
    console.log(menores);
    console.log(mayores);
    console.log(usuariosActivos);
})();
//# sourceMappingURL=booleans.js.map