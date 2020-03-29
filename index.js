const { property } = require('@jonkemp/package-utils');

module.exports = (obj, key) => obj.map(property(key));
