

// var rect = {
//     width: 100,
//     height: 50,
//     draw:function(){
//         console.log("I am rectangle")
//        this.printproperties()
//     },
//     printproperties:function(){
//         console.log('My width is ' + this.width)
//         console.log('My height is ' + this.height)
      
//     }
// }

// rect.printproperties()

// function myFunc(){
//     // console.log(this)
//     rect.printproperties()
// }

// myFunc()

// var another = {
//     width: 45,
//     height: 55,
//     print: rect.printproperties
// }

// console.log(another.print)
// another.print()





// factory pattern and constructor pattern


//  var createRect = function(width,height){
    
//    return {
//         width: width,
//         height: height,
//         draw:function(){
//             console.log("I am rectangle")
//         this.printproperties()
//         },
//         printproperties:function(){
//             console.log('My width is ' + this.width)
//             console.log('My height is ' + this.height)
        
//         }
//     }

//  }

//  var rect1 = createRect(44,44)
//  rect1.draw()
//  var rect2 = createRect(40,309)
//  rect2.draw()


//  var Rectangle = function(width,height){
    
//         this.width = width
//         this.height = height
//         this.draw = function(){
//             console.log("I am rectangle")
//             this.printproperties()
//         }
//         this.printproperties = function(){
//             console.log('My width is ' + this.width)
//             console.log('My height is ' + this.height)
        
//         }

//  }

//  var rect3 = new Rectangle(44,44)
//  rect3.draw()


// // new keyword - 1. Create an empty object, 2. Associate argument with empty object 3. Connect prototype with object


// function myNew(constructor){

//     var obj = {}
//     Object.setPrototypeOf(obj, constructor.prototype)
//     var argsArray = Array.prototype.slice.apply(arguments)
//     constructor.apply(obj,argsArray.slice(1))
//     return obj

// }

// var rect4 = myNew(Rectangle,45,30)

// rect4.draw()



// var Rect = new Function('width','height',`  this.width = width
// this.height = height
// this.draw = function(){
//     console.log("I am rectangle")
//     this.printproperties()
// }
// this.printproperties = function(){
//     console.log('My width is ' + this.width)
//     console.log('My height is ' + this.height)

// }`)




// var rect5 = new Rect(44,44)


// function myFunc(c,d){
//     console.log(this)
//     console.log(this.a+this.b+ c + d)
// }



// // Call,Apply
// // Bind

// myFunc.call({a:40,b:33},0,0)
// myFunc.call({a:4,b:3},11,43)

// myFunc.apply({a:1,b:2},[1,2])
// var testbind = myFunc.bind({a:5,b:4})
// testbind(2,3)



// var Rectangle = function(height,width){
//     this.height = height
//     this.width = width
//     this.draw = function(){
//         console.log("I am a rectangle")
//         this.printproperties()
//     }
//     this.printproperties = function(){
//         console.log('My height is ' + this.height )
//         console.log('My width is ' + this.width)
//     }
// }

// var rect6 = new Rectangle(45,44)
// rect6.draw()



// gasdiffusionRate = function(m1,m2){
    
//     let massOne = m1;
//     let massTwo = m2

//     if(massOne>massTwo){
//         return "The gas of vessel two will reach first"
//     } else {
//         return "The gas of vessel one will reach first"
//     }
    
// }

// console.log(gasdiffusionRate(10,11));



// var n = 10;

// function change(n){
//    n+=100
//     console.log(n)
// }

// change(n)

// console.log(n)

// var obj = {
//     a: 10,
//     b: 12,
// };

// var changeMe = function(){
//     obj.a = obj.a + 5
//     obj.b = obj.b +3
//     console.log(obj)
// };

// changeMe(obj)
// console.log(obj)



var Rectangle = function(height,width){
    
    this.height = height
    this.width = width

    var position = {
        x: 56,
        y: -100
    }

   
    var printproperties = function(){
        console.log('My height is ' + this.height )
        console.log('My width is ' + this.width)
    }.bind(this)

    // this.getPosition = function(){
    //     return position
    // }
    
    Object.defineProperty(this,'position',{
        get: function(){
            return position
        },
        set: function(value){
            position = value

        }
    })

    this.draw = function(){
        console.log("I am a rectangle")
        printproperties()
        console.log('Postion: X = ' + position.x + ' & Y = ' + position.y)
    }
}









var rect7 = new Rectangle(34,44)

rect7.draw()

rect7.position = {
    x: 242,
    y: 3254
}

console.log(rect7.position);






// First time watching

