var Bear;

Bear = (function() {

  function Bear(fn, ln) {
    this.fn = fn;
    this.ln = ln;
  }

  Bear.prototype.greet = function() {
    return "" + this.fn + " " + this.ln;
  };

  Bear.prototype.isStuffed = function() {
    return true;
  };

  Bear.prototype.coffee = function() {
    return console.log('dainty sip');
  };

  return Bear;

})();
