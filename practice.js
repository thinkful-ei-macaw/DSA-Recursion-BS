

function sheep(num) {
  if (num === 0) {
    console.log("All sheep jumped over the fence")
    return "All sheep jumped over the fence"}

  console.log(`${num}: Another sheep jumps over the fence`) 
  return sheep(num-1) 
}

sheep(3)