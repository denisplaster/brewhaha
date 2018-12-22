'use strict';

/**
 * Brands.js controller
 *
 * @description: A set of functions called "actions" for managing `Brands`.
 */

module.exports = {

  /**
   * Retrieve brands records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.brands.search(ctx.query);
    } else {
      return strapi.services.brands.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a brands record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.brands.fetch(ctx.params);
  },

  /**
   * Count brands records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.brands.count(ctx.query);
  },

  /**
   * Create a/an brands record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.brands.add(ctx.request.body);
  },

  /**
   * Update a/an brands record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.brands.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an brands record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.brands.remove(ctx.params);
  }
};
