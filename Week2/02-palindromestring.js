//Create a JavaScript function that accepts a string, reverses it, and checks if the reversed string is a palindrome,
//  then test your function with various strings and print the results.

function stringreverse(string01,callback) {
    let reversestring = "";
    for(let i=string01.length; i>=0; i--){
        reversestring += string01.charAt(i);
    }
    console.log("Reverse string is: "+reversestring);   
    
    callback(string01,reversestring);
}
function stringpalindrome(string01,string02) {
    
    const lowercasestring01 = string01.toLowerCase();
    const lowercasestring02 = string02.toLowerCase();
    if(lowercasestring01 === lowercasestring02){
        console.log("Strings are palindrome string");        
    } else{
        console.log("Strings are not palindrome");
        
    }
}
stringreverse("touch",stringpalindrome);
stringreverse("civic",stringpalindrome);
stringreverse("Madam",stringpalindrome);
