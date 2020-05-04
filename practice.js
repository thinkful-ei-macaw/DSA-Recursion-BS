
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


