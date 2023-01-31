// https://www.codewars.com/kata/5715eaedb436cf5606000381
// 8 KYU

function positiveSum(arr) {
  return arr.reduce((total, current) => current > 0 ? total += current : total, 0);
}