// Imports on classes
const { Circle, Square, Triangle, Text } = require("./shapes")

// Tests the class to see if they return the epexted result.
describe('SVG Class Generators', () => {
    // Circle class
    describe('Circle SVG', () => {
        it('Will return a circle SVG String, with the colour being blue when render() func is called', () => {
            const shape = new Circle();
            shape.setColor('blue');
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
        });
    });
    // Square Class
    describe('Square SVG', () => {
        it('Will return a square SVG String, with the colour being blue when render() func is called', () => {
            const shape = new Square();
            shape.setColor('blue');
            expect(shape.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="blue" />');
        });
    });
    // Triangle Class
    describe('Triangle SVG', () => {
        it('Will return a triange SVG String, with the colour being blue when render() func is called', () => {
            const shape = new Triangle();
            shape.setColor('blue');
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    });
    // Text Class
    describe('Text SVG', () => {
        it('Will retrun a SVG string with text and colour parsed into it when render() func is called', () => {
            const text = "Hi"
            const color = "red"
            const result = new Text(text, color)
            expect(result.render()).toEqual('<text x="150" y="125" font-size="60" text-anchor="middle" fill="red">Hi</text>')
        });
    });
});