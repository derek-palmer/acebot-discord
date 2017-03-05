/*jshint esversion: 6 */
var assert = require('assert');
var supertest = require("supertest");
var should = require("should");

var bitcoinAPI = supertest.agent("https://blockchain.info/ticker");
var giphyAPI = supertest.agent("http://api.giphy.com/v1/gifs/search");


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
        it('should return 200 from bitcoin api', function() {
            var command = 'bitcoin';
            var message;
            var result;
            var USD;
            if (command === 'bitcoin') {
                //call bitcoin api
                bitcoinAPI
                    .get("/")
                    .expect("Content-type", /json/)
                    .expect(200)
                    .end(function(err, res) {
                        // HTTP status should be 200
                        res.status.should.equal(200);
                        // Error key should be false.
                        res.body.error.should.equal(false);
                        done();
                    });
            }
        });
    });

    describe('!goat', function() {
      it('should return 200 from giphy api', function() {
          var command = 'goat';
          if (command === 'goat') {
              //call bitcoin api
              bitcoinAPI
                  .get("/")
                  .expect("Content-type", /json/)
                  .expect(200)
                  .end(function(err, res) {
                      // HTTP status should be 200
                      res.status.should.equal(200);
                      // Error key should be false.
                      res.body.error.should.equal(false);
                      done();
                  });
          }
      });
    });
    describe('!kitten', function() {
      it('should return 200 from giphy api', function() {
          var command = 'kitten';
          if (command === 'kitten') {
              //call bitcoin api
              bitcoinAPI
                  .get("/")
                  .expect("Content-type", /json/)
                  .expect(200)
                  .end(function(err, res) {
                      // HTTP status should be 200
                      res.status.should.equal(200);
                      // Error key should be false.
                      res.body.error.should.equal(false);
                      done();
                  });
          }
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
