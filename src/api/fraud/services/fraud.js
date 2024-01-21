'use strict';

/**
 * fraud service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fraud.fraud');
