// https://www.codewars.com/kata/5264d2b162488dc400000001
// 6 KYU

export function spinWords(words: string): string {
  return words.split(' ')
              .map(e => e.length >= 5 ? e.split('').reverse().join('') : e)
              .join(' ');
}