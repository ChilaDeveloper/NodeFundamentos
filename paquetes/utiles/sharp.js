const sharp = require('sharp');

sharp('imagen.png')
    .resize(340)
    .greyscale()
    .toFile('resize.png');