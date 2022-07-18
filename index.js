// TODO: Include packages needed for this application
//fs, inquirer, path, generatemarkdown.js - require

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your project about? Give a description.'
    },
    {
        type: 'input',
        name: 'table of contents.',
        message: 'Table of Contents',

    },
    {
        type: 'input',
        name: 'installation',
        message:'What does the user need to install to run this app?',
        default: 'npm i',
    },
    {
        type: 'input',
        name: 'usage',
        message:'How is the app used? Please give instructions',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license is being used?',
        choices: ['MIT', 'Apache', 'ISC', 'GNU'],
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'What does the user need to know about contributing to the project?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'How do you test this app?',
        default: 'npm test',
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Contact me with any questions',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// TODO: Create a function to write README file

  function init(){
    inquirer.prompt(questions).then((data) => {
      const filename =`${data.name.toLowerCase().split(' ').join(' ')}.json`
  
      fs.writeFile("README.md", generateMarkdown(data), (err) =>
      err? console.log(err): console.log('Success!')
      );
    });
   }
init();

