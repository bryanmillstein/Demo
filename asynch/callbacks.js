function Lion (name){
  this.name = name;
  this.cubs = [];
  this.foodSupply = 10;
};

Lion.prototype.feedCubs = function () {
  this.cubs.forEach (function(cub) {
    this.foodSupply -= 1;
  }.bind(this));

  this.hunt();
  this.cubsCry();
};

Lion.prototype.hunt = function () {
  for (var i = 0; i < 10; i ++) {
    this.foodSupply += 1;
  };

  this.returnHome();


  // returnHome() is our callback). It will be transferred from the stack to the Web
  // Browser who will handle the setTimeout. After the specified amount of time, the
  // callback will be transferred to the 'task que' where it waits for the stack to
  // clear. Once the stack clears, the 'event loop' transfers the callback to the top
  // of the stack.

  // setTimeout(this.returnHome.bind(this), 0);

};

Lion.prototype.returnHome = function () {
  console.log(this.name + ' made it home!')
};

Lion.prototype.cubsCry = function () {
  console.log(this.name + '\'s cubs are crying.')
};

var mufasa = new Lion('Mufasa');

var simba = new Lion('Simba');

mufasa.cubs.push(simba);
