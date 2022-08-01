

console.log("a: " + a); //undefined
b(); // function is called!
var a = 5; // if we remove this line we get error 'a is not defined'
function b() {
    console.log("function is called!");
}