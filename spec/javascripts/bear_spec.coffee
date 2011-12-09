require '/javascripts/custom/bear.js'

describe 'a bear', ->
  it 'should be snuggly', ->
    b = new Bear 'Edward', 'Bear'

    expect(b.isStuffed()).toBe(true);
    expect(b.greet()).toBe('Edward Bear');
