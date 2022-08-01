
let a = [1,2,3,4]
let c = {a,b} // same as c = Object {Array(4), b: Function}
/**
 * test accessing/assigning let variables (closure-level scope) before their 'let..' line
 */
//console.log(g) // Run time error: ReferenceError: Cannot access 'g' before initialization
//g = "error" // Run time error: ReferenceError: Cannot access 'g' before initialization
/**
 * test accessing/assigning var variables (function-level scope) before their 'let..' line
 */
console.log('varVariable: ', varVariable) // prints undefined
varVariable = "error" // declares it as global and  assigns 'error'
console.log('varVariable: ', varVariable) // prints error
/**
 * tests what happens if we try to access unhoisted variable i.e undeclared variables eg : x = 5
 * here they type of x is not known since it is inferred from its value at run time.
 *
 */
//console.log('unhoisted variable: ', unhoistedVar) // ReferenceError: unhoistedVar is not defined

function b(a) {
    console.log('a in b() before push', a)
    if (arguments.length >0)
        a.push(5)
    console.log("a  in b() after push", a)
    // re-assigning a variable with objects makes a local variable ie.
    // the outer a is not affected by this line.
    a = [5,6,7,8,9]
    console.log("a  in b() after re-assign", a)
    return function () {
        console.log('c  in b()() before re-assigning primitive 5: ', c)
        c = 5
        console.log('c in b()()  after assigning primitive 5: ', c)

        console.log('c in b()()  after assigning array object [2,3,9,0]: ', c)
        // enable next line and see what the outer-most block will print as value of c.
       // c = {a:2,b:3,c:9,d:0}
        console.log('c in b()()  after assigning key-value object {a:2,b:3,c:9,d:0}: ', c)
    }
}
let g = "g" // this is two step process: 1. g = undefined 2. g = 'g'
h = "I am h"
var varVariable= "var"
unhoistedVar = "unhoisted"
console.log('varVariable after declaration: ', varVariable) // prints var

console.log("a in outer most scope initial value of ",a)
b()
console.log("a in outer most after calling  b(): ", a)
b(a)()
console.log("a in outer most after calling  b(a): ", a)
console.log("c in outer most after calling  b([1,2,3,4])(): ", c)

//part of exam



function test(a,b) {
    let z = 5
    if (z>=5) {
        let z = 90 //let has its scope in the nearest block while var has nearest function
        // var z = 90 would try to be at test() level and would conflict with var --> already declared in the function
        console.log('inner z is: ', z)
    }
    console.log('outer z is: ', z)
    a++
    return function () {
        b++
        return a+b
    }
}
let fn1 = test(2,4)
console.log(test(1,2)())
console.log(fn1())
console.log(fn1())
console.log(fn1())
