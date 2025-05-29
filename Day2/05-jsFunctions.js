// Complete the following tasks to practice function declarations, arrow functions, anonymous functions, 
// and callback functions in JavaScript.

function userProfile(username){    // function declaration
    console.log('Hello '+username);
}

userProfile("Sushma");
let double = (num) => num*num; {
console.log("Double number value is: "+double(8)); }

//userProfile("Sushma");


//anonymousFunc();
let anonymousFunc = function() {
    setTimeout(() => {
       console.log("This message is delayed for 50 secs- Anonymous Func");           
    }, 4000);
    //console.log("This message is delayed for 2mins");   
    
}
anonymousFunc();


// Callback Function
function getUserData(callback) {
    setTimeout(() => {
       console.log("This message is delayed for 30 secs - Call Func");           
    }, 8000);
    callback();
}
getUserData(function(){
    console.log(" User's name is Name ");
    console.log(" User's age is 20");
});

