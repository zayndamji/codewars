// https://www.codewars.com/kata/57356c55867b9b7a60000bd7
// 8 KYU

function basicOp(operation, value1, value2) {
  return operation == '+' ? value1 + value2 :
         operation == '-' ? value1 - value2 :
         operation == '*' ? value1 * value2 :
         operation == '/' ? value1 / value2 : 0;
}