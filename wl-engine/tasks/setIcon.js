const fs = require('fs-extra');

const setIcon = (dirDst, iconsPath) => {
  console.log(`Copy ${iconsPath}/ios/`);
  console.log(`  to ${dirDst}/ios/whitelabel/Images.xcassets/AppIcon.appiconset/`);
  fs.copySync(`${iconsPath}/ios/`, `${dirDst}/ios/whitelabel/Images.xcassets/AppIcon.appiconset/`, { overwrite: true });

  console.log(`Copy ${iconsPath}/android/`);
  console.log(`  to ${dirDst}/android/app/src/main/res/`);
  fs.copySync(`${iconsPath}/android/mipmap-hdpi/`, `${dirDst}/android/app/src/main/res/mipmap-hdpi/`, { overwrite: true });
  fs.copySync(`${iconsPath}/android/mipmap-mdpi/`, `${dirDst}/android/app/src/main/res/mipmap-mdpi/`, { overwrite: true });
  fs.copySync(`${iconsPath}/android/mipmap-xhdpi/`, `${dirDst}/android/app/src/main/res/mipmap-xhdpi/`, { overwrite: true });
  fs.copySync(`${iconsPath}/android/mipmap-xxhdpi/`, `${dirDst}/android/app/src/main/res/mipmap-xxhdpi/`, { overwrite: true });
  fs.copySync(`${iconsPath}/android/mipmap-xxxhdpi/`, `${dirDst}/android/app/src/main/res/mipmap-xxxhdpi/`, { overwrite: true });
};

module.exports = setIcon;
