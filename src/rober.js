
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
  var x;
  var y;
  if (rober.facing === 'E') {
    x = rober.position.x + 1;
    y = rober.position.y;
  } else if (rober.facing === 'W') {
    x = rober.position.x - 1;
    y = rober.position.y;
  } else if (rober.facing === 'S') {
    x = rober.position.x;
    y = rober.position.y - 1;
  } else {
    x = rober.position.x;
    y = rober.position.y + 1;
  }
  return newRober(x, y, rober.facing);
};

var moveBackward = function(rober) {

  return newRober(rober.position.x, rober.position.y - 1, rober.facing);
};

var orientations = 'NESW';
var rotate = function(facing, change) {
  var index = orientations.indexOf(facing);
  return orientations[(index + change) % orientations.length];

};


var rotateRigth = function(rober) {
  var facing = rotate(rober.facing, 1);
  return newRober(rober.position.x, rober.position.y, facing);
};

var rotateLeft = function(rober) {
  var facing = rotate(rober.facing, -1);

  return newRober(rober.position.x, rober.position.y, facing);
};


var moveRober = function(rober, actions) {
  if (actions.length > 0) {
    var newRober;
    var action = actions[0];
    switch (action) {
      case 'F':
        newRober = moveForward(rober);
        break;
      case 'B':
        newRober = moveBackward(rober);
        break;
      case 'R':
        newRober = rotateRigth(rober);
        break;
      case 'L':
        newRober = rotateLeft(rober);
        break;
    }
    return moveRober(newRober, actions.substring(1));
  }
  else {
    return rober;
  }
};


module.exports.newRober = newRober;
module.exports.moveRober = moveRober;