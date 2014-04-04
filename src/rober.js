
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

var move = function(rober, movement) {
  if ('N' === rober.facing || 'S' === rober.facing) {
    return newRober(rober.position.x, rober.position.y + movement, rober.facing);
  } else {
    return newRober(rober.position.x + movement, rober.position.y, rober.facing);
  }
};

var moveForward = function(rober) {
  var offset = calulateMovement(rober.facing);
  return move(rober, offset);
};

var moveBackward = function(rober) {
  var offset = -calulateMovement(rober.facing);
  return move(rober, offset);
};

var orientations = 'NESW';
var rotate = function(facing, change) {
  var index = orientations.indexOf(facing);
  return orientations[(index + change + orientations.length) % orientations.length];

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
