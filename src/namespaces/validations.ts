namespace Validation{


    export const validateText = (text: string): boolean => {
       return(text.length > 3)? true: false

    }

    export const validateDate= (myDate:Date):boolean =>{
        return(isNaN(myDate.valueOf()))? false:true
    }
}
console.log(Validation.validateText('22'));
console.log(Validation.validateDate(new Date('2026-03-29')))