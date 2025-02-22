export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  if (! Array.isArray(nums)) throw new Error("array is required");
  return nums.map(n => n*n);
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  if (! Array.isArray(words)) throw new Error("array is required");
  const upperWord = words.map(w => w.substr(0,1).toUpperCase() + w.substr(1,w.length));
  const concatWord = upperWord.join("");
  return concatWord.substr(0,1).toLowerCase() + concatWord.substr(1,concatWord.length);
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  if (! Array.isArray(people)) throw new Error("array is required");
  return people.reduce((acc, cur) => acc += cur.subjects.length, 0);
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  if (! Array.isArray(menu)) throw new Error("array is required");
  return menu.filter(m => m.ingredients.includes(ingredient)).length > 0;
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  if (! Array.isArray(arr1)) throw new Error("array is required");
  if (! Array.isArray(arr2)) throw new Error("array is required");
  const filter = arr1.filter(a => arr2.includes(a));
  const uniq = [...new Set(filter)];
  return uniq.sort();
}
