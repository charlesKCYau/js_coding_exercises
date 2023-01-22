// Note: Be sure to check out all the exercises corresponding .md files (in docs)! 📘 👍

export function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.substr(0,1).toUpperCase() + word.substr(1,word.length);
}

export function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.substr(0,1).toUpperCase() + "." + lastName.substr(0,1).toUpperCase();
}

export function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  if (isNaN(originalPrice)) throw new Error("originalPrice must be number");
  if (isNaN(vatRate)) throw new Error("vatRate must be number");
  let total = originalPrice * (1 + vatRate/100);
  return parseFloat(total.toFixed(2));
}

export function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  if (isNaN(originalPrice)) throw new Error("originalPrice must be number");
  if (isNaN(reduction)) throw new Error("reduction must be number");
  let total = originalPrice * (1 - reduction/100);
  return parseFloat(total.toFixed(2));
}

export function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  if (str.length % 2 === 1) {
    return str.substr((str.length-1)/2,1);
  } else {
    return str.substr(str.length/2 - 1,2);
  }
 }

export function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split("").reverse().join("");
}

export function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  if (! Array.isArray(words)) throw new Error("array is required");
  let newArray = [];
  for (let i=0; i<words.length; i++) {
    newArray.push(reverseWord(words[i]));
  }
  return newArray;
}

export function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  if (! Array.isArray(users)) throw new Error("array is required");
  let lnxCnt = 0;
  for (let i=0; i<users.length; i++) {
     if (users[i].type === "Linux") lnxCnt++;
  }
  return lnxCnt;
}

export function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  if (! Array.isArray(scores)) throw new Error("array is required");
  let sum = 0;
  let count = 0;
  scores.forEach(item => {
    if (isNaN(item)) throw new Error("array's item must be number");
    sum += item;
    count++;
  });
  let mean = 0;
  mean = sum / count;
  return parseFloat(mean.toFixed(2));
}

export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if (isNaN(n)) throw new Error("n must be number");
  if (n % 15 === 0) {
    return "fizzbuzz";
  } else if (n % 3 === 0) {
    return "fizz";
  } else if (n % 5 === 0) {
    return "buzz";
  } else {
    return n;
  }
}
