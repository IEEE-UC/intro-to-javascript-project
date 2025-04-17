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
class Part {
    constructor(name, types) {
        this.name = name;
        this.types = types;
        this.type = types[0]; // default to the first type
        this.image = new Image(); // create a new image object
        this.setImageSource(); // set the source of the image
    }

    setImageSource() {
        this.image.src = `img/${this.name}-${this.type}.png`;
    }

    changeType(type) {
        this.type = type;
        this.setImageSource(); // update image
    }
}


// Now! onto the actual character object
class Character {
    constructor(body, eyes, feet) {
        this.body = body;
        this.eyes = eyes;
        this.feet = feet;

        this.form = document.getElementById("form");
        this.canvas = document.getElementById("outputImage"); // how do we get the canvas?
    }

    createForm() {
        // each part of the character will need a form input

        // create a input for each part
        this.makeInput(this.body);
        this.makeInput(this.eyes);
        this.makeInput(this.feet);
    }

    makeInput(part) {
        // make a div to hold all parts of our input
        const container = document.createElement("div");

        // make a label for the part
        const label = document.createElement("label");
        label.innerHTML = part.name;
        container.appendChild(label);
        // make a select input
        const select = document.createElement("select");
        // add options to the select input
        for (let i = 0; i < part.types.length; i++) {
            const option = document.createElement("option");
            option.value = part.types[i];
            option.innerHTML = part.types[i];
            select.appendChild(option);
        }
        // add the select input to the container
        container.appendChild(select);
        // add the container to the form
        this.form.appendChild(container);
        // add event listener to the select input
        select.addEventListener("change", (e) => {
            part.changeType(e.target.value);
            character.draw();
        });
    }

    async draw() {
        // Wait for all images to load
        const loadImage = (image) =>
            new Promise((resolve) => {
                if (image.complete) {
                    resolve(); // Resolve immediately if the image is already loaded
                } else {
                    image.onload = resolve;
                }
            });

        await Promise.all([
            loadImage(this.body.image),
            loadImage(this.eyes.image),
            loadImage(this.feet.image),
        ]);

        // this function will draw the character
        const ctx = this.canvas.getContext("2d");
        // clear the canvas
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        // draw the body
        ctx.drawImage(this.body.image, 0, 0);
        // draw the eyes
        ctx.drawImage(this.eyes.image, 0, 0);
        // draw the feet
        ctx.drawImage(this.feet.image, 0, 0);
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

// Create our form 
character.createForm();
// draw the default character
character.draw();

// and done!! good jorb :D
// Changes to the form should update the result
// and redraw the character