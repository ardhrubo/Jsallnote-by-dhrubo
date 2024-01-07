let li = createElement('li','four','list-group-item')



let list = document.getElementById('list')

list.appendChild(li)




// let p1 = createElement('p','Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero quisquam nesciunt, magnam tempore veritatis pariatur. Deserunt praesentium ullam iure vero','lead')

// let p2 = createElement('p','Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero quisquam nesciunt, magnam tempore veritatis pariatur. Deserunt praesentium ullam iure vero','lead')

// let div = createElement('div')
// append(div,[p1,p2])

// list.insertAdjacentElement('beforebegin',div)


// let container = document.getElementById('container')

// container.appendChild(div)


function createElement(tagName,innerHTML,className){

    let tag = document.createElement(tagName)
    tag.innerHTML = innerHTML || ''
    tag.className = className || ''
    return tag
    
    }
    

function append(parent,children){

    children.forEach(child=> parent.appendChild(child))

}


let firstChild = list.firstElementChild
setTimeout(()=>{

    firstChild.innerHTML = firstChild.innerHTML + '(modified)'
    firstChild.style.color =' #34e076'



},5000)


let lastitem = list.lastElementChild.cloneNode(true)

lastitem.innerHTML = 'five'



list.appendChild(lastitem)



// setTimeout(()=>{
//     list.lastChild.remove()
// },5500)



console.log(list.attributes)
console.log(list.getAttributeNames())
console.log(list.getAttributeNode('class'))
console.log(list.getAttribute('id'))
console.log(list.classList)

// lastitem.id = 'last-item'
lastitem.setAttribute('id','last-item')

let attr = document.createAttribute('title')

attr.value = 'I am Title'

lastitem.setAttributeNode(attr)






