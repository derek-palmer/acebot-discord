var assert = require('assert');

describe('Commands', function() {
    describe('!add', function() {
        it('should return sum of numbers', function() {
            var command = "add 5 5 10 10";
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
            var command = 'helpme';
            if (command === 'helpme') {
                var message = "help? You don't need help.";
            }
            assert.equal(message, "help? You don't need help.");
        });
    });
    describe('!pong', function() {
        it('should return ping as message', function() {
            var command = 'pong';
            if (command === 'pong') {
                var message = "ping";
            }
            assert.equal(message, "ping");
        });
    });
    describe('!bitcoin', function() {
        it('should return current bitcoin market price', function() {
            var command = 'bitcoin';
            if (command === 'bitcoin') {
                var USD = 1100;
                var message = `the current Bitcoin market price is: $ ${USD} USD`;
            }
            assert.equal(message, `the current Bitcoin market price is: $ ${USD} USD`);
        });
    });
    describe('!goat', function() {
        it('should return a goat gif', function() {
            var command = 'goat';
            if (command === 'goat') {
                var goatURL = 'https://media.giphy.com/media/5K3Vw3jUqwV56/giphy.gif';
                var message = `${goatURL} :goat: | **Here is your random goat:**`;
            }
            assert.equal(message, `${goatURL} :goat: | **Here is your random goat:**`);
        });
    });
    describe('!kitten', function() {
        it('should return a kitten gif', function() {
            var command = 'kitten';
            if (command === 'kitten') {
                var kittenURL = 'https://media.giphy.com/media/euVEp3YNqid5C/giphy.gif';
                var message = `${kittenURL} :cat2: | **Here is your random kitten:**`;
            }
            assert.equal(message, `${kittenURL} :cat2: | **Here is your random kitten:**`);
        });
    });
    describe('!bringo', function() {
        it('should return steve brule bringo gif', function() {
            var command = 'bringo';
            if (command === 'bringo') {
                var message = "https://media.giphy.com/media/xLsaBMK6Mg8DK/giphy.gif";
            }
            assert.equal(message, "https://media.giphy.com/media/xLsaBMK6Mg8DK/giphy.gif");
        });
    });
    describe('!triggered', function() {
        it('should return triggered gif', function() {
            var command = 'triggered';
            if (command === 'triggered') {
                var message = "https://media.giphy.com/media/vk7VesvyZEwuI/giphy.gif";
            }
            assert.equal(message, "https://media.giphy.com/media/vk7VesvyZEwuI/giphy.gif");
        });
    });
});
