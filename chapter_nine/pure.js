//  // What is Pure Function?
//  `* It returns the same result if given the same arguments`
//  `*It does not cause any observable side effects`

function sqr(n) {
    return n*n
}

console.log(sqr(3))
console.log(sqr(3))
console.log(sqr(3))


// Example of not a pure function

var a = 30

function random() {
    a=100
    console.log(a)
}
random()
console.log(a) // side effect , this is changing the value of the variable


var b = {
    x : 10,
    y : 20
}


function changevalue() {
    b.x= 30,
    b.y=20
    console.log(b)
}

// changevalue()

console.log(b)

