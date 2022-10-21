let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let resultPet = petRegex.test(petString);

let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result2 = fccRegex.test(myString);

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result3 = extractStr.match(codingRegex); // Change this line

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let result4 = twinkleStar.match(starRegex); // Change this line

// Wild card .
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result5 = unRegex.test(exampleStr);

// single character with multiple possiblities
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result6 = quoteSample.match(vowelRegex); // Change this line

// Match alphabet
let quoteSample1 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result7 = quoteSample1.match(alphabetRegex); // Change this line


// Match a range of numbers and letters
let quoteSample2 = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // Change this line
let result8 = quoteSample2.match(myRegex); // Change this line

// Create a single regex that matches all characters that are not a number or a vowel. 
let quoteSample3 = "3 blind mice.";
let myRegex3 = /[^aeiou^0-9]/gi; // Change this line
let result = quoteSample3.match(myRegex3); // Change this line