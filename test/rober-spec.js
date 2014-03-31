
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
    expect(roberMoved.position).toBe(rober.position);

  });




});