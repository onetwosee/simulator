javascript:

(function( $, _, undefined ) {

  var Simulator = function() {
  
    if ( this.initialize && typeof this.initialize === 'function' ) {
      this.initialize();
    }
  
  };
  
  _.extend( Simulator.prototype, {
  
    initialize: function() {
  
      this._url = getSimUrl();
      this._type = getType();
  
    },
  
    play: function() {
  
  
  
    },
  
    fastForward: function() {
  
  
  
    },
  
    rewind: function() {
  
  
  
    },
  
    toggleMenu: function() {
  
  
  
    },
  
    jumpTo: function( target ) {
  
  
  
    }
  
  });
  function getType() {
  
  }
  
  // Returns the URL to 
  function getSimUrl() {
  
    return 'http://localhost.com/test';
  
  }

})( jQuery, _ );