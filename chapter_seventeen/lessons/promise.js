let p1 = new Promise((resolve,reject)=>{

    setTimeout(resolve,5000,'One')


})
let p2 = new Promise((resolve,reject)=>{

    setTimeout(resolve,3000,'Two')


})



// p1.then((v)=>{console.log(v)}).catch((e)=>{
//     console.log(e)
// })

p1.then((v)=>{
    console.log(v)
})

p2.then((v)=>{
    console.log(v)
})


function getIphone(isPassed){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            if(isPassed){
                resolve('i have got apple')
            } else {
                reject(new Error('You have failed'))
            }

        },2000)
    })
}


getIphone(false)
    .then((res)=>{
        console.log(res)
    })
    .catch((e)=>{
        console.log(e.message)
    })


    