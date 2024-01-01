let arr = [1,2,3,4]


let sqArr = arr.map( v => v*v)

console.log(sqArr)


function asyncMap(arr,cb){
     return arr.map(v => {
        // setTimeout(cb.bind(null,v),0)
        setTimeout(() => cb(v),0)
     })
}

let qbArr = asyncMap(arr, v => {
    console.log(v)
})




