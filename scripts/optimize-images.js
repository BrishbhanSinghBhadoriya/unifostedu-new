const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const directory = './public/images';

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });

  return arrayOfFiles;
}

const files = getAllFiles(directory);

files.forEach(file => {
  if (file.match(/\.(jpg|jpeg|png)$/i)) {
    const output = file.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    sharp(file)
      .webp({ quality: 80 })
      .toFile(output)
      .then(() => {
        console.log(`Optimized: ${file} -> ${output}`);
      })
      .catch(err => {
        console.error(`Error optimizing ${file}:`, err);
      });
  }
});
