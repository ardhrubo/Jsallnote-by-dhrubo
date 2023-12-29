
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

console.log(result)