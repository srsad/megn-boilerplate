const { GraphQLID, GraphQLList } = require('graphql')
const { UserType } = require('../types')
const { getById, getList } = require('../../controllers/user.controller')

const userQuery = {
  user: {
    type: UserType,
    args: { id: { type: GraphQLID } },
    resolve: (parent, args) => getById(parent, args)
  },
  users: {
    type: new GraphQLList(UserType),
    resolve: (parent, args) => getList(parent, args)
  }
}

module.exports = { userQuery }
