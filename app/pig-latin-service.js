(function () {

  angular.module('pigLatin').service('pigLatinService', pigLatinService);

  function pigLatinService() {
    this.convert = convert;
  }

  function convert(words) {
    return words.split(' ').map(convertWord).join(' ');
  }

  var vowels = ['a', 'e', 'i', 'o', 'u'];

  function convertWord(word) {
    if (word.length <= 1) {
      return word;
    }
    if (vowels.indexOf(word[0].toLowerCase()) !== -1) {
      // starts with a vowel
      return vowelFirstConvert(word);
    }
    else {
      return consonantFirstConvert(word);
    }
  }

  function vowelFirstConvert(word) {
    return firstLetterToEnd(word) + 'i';
  }

  function consonantFirstConvert(word) {
    return firstLetterToEnd(word) + 'ay';
  }

  function firstLetterToEnd(word) {
    return word.substring(1, word.length) + word[0];
  }
})();
