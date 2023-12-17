 // *** What is array ***

 // Array is a Data Structure wher we can organize multiple data under a single variable
  
//  arr[5] = 6
//  arr[10] =4

//  console.log(arr[2])
//  console.log(arr)

//  console.log(arr[7])

//  console.log(arr.length)

var arr = [1, 2, 3, 4];
var length = 0;

while (length < arr.length) {
    if (arr[length] === undefined) {
        break;
    } else {
        length++;
    }
}

console.log(length);



var arr2 = Array()
console.log(arr2)