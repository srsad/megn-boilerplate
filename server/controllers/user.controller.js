const User = require('../models/user.model')

module.exports.create = async (parent, args) => {
  const user = new User(args)
  await user.save()
  return user
}
module.exports.update = async () => {
  await console.log('update user controller')
}
module.exports.remove = () => {}
module.exports.getById = async (parent, args) => {
  const user = await User.findById(args.id)
  return user
}
module.exports.getList = async () => {
  const users = await User.find()
  return users
}
