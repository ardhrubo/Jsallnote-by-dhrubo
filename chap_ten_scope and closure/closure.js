// Closure is when a function is able to remember 
//and access it's lexical scope even when that function
// executing outside it's lexical scope


// able to remember and access it's lexical scope
// when that funciton executin outside it's lexical scope

// function test(){
//     var msg = ' I am learning lexical scope and closure'

//     function saymsg( ){
//         console.log(msg)

// }
//     saymsg()
// }

// function test(){
//     var msg = ' I am learning lexical scope and closure'

//    return function (){
//         console.log(msg)

// }
    
// }

// var saymsg= test()

// saymsg()


for ( var i=1; i<=6; i++){
   (function(n){setTimeout(function(){
        console.log(n)
    },1000*n)
   })(i)
}


 