


// var s = ` ahsdfh
// jhfasf
//     shafshfshf
    
//     sfhasfhsa`


// console.log(s);    

// function add(a,b) {
//     return a+b
// }


// let add = (a,b) => a+b


// console.log(add(1,2));


// let sqr = () => x*x



// function testMe(){
//     console.log(this);
// }

// testMe.call({})

// let obj = {
//     name: 'AR Dhrubo',
//     print: () => {
//         console.log(this)
//     }
// }
//  // there is no capacity to create this in arrow function




// obj.print()





// let obj = {
//     name: "Ar Dhrubo",
//     print: function (){
      
//         setTimeout(() => {
//             console.log(`Hello ${this.name}`)
//         },1000)
//     }
// }

// obj.print()


// function sqr(n=1){

//     return n*n
// }

// console.log(sqr())


// function greet(name="Dhrubo",msg="Hello"){

//     console.log(name.length)
//     console.log(`${msg} ! ${name}`)
// }

// // greet()



// let obj = {
//     start : 1,
//     end : 7,
//     [Symbol.iterator]:function(){
//         let currentValue = this.start
//         const self = this
//         return {
//             next(){
//                 return {
//                     done: currentValue>self.end,
//                     value: currentValue>self.end ? 'limit reached' : currentValue ++
//                 }
//             }
//         }
//     }
// }

// // for(let v of obj){
// //     console.log(v)
// // }


// let iterate = obj[Symbol.iterator]()

// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())


// function sum(...rest){

//     return rest.reduce((a,b)=> a+b)
 
// }

// console.log(sum(1,2,3))


// let a = [1,2,3]

// console.log(...a)

// let obj = {
//     a: 10,
//     b: 20,
//     c: 39
// }


// let obj2 = {...obj}


// console.log(obj2)


// let a = 10, b = 20

// let obj = {
//      a,
//     b,

//     print () {
//         console.log(this)
//     }
// }

// obj.print()



// var person = {
//     name : "Ar Dhrubo",
//     email: "yoo@gmail.com",
//     address: {
//         city: 'Dhaka',
//         country: 'Bangladesh'
//     }
// }

// let {name,email,address,address:{city,country}} = person

// console.log(name,email,address,city,country)


// let arr = [1,2,3,4,5]


// let [first,second, , ,last] = arr;


// console.log(first,second,last)



// var obj = {
//     a: 10,
//     b: 20
// }

// console.log(Object.entries(obj))

// var objArr = [
//     ['a',10],
//     ['b',20]
// ]

// console.log(Object.fromEntries(objArr))



let s1 = Symbol()
let s2 = Symbol('test')

// console.log(s1)
// console.log(s2)

// console.log(s1 === s2)


// non public properties.. class - here symbol help to hide




let toss = {
    HEAD: Symbol('HEAD'),
    TAIL: Symbol("TAIL")
}

toss.HEAD


// const arr = [1,2,3]


// function createIterator(collection){
//     let i = 0
//     return {
//         next(){
//             return {
//                 done: i>= collection.length,
//                 value: collection[i++]
//             }
//         }
//     }
// }


// let iterate = createIterator(arr)

// console.log(iterate.next())


// const arr = [1,2,3]


// let iterate = arr[Symbol.iterator]()

// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())


// let str = 'TEXT'
// let iteratenext = str[Symbol.iterator]()

// console.log(iteratenext.next())
// console.log(iteratenext.next())
// console.log(iteratenext.next())
// console.log(iteratenext.next())
// console.log(iteratenext.next())
// console.log(iteratenext.next())



let arr = [11,2,3]

// for(let v of arr){

//     console.log(v)

// }


// for (let v of "Ar Dhrubo"){
//     console.log(v)
// }


let obj = {
    start : 1,
    end : 5,
    // [Symbol.iterator]:function(){
    //     let currentValue = this.start
    //     const self = this
    //     return {
    //         next(){
    //             return {
    //                 done: currentValue>self.end,
    //                 value: currentValue>self.end ? 'limit reached' : currentValue ++
    //             }
    //         }
    //     }
    // }

    [Symbol.iterator]:function*(){
        let currentValue = this.start
        while(currentValue<=this.end){
            yield currentValue++
        }
    }
}

// for (let v of iterate){

