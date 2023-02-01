// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132
// 7 KYU

export class Kata {
  static validatePin(pin: string): boolean {
    return (/[0-9]{6}/.test(pin) && pin.length == 6) || 
           (/[0-9]{4}/.test(pin) && pin.length == 4);
  }
}