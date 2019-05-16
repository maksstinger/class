function Player(sName, pPos, pNum) {
  this.surname = sName;
  this.position = pPos;
  this.number = pNum;
  this.isAssistant = false;
  this.displayInfo = function(){
        return "We have a new teammate: " + this.surname + ". He is: " + this.position + ". His number is: " + this.number + ". He is assistant - " + this.isAssistant;
    };
}
Player.prototype.assist = function(){
  return this.isAssistant = true;
}
Player.prototype.unassist = function(){
  return this.isAssistant = false;
}

let ivanov = new Player ('Ivanov', 'Defender', 31);
let petrov = new Player ('Petrov', 'Forward', 9);
let sidorov = new Player ('Sidorov', 'Goalkeeper', 36);


sidorov.assist();
sidorov.displayInfo();

//sidorov.unassist();
//sidorov.displayInfo();
