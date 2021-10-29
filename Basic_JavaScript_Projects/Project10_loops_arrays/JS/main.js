// String lenght
let str = "Wake up Maggie I think I got something to say to you!";
document.getElementById("demo").innerHTML = str.length;;


// For Loop

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++)  {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

// Arrays and Objects

function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";

}
// Another example of an array
function array_Function() {
    var Team = [];
    Team[0] = "Ravens";
    Team[1] = "Bucs";
    Team[2] = "Chargers";
    Team[3] = "Bears";
    document.getElementById("array").innerHTML = "Who will win the superbowl this year ?" + "Answer: " + Team[0] + "!"
} 

// Constant Method

function constant_function() {
    const Musical_Instrument = {type: "guitar", brand:"Fender", color:"black", price: "", handiness:"right"};
    Musical_Instrument.color = "green";
    Musical_Instrument.price = "$900";
    Musical_Instrument.handiness = "right";
    document.getElementById("Constant").innerHTML = "The cost of the  " + Musical_Instrument.type + " was " + Musical_Instrument.price + ". For " + Musical_Instrument.handiness + " handed players"
}

// Let Method

var X = 45;
document.write(X);
{
    let X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);

// Return Statement

function myFunction(name) {
    return "Hello " + name;
}
document.getElementById("crow").innerHTML = myFunction("Henry");

// Objects
// data structure used to store different types of data types.

let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021",
    color: "red ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

// Break Statement

let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}
document.getElementById("string").innerHTML = text;

