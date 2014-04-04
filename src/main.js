var rober = require('./rober.js');
var numArgs = process.argv.length;
if (numArgs < 3) {
  console.log('Usage: node src/main.js <commands> [initial x]  [initial y] [facing]');
  console.log('Example: node src/main.js FFRFF 0 0 N');
  process.exit();
}
var commands = process.argv[2];

var initialX = numArgs >= 4 ? parseInt(process.argv[3]) : 0;
var initialY = numArgs >= 5 ? parseInt(process.argv[4]) : 0;
var initialFacing = numArgs >= 6 ? process.argv[5] : 'N';

var r = rober.newRober(initialX, initialY, initialFacing);

var roberMoved = rober.moveRober(r, commands);
console.log(JSON.stringify(roberMoved));
