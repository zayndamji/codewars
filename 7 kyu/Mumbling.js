// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
// 7 KYU

function accum(s) {
  let str = "";
	for (let i = 0; i < s.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (j == 0) str += s[i].toUpperCase();
      else str += s[i].toLowerCase();
    }
    if (i != s.length - 1) str += "-";
  }
  return str;
}