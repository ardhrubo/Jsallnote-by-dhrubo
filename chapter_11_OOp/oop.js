/* 

Oop is a programming paradigm based on the concept of object
which can contain data in the form of fileds (often known as attributes)
and code, in the form of procedures /.


*/






class Rect {
    constructor(width,height){
        this.width=width
        this.height=height
    }
    calculateArea(){
        return this.width*this.height
    }
    calculateRange(){
        return 2*(this.width+this.height)
    }

}

var rect = new Rect(10,11)

console.log(rect.calculateRange())







