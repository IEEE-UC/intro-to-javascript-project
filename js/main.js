// We need to do the following:
// 1. create a character object
// 2. generate the user inputs
// 3. draw the character

// But first, let's set up some VARIABLES
// similar to python, there aren't a ton of options:

var x = 0; // global. try to never use this one

let y = 0 // block-scoped. Can't be used outside of the block

const z = 0; // block-scoped. Can't be reassigned (it's constant!)

// javascript does not care about unused variables or semicolons
// it is one of the least ornery languages, which can cause issues
// best practices are extremely varied, with people making entire
// libraries to make it more strict (typescript, flow, etc.)

// but we don't really care abiout that right now...


// CREATING A CHARACTER OBJECT
// To start on the character object, we need to 
// first make it's parts (think body, eyes, feet).
// This part class should take a name and list of types

// add class here


// Now! onto the actual character object
class Character {
    constructor(body, eyes, feet) {
        this.body = body;
        this.eyes = eyes;
        this.feet = feet;

        this.canvas = // how do we get the canvas?
    }

    createForm() {
        // each part of the character will need a form input
        console.log("Create Form Unimplemented!");

        // create a input for each part

        // add event listeners to each input

    }

    draw() {
        // this function will draw the character
        // by calling the draw method of each part
        console.log("Draw Unimplemented!");
    }
}

// Now let's use this class to create a character
// we can add more types later
const bodyTypes = [
    "chonk",
    "circle",
    "cube",
];
const eyeTypes = [
    "angry",
    "closed",
    "cry",
];
const feetTypes = [
    "duck",
    "realistic",
    "simple",
];

// Finally,
// create a instance of Character
const character = new Character(
    new Part("body", bodyTypes),
    new Part("eyes", eyeTypes),
    new Part("feet", feetTypes),
);

character