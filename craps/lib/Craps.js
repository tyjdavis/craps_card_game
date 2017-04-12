function Craps (player, value) {
  this.player = player;
  this.value = value;
}

Craps.prototype.roll = function () {

  let dieOne =  Math.random() * 6 + 1; //Math.random returns a random number between 0 and 0.999999...//will return a number between 1 and 6
  let dieTwo = Math.random() * 6 + 1;
  return Math.floor(dieOne) + Math.floor(dieTwo); //Math.floor rounds down
}

Craps.prototype.comeOutResult = function () {
  if (this.comeOutRoll === 2 || this.comeOutRoll === 3 || this.comeOutRoll === 12){
    return "loser"
  } else if ([7, 11].includes(this.comeOutRoll)) {
  return "winner"
  }
  this.point = this.comeOutRoll; //first time through sets point to 4
}

Craps.prototype.laterRoll = function(dieTotal) {
  if (dieTotal === this.point) {
    return "winner";
  } else if (dieTotal === 7) {
    return "loser";
  }
}



Craps.prototype.play = function() {
  this.comeOutRoll = this.roll();
  let result = this.comeOutResult();
  if (result) {
    return result;
  }
  console.log('point is ', this.point);
  while(!result) {
    let dice = this.roll();
    console.log('latest roll:', dice);
    result = this.laterRoll(dice);
  }
  return result;
}

module.exports = Craps;
