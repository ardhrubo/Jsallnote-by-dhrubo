 function sample(a,b, cb) {
    var x = a+b
    var y = a-b
    var resutlt = cb(x,y)
    return resutlt
    
 }

function sum(a,b) {

    return a-b
}

function sub(a,b) {

    return a+b
}
function mul(a,b) {

    return a*b
}
function div(a,b) {

    return a/b
}


var result = sample(3,4,sub)

console.log(result)
var result = sample(3,4,sum)

 console.log(result)
var result = sample(3,4,mul)

 console.log(result)
var result = sample(4,2,div)


console.log(result)