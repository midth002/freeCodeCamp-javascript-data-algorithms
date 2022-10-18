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
let result = unRegex.test(exampleStr);