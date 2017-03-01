var assert = require('assert');

describe('Commands', function() {
    describe('!add', function() {
        it('should return sum of numbers', function() {
            var command = "add 5 5 10 10"
            let args = command.split(" ").slice(1);
            if (command === "add 5 5 10 10") {
                let numArray = args.map(n => parseInt(n));
                let total = numArray.reduce((p, c) => p + c);
                var message = total;
            }
            assert.equal(message, 30);
        });
    });
    describe('!helpme', function() {
        it('should return help text as message', function() {
            var command = 'helpme'
            if (command === 'helpme') {
                var message = "help? You don't need help.";
            }
            assert.equal(message, "help? You don't need help.");
        });
    });
    describe('!pong', function() {
        it('should return ping as message', function() {
            var command = 'pong'
            if (command === 'pong') {
                var message = "ping";
            }
            assert.equal(message, "ping");
        });
    });
});
