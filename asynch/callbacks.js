function Bear (name){
  this.name = name;
  this.cubs = [];
  this.foodSupply = 10;
};

Bear.prototype.feedCubs = function () {
  this.cubs.forEach (function(cub) {
    this.foodSupply -= 1;
  }.bind(this));

  this.hunt();
  this.cubsCry();
};

Bear.prototype.hunt = function () {
  // for (var i = 0; i < 10; i ++) {
  //   this.foodSupply += 1;
  // };

  // this.returnHome();


  // The anonymous function (containing the for loop and the this.returnHome() is
  // our callback). It will be transferred from the stack to the Web Browser who
  // will handle the setTimeout. After the specified amount of time, the callback will
  // be transferred to the 'task que' where it waits for the stack to clear. Once the
  // stack clears, the 'event loop' transfers the callback to the top of the stack.

  setTimeout(function() {
    for (var i = 0; i < 10; i ++) {
      this.foodSupply += 1;
    };

    this.returnHome();
  }.bind(this), 5000);

};

Bear.prototype.returnHome = function () {
  console.log(this.name + ' made it home!')
};

Bear.prototype.cubsCry = function () {
  console.log(this.name + '\'s cubs are crying.')
};
