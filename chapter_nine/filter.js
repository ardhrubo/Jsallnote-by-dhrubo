var arr = [1,2,3,4,6,5,7,8,9]

// var filterarry = arr.filter(function(value){
//     return value %2 ==0 
// })

// console.log(filterarry)

// console.log(arr)


// function milter(arr) {
//     var newarr = []
//     for (var i=0; i<arr.length; i++) {
//         if (arr[i]%2==0) {
//             newarr.push(arr[i])
//         }
//     }
//     return newarr
// }

// console.log(milter(arr))

function milter(arr,cb) {
    var newarr = []
    for (var i=0; i<arr.length; i++) {
        if (cb(arr[i],i,arr)) {
            newarr.push(arr[i])
        }
    }
    return newarr
}


console.log(milter(arr, function(arr){
    return arr
}))

