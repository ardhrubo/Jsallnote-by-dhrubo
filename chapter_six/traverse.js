// Traverse an array



// arr[arr.length -1]


// for (var i=0; i<arr.length; i++) {
    
    
//     //console.log(arr[i])
//  arr[i] = arr[i]+2
//  console.log(arr[i])

// }

var arr = [ 1, 2, 3, 4, 5, 6]

var sum=0

// for (var i=0 ; i<arr.length; i++) // Getting the sum of array list
// {
//     sum += arr[i]
// }

// console.log(sum)

// for (var i=0; i<arr.length; i++) { //getting the even numeber
//     if(arr[i]%2==0){
//         console.log(arr[i])
//     }
// }

// for (var i=0; i<arr.length; i++) { // getting the odd number
//     if (arr[i]%2!=0){
//         console.log(arr[i])
//     }
// }

// for (var i=0; i<arr.length; i++) { //getting the even numeber sum
//     if(arr[i]%2==0){
     
//       sum += arr[i]
     
//     }
// }
 
// console.log(sum)



for (var i=0; i<arr.length; i++) { // getting the some of odd number
   if (arr[i]%2!=0) {
    sum +=arr[i]

   }

}

console.log(sum)

