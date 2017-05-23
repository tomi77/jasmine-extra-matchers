describe 'A Jasmine extra matchers have function that', () ->

  it 'should checks whether a value is the instance of type', () ->
    class Model
    class AnotherModel

    model = new Model()

    expect(model).toBeInstanceOf(Model)
    expect(model).not.toBeInstanceOf(AnotherModel)

  it 'should checks whether a value is infinity', () ->
    expect(Infinity).toBeInfinity()
    expect(0).not.toBeInfinity()

  it 'should checks whether a value has own property', () ->
    expect({type: true}).hasOwnProperty('type')
    expect({typo: true}).not.hasOwnProperty('type')

  it 'should checks whether the value is an even number', () ->
    expect(2).toBeEven()
    expect(3).not.toBeEven()

  it 'should checks whether the value is an odd number', () ->
    expect(3).toBeOdd()
    expect(2).not.toBeOdd()

  it 'should checks whether the value contains a numeric value', () ->
    expect('14').toBeNumeric()
    expect('fourteen').not.toBeNumeric()

  it 'should checks whether the value is a numeric integer', () ->
    expect(18).toBeInteger()
    expect('18').toBeInteger()
    expect(2.5).not.toBeInteger()
    expect(-1).toBeInteger()

  it 'should checks whether the value is a "float"', () ->
    expect(1.1).toBeFloat()
    expect(1).not.toBeFloat()
    expect(1.0).not.toBeFloat()
    expect('2.15').toBeFloat()

  it 'should checks whether the value is a positive number', () ->
    expect(21).toBePositive()
    expect(-1).not.toBePositive()

  it 'should checks whether the value is a negative number', () ->
    expect(-2).toBeNegative()
    expect(5).not.toBeNegative()
