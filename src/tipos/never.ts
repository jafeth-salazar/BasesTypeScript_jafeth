(() => {

    const error = (message: string): (never | number) => {
        if (false) {
            throw new Error(message);
        }
        return 1

    }

    error('auxilio');
    console.log('Hola mundo')



    //decir los numero pares o impares hasta 10 

    const numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];


    // for (const element of numeros) {
    //     const tipo = element % 2 === 0 ? 'par' : 'impar';
    //     console.log(`${element} es ${tipo}`);
    // }

    // let esPar = false;
    // for (const element of numeros) {
    //     const tipo = esPar ? 'par' : 'impar';
    //     console.log(`${element} es ${tipo}`);
    //     esPar = !esPar; 
    // }
    // const lanzarError= (message:string):never =>{
    // throw new Error(message)
    // }

    // lanzarError('Algo salio mal')


    // const loopInfinito = ():never=>{
    // while(true)

    // console.log('Sigo corriendo')
    // }
    // loopInfinito()


    // 3️⃣ Validación exhaustiva con switch

    // Dado este tipo:

    type Rol = "admin" | "user" | "guest";

    function tipoRol(rol: Rol) {
        switch (rol) {
            case "admin":
                console.log(`Soy un ${rol}`)
                break;
            case "user":
                console.log(`Soy un ${rol}`)
                break;
            case "guest":
                console.log(`Soy un ${rol}`)
                break
            default:
                const check: never = rol;
                return check;
        }
    }
tipoRol('admin')

// 4️⃣ Función que nunca debería recibir null
// Instrucciones:
// Crea una función:
// procesarTexto(texto: string)
// Simula que alguien accidentalmente envió null.
// Usa un chequeo que haga:
// si llega null, llama a una función que retorna never
// si llega un string, continúa la ejecución
// function nohayNada(nada: string | null): string {
//     if (nada === null) {
         // 🛑 Esto obliga a TypeScript a marcar error si nunca debería llegar un null
//         const check: never = nada;
//         throw new Error("No debería llegar un null aquí");
//     }

//     console.log(`El texto es este: ${nada}`);
//     return nada;
// }

// nohayNada(null); // ❌ Aquí TypeScript marca error

function tipo(x: string | number | boolean){
    
}



})()