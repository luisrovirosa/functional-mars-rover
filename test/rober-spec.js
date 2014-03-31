
var r = require('../src/rober.js');
describe('Rober', function() {
//  it('initial setup', function() {
//    var rober = r.newRober(0, 0, 'N');
//
//    var roberMoved = r.moveRober(rober, 'ffrff');
//    var expectedRober = r.newRober(2, 2, 'E');
//    expect(roberMoved).toBe(expectedRober);
//  });

  it('rober with empty instructions has the same position', function() {
    var rober = r.newRober(0, 0, 'N');
    var roberMoved = r.moveRober(rober, '');
    expect(JSON.stringify(roberMoved.position)).toBe(JSON.stringify(rober.position));

  });

  it('rober with forward the position is not the same as before moving', function() {
    var rober = r.newRober(0, 0, 'N');
    var roberMoved = r.moveRober(rober, 'F');
    expect(JSON.stringify(roberMoved.position)).not.toBe(JSON.stringify(rober.position));

  });



});