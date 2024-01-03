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


async function fetchData(){

    try{
        let res = await fetch('https://jsonplaceholder.typicode.com/usesrs')
        let data = await res.json()
    
        let names = data.map(u=>u.name)
    
        console.log(names)
    }catch(e){
        console.log(e.message)
    }

}

let promises = [Promise.resolve(1),Promise.resolve(2),Promise.resolve(3)]

async function promiseArr(){
    let result = await Promise.all(promises)
    console.log(result)
}

promiseArr()

