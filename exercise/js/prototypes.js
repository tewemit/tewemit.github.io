'use strict'
let user = {a: 1}
console.log(user.__proto__)
let animal = [1, 2, 3, 4]
let rabbit = [3, 4, 5]
console.log(rabbit)
// rabbit__proto__ == animal
console.log()

function User(name, alias) {
    this.name = name;
    this.alias = alias;
    this.isAdmin = false;
     this.printName =  function () {
         console.log(this.name)
    }
    function changeName() {
        "".splice()
    }
}
// __proto__ is the actual object that is used in the lookup chain to resolve methods, etc. prototype is the object that is used to build __proto__ when you create an object with new:
//
// ( new Foo ).__proto__ === Foo.prototype
// ( new Foo ).prototype === undefined

let guest