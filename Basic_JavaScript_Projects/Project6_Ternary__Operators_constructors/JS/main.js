// Ternary Operators

// If left number is bigger the statement will print true.

document.write(Bigger = (5>1) ? "Left number is bigger":"Right number is bigger");

// More elaborate ternary operator
function Ride_Function()    {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vehicle(Make, Model, Year, Color)  {
    this.Vehicle_Make = Make;           // Vehicle() is an object constructor
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction()   {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a" + Erik.Vehicle_Color + "-colored" + Erik.Vehicle_Model + "manufactured in " + Erik.Vehicle_Year;
}
// Constructor Function
function Person(first, last, age, eye )    {
    this.firstName = first;  // this owns the code
    this.lastName = last;
    this.age =  age;
    this.eyeColor = eye;
}

const myFather = new Person("Henry", "Willis Sr", 64, "brown")

document.getElementById("var").innerHTML = "My father is " + myFather.age + ".";    // When printed this will read my father is 64


// NESTED FUNCTION function within a function

function count_Function()   {
    document.getElementById("Counting").innerHTML = Count();
    function Count()    {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}

