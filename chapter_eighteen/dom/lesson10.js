let btn = document.getElementById('btn')

// btn.onclick = function(e){
//     console.log(e)
// }

let list = document.getElementById('list')

btn.addEventListener('click',function(e){
    let item = list.lastElementChild
    let newItem ;
    if(item){
        newItem = item.cloneNode(true)
    }else{
        newItem = document.createElement('li')
    }
    newItem.innerHTML = 'Newly created item'
    list.appendChild(newItem)

});



list.addEventListener('click',function(e){
     if(this.contains(e.target)){
        e.target.remove()
     }
})



// Event Delegation Problem
// [...list.children].forEach(li=>{
//     li.onclick = function(e){
//         e.target.remove(e)
//     }
// })



let box = document.getElementById('box')
box.addEventListener('mousemove',function(e){
    
    document.getElementById('x-value').innerHTML = e.offsetX
    document.getElementById('y-value').innerHTML = e.offsetY
    if (e.offsetY === e.offsetX){
        alert('50 50')
    }

})







