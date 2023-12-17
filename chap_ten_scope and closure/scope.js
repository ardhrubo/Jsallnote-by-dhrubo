{
    var x =55
    function test(){
       // var x=54
       // console.log(x)
        function nested() {
           // var y = 65
            console.log(x)
        }
        
    nested()
    // console.log(y)
    }



    test()
}



// Lexical Scope Term= Lexin

// Scope Chain


var a = 11
function A(){
    var b= 12
    function B() {
        var c=10
        console.log(c)

    }
    function C(){
        var d= 9
        console.log(d)
    }
    console.log(b)
    D()
    B()
    C()
}


function D(n){
    return n+a
}

// A -> a,b, B, C , D
// B -> a,b,c B,C,D
// C -> a,b,c,d, B,C,D
// D -> a,n ,A
