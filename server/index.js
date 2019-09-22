const express = require('express');
const fs = require('fs');
const yargs = require('yargs');

const argv = yargs
  .option('port', {
      alias: 'p',
      type: 'number',
      description: 'Server port',
  })
  .option('city',  {
      alias: 'c',
      type: 'string',
      description: 'Either `lugano` or  `zurich`',
  })
  .argv;

const supportedEndpointsByCity = {
    lugano: ['/events', '/hikes', '/museums'],
    zurich: ['/events', '/museums'],
};

const main =  () => {
    const app = express();
    const port = argv.port;
    const city = argv.city;
    const resourcesPath = `${__dirname}/resources/${city}`;
    const supportedEndpoints = supportedEndpointsByCity[city];

    if (typeof port !== 'number' || isNaN(port)) {
        console.error(`Invalid port '${city}', the port must be a number.`);
        return;
    }

    if (city !== 'lugano' && city !== 'zurich') {
        console.error(`Invalid city '${city}', city must be either 'lugano' or 'zurich'.`);
        return;
    }

    // Check if method is supported for a given configuration
    app.use((req, res, next) => {
        const isSupported = supportedEndpoints.some(endpoint => req.path.startsWith(endpoint));
        if (!isSupported) {
            return res.sendStatus(404);
        }
        return next();
    });

    // GET events
    app.get('/events', (req, res) => {
        const events = JSON.parse(fs.readFileSync(`${resourcesPath}/events/events.json`));
        return res.json(events);
    });

    // GET hikes
    app.get('/hikes', (req, res) => {
        const hikes = JSON.parse(fs.readFileSync(`${resourcesPath}/hikes/hikes.json`));
        const baseUrl = `${req.protocol}://${req.hostname}:${port}`;
        return res.json(hikes.map(hike => ({
            ...hike,
            image: `${baseUrl}${hike.image}`,
        })));
    });

    // GET museums
    app.get('/museums', (req, res) => {
        const museums = JSON.parse(fs.readFileSync(`${resourcesPath}/museums/museums.json`));
        const baseUrl = `${req.protocol}://${req.hostname}:${port}`;
        return res.json(museums.map(museum => ({
            ...museum,
            image: `${baseUrl}${museum.image}`,
        })));
    });

    // GET images
    app.use('/', express.static(resourcesPath));

    // Start app
    app.listen(port, () => console.log(`${city} listening on port ${port}!`));
};

main();
