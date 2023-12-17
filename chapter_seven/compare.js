var obj1 = {
    a: 20,
    b: 30
}
var obj2 = {
    a: 20,
    b: 30
}

if (obj1.a==obj2.a && obj1.b == obj2.b) {
    console.log(true)
}

else {
    console.log(false)
}




console.log(obj1)
console.log(JSON.stringify(obj1) == JSON.stringify(obj2)) 



