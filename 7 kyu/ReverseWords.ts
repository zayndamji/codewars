// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4
// 7 KYU

export function reverseWords(str: string): string {
  return str.split(' ').map(e => e.split('').reverse().join('')).join(' ');
}