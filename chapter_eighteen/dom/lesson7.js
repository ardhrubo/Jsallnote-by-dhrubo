// Traversing DOM elements

let list = document.getElementById('list')

// let parents = list.parentElement

// console.log(parents)

// let childs = list.children 
// console.log(childs)

// console.log(list.previousElementSibling)
// console.log(list.nextElementSibling)

// let li = document.querySelector('li')
// console.log(li.nextElementSibling)


// console.log(list.firstElementChild)

// console.log(list.lastElementChild)


let listItem = document.getElementsByTagName('li')

// let listItems = Array.from(listItem)

// let listItems = Array.prototype.slice.apply(listItem) converting into array

let listItems = [...listItem]




listItems.forEach((li,ind) => {
    let text =li.innerHTML
    li.innerHTML = `(${ind+1}) ${text}`
})









