# SVG Logo Generator

![GitHub top language](https://img.shields.io/github/languages/top/JackStockwell/svg-generator)
[![Link to node Js version download](https://img.shields.io/badge/node-v16.18.0-green)](https://nodejs.org/download/release/latest-v16.x/) 
[![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FJackStockwell%2Fsvg-generator%2Fmain%2Fpackage.json&query=%24.dependencies.inquirer&label=inquirer)](https://www.npmjs.com/package/inquirer/v/8.2.4)
![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FJackStockwell%2Fsvg-generator%2Fmain%2Fpackage.json&query=%24.devDependencies.jest&label=jest&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fjest)

## Description

The SVG Generator is a small application using Inquirer NPM which when run will give you a series of prompts, which when answered will generate a SVG logo to the specifications you provided.

I made this project to deepen my knowledge on using node.js to create applications using JavaScript. I also wanted to use Object-oriented programming throughout to improve knowledge as well as keeping my code organised. I also learnt of what an SVG is, and while basic at the moment can be used to create and generate interesting shapes in the future.

I learnt a great deal while working on this project, like how jest can be used to ensure your code is working without having to run it over and over again. I further deepened my knowledge and experinece on OOP, classes and promises.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

I would recommend watching my full guide [here](https://drive.google.com/file/d/1TYBye4wX9ITZdYZWqoFLkb5VhnOY9N1N/view) for a more streamlined experience. If not, see below.

### Written Tutorial

You will require [node.js v16.18.0](https://nodejs.org/download/release/latest-v16.x/) in order for this to work.

To run the application, you will need to first clone it to your local client, once cloned open the code is VS Code and open your terminal. 

Place the following commands into you CLI.

```sh
npm init -y
```

```sh
npm i inquirer@8.2.4
```

```sh
npm i -D jest
```

You now have the necessary npms needed to run the application. 

To start the application enter the below command. 

```sh
node .\index.js
```

This will initialise the SVG Generator for use.

## Usage

Once initialised, you will be prompted with a series of questions that need to be answered with how you wish your SVG logo to look. Once all questions are answered you will find your logo in the svg-logo folder. This can be previewed in VS Code by opening in browser. 

## Credits

[Examples of a lookup table](https://dev.to/k_penguin_sato/use-lookup-tables-for-cleaning-up-your-js-ts-code-9gk) - Used for the class lookup table.

[Regex for a valid HEX code](https://stackoverflow.com/questions/1636350/how-to-identify-a-given-string-is-hex-color-format) - Used to validate the hex code input.

[Inquirer](https://www.npmjs.com/package/inquirer) - Inquirer documentation. Used in the project.

[Jest](https://www.reddit.com/r/Games/) - Jest documenation. Used for the tests.

## License

![GitHub](https://img.shields.io/github/license/JackStockwell/svg-generator)

## Test

Below is an example of one the tests I have included within my application. It describes and tests the use of the circle class, which is used to generate the circle SVG string needed to create the SVG file.

### Example 

```js
describe('Circle Class', () => {
    it('Will return a circle SVG String, with the colour being blue when render() func is called', () => {
        const shape = new Circle();
        shape.setColor('blue');
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
    });
});
```

### How to run

To run the tests, you must ensure you have jest installed(see above). Once installed, you're able to call upon it with the following command in the terminal.

```bh
npm test
```

This will be present you with a series of tests, which you can alter if you would like to test the application yourself.


