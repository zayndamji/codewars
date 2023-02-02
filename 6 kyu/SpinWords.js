// https://www.codewars.com/kata/5264d2b162488dc400000001
// 6 KYU

function spinWords(words) {
  return words.split(' ')
              .map(e => e.length >= 5 ? e.split('').reverse().join('') : e)
              .join(' ');
}