// Parent Class
class Shape {
    // Default color
    constructor(color = '#ccc') {
        this.color = color
    };
    // Seperate setColor function.
    setColor(color) {
        this.color = color
    };
};

// Circle class for SVG string generation, extends from Shape parent.
class Circle extends Shape {
    constructor(color) {
        super(color)
    };
    // Will return a circle SVG string with the colour parsed into it.
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    };
};

// Square class for SVG string generation, extends from Shape parent.
class Square extends Shape {
    constructor(color) {
        super(color)
    };
    // Will return a square SVG string with the colour parsed into it.
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`
    };
};

// Triangle class for SVG string generation, extends from Shape parent.
class Triangle extends Shape {
    constructor(color) {
        super(color)
    };
    // Will return a triangle SVG string with the colour parsed into it.
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    };
};

// Text class for text generation
class Text {
    constructor(text, textColor) {
        this.text = text
        this.textColor = textColor
    };
    // Will return a text SVG string with the text and text colour parsed into it.
    render() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    };
};


module.exports = { Circle, Square, Triangle, Text };