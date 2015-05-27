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
