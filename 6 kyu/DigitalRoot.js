// https://www.codewars.com/kata/541c8630095125aba6000c00
// 6 KYU

function digitalRoot(n) {
  while (n >= 10)
    n = n.toString().split('').reduce((a, e) => a += parseInt(e), 0);
  return n;
}