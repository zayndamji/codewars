// https://www.codewars.com/kata/576bb71bbbcf0951d5000044
// 8 KYU

function countPositivesSumNegatives(input = []) {
  if (input == null || input.length == 0) return [];
  return [
    input.filter(e => e > 0).length,
    input.filter(e => e < 0).reduce((t, e) => t += e)
  ];
}