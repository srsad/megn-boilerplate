const { GraphQLObjectType, GraphQLSchema } = require('graphql')
const { userQuery } = require('./queries')
const { createUser } = require('./mutations')
// const mutations = require('./mutations')

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'Запросы',
  fields: {
    ...userQuery
  }
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Методы',
  fields: {
    createUser
  }
})

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation
})
