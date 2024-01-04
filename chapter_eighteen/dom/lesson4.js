// Id,class,tagname,Name

// let title = document.getElementById('title')

// console.log(title)


// let paragraph = document.getElementsByClassName('lead')

// console.log(paragraph)


// let lists = document.getElementsByTagName('li')

// console.log(lists)


// let listitemone = document.getElementsByName('list-item-one')

// console.log(listitemone)


let title = document.querySelector('#title')
console.log(title)

let paragraph = document.querySelector('.lead')

console.log(paragraph)

let paragraphs = document.querySelectorAll('.lead')

console.log(paragraphs)


let lists = document.querySelectorAll('li')

console.log(lists)

let listitemone = document.querySelector('[name^= "list-item-one"] ')


console.log(listitemone)

