import moduleAlias from 'module-alias';
import path from 'path';

moduleAlias.addAliases({
  '~': path.join(__dirname, '..'),
  '@controllers': path.join(__dirname, '..', 'app', 'controllers'),
  '@routes': path.join(__dirname, '..', 'app', 'routes'),
});
