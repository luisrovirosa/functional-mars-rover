
var r = require('../src/rober.js');
describe('Rober', function() {
  var rober;
  beforeEach(function() {
    rober = r.newRober(2, 2, 'N');

  });
  it('with empty instructions remains at same position', function() {
    var roberMoved = r.moveRober(rober, '');

    expect(equals(roberMoved, rober)).toBe(true);
  });

  describe('move forward', function() {

    it('facing north increase 1 in y axis', function() {
      var roberMoved = r.moveRober(rober, 'F');
      var expectedRober = r.newRober(2, 3, 'N');

      expect(equals(roberMoved, expectedRober)).toBe(true);
    });

    it('facing est increase 1 in x axis', function() {
      var rober = r.newRober(2, 2, 'E');
      var roberMoved = r.moveRober(rober, 'F');
      var expectedRober = r.newRober(3, 2, 'E');

      expect(equals(roberMoved, expectedRober)).toBe(true);
    });

    it('facing south decrease 1 in y axis', function() {
      var rober = r.newRober(2, 2, 'S');
      var roberMoved = r.moveRober(rober, 'F');
      var expectedRober = r.newRober(2, 1, 'S');

      expect(equals(roberMoved, expectedRober)).toBe(true);
    });

    it('facing west decrease 1 in x axis', function() {
      var rober = r.newRober(2, 2, 'W');
      var roberMoved = r.moveRober(rober, 'F');
      var expectedRober = r.newRober(1, 2, 'W');

      expect(equals(roberMoved, expectedRober)).toBe(true);
    });
  });

  describe('move backwards', function() {
    it('facing north decrease 1 in y axis', function() {
      var roberMoved = r.moveRober(rober, 'B');
      var expectedRober = r.newRober(2, 1, 'N');

      expect(equals(roberMoved, expectedRober)).toBe(true);
    });

    it('facing est decrease 1 in x axis', function() {
      var rober = r.newRober(2, 2, 'E');
      var roberMoved = r.moveRober(rober, 'B');
      var expectedRober = r.newRober(1, 2, 'E');

      expect(equals(roberMoved, expectedRober)).toBe(true);
    });

    it('facing south increase 1 in y axis', function() {
      var rober = r.newRober(2, 2, 'S');
      var roberMoved = r.moveRober(rober, 'B');
      var expectedRober = r.newRober(2, 3, 'S');

      expect(equals(roberMoved, expectedRober)).toBe(true);
    });

    it('facing west increase 1 in x axis', function() {
      var rober = r.newRober(2, 2, 'W');
      var roberMoved = r.moveRober(rober, 'B');
      var expectedRober = r.newRober(3, 2, 'W');

      expect(equals(roberMoved, expectedRober)).toBe(true);
    });

  });

  describe('rotate rigth', function() {
    it('facing north change orientation to East', function() {
      var roberMoved = r.moveRober(rober, 'R');
      expect(equals(roberMoved.facing, 'E')).toBe(true);
    });

    it('facing East change orientation to South', function() {
      var rober = r.newRober(2, 2, 'E');
      var roberMoved = r.moveRober(rober, 'R');

      expect(equals(roberMoved.facing, 'S')).toBe(true);
    });
    it('facing South change orientation to West', function() {
      var rober = r.newRober(2, 2, 'S');
      var roberMoved = r.moveRober(rober, 'R');

      expect(equals(roberMoved.facing, 'W')).toBe(true);
    });
    it('facing West change orientation to North', function() {
      var rober = r.newRober(2, 2, 'W');
      var roberMoved = r.moveRober(rober, 'R');

      expect(equals(roberMoved.facing, 'N')).toBe(true);
    });
  });

  describe('rotate left', function() {
    it('facing North change orientation to West', function() {
      var roberMoved = r.moveRober(rober, 'L');
      expect(equals(roberMoved.facing, 'W')).toBe(true);
    });

    it('facing East change orientation to North', function() {
      var rober = r.newRober(2, 2, 'E');
      var roberMoved = r.moveRober(rober, 'L');

      expect(equals(roberMoved.facing, 'N')).toBe(true);
    });
    it('facing South change orientation to East', function() {
      var rober = r.newRober(2, 2, 'S');
      var roberMoved = r.moveRober(rober, 'L');

      expect(equals(roberMoved.facing, 'E')).toBe(true);
    });
    it('facing West change orientation to South', function() {
      var rober = r.newRober(2, 2, 'W');
      var roberMoved = r.moveRober(rober, 'L');

      expect(equals(roberMoved.facing, 'S')).toBe(true);
    });
  });

  describe('multiple movements', function() {
    it('moving forward and backward remains at same position and orientation', function() {
      var roberMoved = r.moveRober(rober, 'FB');

      expect(equals(roberMoved, rober)).toBe(true);
    });

    it('rotate left and rigth remains at same position and orientation', function() {
      var roberMoved = r.moveRober(rober, 'RL');

      expect(equals(roberMoved, rober)).toBe(true);
    });
    it('rotate rigth 4 times remains at same position and orientation', function() {
      var roberMoved = r.moveRober(rober, 'RRRR');

      expect(equals(roberMoved, rober)).toBe(true);
    });
    it('rober move forward rotate rigth and move forward', function() {
      var roberMoved = r.moveRober(rober, 'FFRFF');
      var expectedRober = r.newRober(4, 4, 'E');
      expect(equals(roberMoved, expectedRober)).toBe(true);
    });
    it('rober all commands doing a circle remains at same position', function() {
      var roberMoved = r.moveRober(rober, 'FRFLBLFR');
      expect(equals(roberMoved, rober)).toBe(true);
    });
  });

});

var equals = function(object1, object2) {
  return JSON.stringify(object1) === JSON.stringify(object2);
};
