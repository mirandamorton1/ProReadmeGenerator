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
        choices: ['MIT', 'Apache', 'IBM', 'Perl'],
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who contributed to this project?'
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
        message: 'What is your GiHub username?',
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
    //   const filename =`${data.name.toLowerCase().split(' ').join(' ')}.json`
  
      fs.writeFile("READMe", generateMarkdown(data), (err) =>
      err? console.log(err): console.log('Success!')
      );
    });
   }
init();

// fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
// err? console.log(err): console.log('Success!')
// );
// });
// }

// function writeToFile(fileName, data) {
    
//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
//     err? console.log(err): console.log('Success!')
//     );
// });
    
// //return

// // use fs to write the file, path (acticvity 13)

// // TODO: Create a function to initialize app
// function init() {}
// // use inquirer and prompt to show the questions, take in the responses, then write the responses to teh file (activity 20) 
// // inside of writeToFile - file name, call generate markdown function and pass in the responses you got from the questions. 


// // Function call to initialize app
// init();}
