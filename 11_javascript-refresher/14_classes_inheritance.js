class Person {
    constructor(name) {
    this.name = name
    }
    sayHello() {
        console.log("Hi, I am " + this.name)
    }
}

class Student extends Person {
    study() {
        console.log(this.name + " is studying")
    }
}

let s1 = new Student("Lor")
s1.sayHello()
s1.study()

