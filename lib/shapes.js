class Shape {
    constructor(color) {
        this.color = color
    }
}

class Circle extends Shape {
    constructor(color, square) {
        super(color)
    }

    render() {
        return `<circle x="90" y="40" width="120" height="120" fill="${this.color}" />`
    }
}

class Square extends Shape {
    constructor(color, square) {
        super(color)
    }

    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`
    }
}

class Triangle extends Shape {
    constructor(color, square) {
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
}



exports.module = { Square }