function extend(Parent,Child){
  Child.prototype = Object.create(Parent.prototype)
  Child.prototype.constructor = Child
  
}

function Shape(color){
  this.color = color
}

Shape.prototype.common = function(){
    console.log('I am common method');
  }



function Square(width,color){
  Shape.call(this,color)
  this.width  = width
}

extend(Shape,Square)


Square.prototype.draw = function(){
      console.log('Draw')
      this.getwidth()
  }

Square.prototype.common = function(){
    console.log('I am overwritten')
  }  


// var shape = new Shape()
var sqr = new Square(2, 'green')




function Circle(radius,color){
  Shape.call(this,color)
  this.radius = radius
}

extend(Shape,Circle)

Circle.prototype.common = function(){
  // Shape.prototype.common.call(this)
  console.log('I am overwritten')
}

var circle = new Circle(4,'red')

var shape = new Shape('blue')

var shapeArr = [sqr,circle,shape]

for(var i of shapeArr){
  i.common()
}


function mixin(target,...sources){
  Object.assign(target, ...sources)
}

var canWalk = {
  walk: function(){
    console.log('Walking...');
  }
}

var canEat = {
  eat: function(){
    console.log('Eating...')
  }
}

var canSwim = {
  swim: function(){
    console.log('Swimming...')
  }
}


// var person = Object.assign({},canWalk,canEat)

function Person(name){
  this.name = name
}

mixin(Person.prototype,canEat,canWalk)

var person = new Person('AR Dhrbo')
console.log(person)

function Goldfish(name){
  this.name = name
}

mixin(Goldfish.prototype,canEat,canSwim)

var fish = new Goldfish('Bloooo')
console.log(fish);





// function extra(parent,child) {

//   child.prototype = Object.create(parent.prototype)

//   child.prototype.constructor = child
  
// }

// function Shape(color){
//   this.color= color

// }

// Shape.prototype.common=function(){
//       console.log('I am common method')
//   }


// function Square(width,color){
//   Shape.call(this,color)
//   this.width = width
// }

// extra(Shape,Square)

// Square.prototype.draw = function(){
//       console.log('Drawing')
// }







// // var shp = new Shape()
// var sqr = new Square(4, 'blue')


// var circle = new Circle(44,'green')

// function Circle(radius,color){
//   Shape.call(this,color)
//   this.radius= radius
// }

// extra(Shape,Circle)




// const s = [5, 7, 2];
// function editInPlace() {
//   // Only change code below this line
//   const newarr =[s[2],s[0],s[1]]
//   // Using s = [2, 5, 7] would be invalid
// return s=newarr
//   // Only change code above this line
// }
// editInPlace();

// console.log(s)



// const person = {
//   fnae:"Dhrubo",
//   lname:"Doe",
//   age: 22
// };

// person.nationality = "English";
// delete person.age;


// let text = "";
// for(let x in person){
//   text += person[x] +" "
// };




// console.log(text);



// const myObj = {
//   name: "John",
//   age: 30,
//   cars: [
//     {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
//     {name:"BMW", models:["320", "X3", "X5"]},
//     {name:"Fiat", models:["500", "Panda"]}
//   ]
// }


// let x = "";

// for(let i in myObj.cars){
//   x += myObj.cars[i].name 
//   for(j in myObj.cars[i].models){
//     x += myObj.cars[i].models[j] + " "
//   }
// }

// console.log(x);

// console.log(JSON.stringify(myObj))


// let numbrs = [1,2,3,4,5,6]

// for(let i=0; i<numbrs.length;i++){
//   console.log(numbrs[i])

// }


// // const  objiteratin = {
// //   one: 1,
// //   two: 2,
// //   three: 3,

// // }
// const nms = [1,2,4]

// // console.log(objiteratin);
// const nmsiterate = nms[Symbol.iterator]();
// // for(let n of numbrs){
// //   console.log(n)
// // }



// const mynumberobj = {};;

// // make it iterable

// mynumberobj[Symbol.iterator]=function(){
//   let n = 0;
//   let done = false;
//   return {
//     next(){

//       n +=10;
//       if(n==100){done = true }
//       return {
//         value: n,
//         done: done,
//       }
//     }
//   }
// }

// for(let num of mynumberobj){
//   console.log(num)
// }
