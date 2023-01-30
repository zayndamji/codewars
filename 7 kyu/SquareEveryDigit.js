// https://www.codewars.com/kata/546e2562b03326a88e000020
// 7 KYU

function squareDigits(num){
  const digits = num.toString();
  let squaredDigits = "";
  for (let i = 0; i < digits.length; i++) {
    squaredDigits += Math.pow(parseInt(digits[i]), 2);
  }
  return parseInt(squaredDigits);
}