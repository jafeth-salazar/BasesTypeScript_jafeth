"use strict";
(() => {
    const hero = ['Dr Strange', 100, true];
    console.log(hero);
    hero[0] = 'Goku le gana';
    hero[1] = 22;
    hero[2] = false;
    console.log(hero);
    const tuplaEjercicio = [33, 44];
    console.log('Cordenada x: ', tuplaEjercicio[0]);
    console.log('Cordenada y: ', tuplaEjercicio[1]);
    const productoInfo = ['Mouse', 222, false];
    function tuplaMensaje([nombre, precio, disponible]) {
        const mensaje = disponible ? 'Esta Disponible' : 'No esta disponible';
        console.log(`El producto ${nombre} cuesta $${precio} y ${mensaje}.`);
    }
    tuplaMensaje(productoInfo);
    const puntuaciones = [
        ['goku ', 22],
        ['Nestor', 33],
        ['Gabriel', 55],
    ];
    puntuaciones.forEach(pun => console.log('Jugador:', pun[0], pun[1]));
    let pedidosEstado;
    (function (pedidosEstado) {
        pedidosEstado["PENDIENTE"] = "Pendiente";
        pedidosEstado["ENVIADO"] = "Enviado";
        pedidosEstado["ENTREGADO"] = "Entregado";
    })(pedidosEstado || (pedidosEstado = {}));
    const pedidos = [
        ['Jafeth', 22, pedidosEstado.PENDIENTE],
        ['Aaron', 33, pedidosEstado.ENVIADO],
        ['Matias', 44, pedidosEstado.ENTREGADO],
        ['GOKU', 55, pedidosEstado.PENDIENTE]
    ];
    pedidos.forEach(pr => console.log('Cliente:', pr[0], 'Monto: ', pr[1], 'Estado: ', pr[2]));
    const empleados = [
        ['Ana', 40, 10],
        ['Luis', 35, 12],
        ['Marta', 20, 15],
        ['Pedro', 50, 9],
    ];
    empleados.forEach(([nombre, horas, tarifa]) => {
        console.log(`Empleado: ${nombre} Horas: ${horas} Tarifa: ${tarifa}`);
    });
    const sueldosTotales = empleados.map(em => {
        const total = em[1] * em[2];
        return [em[0], total];
    });
    sueldosTotales.forEach(([nombre, total]) => {
        console.log(`Empleado: ${nombre} Sueldo total: ${total}`);
    });
    let EstadoEstudiante;
    (function (EstadoEstudiante) {
        EstadoEstudiante["APROBADO"] = "APROBADO";
        EstadoEstudiante["REPROBADO"] = "REPROBADO";
    })(EstadoEstudiante || (EstadoEstudiante = {}));
    const estudiantes = [
        ['AARON', 66, EstadoEstudiante.APROBADO],
        ['MATIAS', 99, EstadoEstudiante.REPROBADO],
        ['FIORELLA', 44, EstadoEstudiante.APROBADO],
        ['YOSLYN', 33, EstadoEstudiante.APROBADO]
    ];
    for (const [nombre, notas, estado] of estudiantes) {
        console.log(`Nombre del estudiante: ${nombre} su nota es: ${notas} y su estado es: ${estado}`);
        const helper = notas >= 90 ? `Tiene derecho a Beca: ${nombre}` : `no tiene derecho a Beca ${nombre}`;
        console.log(helper);
    }
    function calcularPromedioHermanitos(lista) {
        const total = lista.reduce((acumulado, [, nota]) => acumulado + nota, 0);
        return total / lista.length;
    }
    const calcularPromedioFN = calcularPromedioHermanitos(estudiantes);
    console.log(`El promedio de los estudiantes es ${calcularPromedioFN.toFixed(2)}`);
    const aprabadosEstudiantes = estudiantes.filter(ap => ap[2] === EstadoEstudiante.APROBADO);
    aprabadosEstudiantes.forEach(([nombre, nota, estado]) => console.log(`Tu nombre es: ${nombre} y  tu nota es: ${nota} su estado es: ${estado}`));
})();
//# sourceMappingURL=tuples.js.map