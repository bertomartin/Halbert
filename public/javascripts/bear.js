var Bear = function (fn,ln){
  this.firstName = fn;
  this.lastName = ln;
}

Bear.prototype.greet = function (){
  return this.firstName + ' ' + this.lastName;
}

Bear.prototype.isSnuggly = function (){
  return true
}
