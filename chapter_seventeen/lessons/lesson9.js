// //

// async await function manual 

// function myPromise() {
//     return Promise.resolve('Test value')
// }

// console.log(myPromise())


// async function test(){
//     return 'test'
// }

// test().then(v=> console.log(v))


let p1 = new Promise(resolve => {
    setTimeout(resolve,5000,'Test value')
})

async function myAsyncFunc(){
    // p1.then(v=>alert(v))
    let v = await p1
    console.log(v)

}

myAsyncFunc()




