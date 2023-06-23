// Assignment 1 | COMP1073 Client-Side JavaScript

// Initializing the buttons
var nounBtn = document.getElementById('noun-btn');
var verbBtn = document.getElementById('verb-btn');
var adjBtn = document.getElementById('adj-btn');
var nounBtnTwo = document.getElementById('noun-btn-two');
var placeBtn = document.getElementById('place-btn');
var playbackBtn = document.getElementById('playback-btn');
var generateBtn = document.getElementById('generateStory');
var resetBtn = document.getElementById("reset-btn");



// Creating the Arrays storing the values
const nouns = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant" , "The cat"];
const verbs = ["sat on", "ate", "danced with", "saw", "doesn't like" , "kissed"];
const adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking" , "a fat"];
const nountwo = ["goat", "monkey", "fish", "cow", "frog" , "bug" , "worm"];
const places = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass" , "in my shoes"];


/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
const synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
const speakButton = document.querySelector('button');
let textToSpeak = [];

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	const utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}


// Creatting the functions for the buttons

// Noun Button 
function nounButton(){
	let word = nouns[Math.floor(Math.random()*nouns.length)];
	textToSpeak[0]=word
	console.log(textToSpeak)
}

// Verb Button
function verbButton(){
	let word = verbs[Math.floor(Math.random()*verbs.length)];
	textToSpeak[1]=word
	console.log(textToSpeak)	
}

// Adjective Button
function adjectiveButton(){
	let word = adjectives[Math.floor(Math.random()*adjectives.length)];
	textToSpeak[2]=word
	console.log(textToSpeak)
}

// Noun Two Button
function nounButtontwo(){
	let word = nountwo[Math.floor(Math.random()*nountwo.length)];
	textToSpeak[3]=word
	console.log(textToSpeak)
}

// Place Button
function placeButton(){
	let word = places[Math.floor(Math.random()*places.length)];
	textToSpeak[4]=word;
	console.log(textToSpeak);
}

// Clear Button
function clearButton(){
	textToSpeak = [];
	console.log(textToSpeak);

}

// Displaying the selected words
function displaytheText(){
	var text = document.getElementById("var");
	text.innerHTML = textToSpeak;
}

/* Event Listeners
-------------------------------------------------- */
// Creating the event handlers to manage the function

// Playback button
playbackBtn.addEventListener('click', function () {
	speakNow(textToSpeak);
	displaytheText();
});

// Noun button
nounBtn.addEventListener('click',function () {
	nounButton();
	displaytheText();
});

// Verb button
verbBtn.addEventListener('click',function () {
	verbButton();
	displaytheText();
});

// Adjective button
adjBtn.addEventListener('click',function () {
	adjectiveButton();
	displaytheText();
});

// noun button Two
nounBtnTwo.addEventListener('click',function () {
	nounButtontwo();
	displaytheText();
});

// Place button
placeBtn.addEventListener('click',function () {
	placeButton();
	displaytheText();
});

// Reset button
resetBtn.addEventListener('click',function () {
	clearButton();
	displaytheText();
});

// Generate button to generate a random story
generateBtn.addEventListener('click',function () {
	nounButton();
	verbButton();
	adjectiveButton();
	nounButtontwo();
	placeButton();
	displaytheText();
});





