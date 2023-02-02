// https://www.codewars.com/kata/514b92a657cdc65150000006
// 6 KYU

export class Challenge {
  static solution(number: number) {
    let sum = 0;
    for (let i = 0; i < number; i++) if (i % 5 == 0 || i % 3 == 0) sum += i;
    return sum;
  }
}