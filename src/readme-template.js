const generateReadme = answers => {
    console.log(answers);
    return `
        <h1 align="center">${answers.title}

        ## Description 
        ${answers.description} 

        ## Table of Contents 
        - [Description](#description)
        - [Installation](#instillation)
        - [Usage](#usage)
        - [License](#license)
        - [Contributions](#contributors)
        - [Test](#tests)
        - [Questions](#questions)

        ## Instillation
        ${answers.instillation}

        ## Usage 
        ${answers.usage}

        ## License 
        This application is covered by the ${answers.license} license.

        ## Contributions 
        ${answers.contributors}

        ## Tests 
        ${answers.tests}

        ## Questions 
        ${answers.questions}
        Find me on GitHub: ${answers.github}
        Email me with questions: ${answers.email}
    
    
    `
}
module.exports = generateReadme;
