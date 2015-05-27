// Use JavaScript's constructor function to create a 'blueprint' for
// future 'Animal' instances.

function Animal (name) {
  this.name = name;

  this.eat = function () {
    console.log('I am an animal and I can eat.');
  };

  this.run = function () {
    console.log('I am an animal and I can run.');
  };
};

// Create an instance of 'Animal'.

var lion = new Animal('lion');

// One of the biggest benefits of JavaScript's prototype inheritance style is
// that you can add properties to a top level prototype and all exisiting and
// future objects made from that constructor/(has the constructor as its
// prototype) will have access to the new property. This leads to a nice object
// oriented and modular way of creating pseudo classes.

function Animal (name) {
  this.name = name;
};

Animal.prototype.eat = function () {
  console.log('I am an animal and I can eat.');
};

Animal.prototype.run = function () {
  console.log('I am an animal and I can run.');
};

var lion = new Animal();
