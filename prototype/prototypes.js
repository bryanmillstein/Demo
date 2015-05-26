function Animal (name) {
  this.name = name;
};

Animal.prototype.eat = function () {
  console.log('I am an animal and I can eat.');
};

Animal.prototype.run = function () {
  console.log('I am an animal and I can run.');
};

function Lion (name){
  this.name = name;
};

function Capybara (name) {
  this.name = name;
};

// The inherits function sets the prototype of the child to a new Surrogate object
// that holds the parent's prototype. This gives the child access to all of the
// properties of the parent as well as the parent's entire upstream prototypical
// chain.

var inherits = function (parentClass, childClass) {

  var Surrogate = function(){};
  Surrogate.prototype = parentClass.prototype;
  childClass.prototype = new Surrogate();
};

// Call the inherits function to set the Lion's prototype to an Animal object.
// This will give all future instantiated Lion's access to the Animal's properties.

inherits(Animal, Lion);


// Call the inherits function to set the Capybara's prototype to an Animal object.
// This will give all future instantiated Capybara's access to the Animal's
// properties.
inherits(Animal, Capybara);

Lion.prototype.roar = function () {
  console.log('I am an animal and I can roar.');
};

Capybara.prototype.lounge = function () {
  console.log('I am a Capybara and I lounge in hot tubs.');
};
