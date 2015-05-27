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

// In this situation,'this' is set to the wickedWitch. If we want the witch to
// also be able to borrow the king's power, we can use bind and pass the king as
// our context.

wickedWitch.banishAnimal = king.banishAnimal.bind(king);

wickedWitch.banishAnimal(); // --> 'I have Unlimited power and I banish you.''
