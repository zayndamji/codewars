// https://www.codewars.com/kata/5266876b8f4bf2da9b000362
// 6 KYU

function likes(names) {
  return names.length == 0 ? "no one likes this" :
         names.length == 1 ? `${names[0]} likes this` :
         names.length == 2 ? `${names[0]} and ${names[1]} like this` :
         names.length == 3 ? `${names[0]}, ${names[1]} and ${names[2]} like this` :
                             `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
}