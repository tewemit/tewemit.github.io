"use strict"

/**
 * Function Signature
 * • If a function is called with missing arguments(less than declared), the missing values are set to : undefined
 * • Extra arguments are ignored
 * @param a
 * @returns {number}
 */

/**
 *
 * functions expression and function declarations
 */

console.log(square(2))
// next line throws undefined exception., not hoisted
//console.log(squareAsExpression(2))

function square(a){
    return a*a
}
let squareAsExpression = function(b) {
    return b*b
}

/**
 * write a function that can be called with any number of arguments and returns the sum of the arguments.
 * @param a
 * @returns {number}
 */
function sumArguments() { // can also be written as sumArguments(...args)
    let  args = [...arguments]
    //args.reduce((sum, arg) => {return sum+=arg}, 0)
    return args.reduce((sum, arg) => sum+=arg) // sum takes the first arg as initial value
}

/**
 * Using Rest Parameters
 * The rest parameter syntax allows a function to accept an indefinite number of arguments as an array
 *
 * @param a
 * @returns {number}
 */
function sumUsingRestParams(...params) { // can also be written as sumArguments(...args)
    //args.reduce((sum, arg) => {return sum+=arg}, 0)
    return params.reduce((sum, arg) => sum+=arg) // sum takes the first arg as initial value
}

/**
 * Using spread operator:- used to unpack iterable elements (Array, strin, objects) where:
 * zero or more
 * arguments for functions or
 * elements for arrays are expected
 * @param a
 * @returns {number}
 */
function concatArraysUsingSpreadOperator(...arrays) {
  return   arrays.reduce((newArray, array) => {
      if (Array.isArray(array)) {
        return [...newArray,...array]
      }
      else if (typeof array === "object"){
          return [...newArray, array]
      }
      // primitive
      return [...newArray, array]
    })
}
// the above function can be shortend using arrow/lambda function  as
let squareAsExpression2 = (a) => a*a // same as a => a*a
// call functions
console.log("square of 4: ", square(4))
console.log("squareAsExpression  of 4: ", squareAsExpression(4))
console.log("squareAsExpression2: ", squareAsExpression2(4))

console.log("Arguments: sum of arguments: ", sumArguments(1,2,3,4,556,6,7,8,10))
console.log("Reast: sum of arguments: ", sumUsingRestParams(1,2,3,4,556,6,7,8,10))

console.log("Spread operator: ",  concatArraysUsingSpreadOperator([1,2,3,4,4],"bbd", ["a","b"], {a:1, b:2}))