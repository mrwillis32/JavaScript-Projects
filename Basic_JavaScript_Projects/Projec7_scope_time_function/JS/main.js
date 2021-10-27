// Global Variable

var x = 2;
function Add_numbers_1()    {
    document.write(64 + x + "<br>");    // 20 will be added to x = 2 giving us 22
}
function Add_numbers_2()    {
    document.write(x + 50 + "<br>");     // x will be added to 50
}
Add_numbers_1(); // 66 will be printed
Add_numbers_2(); // 52 will be printed

// Local Variable

function Add_1()    {
    var z = 20;
    document.write(10 + z + "<br>");
}
function Add_2()    {
    var y = 4
    document.write(y + 23);
}
Add_1();
Add_2();

// Global Variable written wrong. Check the console in browser to see the error.
var a = 10;
function No_1() {
    console.log(20 + c);
}
No_1();

// If Statement
function get_Date() {
    if (new Date().getHours() <18)  {
    document.getElementById("Welcome").inneerHTML = "Good Afrtenoon, Welcome!"   
    // If the time is after 6PM the "Good Afternoon, Welcome!" will print   
    }
}

// Else Statements

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 12) {
        Play = "You are old enough to play football!";
    }
    else {
        Play = "You are not old enough to play football!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Play;
}

// Else If Statements

function Time_function()    {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time < 0)    {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18)   {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "it is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}