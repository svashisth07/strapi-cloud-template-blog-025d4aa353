'use strict';

/**
 * scammer service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::scammer.scammer');