// //  var rect = {
// //     width: 100,
// //     height: 30,
// //     draw: function(){
// //         console.log('It is a rectangle')
// //         this.printProperties()
// //         console.log(this)
// //     },
// //         printProperties: function(){
// //             console.log('My width is '+ this.width)
// //             console.log('My Height is '+ this.height)
// //         }
// //  }

// // rect.draw()
// // //  rect.width = 400
// // //  rect.draw()


// // function myFunc() {
// //     console.log(this)
// // }

// //  new myFunc()



// // var another = {
// //     width: 47,
// //     height:33,
// // print: rect.printProperties
// // }
// // console.log(another.printProperties)
// // another.print()





// //  var rect = {
// //     width: 100,
// //     height: 30,
// //     draw: function(){
// //         console.log('It is a rectangle')
// //         this.printProperties()
// //         console.log(this)
// //     },
// //         printProperties: function(){
// //             console.log('My width is '+ this.width)
// //             console.log('My Height is '+ this.height)
// //         }
// //  }
// // // factory pattern

// //  var createRect = function(width,height) {
// //   return {
// //         width: width,
// //         height: height,
// //         draw: function(){
// //             console.log('It is a rectangle')
// //             this.printProperties()
// //             console.log(this)
// //         },
// //             printProperties: function(){
// //                 console.log('My width is '+ this.width)
// //                 console.log('My Height is '+ this.height)
// //             }
// //      }
// //  }


// // var rect1 = createRect(2,3)
// // rect1.draw()

// // var rect2 = createRect(44,33)
// // rect2.draw()


// // constructor pattern


// // var Rectangle = function(width,height){
// //     this.width = width
// //     this.height = height
// //     this.draw = function(){
// //         console.log('It is a rectangle')
// //         this.printProperties()
// //         console.log(this)
// //     }
// //         this.printProperties = function(){
// //             console.log('My width is '+ this.width)
// //             console.log('My Height is '+ this.height)
// //         }
// // }

// // var rect3 = new Rectangle(3,4)
// // rect3.draw()

// // new
// // function myNew(constructor){
// //     var obj= {}
// //     Object.setPrototypeOf(obj , constructor.prototype)
// //     var argsArray = Array.prototype.slice.apply(arguments)
// //     constructor.apply(obj,argsArray.slice(1))
// //     return obj
// // }


// // var rect4 = myNew(Rectangle, 45,  30)
// // rect4.draw()



// // var str = new String('str')
// // console.log('My string is ' + str)



// // function test() {
// //     console.log('Str')
// // }

// // console.log(test.name,test.length)

// // var Rect = new Function('width','height', `this.width = width
// // this.height = height
// // this.draw = function(){
// //     console.log('It is a rectangle')
// //     this.printProperties()
// //     console.log(this)
// // }
// //     this.printProperties = function(){
// //         console.log('My width is '+ this.width)
// //         console.log('My Height is '+ this.height)
// //     }`)


// //     var rect5 = new Rect(2,3)
// // //     console.log(rect5)

// // //     Rect()

// //     function myFunc(c,d) {
// //         console.log(this)
// //         console.log(this.a+this.b+c+d)
// //     }


// // // Call , Apply
// // // Bind

// // myFunc.call({a:5, b:4},10,3) 
// // myFunc.apply({a:44,b:66},[3,4])
// // // myFunc.apply({})
// // // myFunc()
// // var testbind = myFunc.bind({a: 4, b: 4,},)
// // testbind(3,3)


// // Pass by value vs pass by reference 
// // Call by value vs call by reference

// var n =10
// function change(n){
//  n = n+100
//  console.log(n)
// }
// change(n)
// console.log(n)

// var obj = {
//     a: 10,
//     b:20
// }

// function changeme(obj){
//  obj.a =obj.a + 100
//  obj.b = obj.b+100
// console.log(obj)

// }

// changeme(obj)
// console.log(obj)



// var Rectangle = function(width,height){
 
//     var name= 'Dhrubo'

 
//    var position = {
//         x: 49,
//         y: -110
//     }
 
//     this.width = width
//     this.height = height

//     var printProperties = function(){
//             console.log('My width is '+ width)
//             console.log('My Height is '+ height)
//         }.bind(this)

//         // this.getPosition = function(){
//         //     return position
//         // }

//         this.draw = function(){
//             console.log('It is a rectangle')
//             printProperties()
//             console.log('Position: X = '+ position.x + ', Y= '+ position.y)
//         }

//         Object.defineProperty(this, 'position', {
//             get:function(){
//                 return position
//             },
//             set: function(value){
//                 position = value
//             }
//         })
// }

// var rect6 = new Rectangle(44,33)
// rect6.draw()
// // console.log(rect6.getPosition())
// rect6.position = {
//     x: 33,
//     y: 44
// }
//  console.log(rect6.position)




