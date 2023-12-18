
function add(a,b) {
    var result = a+b
    console.log(result)

}

add(10,20)
add (20,40)
add()



function sub(c,d)
{
    var result2= c-d
    console.log(result2)
}
sub(3,4)


var arr1 = [1,2,3]
var arr2 = [5,6,7]
var arr3 = [9,7,1]

// sum1=0

// for (var i=0; i<arr1.length; i++) {
//     sum1+= arr1[i]
// }

// console.log(sum1)

// sum2=0
// for (var i=0; i<arr2.length; i++) {
//     sum2+= arr2[i]
// }

// console.log(sum2)

// sum3=0
// for (var i=0; i<arr3.length; i++) {
//     sum3+= arr3[i]
// }

// console.log(sum3)


function sumofarray(arr) {
    sum=0

    for (var i=0; i<arr.length; i++) {
    sum+= arr[i]
}
 console.log(sum)
}


sumofarray(arr3)


function test () {
   // console.log(arguments)
    //console.log(typeof a)

     for (var i= 0; i<arguments.length; i++) {
        console.log(arguments[i])
     }

}

test(10,20,30)


function addAll() {
    var sum=0
    for(var i=0; i<arguments.length; i++) {
        sum += arguments[i]

    }
    console.log(sum)
}

addAll(1,3,4,-8)

// var a = addAll(1,3,4,-8)
// var b = addAll(1,3,7,-8)

// console.log(a,b)



