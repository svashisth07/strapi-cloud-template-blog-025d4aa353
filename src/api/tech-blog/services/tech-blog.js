'use strict';

/**
 * tech-blog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tech-blog.tech-blog');
