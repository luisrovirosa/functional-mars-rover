
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
    y = y + 1;
  }
  var orientation = 'N';
  return newRober(x, y, rober.facing);
};


module.exports.newRober = newRober;
module.exports.moveRober = moveRober;