// https://www.codewars.com/kata/52597aa56021e91c93000cb0
// 5 KYU

function moveZeros(arr) {
  const newArr = arr.filter(e => e !== 0);
  const numOfZeros = arr.length - newArr.length;
  for (let i = 0; i < numOfZeros; i++) newArr.push(0);
  return newArr;
}