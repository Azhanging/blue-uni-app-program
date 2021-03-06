const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '$': resolve(`./`),
        '$assets': resolve(`./assets`),
        '$request': resolve(`./mp-api/request`),
        '$config': resolve(`./config`),
        '$css': resolve(`./public/css`),
        '$api': resolve(`./api`),
        '$mp-api': resolve(`./mp-api`),
        '$use-in-vue': resolve(`./use-in-vue`),
        '$mixins': resolve(`./mixins`),
        '$blue-components': resolve(`./public/css/blue-components/src`),
        '$code': resolve(`./code`)
      }
    }
  }
};