//     console.log(v)

// }

// let iterate = obj[Symbol.iterator]()

// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())

// function* generate(){
//     yield 1
//     yield 2
//     yield 3
// }

// function* generate(collection){

// for (let i=0;i<collection.length;i++){
//     yield collection[i]
// }


// }


// let it = generate(arr)

// console.log(it.next())

// console.log(it.next())

// console.log(it.next())

// console.log(it.next())



// let set = new Set([1,2,3])

// let set = new Set([1,2,5,3])

// set.add(5)
// set.add(6)

// console.log(set)
// console.log(set.size)

// set.clear()
// set.delete(5)
// console.log(set.has(1))

// console.log(set)
// console.log(set.keys())
// console.log(set.values())


// let keyIterate = set.keys()
// console.log(keyIterate.next())


// function isIterable(obj){
//     return typeof obj[Symbol.iterator] === 'function'
// }

// console.log(isIterable(set));



// for(let v of set){
//     console.log(v)
// }


// console.log(set.entries())



let map = new Map([
    ['a',19],
    ['b',20],
    ['c',30]
])


map.set('d',40)

map.set({name:'Ar Dhrubo'},45)

// map.delete('c')
// console.log(map)
// console.log(map.get('b'))

// console.log(map.values())
// console.log(map.keys());
// console.log(map.entries())


// for(let [k,v] of map){
//     console.log(k,v)
// }


// map.forEach((v,k)=>{console.log(k,v)})


let a = {a:10},b = {b:20}
// let set = new Set([a,b])




// a = null


// console.log(set)

// let arr2 = [...set]

// console.log(arr2)



// console.log(arr2[0])

// // weak set


// let weakSet = new WeakSet([a,b])


// weakSet.delete(b)

// console.log(weakSet)



// let weakMap = new WeakMap([[a,45],[b,35]])

// a= null

// console.log(weakMap.get(a))
// console.log(weakMap.has(a))


// function Rectangle(width,height){
//     this.width = width
//     this.height = height
// }

// Rectangle.prototype.draw = function (){
//     console.log(this)
//     console.log('Drawing>>>')
// }

// let rect1 = new Rectangle(12,15)

// console.log(rect1.draw())



// class Rectangle{
//     constructor(width,height){
//         this.width = width
//         this.height = height
//         this.another = function(){
            
//         }
//     }
//     name = "ar dhrubo"
//     draw(){
//         console.log("Drawing....")
//     }
//     test(){
//         console.log("hello")
//     }
// }


// let rect1 = new Rectangle(45,34)
// console.log(rect1)

// console.log(typeof Rectangle)

class Person{
    constructor(name,email){
        this.name = name
        this.email = email
    }
    print(){
        console.log(this.name,this.email)
    }
    test(){
        console.log(this)
    }
    static create(str){
        let person = JSON.parse(str)
        return new Person(person.name,person.email)
    }

}

let str = '{"name":"AR Dhrubo","email":"MR Dhrubo"}'

let p1 = Person.create(str)

console.log(p1)
console.log(p1 instanceof Person)
p1.print()



// function Shape(){
//     this.draw = function(){
//         console.log(this)
//     }
// }

// let s12 = new Shape()
// let another = s12.draw

// another()


// let test = p1.test
// test()


// const _radius = Symbol()

// const _name = Symbol()

// const _draw = Symbol()

// class Circle{
//     constructor(radius,name){
//         this[_radius] = radius 
//         this[_name] = name
//     }
//     [_draw](){
//         console.log('Drawing...')
//     }
// }



// let c1 = new Circle(2,'Red')

// console.log(c1)


// console.log(Object.getOwnPropertyNames(c1))
// let key  = Object.getOwnPropertySymbols(c1)[1]
// console.log(c1[key])




const _radius = new WeakMap()

const _name = new WeakMap()

const _resize = new WeakMap()

class Circle{
    constructor(radius,name){
        this.size = 100
        _radius.set(this,radius)
        _name.set(this,name)
        _resize.set(this, () =>{
            console.log(this.size)
        })
    }
    draw(){
        console.log('Drawing...')
        console.log(_radius.get(this),_name.get(this))
        _resize.get(this)()
    }
}



let c1 = new Circle(2,'Red')
c1.draw()





