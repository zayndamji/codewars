// https://www.codewars.com/kata/57eae65a4321032ce000002d
// 8 KYU

function fakeBin(x) {
  return x.split('').map(e => parseInt(e) < 5 ? '0' : '1').join('');
}