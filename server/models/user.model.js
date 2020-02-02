const { model, Schema } = require('mongoose')

/**
 * Схема пользователей
 */
const userSchema = new Schema({
  login: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  fullname: {
    type: String
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  description: {
    type: String,
    maxlength: 255
  },
  phone: {
    type: Number,
    unique: true,
    required: true,
    maxlength: 10
  },
  // активный/заблокироавнный
  active: {
    type: Boolean,
    default: true
    // required: true
  },
  avatar: {
    type: String
  },
  // blockeduntil - заблокирован до (дата)
  // blockedafter - заблокирован после (дата)
  // роль
  role: {
    type: String,
    default: 'user'
    // administrator - роль главного администратора
    // manager - роль для менеджеров компаний
    // driver - роль для водителей
    // user - обычный пользователь
  },
  // уровни доступа
  access: {
    type: Array,
    default: []
  },
  updated_at: {
    type: Date
  },
  created_at: {
    type: Date,
    default: Date.now
  }
  // TODO Подтверждение регистрации
  // confirmation: {
  //   type: Boolean,
  //   default: false,
  //   required: true
  // }
})

module.exports = model('users', userSchema)
