const fs = require('fs-extra');
const replaceStringInFile = require('../utils/replaceStringInFile');

const setId = (dirDst, idNew) => {
  const idOld = 'com.whitelabel';
  const packagePathOld = idOld.replace(/\./g, '/');
  const packagePathNew = idNew.replace(/\./g, '/');
  const packageRootOld = packagePathOld.split('/')[0];

  replaceStringInFile(`${dirDst}/android/app/BUCK`, idOld, idNew);
  replaceStringInFile(`${dirDst}/android/app/build.gradle`, idOld, idNew);
  replaceStringInFile(`${dirDst}/android/app/src/main/AndroidManifest.xml`, idOld, idNew);
  replaceStringInFile(`${dirDst}/android/app/src/main/java/${packagePathOld}/MainActivity.java`, idOld, idNew);
  replaceStringInFile(`${dirDst}/android/app/src/main/java/${packagePathOld}/MainApplication.java`, idOld, idNew);
  replaceStringInFile(`${dirDst}/ios/whitelabel.xcodeproj/project.pbxproj`, idOld, idNew);

  console.log(`Move ${`${dirDst}/android/app/src/main/java/${packagePathOld}/MainActivity.java`}`);
  console.log(`  to ${`${dirDst}/android/app/src/main/java/${packagePathNew}/MainActivity.java`}`);
  fs.moveSync(
    `${dirDst}/android/app/src/main/java/${packagePathOld}/MainActivity.java`,
    `${dirDst}/android/app/src/main/java/${packagePathNew}/MainActivity.java`,
  );

  console.log(`Move ${`${dirDst}/android/app/src/main/java/${packagePathOld}/MainApplication.java`}`);
  console.log(`  to ${`${dirDst}/android/app/src/main/java/${packagePathNew}/MainApplication.java`}`);
  fs.moveSync(
    `${dirDst}/android/app/src/main/java/${packagePathOld}/MainApplication.java`,
    `${dirDst}/android/app/src/main/java/${packagePathNew}/MainApplication.java`,
  );

  console.log(`Remove ${dirDst}/android/app/src/main/java/${packageRootOld}`);
  fs.removeSync(`${dirDst}/android/app/src/main/java/${packageRootOld}`);
};

module.exports = setId;
