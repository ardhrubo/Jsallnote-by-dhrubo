
let n = 1
if (n>5){
    // throw new Error('N is greater than 10')
}

if (n>5){
    throw new RangeError('Provide a small num');
    
}




function changeToInt(v){
    let result = Number.parseInt(v)
    if(!result){
        return 'Please provide a value'
    }
    return result
}


let result = changeToInt(5)


function makeWords(text){
   
    try{
        let str = text.trim()
        let words = str.split(' ')
        return words
    }catch(e){
        return 'Provide a text'
    }
   
}


class CustomError extends Error{
    constructor(msg){
        super(msg)
        if(Error.captureStackTrace){

            Error.captureStackTrace(this,CustomError)

        }
    }
}



try{
    console.log('I am line one')
    throw new CustomError('Error')
    console.log('I am matah')
}
catch(e){
    console.dir(e)

    console.log('This is custom error message')
} finally {
    console.log('I am finally block')
}




