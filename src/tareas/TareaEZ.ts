(()=>{

    // Tipos
    const batman:string = 'Bruce';
    const superman:string = 'Clark';
  
    const existe:boolean = false;
  
    // Tuplas

    type villanotupla=[string,number,boolean]

    type parejaHeroesTupla =[string,string]
    const parejaHeroes:parejaHeroesTupla = [batman,superman];
    const villano:villanotupla = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados:string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
   // Enumeraciones
   
    enum fuerzaSupers{

        fuerzaFlash = 5,
        fuerzaSuperman= 100,
        fuerzaBatman = 1,
        fuerzaAcuaman = 0,
    }
    const fuerzaFlash:fuerzaSupers = fuerzaSupers.fuerzaFlash;
    const fuerzaSuperman:fuerzaSupers = fuerzaSupers.fuerzaSuperman;
    const fuerzaBatman:fuerzaSupers = fuerzaSupers.fuerzaBatman;
    const fuerzaAcuaman:fuerzaSupers = fuerzaSupers.fuerzaAcuaman;
    // Retorno de funciones
    function activar_batiseñal():string{
      return 'activada';
    }
  
    function pedir_ayuda():void{
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder:any = '100';
    const largoDelPoder:number = (poder as string).length;
    console.log( largoDelPoder );
  
  
})()