
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // conditional statement, checking whether or not their is a badge, if so, return a badge, if not, return an empty string - if there is a badge, you'll be returning a template literal with markdown syntax inside it 
  
  // badge link
  //https://img.shields.io/badge/license-${license}-blue.svg

  // below is how you would return the badge link //
  return `![text to be shown](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  // same pattern that you used above (conditional statement)
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // same pattern 
  return `## License
  This repository has the ${license} license.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}
  
  ## Description
  ${data.description}

  ## Table of contents
  * [Installation](#installation)
  * [License](#license)
  * [Usage](#usage)
  * [Contributors](#contributors)
  * [Tests](#test)
  * [Questions](#questions)
  ### Installation:
  Notes about the install:
  ### Usage
  in order to use this app: ${data.usage}
  ### License:
  This project is licensed under:
  ## Contributors:
  ##Tests:
  To test this app:
  ## Questions:
  If you have any questions regarding this app, feel free to contact me:


`;
}


module.exports = generateMarkdown;


