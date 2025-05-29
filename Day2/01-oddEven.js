// Write a JavaScript function named `isOddOrEven` that takes an integer as input and returns `Odd` if the number is odd and 
// `"Even"` if the number is even.


function isOddOrEven(num) {
    if((num%2)===0){
        console.log("Number is Even ");
    }else{
        console.log("Number is Odd");        
    }
    
}
isOddOrEven(12);