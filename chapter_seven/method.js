var obj = {
    a : 30,
    b : 40,
    c : 50
 }

//  console.log(Object.keys(obj))
//  console.log(Object.values(obj))
// console.log(Object.entries(obj))

// var obj2 = obj

// obj2.a  = 50
// obj2.b = 100

// console.log(obj)
// console.log(obj2)


var obj2 = Object.assign({}, obj)
obj2.a = 100

console.log(obj)
console.log(obj2)