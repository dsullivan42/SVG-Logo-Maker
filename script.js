const inquirer = require('inquirer');


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