const { GraphQLString, GraphQLID, GraphQLInt } = require('graphql')
const { UserType } = require('../types')
const { create, update } = require('../../controllers/user.controller')
// const { User } = require('../../models/user.model')
// const { UserInputType } = require('../inputTypes')

module.exports.updateUser = {
  type: UserType,
  description: 'Обновление данных пользователя',
  args: {
    user: {
      id: { type: GraphQLID }
    },
    resolve: (parent, args) => update(parent, args)
  }
}

module.exports.createUser = {
  type: UserType,
  description: 'Создание пользователя',
  args: {
    login: { type: GraphQLString },
    password: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLInt }
  },
  resolve: (paret, child) => create(paret, child)
}
