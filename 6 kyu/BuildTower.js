// https://www.codewars.com/kata/576757b1df89ecf5bd00073b
// 6 KYU

function towerBuilder(nFloors) {
  const floors = [];
  for (let i = 0; i < nFloors; i++) {
    const numOfStars = i * 2 + 1;
    const numOfSpaces = nFloors - 1 - i;
    floors.push(' '.repeat(numOfSpaces) + '*'.repeat(numOfStars) + ' '.repeat(numOfSpaces));
  }
  return floors;
}