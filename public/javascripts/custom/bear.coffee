class Bear
  constructor: (@fn,@ln) ->
  greet: -> "#{@fn} #{@ln}"
  isStuffed: -> true
  coffee: -> console.log 'slurp'
