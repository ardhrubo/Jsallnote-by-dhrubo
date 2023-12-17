// Break Statement


isRunning = true;
while (isRunning) {

    console.log("I am not runninng")
     break
}

do {
    console.log('I am running')
    break
} while(isRunning) 


for ( var i=1; i<10; i++) {
    if (i%5==0) {
        break
    }
    else {
            console.log(i)
    }
}