"use strict";
(() => {
    const fullname = (firstName, lastName, upper = false) => {
        return upper
            ? `${firstName.toUpperCase()} ${(lastName === null || lastName === void 0 ? void 0 : lastName.toUpperCase()) || 'NO LAST NAME'}`
            : `${firstName} ${lastName || 'No last name'}`;
    };
    const name = fullname('Salazar', 'GOKU', true);
    console.log({ name });
})();
//# sourceMappingURL=args-default.js.map