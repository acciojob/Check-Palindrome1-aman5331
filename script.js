// complete the given function

function palindrome(str){

	str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Check if the reversed string is equal to the original string
  return str === str.split('').reverse().join('');

}
module.exports = palindrome
