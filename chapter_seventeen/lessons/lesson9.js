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


let p1 = Promise.resolve('I am a promise')

async function myAsyncFunc(){
    // p1.then(v=>alert(v))
    let v = await p1

}

myAsyncFunc()




