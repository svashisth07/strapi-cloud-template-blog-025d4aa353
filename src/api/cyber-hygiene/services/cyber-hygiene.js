'use strict';

/**
 * cyber-hygiene service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cyber-hygiene.cyber-hygiene');
