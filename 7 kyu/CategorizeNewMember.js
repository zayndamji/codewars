// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa
// 7 KYU

function openOrSenior(data) {
  return data.map(e => e[0] >= 55 && e[1] > 7 ? 'Senior' : 'Open');
}