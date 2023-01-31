// https://www.codewars.com/kata/578553c3a1b8d5c40300037c
// 7 KYU

const binaryArrayToNumber = arr => {
  return parseInt(arr.reduce((all, num) => all += num, ''), 2);
};