var bulletPosition = 4;

const spinChamber = () => {
	var chamberPosition = Math.floor((Math.random() * 6) + 1);
	return chamberPosition;
};

// START EXAMPLE // 
// let age = 5;

// let welcome = (age < 18) ?
//   () => console.log('Baby') :
//   () => console.log('Adult');

// welcome(); // Baby
// END EXAMPLE // 

// Remove the // below and complete the commented lines
const fireGun = (spinnerPosition) => {
    var match = "You're dead!";
    var noMatch = "Keep playing!";
    if (bulletPosition == spinChamber())
        console.log(match.trim())
    else
        console.log(noMatch.trim())
};

fireGun();

// const arrowFireGun = ((bulletPosition == spinChamber())) ?
//     () => console.log("You're dead!"):
//     () => console.log("Keep playing!");

// arrowFireGun(); 