// Triggers the passed-in function every second,
// accounting for any latency

var Looper = function( fn ) {

  this._running = false;
  this.fn = fn;

};

Looper.prototype._loop = function() {

  var self = this;

  var boundLoop = this._loop.bind( this );
  var running = this._running;

  setTimeout(function(){

    if ( !self._running ) {
      return;
    }

    if ( self.fn && typeof self.fn === 'function' ) {
      self.fn();
    }

    boundLoop();

  }, 1000);

};

Looper.prototype.start = function() {
  this._running = true;
  this._loop();
};

Looper.prototype.stop = function() {
  this._running = false;
};