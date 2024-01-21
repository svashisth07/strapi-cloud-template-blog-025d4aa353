'use strict';

/**
 * fraud controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::fraud.fraud');
