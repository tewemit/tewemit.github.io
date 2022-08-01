// create empty array
let array1 = []
// create and populate array
let array2 = [1, 2, 3, 4, 4, "b"]

// change the value of an array at index n
function changeValueAtPositionN(arr, n, value) {
    arr[n] = value
}

// remove the value of an array at index n
function removeValueAtPositionN(arr, n) {
    // spice(n,i) - remove n elements starting at index i
    arr.splice(n, 1)
}

// delete array
function deleteArray(arr) {
    arr = []
}

// empty array
function emptyArray(arr) {
    // setting legth to 0
    //arr.length = 0
    // or assigning empty array
    arr = []
}

// copy array
function copyArray(arr) {
    // using map
    copy = arr.map(el => el)
    console.log('copy using map: ', copy)
    // using spread operator which is not good if array has sub arrays or objects
    console.log('copy using spread opr: ' + [...arr])
    // using reduce
    /**
     * numbers.reduce((newArray, element) => {
     *   newArray.push(element);
     *
     *   return newArray;
     * }, []);
     */
    // using JSON
    console.log("Copy using JSON: ", JSON.parse(JSON.stringify(arr)));
    /**
     * Array.concat (Shallow copy)
     * concat combines arrays with values or other arrays.
     */
    console.log('using concat: ' + arr.concat([]))
    // using Array.from
    console.log('using Array.from ' + Array.from(arr))
    console.log('using Array.of ' + Array.of(arr))
    console.log('using Array.from and mapFunction to operate on each element' + Array.from(arr, (el) => "prefix-" + el))
    // using slice
    return arr.slice() // return new piece

}

//get subset of an array
function getSubsetOfArray(arr, start, end) {
    // using slice
    return arr.slice(start, end)
}

// slice array
function sliceArray(arr) {

}

// splice array
function spliceArray(arr) {

}

// divisible by n
function getElementsDivisibleByN(arr, n) {
    return arr.filter(el => typeof el == "number" && el % n == 0)
}

// sum of numbers divisible by n
function sumOflementsDivisibleByN(arr, n) {
    return arr.filter(el => typeof el == "number" && el % n == 0).reduce((sum, el) => sum + el, 0)
}

// Get all unique values in a JavaScript array (remove duplicates)
function removeDuplicateElements(arr) {
    let newList = new Set()
    console.log("unique using set", arr.map(el => newList.add(el)))
    return newList;
}

// Find Numbers which appear only once in a given Array
function findUniqueElements(arr) {
    // using forEach
    let result = []
    console.log("O(n)", arr.forEach(el => arr.indexOf(el) == arr.lastIndexOf(el) ? result.push(el) : ""))
    console.log("uniques using forEach: ", result)
    //better using filter
    return arr.filter(el => arr.indexOf(el) == arr.lastIndexOf(el))

}

// print type of array elements
function printTypeOfElements(arr) {
    arr.map(el => console.log(`type of ${JSON.stringify(el)} is ${typeof el}`))
    return arr.reduce((accu, el) => {
        accu.push(typeof el)
        return accu
    }, [])
}

// Array destructure
/**
 * From the given array, build an object that has array elements as properties. The name of the property is
 * <typeof the element>+index
 * destructureArray([50,”apple”,{a:1}])=>
 * {number0:50,string1:”apple”,object2:{a:1}}
 * @param arr
 * @returns {*}
 */
function destructure(arr) {
    return arr.reduce((result, el, index) => {
        result[typeof el + index] = el
        return result
    }, 0, {})

}

function findIndexOfFirstOddNumber(arr) {
    // iterate and quit on the first match
    for (let el of arr) {
        if (el % 2 === 1) {
            return arr.indexOf(el)
        }
    }
}
// using array methods [2, 3, 4, 5]
function findIndexOfFirstOddNumberUsingArrayMethods(arr) {
    // iterate and quit on the first match
    console.log("find index of array first odd:",  arr.findIndex(e => e%2 ===1))
   /* let count =0
    let result = -Infinity
        arr.forEach(el => {
        if (el%2 ===1){
            ++count
            result = arr.indexOf(el)
            return result
        }
    }) */

}

/**
 * Index of the last odd number in an array
 * @param arr
 */
