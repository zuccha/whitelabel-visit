const fs = require('fs-extra');

const replaceStringInFile = (filename, strOld, strNew) => {
  console.log(`Replace '${strOld}' with '${strNew}' in ${filename}`);
  const fileOld = fs.readFileSync(filename, 'utf8');
  const fileNew = fileOld.replace(new RegExp(strOld, 'g'), strNew);
  fs.writeFileSync(filename, fileNew);
};

module.exports = replaceStringInFile;
