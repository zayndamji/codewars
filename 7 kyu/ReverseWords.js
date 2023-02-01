// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4
// 7 KYU

function reverseWords(str) {
  return str.split(' ').map(e => e.split('').reverse().join('')).join(' ');
}