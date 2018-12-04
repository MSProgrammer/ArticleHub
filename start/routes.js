const Route = use("Route");

// start
Route.get("/", ({ view }) => {
  return view.reneder("page/home");
});

//#region user login stuff
Route.group(() => {
    // routes for edit
    Route.post("edit", "UserController.edit");
    // routes for register
    Route.get('register', ({ view }) => {
      return view.reneder('page/register');
    });
    Route.post("register", "UserController.register");
    // routes for login
    Route.get("login", ({ view }) => {
      return view.reneder("page/login");
    });
    Route.post("login", "UserController.login");
    // route for logout
    Route.get("logout", "UserController.logout")
      .middleware(["auth"]);
  })
  .prefix("api/user");
//#endregion

// #region admin
Route.group(() => {
    Route.get("user", "UserController.index");
    Route.get("article", "PostController.index");
    Route.get("category", "CatController.index");
    Route.get("tag", "TagController.index");
    Route.get("comment", "CommentController.index");
  })
  .prefix("api/admin/index")
  .middleware(["administrator"]);
Route.group(() => {
    Route.post("category", "CatController.create");
    Route.post("tag", "TagController.create");
    Route.post("article", "PostController.create");
    Route.post("comment", "CommentController.create");
    Route.post("role", "UserController.createRole")
  })
  .prefix("api/admin/create")
  .middleware(["administrator"]);
Route.group(() => {
    Route.patch("article", "PostController.edit");
    Route.patch("comment", "CommentController.edit");
    Route.patch("tag", "TagController.edit");
    Route.patch("category", "CatController.edit");
    Route.patch("permission/:id", "UserController.permissionChange");
  })
  .prefix("api/admin/edit")
  .middleware(["administrator"]);
Route.group(() => {
    Route.delete("article", "PostController.delete");
    Route.delete("comment", "CommentController.delete");
    Route.delete("tag", "TagController.delete");
    Route.delete("category", "CatController.delete");
    Route.delete("user", "UserController.delete");
  })
  .prefix("api/admin/delete")
  .middleware(["administrator"]);
// #endregion

// #region moderator
Route.group(() => {
    Route.get("article", "PostController.index");
    Route.get("comment", "CommentController.index");
    Route.get("tag", "TagController.index");
    Route.get("category", "CatController.index");
    Route.get("user", "UserController.index");
  })
  .prefix("api/moderator/index");
Route.group(() => {
    Route.post("article", "PostController.create");
    Route.post("comment", "CommentController.create");
    Route.post("tag", "TagController.create");
    Route.post("category", "CatController.create");
    // Route.post('user', 'userController.create');
  })
  .prefix("api/moderator/create");
Route.group(() => {
    Route.patch("article", "PostController.edit");
    Route.patch("comment", "CommentController.edit");
    Route.patch("tag", "TagController.edit");
    Route.patch("category", "CatController.edit");
    // Route.patch('user', 'userController.edit');
  })
  .prefix("api/moderator/edit");
Route.group(() => {
    Route.delete("article", "PostController.delete");
    Route.delete("comment", "CommentController.delete");
    Route.delete("tag", "TagController.delete");
    Route.delete("category", "CatController.delete");
    // Route.delete('user', 'userController.delete');
  })
  .prefix("api/moderator/delete");
//#endregion

//#region user crud
Route.group(() => {
    Route.get("article", "PostController.index");
    Route.get("comment", "CommentController.index");
    // Route.index('tag', 'tagController.index');
    // Route.index('category', 'catController.index');
    // Route.index('user', 'userController.index');
  })
  .prefix("api/user/index");
Route.group(() => {
    Route.post("comment", "CommentController.create");
  })
  .prefix("api/user/create");

Route.group(() => {
    Route.patch("comment", "CommentController.edit");
  })
  .prefix("api/user/edit");

Route.group(() => {
    Route.delete("comment", "CommentController.delete");
  })
  .prefix("api/user/delete");
//#endregion
