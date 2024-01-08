let btn = document.getElementById('btn')

// btn.onclick = function(e){
//     console.log(e)
// }

let list = document.getElementById('list')

btn.addEventListener('click',function(e){
    let item = list.lastElementChild.cloneNode(true)
    item.innerHTML = 'Newly created item'
    list.appendChild(item)
})


let box = document.getElementById('box')
box.addEventListener('mousemove',function(e){
    
    document.getElementById('x-value').innerHTML = e.offsetX
    document.getElementById('y-value').innerHTML = e.offsetY
    if (e.offsetY === e.offsetX){
        alert('50 50')
    }

})







