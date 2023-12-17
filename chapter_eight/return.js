 

 function addAll() {
    var sum = 0
    for (var i=0; i<arguments.length; i++)
    {
        sum += arguments[i]
    }
    return sum
 }



var  result = addAll(1,2,3)
console.log(result) 

console.log()

function peroson(name,email) {

    return {
        name: name,
        email: email
    }
}

var p1 = person('AR Dhrubo' , 'ardhrubo3038@gmail.com')
console.log(p1)




