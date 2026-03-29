(()=>{


interface Client {
    name:string;
    age?:number;
    addresss:addresss
    getFullAddress(id:string):string

}

interface addresss{
    id:number,
    zip:string,
    city:string
}
const client:Client= {
    name:'GOku',
    age: 22,
    addresss:{
        id:125,
        zip:'UOKM',
        city:'OTAGUA'
    },
   getFullAddress: (id: string): string => {
    return client.addresss.city;
}
}

const cliente1:Client ={
    name:'Goku',
    age:22,
    addresss:{
        id: 223,
        zip:'no se',
        city:'Bagaces'
    },
    getFullAddress(id:string):string{
        return client.addresss.city
    }
}

})()