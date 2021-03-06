'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();


function rockPaperScissors(hand1, hand2) {
    var computerChoice = Math.random();
    var hand1 = hand1.toLowerCase();
    var hand2 = hand2.toLowerCase();

    if (hand1 === hand2) {
      return "It's a tie!";
    }

    if (computerChoice <0.34){
        hand2 = 'rock';
    }else if(computerChoice <=0.67){
        hand2 = 'paper';
    }else{
        hand2 = 'scissors';
    }

    if (hand1 === 'rock') {
      if (hand2 === 'scissors') {
        return "Hand one wins!";
      }
      // If we reach here, player 2 must have dealt paper
      return "Hand two wins!";
    }

    else if(hand1 === 'paper') {
        if(hand2 === 'rock') {
            return "Hand one wins!";
        }
        return "Hand two wins!";

    }

    else if(hand1 === 'scissors') {
        if(hand2 === 'rock') {
            return "Hand two wins!";
        }
        return "Hand one wins!";
    }
}



function getPrompt() {
    prompt.get(['hand1', 'hand2'], function (error, result) {

        console.log( rockPaperScissors(result['hand1'], result['hand2']) );

        getPrompt();
    });
}

// Tests

if (typeof describe !== 'undefined') {

    describe('#rockPaperScissors()', function () {
        it('should detect a tie', function () {
            assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
            assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
            assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
        });
        it('should detect which hand won', function () {
            assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
            assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
            assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
        });
    });
} else {

    getPrompt();

}
