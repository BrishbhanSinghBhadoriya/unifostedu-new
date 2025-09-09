const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const sourceImagePath = path.join(__dirname, '../public/slider/slider-1.jpg');
const targetImagePath = path.join(__dirname, '../public/slider/slider-1.webp');

async function convertImage() {
  try {
    console.log(`Converting ${sourceImagePath} to ${targetImagePath}`);
    
    await sharp(sourceImagePath)
      .webp({ quality: 80 })
      .toFile(targetImagePath);
    
    console.log('Conversion completed successfully!');
  } catch (error) {
    console.error('Error converting image:', error);
  }
}

convertImage();