'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => { 
  return { Greetings: " salam " }; 
});

Route.group(() => {
  Route.get('articles/index', 'PostController.index');
  Route.post('auth/login', 'UserController.login');
  Route.post('auth/register', 'UserController.register');
  Route.get('auth/logout', 'UserController.logout');
  Route.post('articles/comment/:id', 'PostController.articleComment');
  Route.get('cat/index', 'CatController.index'); // cat index
}).prefix('api');

Route.group(() => {
  Route.get('articles/index', 'PostController.index');
  Route.post('articles/create', 'PostController.create'); // localhost:3333/api/articles/create?q=sag
  Route.post('tag/create', 'TagController.create');
  Route.post('cat/create', 'CatController.create'); // cat Create
}).middleware(['admin', 'modratore']).prefix('api');

Route.group(() => {
  Route.get('users/index', 'UserController.index');
  Route.patch('users/edit/:id', 'UserController.edit');
  Route.patch('articles/edit/:id', 'PostController.edit');
}).middleware(['admin']).prefix('api');