function findIndexOfLastOddNumberUsingArrayMethods(arr) {
    // iterate and quit on the first match
    let str = "test"
    console.log('reversed string', str.split("").reverse().join("k"))

    console.log("Reduce right: reverse of [[0, 1], [2, 3], [4, 5]]: " , [[0, 1], [2, 3], [4, 5]].reduceRight((accu, el) =>
        accu.concat(el)))

   /*
    let reversed = arr.reverse()
    console.log('reversed array', reversed)
   // Array.prototype.findLastIndex(arr.filter(e => e%2 ===1))

    // let's reverse the array and use findIndex ()

    let index = reversed.findIndex(e => e%2 ===1)
    return index >= 0 ? arr.length -1 - index : index // else -1
     */
    // findLast and findLastIndex are added in Nodejs 18
    console.log("Last odd element ", arr.findLast(el => el%2 === 1))
    return arr.findLastIndex(e => e%2 ===1)

}
function flattenArraysToOne(arr) {
    let flattened = arr.reduce((accu, el) => {
        // concat and push don't flatten the values
        accu = [...accu, ...el]
        return accu
    }, [])
    console.log(`flattened: `, flattened)
}

function convertArrayToString(arr) {
    console.log("Array to string", arr.join())
    console.log("Array to string using new :", new String(arr))

}

function convertStringToArray(str) {
    // Option 1:  string.split('')
// Option 2:  [...string];

// Option 3: Array.from(string);

// Option 4: Object.assign([], string); // copies string to the empty array and returns it

    console.log("String to Array", [...str].filter(el => el !== ","))

}

/**
 *
 * Each element in the array is the concentation of key+value in the object.
 * convertObjectToArray({a:1,b:[1,2],c:”string”,d:{x:1,y:2}}
 * => [a1,b12,cstring,dx1,dy2]
 * @param obj
 * @returns {*[]}
 */
function convertObjectToArray(obj) {
    let array = []
    Object.getOwnPropertyNames(obj).map(pn => {
        if (Array.isArray(obj[pn])) {
            array.push(pn + obj[pn].join(""))
        } else if (typeof obj[pn] === "object") {
            array.push(pn + convertObjectToArray(obj[pn]))
        } else {
            array.push(pn + obj[pn])
        }
    })
    return array
}

/**
 * Find max of array elements using the arguments object.
 * arguments holds the parapeters passed to the function
 */
function findMaxUsingForLoop() { // receives any number of arguments, same as ...rest
    let max = -Infinity; // the smallest possible number
    for (let i = 0; i < arguments.length; i++) {

        if (arguments[i] > max) {
            max = arguments[i];
        }
    }

    return max;
}

/**
 * Find max of array elements using reduce operation and ...rest
 *
 */
function findMaxUsingReduceAndRest(...rest) { // receives any number of arguments, same as ...rest
  return  rest.reduce((max, el)  => {
      console.log("ele: ", el)
        max < el ? max = el : ""
        return max
    }, -Infinity)
}

/**
 * Return array of {property: value} objects by extracting properties of name, ‘a’ (any given name)
 * eg:
 * [{a:1,b:2},{a:2,b:4]=> [{a:1},{a:2}]
 * @param obj
 * @param prop
 */
function collectObjectsThatHaveGivenPropertyName(objArray, name) {
    let filterObjects = []
    return objArray.reduce((accu, obj) => {
        if (obj.hasOwnProperty(name)) { // assume no nested objects
            let o = {}
            o[name] = obj[name]
            filterObjects.push(o)
            accu.push(o)
        }
        return accu
    }, [])

}

function getOldestPersonsName(objArray) {
    let oldest = objArray[0]
    let p = objArray.forEach(p => {
        if (p.age > oldest.age) {
            oldest = p;
        }
    })

    return oldest.name
}

// using sort, descending
function getOldestPersonsNameUsingSort(objArray) {
    return objArray.sort((p1, p2) => p1.age < p2.age)[0].name
}

// get the age of the youngest person
function getYoungestPersonsAge(objArray) {
    return objArray.sort((p1, p2) => p1.age > p2.age)[0].age
}

// get the person whose age is b/n a and b, assume it's inclusive
function getPersonWithAgeBtnAandB(objArray, a, b) {
    return objArray.filter(p => p.age >= a && p.age <= b)
}

function removeObjectProperty(obj, prop) {
    console.log("Before remove pro", JSON.stringify(obj))
    console.log("deleting", prop)
    console.log("After remove", delete obj[prop], JSON.stringify(obj))
}

function updateObjectProperty(obj, prop, value) {
    console.log("Before update ", JSON.stringify(obj))
    obj[prop] = value
    console.log("After update ", JSON.stringify(obj))

}

