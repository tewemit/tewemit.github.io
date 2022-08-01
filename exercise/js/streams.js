"use strict"
let arr = [10,20,4]

arr.map((e,index) => e%10 == 0? console.log( index) : "" )
let result = arr.reduce((accu,el,index) => {
    /** next two lines can be removed and use {[index]: el} while pushing
    let a = {}
    a[index] = el

     */
    accu.push({[index]: el})
    return accu
}, [])

console.log(result)