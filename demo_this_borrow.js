var king = {
  name: 'The King',
  power: 'Unlimited',
  banishAnimal: function () {
    console.log('I have ' + this.power + ' power and I banish you.');
  }
};

var wickedWitch = {
  name: 'Wicked Witch'
};

// The wickedWitch wants to borrow the king's banish function.

wickedWitch.banishAnimal = king.banishAnimal;

wickedWitch.banishAnimal(); // --> 'I have undefined power and I banish you.''

// This is another situation where 'this' is being set to the window.
// We can solve this by binding our own context when the variable is being declared.

wickedWitch.banishAnimal = king.banishAnimal.bind(king);
