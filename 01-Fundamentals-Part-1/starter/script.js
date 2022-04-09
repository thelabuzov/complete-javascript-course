/*
// Values and Variables + Statements:
// ===============================

let myFirstName = "Dmitry",
	myLastName = "Labuzov";

let $function = true;
let _name = null;

const AGE = 20;

var notUseful = undefined;

if (null !== undefined) console.log("null && undefined === different");

if (AGE === 18) {
	console.log(myFirstName + " " + myLastName + " is " + AGE + " years old");
} else {
	alert("You are not " + (13 + 18 - 2 * 6.5) + " years old");
}

// Data Types + Functions:
// ===============================

let myPersonInfo = {
	name: "Dmitry",
	age: 20,
	isMarried: false,
};

console.log(typeof myPersonInfo);

let movieReview;

if (movieReview === undefined) {
	alert(typeof movieReview);
} else {
	movieReview = null;
	alert(typeof movieReview);
}

let audio = document.createElement("audio"),
	volume = document.getElementById("volume"),
	backgroun = document.getElementsByClassName("background");

document.onkeydown = function (event) {
	switch (event.keyCode) {
		case 38:
			background.style.backgroundColor = "#f00";
			break;
		case 40:
			audio.setAttribute("autoplay", "true");
			audio.innerHTML = '<source src="audio.mp3" type="audio/mpeg">';
			document.body.appendChild(audio);
			break;
	}
};
*/
