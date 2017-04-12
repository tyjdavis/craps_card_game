let assert = require('assert');
let Craps = require('../lib/Craps.js');

describe('Craps', function() {
  let game;
  beforeEach(function(){
    game = new Craps('John', 10);
  });
  it('has a player', function() {
    assert.equal(game.player, 'John');
  })
  it('starts with a bet', function (){
    assert.equal(game.value, 10);
  })
  describe('#roll()', function(){
    it('produces random number between 2 and 12', function() {
      let roll = game.roll();
      assert(roll >= 2); //checks to see if true or false
      assert(roll <= 12);
    })
  })

  describe('#comeOutResult()', function () { //testing first roll to see if they win
    it('returns "winner" if comeOutRoll is 7 or 11', function() {
      let winners = [7, 11];
      for (i = 0;i < winners.length; i++) {
        game.comeOutRoll = winners[i];
        assert.equal(game.comeOutResult(), "winner") //checks to see if arg 1 == arg 2
      }
    });
    it('returns "loser" if comeOutRoll is 2 or 3 or 12', function() {
      let losers = [2, 3, 12];
      for (i = 0;i < losers.length; i++) {
        game.comeOutRoll = losers[i];
        assert.equal(game.comeOutResult(), "loser")
      }
    });
    it('sets a point if comeOutRoll is not 2, 3, 7, 11, or 12', function (){
      let point = [4, 5, 6, 8, 9, 10];
      for (i = 0; i < point.length; i++){
      game.comeOutRoll = point[i];
      game.comeOutResult(); //first time through runs the method with 4...
      assert.equal(game.point, point[i]); //first time throught this passes because 4 = 4
      }
    })
  });
  
  //to win on 2nd or later roll, roll the point
  describe('#laterRoll()', function (){
    it('returns "winner" if later roll equals the point', function(){
      game.point = 4;
      assert.equal(game.laterRoll(4), "winner");
      //the game needs to be able to make a roll
      //see if that roll number matches the point
      //you need to hold on to that roll number
    });
    it('returns "loser if that roll equals 7', function (){
      game.point = 4;
      assert.equal(game.laterRoll(7), "loser");
    });
    it('returns undefined if later roll is not the point or 7', function(){
      game.point = 4;
      assert.equal(game.laterRoll(8), undefined);
    })
  })
})
