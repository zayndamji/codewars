// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9
// 7 KYU

function findShort(s) {
  let count = Infinity;
  s.split(' ').forEach(e => e.length < count ? count = e.length : e);
  return count;
}