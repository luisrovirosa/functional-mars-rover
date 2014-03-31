
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


  for (var i = 0; i < actions.length; i++) {
    var action = actions[i];
    switch (action) {
      case 'F':
        y = y + 1;
        break;
      case 'B':
        y = y - 1;
        break;
    }
  }
  var orientation = 'N';
  return newRober(x, y, rober.facing);
};


module.exports.newRober = newRober;
module.exports.moveRober = moveRober;