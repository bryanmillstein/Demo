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

// A DRY approach using JavaScript's 'call' function to use the 'Animal' constructor
// to set the matching attributes for the 'Lion' construcotr.  

function Lion (name, age, color, size){
  Animal.call(this, name, age, color);
  this.size = size;
};
