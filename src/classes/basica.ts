(() => {

    class Avenger {


        static getAvgAge(){
            return this.name
        }
        constructor(
            private name: string,
            private power: string,
            public team: string,
            public realName: string,
        ) {}
        bio(){
            return `${this.name} (${this.team})`
        }
}
const hantman = new Avenger('jafeth','nada','los BUenos','Goku')
console.log(hantman)
console.log( hantman.bio())
console.log(Avenger.getAvgAge())
})()