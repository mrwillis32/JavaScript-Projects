// this is an addition JavaScript function
function myFunction() {
    var Math = 52 + 63;
    document.getElementById("Math").innerHTML = "52 + 63 =" + Math

}
// this is an subtraction JavaScript function
function subtraction_Function() {
    var sub = 15 - 4;
    document.getElementById("sub").innerHTML = "15 - 4 =" + sub
}
// this is an multiplication JavaScript function
function multiplication()   {
    var simp = 38 * 3;
    document.getElementById("simp").innerHTML = "38 * 3 =" + simp
}
// this is an divison JavaScript function
function division() {
    var disv = 642 / 4;
    document.getElementById("disv").innerHTML = "642 / 4 =" + disv 
    
}
// here I combined three different operation in a string
function more()    {
    var simple_Math = (1 + 2) * 10 / 2 -5;
    document.getElementById("simple_Math").innerHTML = " 1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}
// this function is used to divide 2 numbers when your output will give you a remainder
function modulus_Operator() {
    var op = 25 % 6;
    document.getElementById("op").innerHTML = " When you divide 25 by 6 you have a remaindere of: " + op;
}
// this function when printed will give you a negative interger when you designate the varible which is x. when i run the document.getElementById method and designate the x as -x the printed number will be -50
function negation_operator()    {
    var x = 50;
    document.getElementById("neg").innerHTML = -x;
}
// when you won't to increase an interger by one you can use ++ operators to do so given you 601
function more_math()    {
    var y = 600;
    y++;
    document.getElementById("demo").innerHTML = 601;
}
// when you want to decrease an interger you would use 2 -- operators to do so
function math_cont() {
    var z = 7.38;
    z--;
    document.getElementById("demo 2").innerHTML = 6.38;
    
}




// to return a randon number between 0 and 1, you would wirete the following JavaScript code: you will get a pop up window displaying said number when the code is ran.

window.alert(Math.random() * 3);

