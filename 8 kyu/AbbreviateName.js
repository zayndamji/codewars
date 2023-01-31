// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
// 8 KYU

function abbrevName(name){
  return name.split(' ').map(e => e.substring(0, 1)).join('.').toUpperCase();
}