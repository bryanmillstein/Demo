function Animal (name, age, color) {
  this.name = name;
  this.age = age;
  this.color = color;
};

function Lion (name, age, color, size) {
  this.name = name;
  this.age = age;
  this.color = color;
  this.size = size;
};

// function Lion (name, age, color, size){
//   Animal.call(this, name, age, color);
//   this.size = size;
// };
