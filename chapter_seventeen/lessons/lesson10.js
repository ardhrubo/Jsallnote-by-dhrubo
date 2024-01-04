let asyncIterable = {
    [Symbol.asyncIterator](){
        let i = 0;
        return {
            next(){
                if(i<5){
                    return Promise.resolve({
                        value: i++,
                        done:false
                    })
                } else{
                    return Promise.resolve({
                        done:true
                    })
                  
                }
            }
        }

    }
}

let iterate = asyncIterable[Symbol.asyncIterator]();

(async function(){
   
   
    console.log(await iterate.next())
    console.log(await iterate.next())
    console.log(await iterate.next())
    console.log(await iterate.next())
    console.log(await iterate.next())
    console.log(await iterate.next())

});
// ()

(async function(){
    for await (let v of asyncIterable){
        console.log(v)
    }
})
// ()


async function*  myAsyncGenerator(){
    let i = 0;
    while(true){
        if (i>5) return
        yield await Promise.resolve(i++)
    }
};

(async function(){
    for await (let v of myAsyncGenerator()){
        console.log(v)
    }
})()















