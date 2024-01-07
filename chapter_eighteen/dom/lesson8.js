let li = createElement('li','four','list-group-item')



let list = document.getElementById('list')

list.appendChild(li)




let p1 = createElement('p','Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero quisquam nesciunt, magnam tempore veritatis pariatur. Deserunt praesentium ullam iure vero','lead')

let p2 = createElement('p','Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero quisquam nesciunt, magnam tempore veritatis pariatur. Deserunt praesentium ullam iure vero','lead')

let div = createElement('div')
append(div,[p1,p2])

list.insertAdjacentElement('beforebegin',div)


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




