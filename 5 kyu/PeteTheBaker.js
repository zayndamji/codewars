// https://www.codewars.com/kata/525c65e51bf619685c000059
// 5 KYU

function cakes(recipe, available) {
  let amount = Infinity;
  for (const ingredient in recipe)
    amount = Math.min(amount, available[ingredient] == undefined ? 0 :
                      Math.floor(available[ingredient] / recipe[ingredient]));
  return amount;
}