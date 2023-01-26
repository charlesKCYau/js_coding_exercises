export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  if (! Array.isArray(nums)) throw new Error("array is required");
  return nums.filter(n => n < 1);
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  if (! Array.isArray(names)) throw new Error("array is required");
  return names.filter(n => n.substr(0,1) === char);
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  if (! Array.isArray(words)) throw new Error("array is required");
  return words.filter(w => w.substr(0,3) === "to ");
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  if (! Array.isArray(nums)) throw new Error("array is required");
  return nums.filter(n => Number.isInteger(n));
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  if (! Array.isArray(users)) throw new Error("array is required");
  return users.map(u => u.data.city.displayName);
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  if (! Array.isArray(nums)) throw new Error("array is required");
  const newArray = [];
  for (let i=0; i<nums.length; i++) {
    newArray.push(parseFloat(Math.sqrt(nums[i]).toFixed(2)));
  }
  return newArray;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  if (! Array.isArray(sentences)) throw new Error("array is required");
  const newArray = [];
  for (let i=0; i<sentences.length; i++) {
    if (sentences[i].toUpperCase().includes(str.toUpperCase())){
      newArray.push(sentences[i]);
    }      
  }
  return newArray;
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  if (! Array.isArray(triangles)) throw new Error("array is required");
  const newArray = [];
  for (let i=0; i<triangles.length; i++) {
    let maxNum = Math.max(...triangles[i]);
    newArray.push(maxNum);
  }
  return newArray;
}
