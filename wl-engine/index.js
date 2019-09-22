const commander = require('commander');
const build = require('./commands/build');
const parseConfig = require('./utils/parseConfig');

commander
  .command('build')
  .option('-c, --config-path <config>', 'Configuration file')
  .option('-s, --source <source>', 'Source directory')
  .option('-d, --destination <destination>', 'Destination directory')
  .action((options) => {
    const { configPath, source, destination } = options;
    if (!configPath) {
      console.error('missing mandatory option \'-c\'');
      return;
    }
    if (!source) {
      console.error('missing mandatory option \'-s\'');
      return;
    }
    if (!destination) {
      console.error('missing mandatory option \'-d\'');
      return;
    }
    const config = parseConfig(configPath);
    build(config, source, destination);
  });

commander.parse(process.argv);
