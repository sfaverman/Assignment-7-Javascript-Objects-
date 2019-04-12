/*eslint-env browser*/

//STEP 1
/*
function Cat() {}

var Dog = function() {};
*/

//STEP 2

/*
function Cat() {}

var Dog = function() {};

// instances

var blackCat = new Cat();

var huskyDog = new Dog();
*/

//STEP 3

/*
function Animal() {}
Animal.prototype.displayAnimal = function() {
    window.console.log("New animal has been created");
}
var crocodile = new Animal;

crocodile.displayAnimal();
*/

//STEP 4
/*
function Animal(type) {
    this.type = type;
}
Animal.prototype.displayAnimal = function() {
    window.console.log("New animal, " + this.type + " , has been created");
}
var crocodile = new Animal("Crocodile");

crocodile.displayAnimal();
*/

//STEP 5
/*
function Animal(type, breed, color, height, length) {
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
}

var myDog = new Animal("dog","husky","beige", 1, 3.5);

window.console.log(myDog);
*/

//STEP 6
function Animal(type, breed, color, height, length) {
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
}

var myDog = new Animal("dog","husky","beige", 1, 3.5);

//window.console.log(myDog);

for (var property in myDog) {
    window.console.log(property);
}




