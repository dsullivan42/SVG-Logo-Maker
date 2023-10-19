const inquirer = require('inquirer'); 
const fs = require('fs');
const { userInfo } = require('os');
//importing the inquirer and fs modules
// const {Square, Circle, Triangle} = require('./lib/shapes.test.js'); // NEEDS TO BE CHANGED
//list of the questions that the user will be asked
const questions = [
    {
        type: "input",
        name: "logo-text",
        message: "Enter the three letter abbreviation for your company: "
    },
    {
        type: "input",
        name: "text-color",
        message: "Please enter the color of the text, or the hexadecimal number for the color you'd like for your text."
    },
    {
        type:"input",
        name: "shape-color",
        message: "Please enter the color of the shape, or the hexadecimal number for the color you'd like for your shape."
    },
    {
        type: "list",
        name: "shape",
        message: "Please choose the shape you'd like for your logo.",
        choices: ["Square", "Circle", "Triangle"]
    }
];
    //class for the shapes that will be used in the logo, included in the SVG
    class SVG {
        constructor() {
            this.textElement ='';
            this.shapeElement ='';
        }
        render() { 
            //setting the text and shape elements to be rendered in the SVG
         return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`;
        }
        setText(text, color){
            this.textElement = '<text x="150" y="125" font-size="60" text-anchor="middle" fill="' + color + '">' + text + '</text>';
        }
        setShape(shape){
            this.shapeElement = shape.render();
        }
    }

    // writeToFile function to write the answers to the file, confirming that the file has been written, or throwing an error if it has not
    function writeToFile(fileName, answers) {
        console.log("Transfering answers to file now!")
        fs.writeFile(fileName, answers, (err) => {
            if (err) throw err;
            console.log("File saved! Congratulations! You have generated your new logo!");
        });
    }
    //prompts the user with the questions, and then takes the answers and writes them to the file
    const answers = await inquirer.prompt(questions);
    // if the user enters a valid three letter abbreviation, the program will continue, otherwise it will throw an error
    if (answers.logo-text.length===3){
        userTextInput = answers.logo-text;
    }   else {
        console.log("Please enter a valid three letter abbreviation for your company!");
        return;
    }
    console.log(`User's text input: ${userTextInput}`);
    userTextColor = answers.text-color;
    console.log(`User's text color: ${userTextColor}`);
    userShapeColor = answers.shape-color;
    console.log(`User's shape color: ${userShapeColor}`);
    userShape = answers.shape;
    console.log(`User's shape: ${userShape}`);