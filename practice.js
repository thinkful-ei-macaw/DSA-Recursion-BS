
function sheep(num) {
  if (num === 0) {
    console.log("All sheep jumped over the fence")
    return "All sheep jumped over the fence"
  }

  console.log(`${num}: Another sheep jumps over the fence`) 
  return sheep(num-1) 
}

sheep(3)


function powerCalculator(base, exp) {
  if (exp <= 0) {
    return "exponent should be >= 0"
  }
  else if (base <= 0) {
    return "base should be >= 0"
  }
  else if (exp === 1) {
    return base
  }
  exp--;
  return base * powerCalculator(base, exp)
  }

powerCalculator(10,4)
powerCalculator(10,2)

// input: string
// output: gnirts

// string
// tring  s
// ring   ts
// ing    rts
// ng     irts
// g      girts
//        gnirts
function reverseString(string, newS='') {
  if  (!string.length) {
    return ''
  }
  let char = string.slice(string.length-1)
  newS = newS + char
  string = string.slice(0, -1)
  return newS + reverseString(string, newS)
}

reverseString('string')


// Calculate the nth triangular number.
//   A triangular number counts the objects that can form an equilateral triangle.
//   The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n.
//   This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.
  
//                                           *
//                           *             *   *
//             *           *    *        *   *   *
// *     |   *   *  |   *    *    *  | *   *   *   *

//  1st       2nd           3rd             nth?  

// output total number of dots
// input num of dots on a side

// in  out
// 1   1
// 2    3
// 3   6
// 4   10
// 5   15
// 6    21
// 7    28

function triangle(num) {
  if (num === 1) {
    return 1
  }

  return num + triangle(num - 1)
}

triangle(3)


// Write a recursive function that splits a string based on a separator (similar to String.prototype.split). Don't use JS array's split function to solve this problem.

// Input: 02/20/2020
// Output: ["02", "20", "2020"]

// 02/20/2020  
// 20/2020      ['02']
// 2020          ['02','20']
//             ["02", "20", "2020"]

function splitter(str, separator, test = 0) {

  if (!str.includes(separator)){
    return [str]
  }

  let index = str.search(separator);
  let newS = str.slice(0, index)
  str = str.slice(index + 1, str.length)
  console.log(str)
  return [newS , ...splitter(str, separator)]
}

splitter('02/20/2020', '/')


// Write a recursive function that prints the Fibonacci sequence of a given number. The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.

// 1 1
// 1 2
// 2 3
// 3 4
// 5 5
// 8 6
// 13 7

function fib(num) {
  if (num === 1) {
    return 1
  }
  if (num === 2) {
    return 1
  }
  return fib(num - 1)  + fib(num - 2)
}

fib(7)


Write a recursive function that finds the factorial of a given number. The factorial of a number can be found by multiplying that number by each number between itself and 1. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
input: 5
output: 120

// 5 *4 
// 5* 3
// 5* 2
// 5* 1
// sum of above
function fact(num) {
  if (num === 1){
    return 1
  }
  
  return num * fact(num - 1)
}

fact(4)


