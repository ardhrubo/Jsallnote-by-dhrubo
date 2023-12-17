function syHi(n){
    if(n==0) {
        return 1
    }
    console.log('Hi, I am calling')
    syHi(n-1)
}

syHi(10)


function sum(n) {
 if (n==0) {
    return 0
 }
 return n+ sum(n-1)
}

console.log(sum(3))


function fact(n) {
    if (n==0){
        return 1
    }
    return n* fact(n-1)
}

console.log(fact(5))


var arr =[1,2,3,4,5]


function sumofarr(arr,lastindex){
    if(lastindex<0){
        return 0
    }
    return arr[lastindex] + sumofarr(arr,lastindex-1)
}

console.log(sumofarr(arr,arr.length-1))



function multofarr(arr,lastindex){
    if(lastindex<0){
        return 1
    }
    return arr[lastindex] * multofarr(arr,lastindex-1)
}

console.log(multofarr(arr,arr.length-1))

