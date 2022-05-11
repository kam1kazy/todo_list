const { alias } = require('react-app-rewire-alias')

module.exports = function override(config, env) {
   alias({
      '@components' : 'src/components',
      '@containers' : 'src/containers',
      '@routers' : 'src/routes',
      '@store' : 'src/store',
   })(config);

   return config;
}