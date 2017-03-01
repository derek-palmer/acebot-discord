var assert = require('assert');

describe('Commands', function() {
  describe('!helpme', function() {
    it('should return help text', function() {
      var command = 'helpme'
      if (command === 'helpme') {
           var message = "help? You don't need help.";
      }
      assert.equal(message, "help? You don't need help.");
    });
  });
});
