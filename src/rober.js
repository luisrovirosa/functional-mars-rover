
var newRober = function(x, y, facing) {
  return {
    position: {
      x: x,
      y: y
    },
    facing: facing
  };
};

var moveForward = function(rober) {
  return newRober(rober.position.x, rober.position.y + 1, rober.facing);
};

var moveBackward = function(rober) {
  return newRober(rober.position.x, rober.position.y - 1, rober.facing);
};


var moveRober = function(rober, actions) {
  var newRober = rober;
  for (var i = 0; i < actions.length; i++) {
    var action = actions[i];
    switch (action) {
      case 'F':
        newRober = moveForward(newRober);
        break;
      case 'B':
        newRober = moveBackward(newRober);
        break;
    }
  }
  return newRober;
};


module.exports.newRober = newRober;
module.exports.moveRober = moveRober;