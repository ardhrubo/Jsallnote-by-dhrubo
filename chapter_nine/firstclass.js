 // First class function
 function add(a, b) {
    return a+b
 }
 
 
 //1.  A function can be stored in a varaible

var sum = add
console.log(sum(0,1))
console.log(typeof sum)

 
 //2. A function can be stored in an Array

 var arr = []
 arr.push(add)
 console.log(arr)
console.log(arr[0](4,5))


//  3. A function can be stored in an object
 var obj = {
    ex: add
 } 
 
console.log(obj)
console.log(typeof obj)
console.log(obj.ex(3,4))


//  4. We can create function as need 

setTimeout(
    function (){
        console.log(' I love in Bangladesh')
    }
, 1000);


  /*
 5. We can pass Function as an arguments
 6. We can return function as nedd

 */