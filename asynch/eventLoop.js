var startCounter = function () {
  setTimeout(function(){
    counter();
    console.log('I\'m in the task queue waiting for the busy work to finish!');

    busyWork();
  }, 10000);

  console.log('I\'m in the web browser waiting and the rest of the program is running without me!')
};

var counter = function () {
  var count = 0;

  setTimeout(function () {
    console.log('I\'m finally in the stack! I\'ll start counting from ' + count + '.')
    for(var i = 0; i < 1000000000; i ++) {
      count += 1;
    };

    console.log('I\'m all done counting. I counted all the way to ' + count + '.')
  }, 500);
};

var busyWork = function () {
  busyCount = 0;
  for(var i = 0; i < 10000000; i ++) {
    busyCount += 1;
  };
};
