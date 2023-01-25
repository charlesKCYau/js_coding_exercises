export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  if (! Array.isArray(nums)) throw new Error("array is required");
  let pos = nums.indexOf(n);
  if (pos === -1 || nums.length === pos + 1)   {
    return null;
  } else {
    return nums[pos+1];
  }
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  return {1:str.split("").filter(x => x==='1').length
  , 0:str.split("").filter(x => x==='0').length};
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  if (isNaN(n)) throw new Error("n must be number");
  return parseInt(n.toString().split("").reverse().join(""), 10);
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  arrs = arrs.reduce((a, b) => a.concat(b), []);
  let sum = 0;
  for (let i=0; i<arrs.length; i++) {
    sum += arrs[i];
  }
  return sum;
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  if (! Array.isArray(arr)) throw new Error("array is required");
  const newArray = [];
  if (arr.length < 2) {
    return arr;
  } else {
    newArray.push(arr[arr.length-1]);    
    for (let i=1; i<arr.length-1; i++) {
      newArray.push(arr[i]);
    }
    newArray.push(arr[0]);

    return newArray;
  }
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  let found = false;
  for (const [key, value] of Object.entries(haystack)) {
    if (`${value}`.toUpperCase().indexOf(searchTerm.toUpperCase()) >= 0 ) found = true;
  }
  return found;
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  let noSpecialChars = str.replace(/[^a-zA-Z0-9 ]/g, '');
  let wordArr = noSpecialChars.split(" ");
  wordArr = wordArr.map(word => word.toLowerCase());
  // const newArray = [];
  // wordArr.forEach(element => {
  //   newArray.push(element.toLowerCase());
  // });

  // return null;
  let map = wordArr.reduce((cnt, cur) => (cnt[cur] = cnt[cur] + 1 || 1, cnt), {});
  return map;
};
