// Your code here:

function ninetyNineBottles () {
    let lyrics = "";
    let whatOnTheWalls = " bottles of milk on the wall"
    let bottles = " bottles of milk. "
    let take = "Take one down and pass it around, "

    for (i = 99; i >= 0; i--) {
        if (i == 1){
            lyrics += i + " bottle of milk on the wall, " + i + " bottle of milk. " + take + "no more" + whatOnTheWalls +".";
        }
        else if (i == 0) {
            lyrics += " No more" + whatOnTheWalls + ", no more" + bottles + ". Go to the store and buy some more, 99" + bottles;
        }
        else{
            lyrics += i + whatOnTheWalls+ ", " + i + bottles + take + (i -1) + whatOnTheWalls + ". ";
        }
    }
    return lyrics;

}

console.log(ninetyNineBottles());