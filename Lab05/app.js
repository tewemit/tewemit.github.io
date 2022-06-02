/** 
* Solutions to Lab05 questions 
*
*/

"use strict"

// Question1. get maximum of two numbers using if-else structure 
function maxNumber(a, b) {
    return a > b ? a : b;
}
document.write(`1. Max number of (17, 9) is: ${maxNumber(17, 9)} <br>`)

// Question 2 - maxOfThree
function maxOfThree(a, b, c) {
    return a > b ? (a > c ? a : c) : (b > c ? b : c)
}
document.write(`3. Max of three numbers (19,11,3)  is:  ${maxOfThree(19, 11, 3)} <br>`)


// Question 3 
function isVowel(char) {
    const vowels = ["A", "E", "I", "O", "U"]
    return vowels.includes(new String(char).toUpperCase())
}
document.write("4. isVowel(str):<br> ")
document.write("  4.1. isVowelr('a'): " + isVowel('a') + "<br>")
document.write("  4.2 isVowel('b'): " + isVowel('b') + "<br>")
document.write("  4.3 isVowel('u'): " + isVowel('u') + "<br>")

// Quesion4, a sum()
function sum(arr) {
    return arr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0)
}
// Question4, b multiple()
function multiply(arr) {
    
     return   arr.reduce((accumulator, currentValue) => {
            return accumulator * currentValue
        }, 1)
}

document.write("4. Sum of array elements (1,2,3,4): " + sum([1, 2, 3, 4]) + "<br>")
document.write("4. Product of array elements (1,2,3,4): " + multiply([1, 2, 3, 4]) + "<br>")

// Question5. reverse()
function reverse(str) {
    let ret = "", i
    let len = str.length
    for (i = len - 1; i >= 0; i--) {
        ret += str[i];
    }
    return ret
}
document.write("5. Reverse text of (jag testar) is: " + reverse("jag testar") + "<br>")


// question 6. findLongestWord
function findLongestWord(arr) {
    
   return arr.reduce((a,b) => {
        return a.length < b.length ? b : a
    },'')
    
}
document.write("6. Longest Word of array (Japan, Madagascar, Canada, Nigeria): " + findLongestWord(["Japan", "Madagascar", "Canada", "Korea"]) + "<br>")

// question 7. filterLongWords
function filterLongWords(arr, length) {
    return arr.filter(e => e.length > length)

}
document.write("7. Filter Long words longer than 5 (USA, Uganda, , Kenya, Canada, Korea): " + filterLongWords(["USA", "Mongolia", "Canada", "Korea"], 4) + "<br>")


// question 8. 
function computeSumOfSquares(arr) {
    return arr.reduce((accumulator, n) => accumulator + n * n, 0)

}
document.write("8. computeSumOfSquares([1,2,3]): " + computeSumOfSquares([1,2,3]) + "<br>")

// question 9. 
function printOddNumbersOnly(arr) {
    return arr.filter(n => n%2 === 1)

}
document.write("9. printOddNumbersOnly([1,2,3,4]): " + printOddNumbersOnly([1,2,3,4]) + "<br>")

// question 10. 
function computeSumOfSquaresOfEvensOnly(arr) {
    return arr.filter(n => n%2 === 0).reduce((accumulator, n) => accumulator + n * n, 0)

}

document.write("10. computeSumOfSquaresOfEvensOnly([1,2,3,4,5]): " + computeSumOfSquares([1,2,3,4,5]) + "<br>")

// question 11. 
document.write("11. Sum of array elements (1,2,3,4): " + sum([1, 2, 3, 4]) + "<br>")
document.write("11. Product of array elements (1,2,3,4): " + multiply([1, 2, 3, 4]) + "<br>")

document.write("12. computeSumOfSquaresOfEvensOnly([1,2,3,4,5]): " + computeSumOfSquares([1,2,3,4,5]) + "<br>")


// question 13. 
function findSecondBiggest(arr) {
    let result = [0,0]
    arr.map(n =>  {
        if(result[0]< n)
        result[0] = n;
        else if (result[1]< n && result[0]> n)
        result[1] = n
    })
    return result
}

document.write("13. findSecondBiggest([1,2,3,4,5]): " + findSecondBiggest([1,2,3,4,5]) + "<br>")


// Question 15


//Function to write current time to our browser
function tick(){
    let date = new Date()
    document.getElementById('time_ticker').innerHTML = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
   }
   
  
  //the runner
  var t = setInterval( tick, 1000);