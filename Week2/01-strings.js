// Learn how to manipulate strings and use looping statements in a programming language to solve practical problems.

// Test 1 - Given a string s consisting of words and spaces, return the length of the last word in the string.

function stringCheck(line01) {
    
    const wordString = line01.split(" ");
    const lastword = wordString[wordString.length-1];
    const lastwordlength = lastword.length;
    //console.log(" Last String Length: "+lastwordlength);
    console.log(`Last word is "${lastword}" with length `+lastwordlength);   
    
}
stringCheck("Sushma Kolli");
stringCheck("Fly me  to the moon");
stringCheck("  Welcome to    the playwright    class");
 


