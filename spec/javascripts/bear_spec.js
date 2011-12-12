require('/javascripts/bear.js')

describe('a bear', function() {
  return it('should be snuggly', function() {
    var b;
    b = new Bear('teven', 'quincy');
    expect(b.isSnuggly()).toBe(true);
    expect(b.greet()).toBe('teven quincy');
  });
});
