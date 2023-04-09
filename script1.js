let mystring = "the quick brown the fick zick is is lazy dog";
let words = mystring.split(" ");
let count = {};

for (let i = 0; i < words.length; i++) {
  let word = words[i];
  if (count[word]) {
    count[word]++;
  } else {
    count[word] = 1;
  }
}

console.log(count);
