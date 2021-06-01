

function sing() {    
    let lyrics = "";
    for (let i = 0; i < 13; i++) {
        if (i == 4)
            // str.concat(' for',' Geeks')
            lyrics += "words of wisdom, ";
        else if (i == 10)
            lyrics += "there will be an answer, ";
        else if (i == 11) {
            lyrics += "let it be";
            break; }
        else 
            lyrics += "let it be, ";
    } ;
    return lyrics;
    

    // `let it be, let it be, let it be, let it be, words of wisdom, let it be, let it be, let it be, let it be, let it be, there will be an answer, let it be`

}

//Your code above ^^^

console.log(sing());