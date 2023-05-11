// https://www.codewars.com/kata/51c8e37cee245da6b40000bd
// 4 KYU

function solution(input, markers) {
  const lines = input.split('\n');
  for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < markers.length; j++) {
      const sub = lines[i].indexOf(markers[j]);
      if (sub != -1) {
        lines[i] = lines[i].substring(0, sub);
      }
    }
    lines[i] = lines[i].trim();
  }
  return lines.join('\n');
};