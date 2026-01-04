"use strict";
(() => {
    const error = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error('auxilio');
    console.log('Hola mundo');
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    function tipoRol(rol) {
        switch (rol) {
            case "admin":
                console.log(`Soy un ${rol}`);
                break;
            case "user":
                console.log(`Soy un ${rol}`);
                break;
            case "guest":
                console.log(`Soy un ${rol}`);
                break;
            default:
                const check = rol;
                return check;
        }
    }
    tipoRol('admin');
    function tipo(x) {
    }
})();
//# sourceMappingURL=never.js.map