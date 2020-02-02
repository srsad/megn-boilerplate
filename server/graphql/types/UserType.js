const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLBoolean
} = require('graphql')

const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'Пользователь',
  fields: () => ({
    _id: { type: GraphQLID },
    login: { type: GraphQLString },
    password: { type: GraphQLString },
    fullname: { type: GraphQLString },
    email: { type: GraphQLString },
    description: { type: GraphQLString },
    phone: { type: GraphQLInt },
    active: { type: GraphQLBoolean },
    avatar: { type: GraphQLString },
    role: { type: GraphQLString },
    // TODO ? масив
    // access: { type: GraphQLString },
    updated_at: { type: GraphQLString },
    created_at: { type: GraphQLString }
  })
})

module.exports = { UserType }
