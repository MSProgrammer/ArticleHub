'use strict'

/** @type {import('@adonisjs/framework/src/Server')} */
const Server = use('Server')

/*
|--------------------------------------------------------------------------
| Global Middleware
|--------------------------------------------------------------------------
|
| Global middleware are executed on each http request only when the routes
| match.
|
*/
const globalMiddleware = [
  'Adonis/Middleware/BodyParser',
  'Adonis/Acl/Init'

]

/*
|--------------------------------------------------------------------------
| Named Middleware
|--------------------------------------------------------------------------
|
| Named middleware is key/value object to conditionally add middleware on
| specific routes or group of routes.
|
| // define
| {
|   auth: 'Adonis/Middleware/Auth'
| }
|
| // use
| Route.get().middleware('auth')
|
*/
const namedMiddleware = {
  auth: 'Adonis/Middleware/Auth',
  is: 'Adonis/Acl/Is',
  can: 'Adonis/Acl/Can',
  // guest: 'Adonis/Middleware/AllowGuestOnly',
  // administrator: 'App/Middleware/Administrator',
  // modratore: 'App/Middleware/Modratore'
}

/*
|--------------------------------------------------------------------------
| Server Middleware
|--------------------------------------------------------------------------
|
| Server levl middleware are executed even when route for a given URL is
| not registered. Features like `static assets` and `cors` needs better
| control over request lifecycle.
|
*/
const serverMiddleware = [
  'Adonis/Middleware/Static',
  'Adonis/Middleware/Cors'
]

const aceProviders = [
  'adonis-vow-mocha/providers/VowMochaProvider'
]

Server
  .registerGlobal(globalMiddleware)
  .registerNamed(namedMiddleware)
  .use(serverMiddleware)
