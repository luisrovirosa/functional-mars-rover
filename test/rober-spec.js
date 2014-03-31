
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

    expect(equals(roberMoved, rober)).toBe(true);

  });

  it('rober with forward the position is not the same as before moving', function() {
    var roberMoved = r.moveRober(rober, 'F');

    expect(equals(rober, roberMoved)).not.toBe(true);

  });

  it('rober with 0,0 forward the position is 0,1 N', function() {
    var roberMoved = r.moveRober(rober, 'F');
    var expectedRober = r.newRober(0, 1, 'N');

    expect(equals(roberMoved, expectedRober)).toBe(true);
  });


  it('rober with 0,0 forward, backward the position is 0,0 N', function() {
    var roberMoved = r.moveRober(rober, 'FB');

    expect(equals(roberMoved, rober)).toBe(true);
  });

  it('rober with 0,0 N right the orientation is E', function() {
    var roberMoved = r.moveRober(rober, 'R');

    expect(equals(roberMoved.facing, 'E')).toBe(true);
  });

  it('rober with 0,0 N right rigth the orientation is E', function() {
    var roberMoved = r.moveRober(rober, 'RR');

    expect(equals(roberMoved.facing, 'S')).toBe(true);
  });

  it('rober with 0,0 N right left the orientation is N', function() {
    var roberMoved = r.moveRober(rober, 'RL');

    expect(equals(roberMoved.facing, 'N')).toBe(true);
  });

  it('rober with 0,0 N right 4 times the orientation is N', function() {
    var roberMoved = r.moveRober(rober, 'RRRR');

    expect(equals(roberMoved.facing, 'N')).toBe(true);
  });

  it('rober with 0,0 rigth forward the position is 1,0 E', function() {
    var roberMoved = r.moveRober(rober, 'RF');
    var expectedRober = r.newRober(1, 0, 'E');

    expect(equals(roberMoved, expectedRober)).toBe(true);
  });

});

var equals = function(object1, object2) {
  return JSON.stringify(object1) === JSON.stringify(object2);
};
