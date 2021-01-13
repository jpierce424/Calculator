document.getElementById("pageTitle").innerHTML = "Jathans Coding Calculator"
function mathAddition(){
    let numbOne = parseFloat(document.getElementById("numberOne").value);
    let numbTwo = parseFloat(document.getElementById("numberTwo").value);
    document.getElementById("correctAnswer").innerHTML = "The Correct Answer Is:" + parseFloat(numbOne + numbTwo)
 };


 document.getElementById("pageTitle").innerHTML = "Jathans Coding Calculator"
function mathSubtraction(){
    let numbOne = parseFloat(document.getElementById("numberOne").value);
    let numbTwo = parseFloat(document.getElementById("numberTwo").value);
    document.getElementById("correctAnswer").innerHTML = "The Correct Answer Is:" + parseFloat(numbOne - numbTwo)
 };

 document.getElementById("pageTitle").innerHTML = "Jathans Coding Calculator"
function mathMultiply(){
    let numbOne = parseFloat(document.getElementById("numberOne").value);
    let numbTwo = parseFloat(document.getElementById("numberTwo").value);
    document.getElementById("correctAnswer").innerHTML = "The Correct Answer Is:" + parseFloat(numbOne * numbTwo)
 };

 document.getElementById("pageTitle").innerHTML = "Jathans Coding Calculator"
function mathDivide(){
    let numbOne = parseFloat(document.getElementById("numberOne").value);
    let numbTwo = parseFloat(document.getElementById("numberTwo").value);
    document.getElementById("correctAnswer").innerHTML = "The Correct Answer Is:" + parseFloat(numbOne / numbTwo)
 };