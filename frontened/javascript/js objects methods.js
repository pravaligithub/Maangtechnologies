// 1. Encapsulation and Constructor Function (Class)
function Animal(name, age) {
  // Properties
  this.name = name;
  this.age = age;

  // Method
  this.sayHello = function () {
    console.log(`Hello, I'm ${this.name}!`);
  };
}

// 2. Instantiating objects (Object Creation)
let lion = new Animal('Leo', 5);
let elephant = new Animal('Ellie', 10);

// Accessing properties through methods
console.log(lion.name); // Direct access
lion.sayHello(); // Access through method

// 3. Inheritance - Creating a subclass
function Lion(name, age, maneColor) {
  // Inheriting properties from the Animal class
  Animal.call(this, name, age);

  // Additional property specific to Lion
  this.maneColor = maneColor;

  // Overriding the sayHello method
  this.sayHello = function () {
    console.log(`Roar! I'm ${this.name}, the lion!`);
  };
}

// Setting up the prototype chain for inheritance
Lion.prototype = Object.create(Animal.prototype);
Lion.prototype.constructor = Lion;

// Instantiating a Lion object
let kingLion = new Lion('King', 8, 'golden');

console.log('\n4. Inheritance:');
kingLion.sayHello();
console.log(kingLion.name);
console.log(kingLion.maneColor);

// 5. Polymorphism - Using a common interface
function greetAnimal(animal) {
  console.log(`Greeting from ${animal.name}!`);
}

console.log('\n5. Polymorphism:');
greetAnimal(lion);
greetAnimal(elephant);
greetAnimal(kingLion);

// 6. Object Composition - Adding properties dynamically
console.log('\n6. Object Composition:');
function addColorProperties(object, color) {
  object.color = color;
}

let colorfulLion = new Animal('ColorfulLeo', 6);
addColorProperties(colorfulLion, 'rainbow');
console.log(colorfulLion.color);
