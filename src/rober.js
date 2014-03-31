
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

var orientations = 'NESW';
var rotate = function(facing, change) {
  var index = orientations.indexOf(facing);
  return orientations[index + change];

}


var rotateRigth = function(rober) {
  var facing = rotate(rober.facing, 1);
  return newRober(rober.position.x, rober.position.y - 1, facing);
};

var rotateLeft = function(rober) {
  var facing = rotate(rober.facing, -1);


  return newRober(rober.position.x, rober.position.y - 1, facing);
};


var moveRober = function(rober, actions) {
  var newRober = rober;

  var action = actions[0];
  switch (action) {
    case 'F':
      newRober = moveForward(newRober);
      break;
    case 'B':
      newRober = moveBackward(newRober);
      break;
    case 'R':
      newRober = rotateRigth(newRober);
      break;
    case 'L':
      newRober = rotateLeft(newRober);
      break;
  }
  if (actions.length > 1) {
    return moveRober(newRober, actions.substring(1));
  }
  else {
    return newRober;
  }
};


module.exports.newRober = newRober;
module.exports.moveRober = moveRober;