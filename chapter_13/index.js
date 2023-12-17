// // // inheritance

// function Person(name){
//     this.name = name
// }

// var p1 = new Person('Dhrubo')

// console.log(p1)


// var person = {
//     name: 'Dhrubo'
// }

// console.log(person)


// for (var i in person){
//     console.log(i)
// }


// console.log(Object.keys(person))

// var descriptor = Object.getOwnPropertyDescriptor(person,'name')

// console.log(descriptor)

// let baseobj = Object.getPrototypeOf(person)
// let descriptor = Object.getOwnPropertyDescriptor(baseobj,'toString')
// console.log(descriptor)

// Object.defineProperty(person,'name',{
//     enumerable: false,
//     writable: false,
//     configurable: false,
//      value: 'Ar Dhrubo'
// })


// function Person(name){
//  this.name = name
// }
// Person.prototype.PI = 3.1416

// var p1 = new Person('AR Drubo')
// var p2 = new Person('Dhrubo')
// // console.log(Object.getPrototypeOf(p1))
// // console.log(Person.prototype)

// console.log(p1)
// console.log(p2)

// function draw(){

// }

function Square(width){
    this.width = width
    this.getwidth = function(){
        console.log('My width is '+ this.width)
        // this.draw()
    }
}

Square.prototype = {
    draw: function(){
        console.log('Draw')
        this.getwidth()
    },
    common: function(){
            console.log('I am common method');
    }
}






var sqr1 = new Square(10)
var sqr2 = new Square(4)


console.log(Object.keys(sqr1)) // for getting intance property


for (var i in sqr1){
    console.log(i)
}

// for loop to get all the property



function Circle(){

}


Circle.prototype = {
    common: function(){
        console.log('I am common method');
    }
}















