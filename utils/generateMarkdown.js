
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license.length === 0) {
    return ""
  } else if (license == "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license == "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license == "ISC") {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  } else if (license == "GNU") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
  // conditional statement, checking whether or not their is a badge, if so, return a badge, if not, return an empty string - if there is a badge, you'll be returning a template literal with markdown syntax inside it 
  
  // badge link
  //https://img.shields.io/badge/license-${license}-blue.svg

  // below is how you would return the badge link //
  // return `![text to be shown](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license.length === 0) {
    return ""
  } else if (license == "MIT") {
    return `https://opensource.org/licenses/MIT`
  } else if (license == "Apache") {
    return `https://opensource.org/licenses/Apache-2.0`
  } else if (license == "ISC") {
    return `https://opensource.org/licenses/ISC`
  } else if (license == "GNU") {
    return `https://www.gnu.org/licenses/gpl-3.0`
  }

  // same pattern that you used above (conditional statement)
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // same pattern 
  if (license.length === 0) {
    return ""
  } else {
  return ` ## License

  
  ${renderLicenseBadge(license)}
  ${renderLicenseLink(license)}
  
  `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ${renderLicenseBadge(data.license)}
  
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
  Notes about the install:${data.installation}
  ### Usage
  In order to use this app: ${data.usage}
  ${renderLicenseSection(data.license)}
This project is licensed under: ${data.license}
  ### Contributors: ${data.contributors}
  ### Tests:
  To test this app: ${data.test}
  ### Questions:
  If you have any questions regarding this app, feel free to contact me: 
  My GitHub profile can be found here: (github.com/${data.username})   
  You can email me at: ${data.email}.


`;
}


module.exports = generateMarkdown;


