(()=>{

const addnumber =(a:number,b:number):number=> a + b;
const greet = (name:string):string=> `Hola ${name}`;
const saveWorld = ():string => `El mundo esta salvado`

let myFuntion;
myFuntion = 10;
console.log(myFuntion)
myFuntion = addnumber;
console.log(myFuntion(2,3));

myFuntion = greet;
console.log(myFuntion('Jafeth'));

myFuntion = saveWorld;
console.log(myFuntion());

})()