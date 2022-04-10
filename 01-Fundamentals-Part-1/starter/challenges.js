// Coding Challenge #1:
// ===============================

const massMark = 78,
	heightMark = 1.69;

const massJohn = 92,
	heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHighterBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn);

alert("Mark has a higher BMI than John: " + markHighterBMI);
