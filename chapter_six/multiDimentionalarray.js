// Multi dimentional array

var arr = [

    [78, 71, 80, 90],
    [80, 90, 99, 100],
    [76, 88, 90, 83]



]


//console.log(arr[0][1])
//console.log(arr[1][1])

 for (var i=0; i<arr.length; i++) {
     
    for (var j=0; j<arr[i].length; j++) {
        console.log('Element ' + i+ ': ' + arr[i][j])
    }

 }


