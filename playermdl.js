var msg = '';
// Displays the current score
exports.displayScore = function() {
    msg = 'Goal score is: ' + this.score;
    msg += msg + '<br>';
    console.log(msg);
};

exports.reqHandler = function(req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end(msg);
};