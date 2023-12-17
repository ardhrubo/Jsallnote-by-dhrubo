// // what is string 
// // '' "" stored inside this



// // var str = 'hudai' // string literal
// // var str2 = String('Yoo')

// // console.log(str,str2)


// // var n =10

// // var str = String(n)

// // console.log(str)

// // **** Escape Notation

// // var str = 'This is a \string'
// // console.log(str) 


// //  string comparison

// // var a = 'bad'
// // var b = 'bab'

// // console.log(a > b)

// // // console.log('a' > 'B') // Lexical order z,y,x...a,Z,Y

// // console.log ('001' == 1)

// var a = 'I am'
// var b = 'AR Dhrubo'
// var c = a.concat(' ', b)
//  console.log(c) 
// // var d = c.substr(5)
// // console.log(d)

// console.log(c.startsWith('I'))
// console.log(c.endsWith('Dhrubo'))
// console.log(c.toUpperCase())
// console.log(c.toLowerCase())
// console.log('    fhsf'.trim())
// console.log(c.split(' '))

var str = 'Some String'

var length = 0

while (true) {
    if (str.charAt(length) == ''){
        break
    } 
    else {
        length++
    }
}
console.log(length)

console.log('ashfahga'.length)
