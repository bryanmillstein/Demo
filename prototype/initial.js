function Animal (name) {
  this.name = name;

  this.eat = function () {
    console.log('I am an animal and I can eat.');
  };

  this.run = function () {
    console.log('I am an animal and I can run.');
  };

  this.speak = function () {
    console.log('I am an animal and I can speak.');
  };
};

// One of the biggest benefits of JavaScript's prototype inheritance style is
// that you can add properties to a top level prototype and all exisiting and
// future objects made from that constructor/(has the constructor as its
// prototype) will have access to the new property. This leads to a nice object
// oriented and modular way of creating pseudo classes.
