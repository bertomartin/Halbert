var Tree;

Tree = (function() {

  function Tree(species) {
    this.species = species;
  }

  Tree.prototype.joke = function() {
    return console.log("I make like a " + this.constructor.name + " and leave!");
  };

  Tree.prototype.fall = function() {
    return console.log("In autumn the " + this.species + " is affected with melancholy.");
  };

  return Tree;

})();
