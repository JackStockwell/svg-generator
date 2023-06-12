const question = 
[
    {
        type: 'input',
        name: 'text',
        message: 'Please enter 3 digits that will be shown on your logo.'
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