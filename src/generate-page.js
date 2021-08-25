const fs = require('fs');

const writeFile = generateReadme => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./README-file.md', generateReadme, err => {
            if (err) {
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

module.exports = writeFile; 