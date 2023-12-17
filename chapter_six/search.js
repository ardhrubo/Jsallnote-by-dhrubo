var arr = [ 3, 4, 5, 6, 7, 9, 23, 43, 22, 454]

var find = 324

var isFound = false


for (i=0; i<arr.length; i++) {



    if (arr[i]==find)
    {
        console.log( 'The data is at ' + i)
        isFound=true
        break
    }

}

if (!isFound) {
    console.log('Data is not there')
}
