// Test 2 - Write a function to check if two strings are anagrams.

function stringtolowercase(string01,string02, callback){

    const lowerstr1 = string01.toLowerCase();
    const lowerstr2 = string02.toLowerCase();
    
    callback(lowerstr1,lowerstr2);

    
}
function stringAnagramCheck(string01,string02){

        if(string01.length === string02.length){
        console.log("String length matches");
        const stringarray1 = string01.split("");
        for(let i=0; i<stringarray1.length; i++){

            if (string02.includes(stringarray1[i])) {
                if(i === stringarray1.length-1){
                console.log(`-----Strings "${string01}${string02}" are Anagram-----`);  
                //console.log("Charc value:"+stringarray1[i]);
                 
                }
                             
            }
            else {
                console.log("------Strings are not Anagram-----");
                break;
            }
           
        }
        
    } else {
        console.log("String length doesnt matches");
    }

}
//stringAnagramCheck("Hello","World");
stringtolowercase("Triangle","Integral",stringAnagramCheck);