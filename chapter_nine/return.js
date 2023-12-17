// function greet(msg) {
//     function greetings(name) {
//         return msg + ' , ' + name + ' ! '
//     }
//     return greetings
// }



// var gm = greet('Good Mornign')
// var gn = greet('Good evening')
// var wc = greet('Welcome')

// console.log(gm('Dhrubo'),gn('Ifty'),wc('Sishsir'))


function power(n){
    function base(a){
        var result = 1
        for(var i=0; i<n; i++){
            result *=a
        }
        return result
    }
    return base
}

var power4 = power(2)

console.log(power4(5))


function power(n){
    return function(a){
        var result = 1
        for(var i=0; i<n; i++){
            result *=a
        }
        return result
    }
 
    
}

var power4 = power(2)

console.log(power4(3))
console.log(power(4)(2))
console.log(power(3)(2))

