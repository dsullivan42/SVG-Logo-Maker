// initialize the shape class
class Shape {
  constructor() {
    this.color = "";
  }

  setColor(color) {
    this.color = color;
  }
};
// initialize the triangle class
class Triangle extends Shape {
  constructor() {
    super();
  }

  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
};
// initialize the square class
class Square extends Shape {
  constructor() {
    super();
  }

  render() {
    return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
  }
};
// initialize the circle class
class Circle extends Shape {
  constructor() {
    super();
  }

  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
};
// export the classes
module.exports = {
  Triangle,
  Square,
  Circle
};
