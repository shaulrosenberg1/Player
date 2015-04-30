var http = require('http');
var util = require('util');
var events = require('events');

var playermdl = require('./playermdl'); // require my own module
util.inherits(Player, events.EventEmitter);

//-- Player Object Constructor ------
function Player () {
    this.score = 0;
    events.EventEmitter.call(this);
}

//------Player prototypes -----//
Player.prototype.incScore = function() {
    this.score += 1;
    this.emit('scoreChanged'); // fire event
};

Player.prototype.decScore = function() {
    if(this.score>0){
    this.score -= 1;
    this.emit('scoreChanged'); // fire event
    }
    else{
        console.log('Error: Negative Score!');
    }
};

//-- Create Goal instance and attach callbacks to events ------
var player = new Player();
player.on('scoreChanged', playermdl.displayScore);

//-- run some methods ------
player.incScore();
player.incScore();
player.decScore();

http.createServer(playermdl.reqHandler).listen('8080');