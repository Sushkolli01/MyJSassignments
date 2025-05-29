//Create a JavaScript function that determines if a number is positive, negative, or zero and returns a corresponding string
//  indicating the type.

function checkNumType(num) {
    if(num > 0){
        console.log("Number is positive");        
    }else if (num < 0){
        console.log("Number is negative");        
    } else {
        console.log("Number is neutral");        
    }
}
checkNumType(-2);