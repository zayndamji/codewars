// https://www.codewars.com/kata/56efc695740d30f963000557
// 8 KYU

String.prototype.toAlternatingCase = function () {
  return [...this].map(item => {
    return item == item.toUpperCase() ? item.toLowerCase() : item.toUpperCase();
  }).join("");
}