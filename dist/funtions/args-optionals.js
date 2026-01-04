"use strict";
(() => {
    const fullname = (firstName, lastName) => {
        return `${firstName} ${lastName || 'No last name'}`;
    };
    const name = fullname('Salazar');
    console.log({ name });
})();
//# sourceMappingURL=args-optionals.js.map