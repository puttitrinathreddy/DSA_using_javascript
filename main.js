// Checking palindrome using stacks
const letters = [];
const word = "racecar";
let rWord = "";

for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

console.log(letters);

for (let i = 0; i < word.length; i++) {
  rWord += letters.pop();
}
if (rWord === word) {
  console.log("It is a palindrome");
} else {
  console.log("it is not a palindrome");
}
console.log(rWord);

// const addUpTo = function (n) {
//   let total = 0;
//   for (let i = 0; i <= n; i++) {
//     total += i;
//   }
//   console.log(total);
// };

// addUpTo(10);

// BIG O Notation

const pair = function (n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
};

pair(5); // BIG O(n‸2) O(n*n)

const logAtLeast5 = function (n) {
  for (let i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
};
logAtLeast5(10); // BIG O(1)

const logAtLeast10 = function (n) {
  for (let i = 1; i <= Math.max(10, n); i++) {
    console.log(i);
  }
};
logAtLeast10(10); // BIG O(n)

function onlyElementsAtEvenIndex(array) {
  console.log(array.length);
  var newArray = Array(Math.ceil(array.length / 2));
  console.log(newArray);
  for (var i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      newArray[i / 2] = array[i];
    }
  }
  return newArray;
}

console.log(onlyElementsAtEvenIndex([2, 5, 4, 8, 5, 7])); // O(n)

const arrTotal = function (arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};

console.log(arrTotal([2, 1, 3, 7, 6]));
