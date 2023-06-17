// Validation function, checks the first questions (Logo Characters) to ensure an answer is inputed and it's no more than 3 characters.
const validateAns = (answer) => {
    // More than 3 characters check
    if (answer.length > 3) {
        return "Please enter a maximum of three characters"
    // Ensures an answer was inputted.
    } else if (answer.length === 0) {
        return "Please enter an answer!"
    };
    // Returns true if not caught in if statement.
    return true;
};

// Common color keywords.
const colorKeywords =
 
[
    'black',
    'blue',
    'brown',
    'cyan',
    'gray',
    'green',
    'magenta',
    'orange',
    'pink',
    'purple',
    'red',
    'white',
    'yellow'
];
  
// Checks to see if a valid HEX code is used or the color entered is in the array above (common colours only)
const validateHex = (answer) => {
    if (/^#(?:[0-9a-fA-F]{3}){1,2}$/.test(answer) || colorKeywords.includes(answer.toLowerCase())) {
        return true
    };
    
    return "Please choose a valid color or HEX code (If your color is not accepted, find its hex code.)"
};

// Array of prompted questions.
const question = 
[
    {
        type: 'input',
        name: 'text',
        message: 'Please enter up to three characters that will be shown on your logo.',
        validate: validateAns
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter a colour for your text (Can be hexadecimal).',
        validate:validateHex
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please select the shape of your logo\'s background image.',
        choices: ['Circle', 'Square', 'Triangle']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter a colour for your shape (Can be hexadecimal.)',
        validate:validateHex
    },
];

// Export
module.exports = question;