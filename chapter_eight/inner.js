
function somethin(greet,name) {

    function sayhi() {
        console.log(greet,name)
    }
     sayhi()

}

somethin('Good night','Dhrubo')


function greeteveryone(greet,name) {
    function getfirsname() {
    if (name) {
        return name.split(' ')[0]
    } else {
        return ''
    }
}

 var message = greet + ' ' + getfirsname()

 console.log(message)

}


greeteveryone('Good Night' , 'AR Dhrubo')



