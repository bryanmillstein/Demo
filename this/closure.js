// An example of how this works. 'this', in any function, is set only at the time the
// function is invoked and the way it is invoked (i.e. the object invoking it) is
// crucial. The value of this is set to the object that invokes the function. In the
// example below, the animal that invokes 'speak' will be the value of 'this' in the
// function. 'this.name' will then be that animal's name.

Animal.prototype.speak = function () {
  console.log('My name is ' + this.name + '.');
};

// simba.speak(); -> 'My name is simba.'

function Bear (){
  this.cubs = [];
  this.foodSupply = 10;

  this.feedCubs = function () {
    this.cubs.forEach (function(cub) {
      // 'this' inside the anonymous function cannot access the outer function’s
      // this, so it is bound to the global window object.

      this.foodSupply -= 1;
      console.log(this.foodSupply);
    });
  };
};

// Instaniate a parent Lion.
var hugeBear = Bear();

// Instaniate a child Lion.
var weeBear = Bear();

// Add simba to mufasa's children.
hugeBear.cubs.push(weeBear);

// var that = this;

mufasa.feedCubs = function () {
  this.cubs.forEach (function(cub) {
    // We can use 'bind' to set our context of 'this'. In this way, 'this' will
    // hold the expected value when called inside the anonymous function.

    // Another solution is to store the value of 'this' in a variable outside of
    // this forEach. Since the forEach loop closes over the stored variable it will
    // have access to it inside. A common approach is setting var that = this.

    this.foodSupply -= 1;
    console.log(this.foodSupply);
  }.bind(this));
};

// What is happening with 'bind'?

var myBind = function (context) {
  var func = this;

  // Arguments at the time of binding will be reset later on when the function
  // is invoked so we save them here. We also chop off the first, context, argument.

  var bindArgs = Array.prototype.slice.call(arguments, 1);

  return function () {
    // Here we add the arguments at the time the function is invoked.

    var callArgs = Array.prototype.slice.call(arguments);
    return func.apply(context, bindArgs.concat(callArgs));
  };
};
