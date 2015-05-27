// When storing functions that use 'this', the value of 'this' inside the function
// when it is called will not be consistent between use cases.

var king = {
  name: 'The King',
  power: 'Unlimited',
  banishAnimal: function () {
    console.log(this);
  }
};

var banish = king.banishAnimal;

king.banishAnimal(); // --> king
banish(); // --> window

// 'this' does not get defined until the funciton that uses it is invoked.
// Even though it appears that 'this' is defined in the original 'banishAnimal'
// function in the king object it is not. When we call 'banish', the value of
// 'this' is the window.

// The solution is to bind 'this' when the variable is declared.

var king = {
  name: 'The King',
  power: 'Unlimited',
  banishAnimal: function () {
    console.log('I have ' + this.power + ' power and I banish you.');
  }
};

var banish = king.banishAnimal.bind(king);

banish(); // --> 'I have Unlimited power and I banish you.'
