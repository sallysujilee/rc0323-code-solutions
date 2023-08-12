/* exported isPalindromic */
function isPalindromic(string) {
  string = string.split(' ').join('').toLowerCase();

  return string === string.split('').reverse().join('');
}

/*
Define a function, named 'isPalindromic', that accepts on argument, 'string'
  The 'toLowerCase' method to the 'join' method to the 'split' method of the 'string' object is assigned to the 'string' argument
  Return so the 'join' method to the 'reverse' method to the 'split' method of the 'string' object is strictly equal to the 'string' argument
*/
