(()=>{


    type heroes={name:string,age?:number,powers:string[],getName?:(name:string)=>string}

    let myCustumVariable: string|number|heroes = `Jafeth`
    console.log(myCustumVariable);
    
})()