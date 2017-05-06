const fs = require('fs');
const path = require('path');

module.exports = (folder, array) => new Promise((resolve, reject) => {

  fs.readdir(folder, (error, files) => {
    if (error) {
      return reject(error);
    }

    const renamed = [];
    if (files.length !== array.length) {
      return reject({ message: 'Number of files do not equal length of array' });
    }

    files.forEach((file, index) => {
      const newName = array[index] + file.slice(file.lastIndexOf('.'), file.length);
      renamed.push(newName);
      fs.renameSync(path.resolve(`${folder}/${file}`),
        path.resolve(`${folder}/${newName}`));
    });

    resolve(renamed);
  });
});
