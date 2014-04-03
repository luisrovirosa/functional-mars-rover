
var newRober = function(x, y, facing) {
  return {
    position: {
      x: x,
      y: y
    },
    facing: facing
  };
};

var calulateMovement = function(facing) {
  return 'E' === facing || 'N' === facing ? 1 : -1;
};

var moveForward = function(rober) {
  var facing = rober.facing;
  var offset = calulateMovement(facing);
  if ('N' === rober.facing || 'S' === facing) {
    return newRober(rober.position.x, rober.position.y + offset, facing);
  } else {
    return newRober(rober.position.x + offset, rober.position.y, facing);
  }
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