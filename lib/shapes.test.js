// Imports on classes
const { Circle, Square, Triangle } = require("./shapes")

// Tests the class to see if they return the epexted result.
describe('SVG Class Generator', () => {
    // Circle class
    describe('Circle Class', () => {
        it('Will return a circle SVG String, with the colour being blue', () => {
            const shape = new Circle();
            shape.setColor('blue');
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
        });
    });
    // Square Class
    describe('Square Class', () => {
        it('Will return a square SVG String, with the colour being blue', () => {
            const shape = new Square();
            shape.setColor('blue');
            expect(shape.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="blue" />');
        });
    });
    // Triangle Class
    describe('Triangle Class', () => {
        it('Will return a triange SVG String, with the colour being blue', () => {
            const shape = new Triangle();
            shape.setColor('blue');
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    });
})