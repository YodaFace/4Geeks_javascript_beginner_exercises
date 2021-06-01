var person = {
    name: "John",                //String
    lastname: "Doe",
    age: 35,                     //Number
    gender: "male",
    lucky_numbers: [ 7, 11, 13, 17], //Array
    significant_other: person2   //Object, yes the same variable/object defined after
};

var person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [ 2, 4, 6, 8],
    significant_other: person
};

var family = {
    lastname: "Doe",
    members: [person, person2]   //Array of objects, don't forget to add Jimmy
};


function addAllFamilyLuckyNumbers(anArray){
  var sumOfAllLuckyNumbers = 0; //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.

  //To-Do: loop and add; consider nested loops
  //Hint: use the anArray variable to get all of the lucky numbers
  
  return sumOfAllLuckyNumbers;
}

//Enter all your code here:

// 1. Programmatically, change the fourth lucky number of John Doe to 33 (use a command, don't manually change the code)
person.lucky_numbers[3] = 33
console.log(person.lucky_numbers);


// 2. Programmatically, create a new person and add it to the family object. Jimmy Doe, 13, male, lucky numbers: 1, 2, 3, 4; significant other: null. (use a command, don't manually change the code)

let person3 = Object.assign({}, person);

person3.name = 'Jimmy';
person3.lastname = 'Jane';
person3.age = 13; 
person3.gender = 'male';
person3.lucky_numbers = [ 1, 2, 3, 4] 
person3.lastname = null;

family.members.push(person3)

// 3. Now please print ( console.log() ) the SUM of all of the lucky numbers of the Doe family.

function addAllFamilyLuckyNumbers(){
    let allLuckyNumbers = []
    let flattenedAllLuckyNumbers = []
    for (i = 0; i < family.members.length; i++){
        console.log(family.members[i].lucky_numbers)

        // THIS RETURNED THE ARRAYS INSIDE OF THE ARRAY
        allLuckyNumbers.push([
            family.members[i].lucky_numbers
                ]);

        flattenedAllLuckyNumbers = allLuckyNumbers.flat(2)

        SumOfLuckyNumbers = flattenedAllLuckyNumbers.reduce((a, b) => a + b)
        // let allLuckyNumbers = family.members[i].lucky_numbers;
        // allLuckyNumbers = user.personalInfo.address.city;
        // console.log(family.members[i].lucky_numbers)
        //     for (n = 0; n < 3; n++){
        //         console.log(n)
        //     }
        
        // allLuckyNumbers = family.members.lucky_numbers
        // ourStorage.cabinet["top drawer"].folder2;
    }
    // console.log (allLuckyNumbers)
    // console.log (flattenedAllLuckyNumbers)
    return SumOfLuckyNumbers
}


//Do not make changes below:
console.log(addAllFamilyLuckyNumbers(family.members)); 