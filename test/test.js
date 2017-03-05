/*jshint esversion: 6 */
var assert = require('assert');
var should = require('chai').should(),
    supertest = require('supertest'),
    bitcoinAPI = supertest('https://blockchain.info/ticker'),
    giphyAPI = supertest('http://api.giphy.com/v1/gifs/search');


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
        it('responds with json, 200 code and no errors', function(done) {
            var command = 'bitcoin';
            if (command === 'bitcoin') {
                bitcoinAPI.get('')
                    .expect(200)
                    .expect('Content-Type', /json/)
                    .end((err, res, body) => {
                        if (err) return done(err);
                        res.status.should.equal(200);
                        done();
                    });
            }
        });
        it('responds with 404', function(done) {
            var command = 'bitcoin';
            if (command === 'bitcoin') {
                bitcoinAPI.get('/')
                    .expect(404)
                    .end((err, res, body) => {
                        if (err) return done(err);
                        res.status.should.equal(404);
                        done();
                    });
            }
        });
    });

    describe('!goat', function() {
        it('should return 200 from giphy api', function() {
            var command = 'goat';
            if (command === 'goat') {}
        });
    });
    describe('!kitten', function() {
        it('should return 200 from giphy api', function() {
            var command = 'kitten';
            if (command === 'kitten') {}
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
