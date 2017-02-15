describe('pig-latin-service', function () {

  beforeEach(module('pigLatin'));

  var pigLatinService;

  beforeEach(inject(function(_pigLatinService_){
    pigLatinService = _pigLatinService_;
  }));

  it('should not modify words less than 2 characters long', function () {
    var shortWord = 'a';
    var expected = 'a';
    var actual = pigLatinService.convert(shortWord)
    expect(actual).toEqual(expected);
  })

  it('should change `pig` to `igpay`', function () {
    var input = 'pig';
    var expected = 'igpay';
    var actual = pigLatinService.convert(input)
    expect(actual).toEqual(expected);
  })

  it('should change `apple` to `ppleai`', function () {
    var input = 'apple';
    var expected = 'ppleai';
    var actual = pigLatinService.convert(input)
    expect(actual).toEqual(expected);
  })

  it('should change `pig apple` to `igpay ppleai`', function () {
    var input = 'pig apple';
    var expected = 'igpay ppleai';
    var actual = pigLatinService.convert(input)
    expect(actual).toEqual(expected);
  })
})
