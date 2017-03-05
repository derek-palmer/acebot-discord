/*jshint esversion: 6 */
var assert = require('assert');

describe('Commands', function() {
    describe('!add', function() {
        it('should return sum of numbers', function() {
            var command = "add 5 5 10 10";
            var message;
            let args = command.split(" ").slice(1);
            if (command === "add 5 5 10 10") {
                let numArray = args.map(n => parseInt(n));
                let total = numArray.reduce((p, c) => p + c);
                message = total;
            }
            assert.equal(message, 30);
        });
    });
    describe('!helpme', function() {
        it('should return help text as message', function() {
            var command = 'helpme';
            var message;
            if (command === 'helpme') {
                message = "help? You don't need help.";
            }
            assert.equal(message, "help? You don't need help.");
        });
    });
    describe('!pong', function() {
        it('should return ping as message', function() {
            var command = 'pong';
            var message;
            if (command === 'pong') {
                message = "ping";
            }
            assert.equal(message, "ping");
        });
    });
    describe('!bitcoin', function() {
        it('should return current bitcoin market price', function() {
            var command = 'bitcoin';
            var message;
            var USD;
            if (command === 'bitcoin') {
                USD = 1100;
                message = `the current Bitcoin market price is: $ ${USD} USD`;
            }
            assert.equal(message, `the current Bitcoin market price is: $ ${USD} USD`);
        });
    });
    describe('!goat', function() {
        it('should return a goat gif', function() {
            var command = 'goat';
            var message;
            var goatURL;
            if (command === 'goat') {
                goatURL = 'https://media.giphy.com/media/5K3Vw3jUqwV56/giphy.gif';
                message = `${goatURL} :goat: | **Here is your random goat:**`;
            }
            assert.equal(message, `${goatURL} :goat: | **Here is your random goat:**`);
        });
    });
    describe('!kitten', function() {
        it('should return a kitten gif', function() {
            var command = 'kitten';
            var message;
            var kittenURL;
            if (command === 'kitten') {
                kittenURL = 'https://media.giphy.com/media/euVEp3YNqid5C/giphy.gif';
                message = `${kittenURL} :cat2: | **Here is your random kitten:**`;
            }
            assert.equal(message, `${kittenURL} :cat2: | **Here is your random kitten:**`);
        });
    });
    describe('!bringo', function() {
        it('should return steve brule bringo gif', function() {
            var command = 'bringo';
            var message;
            if (command === 'bringo') {
                message = "https://media.giphy.com/media/xLsaBMK6Mg8DK/giphy.gif";
            }
            assert.equal(message, "https://media.giphy.com/media/xLsaBMK6Mg8DK/giphy.gif");
        });
    });
    describe('!triggered', function() {
        it('should return triggered gif', function() {
            var command = 'triggered';
            var message;
            if (command === 'triggered') {
                message = "https://media.giphy.com/media/vk7VesvyZEwuI/giphy.gif";
            }
            assert.equal(message, "https://media.giphy.com/media/vk7VesvyZEwuI/giphy.gif");
        });
    });
});
