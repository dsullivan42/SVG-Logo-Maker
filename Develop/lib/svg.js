// initialize SVG class
class SVG {

    constructor() {
        this.text = "";
        this.textColor = "";
        this.shape = null;
    }

    // render the SVG
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape.render()}<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    }
    // set the text and text color
    setText(text, textColor) {
        if (text.length > 3) {
            throw new Error("Text must not exceed 3 characters.");
        }
        this.text = text;
        this.textColor = textColor;
    }
    // set the shape
    setShape(shape) {
        this.shape = shape;
    }

};

module.exports = SVG;