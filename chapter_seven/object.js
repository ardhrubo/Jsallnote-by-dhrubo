// // // Chapter seven: objects in javascript


// //  // student 1 ;
// //  // math - 80 cemistry-76 physics-86 highher math-90


// //  // [80, 75, 86, 90]



// // // var obj = {}


// // // obj.x = 10

// // // console.log(obj)


// // //console.log(typeof obj)



// // var point= {
// //     x: 10, 
// //     y:20,
    
// // }

// // // point.y = 30
// // point.z = 30


// // console.log(point)

// // // var obj = Object()
// // // obj.a = 10

// // // console.log(obj)


// // var obj = new Object()
// // obj.b = 30
// // console.log(obj)



var point = {
    x: 10,
    y: 20,
    z: 30
}
//  console.log(point.x + point.z)
//  console.log(point['x'])
//  console.log(point['x'] + point['z'])

//  var show = 'x'

//  console.log(point[show])

point.x = 45
point.a = 16
console.log(point)
console.log(point.d) 

point['y'] = 100
var prop = 'z'
point[prop] = 55

console.log(point)


point.a = undefined

console.log(point)



delete point.a

console.log(point)