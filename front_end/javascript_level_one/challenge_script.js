var nameTest = false;
var ageTest = false;
var heightTest = false;
var petTest = false;

var firstName = prompt("What is your first name")
var lastName = prompt("What is your last name")

if (firstName[0] === lastName[0]) nameTest = true;

var age = prompt("How old are you?")
if(age > 20 && age < 30) ageTest = true;

var height = prompt("How tall are you in cm?")
if(height > 170) heightTest = true;

var petName = prompt("What is your pets name?")
if(petName[petName.length-1] == "y") petTest = true;

if(nameTest && ageTest && heightTest && petTest) console.log("Fuck off");
