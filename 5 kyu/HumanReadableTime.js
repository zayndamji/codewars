// https://www.codewars.com/kata/52685f7382004e774f0001f7
// 5 KYU

function humanReadable (seconds) {
  return toTwoDigits(seconds / 60 / 60 % 100) + ':' +
         toTwoDigits(seconds / 60 % 60) + ':' +
         toTwoDigits(seconds % 60);
}

function toTwoDigits (number) {
  number = Math.floor(number).toFixed(0);
  return number < 10 ? '0' + number : '' + number;
}