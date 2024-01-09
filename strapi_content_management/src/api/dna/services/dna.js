'use strict';

/**
 * dna service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dna.dna');
