const fs = require('fs');
const path = require('path');

const validateConfig = config => {
  const validateField = (fieldName, field) => {
    if (!field) {
      console.error(`missing field '${fieldName}' in config`);
      process.exit(0);
    }
  };
  validateField('id', config.id);
  validateField('name', config.name);
  validateField('theme', config.theme);
  validateField('baseUrl', config.baseUrl);
  validateField('modules', config.modules);
  validateField('iconsPath', config.iconsPath);
};

const patchConfigIconsPath = (config, configPath) => ({
  ...config,
  iconsPath: `${path.dirname(configPath)}/${config.iconsPath}`,
});

const parseConfig = configPath => {
  const configJson = fs.readFileSync(configPath, 'utf8');
  const config = JSON.parse(configJson);
  const configPatched = patchConfigIconsPath(config, configPath);
  validateConfig(configPatched);
  return configPatched;
};

module.exports = parseConfig;