function objectCRUD() {
    // create empty object
    let obj = {}
    // create object with properties
    let obj2 = {a: 1, b: 2}
    // updage or add, if missing, a property
    obj.a = "first prop" // similar for arrays -> arra[]
    console.log("obj, obj2: ", obj, obj2)
    // delete property
    delete obj.a
    // freeze object to prevent changes
    Object.freeze(obj)
    // empty object for deletion
    obj = {} // then obj will be garbage-collected.
    // checkIf property exists in object
    obj2.hasOwnProperty("a") // returns true or false
    console.log(obj2.hasOwnProperty("a"))
    console.log(obj, obj2)


}

function cloneObject(obj) {
    /**
     * we can use the following but they create shallow copies => underlying objects shaare the same reference
     * Thus not alwyas but JSON.stringify().Parse() give a deep copy
     * 1. slice()
     * 2. using loops
     * 3. spread operator
     * 4. Array.of, Array.from
     */
    let obj2 = {...obj}
    console.log("cloned Object: ", JSON.stringify(obj2))
    console.log(Array.of(obj2), Array.isArray(obj2))
    // using JSON stringify and parse
    console.log("Deep copy using JSON: ", JSON.parse(JSON.stringify(obj)))
    return JSON.parse(JSON.stringify(obj))
}

// concat array
// call functions
console.log(`array value at 2 is ${array2[2]}`)
console.log('type of array2 is: ' + typeof array2) // object then we can use array[n]
console.log("Replace array element at position n with v: ", changeValueAtPositionN(array2, 2, 23), array2)
console.log(`array value at 2, after change is ${array2[2]}`)
removeValueAtPositionN(array2, 2)
console.log(`array value at 2, after remove at index 2 is ${array2[2]}`)
console.log(`copy of array2: ${array2} is ${copyArray(array2)}`)
console.log('Subset of array2 starting from index 1 to 2 is : ' + getSubsetOfArray(array2, 1, 2))
console.log('empty anrray 2: ', emptyArray(array2))
console.log('numbers divisible by 2 :', getElementsDivisibleByN(array2, 2))
console.log('sum of numbers divisible by 2 :' + sumOflementsDivisibleByN(array2, 2))
console.log('unique number: ', findUniqueElements(array2))
console.log('Remove duplicates: ', removeDuplicateElements(array2))
console.log("======")
printTypeOfElements(array2)
printTypeOfElements([50, "apple", {a: 1}])
destructure(array2)
console.log("destructure", destructure([50, "apple", {a: 1}]))

console.log("Index of first odd element in : ", array2, "  is ", findIndexOfFirstOddNumber(array2))
console.log("Index of first odd element in: ", [2, 3, 4, 5], array2, "  is ", findIndexOfFirstOddNumber([2, 3, 4, 5]))
findIndexOfFirstOddNumberUsingArrayMethods([2, 3, 4, 5])
console.log("Index of last Odd Num: ",  findIndexOfLastOddNumberUsingArrayMethods([2, 3, 4, 5]))
//Flatten this array to one single array using reduce Var array = [[0, 1], [2, 3], [4, 5]];
flattenArraysToOne([[0, 1], [2, 3], [4, 5]])
convertArrayToString(array2)
convertStringToArray("1,2,3,4,5,6,6")
convertStringToArray("12345678")
removeObjectProperty({id: 2, name: "test", age: 30, class: "wap"}, "age")
updateObjectProperty({id: 2, name: "test", age: 30, class: "wap"}, "age", 35)
console.log("Deep copy using JSON: ", cloneObject({id: 2, name: "test", age: 30, class: "wap"}, "age", 35))
objectCRUD()
console.log(convertObjectToArray({a: 10, b: "5os"}))
console.log("Converting Object to Array", convertObjectToArray({a: 1, b: [1, 2], c: "string", d: {x: 1, y: 2}}))
console.log(collectObjectsThatHaveGivenPropertyName([{a: 1, b: 2}, {a: 2, b: 4}], "a"))
console.log(getOldestPersonsName([{name: 'Ram', age: 20}, {name: 'Lakshman', age: 15}]))
console.log(getOldestPersonsNameUsingSort([{name: 'Ram', age: 20}, {name: 'Lakshman', age: 15}]))
console.log(getYoungestPersonsAge([{name: 'Ram', age: 20}, {name: 'Lakshman', age: 15}]))
console.log(getPersonWithAgeBtnAandB([{name: 'Ram', age: 20}, {name: 'Lakshman', age: 15}], 15, 16))
console.log([..."test"])

console.log("Max using reduce and rest: ", [12,3,4,56,4], findMaxUsingReduceAndRest(2,3,4,56,4))
console.log("Max using for loop: ", [12,3,4,56,4], findMaxUsingForLoop(12,3,4,56,4))