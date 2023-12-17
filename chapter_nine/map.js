var arr = [1,2,3] 

// var sqrarr = arr.map(function(value,index,arr){

//     // return (Math.random()) * 100 
//     return value * value

// })

// console.log(arr)
// console.log(sqrarr)



function map(arr,cb){
    var newARR = []
    for (var i=0; i<arr.length; i++) {
        
        var temp = cb(arr[i],i,arr)
        //var temp = arr[i] * arr[i]
        newARR.push(temp)

    }
    return newARR
}

//console.log(map(arr))

var qb = map(arr, function(value){
    return value*value*value

})
 console.log(qb)

var mten = map (arr, function(){
    
})