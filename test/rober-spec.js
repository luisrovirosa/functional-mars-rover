
var r = require('../src/rober.js');
describe('Rober', function() {
//  it('initial setup', function() {
//    var rober = r.newRober(0, 0, 'N');
//
//    var roberMoved = r.moveRober(rober, 'ffrff');
//    var expectedRober = r.newRober(2, 2, 'E');
//    expect(roberMoved).toBe(expectedRober);
//  });
  var rober;
  beforeEach(function() {
    rober = r.newRober(0, 0, 'N');

  });
  it('rober with empty instructions has the same position', function() {
    var roberMoved = r.moveRober(rober, '');

    expect(equals(roberMoved.position, rober.position)).toBe(true);

  });

  it('rober with forward the position is not the same as before moving', function() {
    var roberMoved = r.moveRober(rober, 'F');

    expect(equals(rober.position, roberMoved.position)).not.toBe(true);

  });

});

var equals = function(object1, object2) {
  return JSON.stringify(object1) === JSON.stringify(object2);
};
