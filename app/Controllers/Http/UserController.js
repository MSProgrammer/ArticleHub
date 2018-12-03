'use strict'

const User = use('App/Models/User');
const Permit = use('App/Common/Authorization');

class UserController {
  //if the user incoming is Admin 
  //he can see all the users
  async index({ request }) {
    return User.all();
  }

  async register({ request }) {
    const {
      email,
      password,
      permission_mode
    } = request.all();
    console.log(email, password);
    const user = await User.create({
      email,
      password,
      username: email,
      permission_mode,
    });
    return user;
  }


  async login({ request, auth }) {
    const {
      email,
      password,
      permission_mode
    } = request.all();
    const token = await auth.attempt(email, password);
    return token;
  }

  async logout({ auth }) {
    await auth.logout();
    return 'logedOut';
  }

  async edit({ request, params }) {
    const {
      email,
      permission_mode
    } = request.all();
    const user = await User.find(params.id);
    user.merge({
      email,
      permission_mode,
    });
    await user.save();
    return {
      "user": user.id,
    };
  }

}

module.exports = UserController
