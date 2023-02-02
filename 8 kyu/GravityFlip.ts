// https://www.codewars.com/kata/5f70c883e10f9e0001c89673
// 8 KYU

export function flip(dir: string, arr: number[]): number[] {
  return dir == 'R' ? arr.sort((a, b) => { return a - b }) : 
                      arr.sort((a, b) => { return b - a });
}