const path = require('path');
const config = {
    '/f/d': {
        data: './json/a.json'
    }
}

for (let item in config) {
    if (config.hasOwnProperty(item)) config[item].path = path.resolve(__dirname, config[item].data);
}
module.exports = config;