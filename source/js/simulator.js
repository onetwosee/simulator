
// The simulator prototype just fires the initialize function
var Simulator = function() {

  if ( this.initialize && typeof this.initialize === 'function' ) {
    this.initialize();
  }

};

_.extend( Simulator.prototype, {

  initialize: function() {


    console.log( 'Initialized' );
    this._url = getSimUrl();
    this._type = getType();

    this._overrideFetch();

  },

  _overrideFetch: function() {


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