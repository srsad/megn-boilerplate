# megn-boilerplate

## mongo + express + graphql + nuxt (+apollo)

Это базовая болванка для быстрого развертывания рабочей среды.

+ мongoose
+ схема пользователя
+ graphQL
- стратигия
- авторизация/аутентификация
- роли
- возможно подписки...
- возможно миграции...
- ...

## Build Setup
``` bash
# install dependencies
$ npm run install

# rename .env.example => .env
# set your MONDO_URI

# serve with hot reload at localhost:3000
$ npm run dev
```

## Сreate new user
``` bash
# localhost:3000/graphql
mutation {
  createUser(
    login: "admin",
    password: "adminpass",
    email: "myemail@gmail.com",
    phone: 9998887766,
  ) {
    login
  }
}
```

## Build
``` bash
# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```
