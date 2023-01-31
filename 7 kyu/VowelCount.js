// https://www.codewars.com/kata/54ff3102c1bad923760001f3
// 7 KYU

function getCount(str) {
  return str.split('').filter(e => /a|e|i|o|u/i.test(e)).length;
}