// Values and Variables:
// ===============================

const country = "Russia",
	continent = "Europe";

let population = 2345678;
population = 8000000;

console.log(country, continent, population);

// Data Types:
// ===============================

const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// Let, Const and Var:
// ===============================

language = "Russian";
console.log(typeof language);

// Basic Operators:
// ===============================

let halfPopulation = population / 2;
let description =
	country +
	" is in " +
	continent +
	", and its " +
	population +
	" people speak " +
	language;

console.log(halfPopulation);
console.log(population++);
console.log(description);

if (population > 6000000) {
	alert("Population is greater than Finland");
} else {
	alert("Population is less than Finland");
}

if (population > 33000000) {
	alert("Population is greater than Average");
} else {
	alert("Population is less than Average");
}
