(()=>{


    class Avenger {

        name= 'goku';
        power = 'nada';


        constructor(name, power){
            this.name=name
            this.power=power
        }

    }

    class flyingAvenger extends Avenger{

        flying;
        constructor(name,power){
            super(name,power);
            this.flying = true
        }

    }

    const hulk = new Avenger('Hulk',2200);
    const iroman = new flyingAvenger('Iroman',14000,true);
    console.log(hulk);
    console.log(iroman);

})()