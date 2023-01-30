// https://www.codewars.com/kata/556deca17c58da83c00002db
// 6 KYU

function tribonacci(signature, n) {
  if (n <= 3) return signature.slice(0, n);
  
  for (let i = 3; i < n; i++) {
    signature.push(signature[i-1] + signature[i-2] + signature[i-3]);
  }
  return signature;
}