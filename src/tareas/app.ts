(()=>{
    const a:number =10
    console.log(a+' buenardo')




    const b:string= 'gokuleGana'
console.log(a)
// const persona = { nombre: 'Ana', edad: 20 ,pais:'CR'};
// persona.nombre = 'Maria'
// const persona2:{nombre:string,apellido:string}= {
// nombre:'jafeth',
// apellido:'Goku'
// }

interface Persona{
nombre:string,
Apellido:string,
age:number,
}
const persona:Persona={
    nombre:'Jafeth',
    Apellido:'Goku',
    age:22
}
console.log(persona)
interface Producto{
    id:number,
    nombre:string,
    expiration:Date,
}
const productosBasicos:Producto[]=[
    {id:1, nombre:'goku',expiration: new Date()}
]
console.log(productosBasicos)
console.log("holaa")
console.log('Quiero ver si se actualiza')

})()
