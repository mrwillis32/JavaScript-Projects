function my_Dictionary()   {
    var Cars = {            
        Model:"Altima",
        Color:"Black",
        Make:"Nissan",
        Doors:4,        // numbers don't need to be put in quotations 
        Fuel:"Gas"
    };
    delete Cars.Fuel; // Function deletes the fuel attribute from the code. The output will now show undefined. Instead of using an operator symbol we can also use words to get the same effect
    document.getElementById("Dictionary").innerHTML = Cars.Fuel; // Here we are targeting the fuel value type to print the key "Gas" but becuase the function above deleted the fuel value undefined will be printed.
}
