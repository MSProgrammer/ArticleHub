'use strict'
const User = use('App/Models/User');
const Role = use('App/Models/Role');
class PermissionController {
  async AttachedPermissionIndex() {

  }

  // PATCH: api/admin/edit/userpermit/:id
  async AttachPermission({ request, params }) {
    const userId = params.id;
    const roleId = request.all();
    const user = await User.find(userId);

    user.roles()
      .attach(roleId.role);
    return 'yoohoo';
  }

  async DetachPermission() {}

}

module.exports = PermissionController
