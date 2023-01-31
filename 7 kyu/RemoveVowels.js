// https://www.codewars.com/kata/52fba66badcd10859f00097e
// 7 KYU

function disemvowel(str) {
  return str.split('').filter(e => !/a|e|i|o|u/i.test(e)).join('');
}