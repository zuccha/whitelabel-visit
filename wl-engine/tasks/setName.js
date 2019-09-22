const replaceStringInFile = require('../utils/replaceStringInFile');

const setName = (dirDst, nameNew) => {
  const nameOld = 'whitelabel';
  replaceStringInFile(`${dirDst}/android/app/src/main/res/values/strings.xml`, nameOld, nameNew);
  replaceStringInFile(`${dirDst}/ios/${nameOld}/Info.plist`, nameOld, nameNew);
};

module.exports = setName;
