const copyDirectory = require('../tasks/copyDirectory');
const createBaseUrl = require('../tasks/createBaseUrl');
const createModules = require('../tasks/createModules');
const createTheme = require('../tasks/createTheme');
const install = require('../tasks/install');
const setIcon = require('../tasks/setIcon');
const setId = require('../tasks/setId');
const setName = require('../tasks/setName');

const build = (config, dirSrc, dirDst) => {
  copyDirectory(dirSrc, dirDst);
  createModules(dirDst, config.modules);
  createTheme(dirDst, config.theme);
  createBaseUrl(dirDst, config.baseUrl);
  setId(dirDst, config.id);
  setName(dirDst, config.name);
  setIcon(dirDst, config.iconsPath);
  install(dirDst);
};

module.exports = build;
