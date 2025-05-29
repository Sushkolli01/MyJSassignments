//Write a JavaScript function that evaluates a student's score and returns their grade using a switch statement to
//  assess score ranges.

function gradeCalculations(score){
     
    switch (true) {
        case (score >= 85 && score <= 100):
            console.log("Grade A");               
            break;
        case (score >= 70 && score <= 84):
            console.log("Grade B");               
            break;
        case (score >= 60 && score <= 69):
            console.log("Grade C");               
            break;
        case (score >= 45 && score <= 59):
            console.log("Grade D");               
            break;
        case (score >= 35 && score <= 44):
            console.log("Grade E");               
            break;
        default:
            console.log("Failed");            
            break;
    }
}
gradeCalculations(76);
gradeCalculations(94);
gradeCalculations(26);

