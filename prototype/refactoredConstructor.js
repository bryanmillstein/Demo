function Animal (name) {
  this.name = name;
};

Animal.prototype.eat = function () {
  console.log('I am an animal and I can eat.');
};

Animal.prototype.run = function () {
  console.log('I am an animal and I can run.');
};

Animal.prototype.speak = function () {
  console.log('I am an animal and I can speak.');
};
