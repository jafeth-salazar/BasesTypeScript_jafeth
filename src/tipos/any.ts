(()=>{
let avengers:any = 123;
let exist;
let power;
avengers ='DR strange'
//console.log(avengers.charAt(0));
console.log((avengers as string).charAt(1))

avengers = 150.3332323;
//console.log(avengers.toFixed(2))
console.log(<number>avengers.toFixed(3));
console.log(exist)
console.log(power)
})()