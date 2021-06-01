var total = prompt('How many km are left to go?');

// Your code below:


let kilosTraveledInt = parseInt(total, 10);
// console.log(kilosTraveledInt)
// console.log(typeof kilosTraveledInt)

function howFar(passedInfo) {
if (passedInfo > 100)
    return "We still have a bit of driving left to go"
else if (passedInfo > 50)
    return "We'll be there in 5 minutes"
else
  return "I'm parking. I'll see you right now"
}

console.log(howFar(kilosTraveledInt));



