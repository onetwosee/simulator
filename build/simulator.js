(function( undefined ) {

  
  // The simulator prototype just fires the initialize function
  var Simulator = function( options ) {
  
    options = options || {};
  
    if ( this.initialize && typeof this.initialize === 'function' ) {
      this.initialize();
    }
  
    this._now = options.now || 0;
    this._incrementValue = options.incrementValue || 12;
    this._multiplier = 0;
    this._multiplierCap = 10;
  
    this.looper = new this.Looper( this._increment.bind(this) );
  
  };
  
  Simulator.prototype._increment = function() {
    this._now += this._incrementValue;
  };
  
  Simulator.prototype.speedUp = function() {
  
    if ( this._multiplier >= this._multiplierCap ) {
      return;
    }
  
    this._incrementValue = this._incrementValue * 2;
    this._multiplier++;
  
  };
  
  Simulator.prototype.slowDown = function() {
  
    if ( this._multiplier <= -this._multiplierCap ) {
      return;
    }
  
    this._incrementValue = this._incrementValue / 2;
    this.multiplier--;
  };
  
  Simulator.prototype.play = function() {
    this.looper.start();
  };
  
  Simulator.prototype.stop = function() {
    this.looper.stop();
  };
  
  Simulator.prototype.goto = function( now ) {
    this._now = now;
  };
  function getType() {
  
    
  
  }
  
  // Returns the URL to 
  function getSimUrl() {
  
    return 'http://localhost.com/test';
  
  }
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

  Simulator.prototype.Looper = Looper;

  window.Simulator = Simulator;

})();