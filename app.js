const fs = require('fs');
const inquirer = require('inquirer');
const generateReadme = require('./src/readme-template.js');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: titleInput => {
                if (titleInput) {
                 return true;
                } else {
                 console.log('Please include a title for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please describe your project. (Required)',
            validate: inputDescription => {
                if (inputDescription) {
                    return true;
                } else {
                    console.log('You must include a description of your project!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmInstall',
            message: 'Would you like to include instructions on how to install your project?',
            default: false,
        },
        {
            type: 'input',
            name: 'install',
            message: 'Please describe how to install your project:',
            when: ({ confirmInstall }) => {
                if (confirmInstall) {
                    return true;
                } else {
                    return false;
                }
            }    
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please describe how to use your project. (Required)',
            validate: inputUsage => {
                if (inputUsage) {
                    return true;
                } else {
                    console.log('You must describe how to use your project!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'What type of license does your project have?',
            choices: ['Public Domain', 'Permissive', 'LGPL', 'Copyleft', 'Proprietary']
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'How can someone contribute to this project?',
        },
        {
            type: 'confirm',
            name: 'tests',
            message: 'Does your project include tests?',
            default: false,
        },
        {
            type: 'input',
            name: 'confirmTests',
            message: 'Please describe how to test your project.',
            when: ({ tests }) => {
                if (tests) {
                    return true;
                } else {
                    return false; 
                }
            }
        },
        {
           type: 'confirm',
           name: 'questions',
           message: 'Can you be contacted for questions?',
           default: true,
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please include a link to your GitHub profile (Required)',
            validate: inputGithub => {
                if (inputGithub) {
                    return true;
                } else {
                    console.log('You must inlude a link to your GitHub profile!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (Required)',
            validate: inputEmail => {
                if (inputEmail) {
                    return true;
                } else {
                    console.log('Your email address is required!');
                    return false;
                }
            }
        }
    ]).then((answers) => {const generateContent = generateReadme(answers);});
};

const writeFile = generateReadme => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./index.html', generateReadme, err => {
            if (err) {
                console.log(err);
                return err;
                
    
            }
            resolve({
                ok: true,
                message: 'File created!'
            });

        });
    });
};


// promptUser();
// promptUser().then(answers => console.log(answers));

// const answers = promptUser();


async function init() {
    try {
        const answers = await promptUser();
//        const generateContent = generateReadme(answers);
//        await writeFileAsync('./index.html', generateContent);
        console.log('README created!')
    } catch(err) {
        console.log(err);
    }
};

init();