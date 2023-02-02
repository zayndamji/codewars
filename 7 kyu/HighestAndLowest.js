// https://www.codewars.com/kata/554b4ac871d6813a03000035
// 7 KYU

function highAndLow(numbers) {
  const m = [-Infinity, Infinity];
  numbers.split(' ').forEach((e) => {
    e = parseInt(e);
    if (e > m[0]) m[0] = e;
    if (e < m[1]) m[1] = e;
  });
  return m.join(' ');
}