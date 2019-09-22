const fs = require('fs-extra');
const glob = require('globby');

const copyDirectory = (dirSrc, dirDst) => {
  console.log(`Copy ${dirSrc} to ${dirDst}`);
  fs.removeSync(dirDst);
  const files = glob.sync(`${dirSrc}/**/*`, {
    gitignore: true,
    dot: true,
  });
  files.forEach(file => fs.copySync(file, file.replace(dirSrc, dirDst)));
};

module.exports = copyDirectory;
