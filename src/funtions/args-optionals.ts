(() => {

    const fullname = (firstName:string,lastName?:string): string => {
        
        return `${firstName} ${lastName || 'No last name'}`
    }
 const name:string = fullname('Salazar',)
console.log({name})

})()