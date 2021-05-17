"use strict";
const { sanitizeEntity, parseMultipartData } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  find: async (ctx) => {
    let entities = [];
    if (ctx.state.user.id) {
      entities = await strapi.services.restaurant.find({
        owner: ctx.state.user.id,
      });
      return entities.map((entity) =>
        sanitizeEntity(entity, { model: strapi.models.restaurant })
      );
    }
    ctx.unauthorized("you are not authorized");
  },
};
