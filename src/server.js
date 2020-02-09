require('./lib/moduleAlias');
const server = require('~/App');


// eslint-disable-next-line no-console
server.listen(3333, () => console.log('Server is runing'));
