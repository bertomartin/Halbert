var Tree;
Tree = (function() {
  function Tree(species) {
    this.species = species;
  }
  Tree.prototype.joke = function() {
    return console.log("I make like a " + this.constructor.name + " and leave!");
  };
  return Tree;
})();