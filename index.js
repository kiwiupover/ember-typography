'use strict';

module.exports = {
  name: 'ember-typography',
  contentFor: function (type, config) {
    if (type === 'body-footer') {
      return `<link rel="stylesheet" rel="preconnect" type="text/css" href="https://cloud.typography.com/${config.typography.CSS_KEY}/css/fonts.css" async>`;
    }
  }
};
