let titile = document.getElementById('title')

title.style.color = 'orange'

titile.style.fontSize = '4rem'
titile.style.background = 'green'



console.log(titile.style)



let styleObj = {
    background: 'green',
    fontSize:'30px',
    color: '#efefef'
}


let list = document.getElementById('list');

[...list.children].forEach(li => Object.assign(list.style,styleObj))


Object.assign(list.style, styleObj)




console.log(list.style)



