// https://www.codewars.com/kata/56747fd5cb988479af000028
// 7 KYU

function getMiddle(s) {
  if (s.length % 2 == 1) return s.substring(Math.ceil(s.length / 2 - 1), Math.ceil(s.length / 2));
  else return s.substring(Math.ceil(s.length / 2 - 1), Math.ceil(s.length / 2 + 1));
}