export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  if (! Array.isArray(nums)) throw new Error("array is required");
  return nums.map(n => n*n);
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  if (! Array.isArray(words)) throw new Error("array is required");
  let output ="";
  for (let i=0; i<words.length; i++) {
    if (i === 0) {
      output += words[i].substr(0,1).toLowerCase() + words[i].substr(1,words[i].length);
    } else {
      output += words[i].substr(0,1).toUpperCase() + words[i].substr(1,words[i].length);
    }
  }
  return output;
  
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  if (! Array.isArray(people)) throw new Error("array is required");
  let subJCnt = 0;
  for (let i=0; i<people.length; i++) {
     subJCnt += people[i].subjects.length;
  }
  return subJCnt;
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  if (! Array.isArray(menu)) throw new Error("array is required");
  let found = false;
  for (let i=0; i<menu.length; i++) {
     if (menu[i].ingredients.includes(ingredient)) found = true;
  }
  return found;
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  if (! Array.isArray(arr1)) throw new Error("array is required");
  if (! Array.isArray(arr2)) throw new Error("array is required");
  const newArray = [];
  for (let i=0; i<arr1.length; i++) {
    if (arr2.includes(arr1[i]) && ! newArray.includes(arr1[i])) {
      newArray.push(arr1[i]);
    }
  }
  return newArray.sort();
}
