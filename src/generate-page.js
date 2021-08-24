const fs = require('fs');

const writeFile = generateReadme => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./index.html', generateReadme, err => {
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