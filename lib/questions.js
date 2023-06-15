const validateAns = (answer) => {
    if (answer.length > 3) {
        return "Please enter a maximum of three characters"
    } else if (answer.length === 0) {
        return "Please enter an answer!"
    }
    return true;
};

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
        message: 'Please enter a colour for your text (Can be hexadecimal).'
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
        message: 'Please enter a colour for your shape (Can be hexadecimal).'
    },
]

module.exports = question