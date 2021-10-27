document.write(typeof 3 + "<br>"); 

document.write("20" + 20 );

// unique values that are considered to be numbers, but actually do not act in the same way: NaN(short for not a number), infinity(positive infinity), -infinity(negative infinity)

function my_Function()  {
    document.getElementById("Test").innerHTML = 0/0;
}

function my_Test()  {
    document.getElementById("example").innerHTML = isNaN("How now brown cow!");
}

function my_Example()   {
    document.getElementById("example_3").innerHTML = isNaN("678");
}

document.write(-6E410);
document.write("<br>");
document.write(2e235);
document.write("<br>");

document.write(10>5);
document.write("<br>");
console.log(2 + 2);

console.log(6<3);

document.write(11==11);
document.write("<br>");
document.write(10==3);
document.write("<br>");

// Tripple Equal Signs ===
// === Shows that a comparison should be made.

A = 12;
B = 12;
document.write(A===B);
document.write("<br>");

C = "Car";
D = "Bat";
document.write(C===D);
document.write("<br>");

Z = 13;
Y = 12;
document.write(Z===Y);
document.write("<br>");
Q = 32;
R = "32";
document.write(Q===R);
document.write("<br>");

// && ("and") Operator
// When using the && operator both sets of strings must be true.

document.write(2 > 1 && 7 > 6); // Here 2 is greater than 1 && 7 is greater than 6. So this is true.
document.write("<br>");
document.write(10>11 && 4>2);   // This would return false. Although 4 is greater than 2 10 is less than 11.
document.write("<br>");

// || ("or") Operator
// When using this operator e
document.write(3>11 || 17>2);
document.write("<br>");
document.write(2>7 || 3>6);

// ! ("Not") Operator

function not_Function()    {
    document.getElementById("Not").innerHTML = ! (20>10);   //This is oposites day. When using the ! operator "true" = false and "false" = true. 20>10 but when using the ! operator this makes the code return false.

}

function ton_Function(){
    document.getElementById("Not_Again").innerHTML = ! (2>3);   // here the code will return true.
}

function Ride_Function()    {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + "to ride."; 
}