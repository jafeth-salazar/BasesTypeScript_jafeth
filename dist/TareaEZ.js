"use strict";
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let fuerzaSupers;
    (function (fuerzaSupers) {
        fuerzaSupers[fuerzaSupers["fuerzaFlash"] = 5] = "fuerzaFlash";
        fuerzaSupers[fuerzaSupers["fuerzaSuperman"] = 100] = "fuerzaSuperman";
        fuerzaSupers[fuerzaSupers["fuerzaBatman"] = 1] = "fuerzaBatman";
        fuerzaSupers[fuerzaSupers["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
    })(fuerzaSupers || (fuerzaSupers = {}));
    const fuerzaFlash = fuerzaSupers.fuerzaFlash;
    const fuerzaSuperman = fuerzaSupers.fuerzaSuperman;
    const fuerzaBatman = fuerzaSupers.fuerzaBatman;
    const fuerzaAcuaman = fuerzaSupers.fuerzaAcuaman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
//# sourceMappingURL=TareaEZ.js.map