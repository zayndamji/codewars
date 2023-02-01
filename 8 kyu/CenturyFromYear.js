// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
// 8 KYU

function century(year) {
  return year % 100 == 0 ? Math.floor(year / 100) : Math.floor(year / 100 + 1);
}