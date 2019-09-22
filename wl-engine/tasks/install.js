const childProcess = require('child_process');

const install = dirDst => {
  console.log(`Installing dependencies in ${dirDst}`);
  childProcess.execSync('yarn install', { cwd: dirDst });
};

module.exports = install;
