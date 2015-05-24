// The inherits function sets the prototype of the child to a new parent object. This gives the child access to all of the properties of the parent as well as the parent's entire upstream prototypical chain.

var inherits = function (parentClass, childClass) {
  childClass.prototype = new parentClass({});
};

function Animal (name) {
  this.name = name;

  this.eat = function () {
    console.log('I am an animal and I can eat.');
  };
};

function Lion (){
  this.roar = function () {
    console.log('I am a lion and I like to roar.');
  };
};

// Call the inherits function to set the Lion's prototype to an Animal object. This will give all future instantiated Lion's access to the Animal's properties.

inherits(Animal, Lion);

function Capybara () {
  this.lounge = function () {
    console.log('I am a Capybara and I lounge in hot tubs.');
  };
};

// Call the inherits function to set the Capybara's prototype to an Animal object. This will give all future instantiated Capybara's access to the Animal's properties.
inherits(Animal, Lion);

// One of the biggest benefits of JavaScript's prototype inheritance style is that you can add properties to a top level prototype and all exisiting and future objects made from that constructor/(has the constructor as its prototype) will have access to the new property. The 'run' function created below on the 'Animal' prototype will be available to all Animals and indirectly, all Lions and Capybara's.

Animal.prototype.run = function () {
  console.log('I am an animal and I can run.');
};
