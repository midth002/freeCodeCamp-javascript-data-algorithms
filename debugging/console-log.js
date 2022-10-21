let a = 5;
let b = 1;
a++;
// Only change code below this line
console.log(a)

let sumAB = a + b;
console.log(sumAB);

const changeArray = (s1, s2, s3) => {

    const arrayMe = [];

    arrayMe.push(s3);
    arrayMe.push(s1);

    const newString = Math.floor(s1.length/2);

    const removeString = arrayMe.pop(newString)

    console.log(newString);
    console.log(removeString);

}


changeArray("first", "second", "third");



