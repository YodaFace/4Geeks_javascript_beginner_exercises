/* This exercise is almost identical to 15-Random numbers - consider merging them here and using another concept for 15? */

// Declare your function here


//   function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }


function generateRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min); 
  //The maximum is exclusive and the minimum is inclusive
}

console.log(generateRandom(0,9))