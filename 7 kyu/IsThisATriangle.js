// https://www.codewars.com/kata/56606694ec01347ce800001b
// 7 KYU

function isTriangle(a,b,c) {
  return a + b > c && b + c > a && a + c > b;
}