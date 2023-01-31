// https://www.codewars.com/kata/55a2d7ebe362935a210000b2
// 8 KYU

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.reduce((smallest, current) => current < smallest ? smallest = current : smallest, Infinity);
  }
}