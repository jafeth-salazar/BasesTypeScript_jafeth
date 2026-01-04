"use strict";
(() => {
    const addnumber = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveWorld = () => `El mundo esta salvado`;
    let myFuntion;
    myFuntion = 10;
    console.log(myFuntion);
    myFuntion = addnumber;
    console.log(myFuntion(2, 3));
    myFuntion = greet;
    console.log(myFuntion('Jafeth'));
    myFuntion = saveWorld;
    console.log(myFuntion());
})();
//# sourceMappingURL=funtions-type.js.map