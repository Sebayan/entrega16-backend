const { productQueries } = require("./products/queries")
const { productMutations } = require("./products/mutations")
const { userMutations } = require("./users/mutations")

module.exports.resolvers = {
  Query: {
    ...productQueries
  },

  Mutation: {
    ...productMutations,
    ...userMutations
  },
}