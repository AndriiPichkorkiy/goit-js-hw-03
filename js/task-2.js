/**
 * створює новий масив, який містить усі елементи з firstArray та secondArray, повертає копію масиву з довжиною не більше maxLength
 * @param {Array} firstArray перший довільний масив
 * @param {Array} secondArray другий довільний масив
 * @param {Number} maxLength максимальна довжина масива
 * @returns {Array}
 */
function makeArray(firstArray, secondArray, maxLength) {
  const mergedArray = firstArray.concat(secondArray);
  if (mergedArray.length > maxLength) return mergedArray.slice(0, maxLength);

  return mergedArray;
}

console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []
