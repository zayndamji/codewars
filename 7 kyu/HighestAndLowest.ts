// https://www.codewars.com/kata/554b4ac871d6813a03000035
// 7 KYU

export class Kata {
  static highAndLow(numbers: string): string {
    const m = [-Infinity, Infinity];
    numbers.split(' ').forEach((e: any) => {
      e = parseInt(e);
      if (e > m[0]) m[0] = e;
      if (e < m[1]) m[1] = e;
    });
    return m.join(' ');
  }
}