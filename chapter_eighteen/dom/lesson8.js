
let li = document.createElement('li')

li.className = 'list-group-item'

li.setAttribute('title','I am fifth item')

li.innerHTML = 'Four'

let list = document.getElementById('list')

list.appendChild(li)

