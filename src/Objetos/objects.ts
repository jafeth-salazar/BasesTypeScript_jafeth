(()=>{

    // interface heroes{
    //     name:string,
    //     age:number,
    //     powers:string[],
    // }

    // let flash:heroes ={

    //     name:'Barry Allen ',
    //     age: 24,
    //     powers:['Super velocidad','Fuerza sobre Humana','Viajar en el tiempo']

    // }

let flash:{name:string,age:number,powers:string[], getName:(name:string)=>string} = {

        name:'Barry Allen ',
        age: 24,
        powers:['Super velocidad','Fuerza sobre Humana','Viajar en el tiempo'],
        getName(){
            return this.name
        }

    }

})()