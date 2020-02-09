const path = require('path');

module.exports = {
  '~': path.join(__dirname, '..'),
  '@controllers': path.join(__dirname, '..', 'app', 'controllers'),
  '@routes': path.join(__dirname, '..', 'app', 'routes'),
};
