// https://www.codewars.com/kata/56269eb78ad2e4ced1000013
// 7 KYU

function findNextSquare(sq) {
  const sqrt = Math.sqrt(sq);
  if (sqrt % 1 == 0) {
    return Math.pow(sqrt + 1, 2);
  }
  return -1;
}