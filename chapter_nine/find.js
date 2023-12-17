 var arr =[1,2,3,4,5,6,7,8,9,40,30,4,0]

var resutl = arr.find(function(value,index){
    return value == 9
})


var result = arr.findIndex(function(value){
 return value ==9
})

console.log(result)

console.log(resutl)




function myFind(arr,cb) {
    for(var i=0; i<arr.length; i++){
        if(cb(arr[i])){
            //return arr[i]
            return i
        }
    }
}



var result1= myFind(arr,function(value){
    return value==9
})


console.log(result1)