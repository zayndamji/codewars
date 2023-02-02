// https://www.codewars.com/kata/520b9d2ad5c005041100000f
// 5 KYU

function pigIt(str){
  return str.split(' ')
            .map(e => e.substring(1) + e.substring(0, 1) + (/\!|\.|\,|\?|\;/.test(e) ? '' : 'ay'))
            .join(' ');
}