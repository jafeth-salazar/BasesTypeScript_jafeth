"use strict";
(() => {
    const fullname = (fullname, ...restoNombres) => {
        return `${fullname} ${restoNombres.join('')}`;
    };
    const superman = fullname('Jafeth Aaron', 'Goku le gana');
    console.log({ superman });
})();
//# sourceMappingURL=args-rest.js.map