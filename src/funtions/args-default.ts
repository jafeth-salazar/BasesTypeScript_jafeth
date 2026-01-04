(() => {

    const fullname = (firstName:string,lastName?:string, upper:boolean =false): string => {
 return upper
  ? `${firstName.toUpperCase()} ${lastName?.toUpperCase() || 'NO LAST NAME'}`
  : `${firstName} ${lastName || 'No last name'}`;
    }
 const name:string = fullname('Salazar','GOKU',true)
console.log({name})

})()