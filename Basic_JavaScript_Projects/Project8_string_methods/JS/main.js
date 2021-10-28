// CONCAT() METHOD

function full_Sentence()    {
    var part_1 = " I got";          // all these strings will be added together on the same line to for one string
    var part_2 = " a pocket full";
    var part_3 = " of sunshhine";
    var part_4 = " I got a love that is all mine";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}
// slice_Method

// slice() extracts a part of a string and returns the extracted part in a new string.

//The method takes 2 parameters: the start position, and the end position (end not included).


function slice_Method() {
    var Sentence = "all work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}
// toUpperCase method

function myFunction()   {
    var str = "nice to meet you!";
    var res = str.toUpperCase();
    document.getElementById("try").innerHTML = res;
}

// search() method

// Taking input a string.
var string = "GeeksforGeeks" + "<br>";
 
// Taking a regular expression.
var re1 = /G/;
var re2 = /e/;
var re3 = /s/;
 
// Printing the index of matching alphabets
document.write(string.search(re1) + "<br>");
document.write(string.search(re2) + "<br>");
document.write(string.search(re3));

// Number Method

function string_Method()    {
    var p = 182;
    document.getElementById("Numbers_to_string").innerHTML = p.toString();
}

function precision_Method() {
    var n = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = n.toPrecision(10);
}