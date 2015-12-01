// Grading App v1.0
var btnSubmit = document.getElementById("btnSubmit");
btnSubmit.addEventListener("click", function(){
      
    var grade = document.getElementById("grade").value;

    // Display the letter grade using alert().
    // Input your code below.
    console.log("was clicked and grade is: ", grade);
    if (grade > 90) {
        alert("works");
    } else {
        alert("low score");
    }
   
 });