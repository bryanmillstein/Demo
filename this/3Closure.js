// 'this' inside a closure cannot access the outer function’s
// 'this', so it is bound to the global window object.

function Lion (){
  this.cubs = [];
  this.foodSupply = 10;

  this.feedCubs = function () {
    this.cubs.forEach (function(cub) {

      this.foodSupply -= 1;
      console.log(this.foodSupply);
    });
  };
};

var mufasa = new Lion('Mufasa');
var simba = new Lion('Simba');
mufasa.cubs.push(simba);
// mufasa.feedCubs(); --> NAN


// We can use 'bind' to set our context of 'this'. In this way, 'this' will
// hold the expected value when called inside the anonymous function.

mufasa.feedCubs = function () {
  this.cubs.forEach (function(cub) {

    this.foodSupply -= 1;
    console.log(this.foodSupply);
  }.bind(this));
};

var mufasa = new Lion('Mufasa');
var simba = new Lion('Simba');
mufasa.cubs.push(simba);
// mufasa.feedCubs(); --> 9

// Another solution is to store the value of 'this' in a variable outside of
// this forEach. Since the forEach loop closes over the stored variable it will
// have access to it inside. A common approach is setting var that = this.

// var that = this;
