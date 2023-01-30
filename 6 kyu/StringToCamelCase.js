// https://www.codewars.com/kata/517abf86da9663f1d2000003
// 6 KYU

function toCamelCase(str){
  const words = str.split(/-|_/);
  return [].concat(words[0].substring(0, 1).toUpperCase() == words[0].substring(0, 1) ?
                   words[0].substring(0, 1).toUpperCase() + words[0].substring(1) : words[0],
                   words.slice(1)
                        .map(word => word.substring(0, 1).toUpperCase() + word.substring(1)))
            .join("");
}