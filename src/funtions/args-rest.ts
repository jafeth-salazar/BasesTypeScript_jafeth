(()=>{

    const fullname = (fullname:string, ...restoNombres:string[]):string =>{


        return `${fullname} ${restoNombres.join('')}`
    }
    const superman:string =fullname('Jafeth Aaron','Goku le gana');
    console.log({superman})



})()