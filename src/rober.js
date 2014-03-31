
var newRober = function(x, y, facing) {
  return {
    position: {
      x: x,
      y: y
    },
    facing: facing
  };
};

var moveRober = function(rober, actions) {
  var x = rober.position.x;
  var y = rober.position.y;
  if (actions) {
    x = x + 1;
  }
  return newRober(x, y);
};


module.exports.newRober = newRober;
module.exports.moveRober = moveRober;