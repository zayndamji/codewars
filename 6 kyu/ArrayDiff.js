// https://www.codewars.com/kata/523f5d21c841566fde000009
// 6 KYU

function arrayDiff(a, b) {
  return a.filter(eA => {
    let valid = true;
    for (const eB of b)
      if (eA == eB) valid = false;
    return valid;
  });
}