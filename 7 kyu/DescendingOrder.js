// https://www.codewars.com/kata/5467e4d82edf8bbf40000155
// 7 KYU

function descendingOrder(n) {
  return parseInt(n.toString().split('').sort((a, b) => parseInt(b) - parseInt(a)).join(''));
}