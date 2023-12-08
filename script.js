const inquirer = require('inquirer'); 
const { writeFile } = require('fs').promises;
const  { Triangle, Square, Circle } = require('./Develop/lib/shapes');
const SVG = require('./Develop/lib/svg');
// createSVGPrompt function to prompt the user for input and write the SVG file
const createSVGPrompt = () => {

    return inquirer.prompt([
    {
        type: "input",
        name: "text",
        message: "Enter the three letter abbreviation for your company: "
    },
    {
        type: "input",
        name: "textColor",
        message: "Please enter the color of the text, or the hexadecimal number for the color you'd like for your text."
    },
    {
        type:"input",
        name: "color",
        message: "Please enter the color of the shape, or the hexadecimal number for the color you'd like for your shape."
    },
    {
        type: "list",
        name: "shape",
        message: "Please choose the shape you'd like for your logo.",
        choices: ["Square", "Circle", "Triangle"]
    }
]) .then ((res) => {
    console.log(res);
    let userSVGShape;
    // if statements to determine which shape the user chose
    if (res.shape === "Square") {
        userSVGShape = new Square();
    } else if (res.shape === "Circle") {
        userSVGShape = new Circle();
    } else if (res.shape === "Triangle") {
        userSVGShape = new Triangle();
    }

    userSVGShape.setColor(res.color);

    const userSVG = new SVG();
    userSVG.setText(res.text, res.textColor);
    userSVG.setShape(userSVGShape);
    return writeFile('./Develop/examples/logo.svg', userSVG.render());
}) .then (() => {
    console.log("Successfully wrote to examples.svg");
}) .catch((err) => {
    console.log(err);
});
};

createSVGPrompt();
