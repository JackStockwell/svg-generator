class Shape {
    constructor(color) {
        this.color = color
    }
}

class Circle extends Shape {
    constructor(color) {
        super(color)
    }

    render() {
        return `<circle x="90" y="40" width="120" height="120" fill="${this.color}" />`
    }
}

class Square extends Shape {
    constructor(color) {
        super(color)
    }

    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`
    }
}

class Triangle extends Shape {
    constructor(color) {
        super(color)
    }

    render() {
        return `<polygon x="90" y="40" width="120" height="120" fill="${this.color}" />`
    }
}

class Text {
    constructor(text, textColor) {
        this.text = text
        this.textColor = textColor
    }

    render() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>`
    }
}



exports.module = { Circle, Square, Triangle, Text }