// https://www.codewars.com/kata/550554fd08b86f84fe000a58
// 6 KYU

function inArray(array1,array2) {
  return array1.filter(e => array2.filter(w => w.includes(e)).length != 0).sort();
}