
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
