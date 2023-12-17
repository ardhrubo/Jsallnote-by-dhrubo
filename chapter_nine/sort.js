var persons = [
    {
        name: ' A',
        age: 23
    },

    {
        name: 'B',
        age: 33
    },
    {
        name: 'C',
        age: 18
    },
    {
        name: 'D',
        age: 22
    },
    {
        name: 'E',
        age: 23
    },

]


    var arr =[4,5,2,5,6,,0,8,2,6,7,4,9,3,1,-2]

//     arr.sort()

//     console.log(arr)


// persons.sort()
// console.log(persons)


arr.sort(function(a,b){
    if(a>b){
        return 1
    }
    else if ( a<b) {
        return -1
    }
    else {
        return 0
    }
})

console.log(arr)


persons.sort (function(a,b){
    if(a.age>b.age) {
        return 1
    }
    else if(a.age<b.age){
        return -1
    }
    else {
        return 0
    }
})

console.log(persons)




var res1 = arr.every(function(value){
    return value%2 ==0
})

console.log(res1)
var res2= arr.every(function(value){
    return value >=0
})

console.log(res2)


var res3 = arr.some(function(value){
    return value%2 == 1
})

console.log(res3)

var res4 = arr.some(function(value){
    return value >0
})

console.log(res4)