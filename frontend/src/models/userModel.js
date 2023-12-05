// frontend/src/models/UserModel.js
class UserModel {
  constructor({
    _id,
    firstname,
    lastname,
    email,
    mobile,
    token,
    reservations,
    refreshToken,
  }) {
    this.id = _id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.mobile = mobile;
    this.token = token || refreshToken;
    this.refreshToken = refreshToken || null;
    this.reservations = reservations || [];
  }
}

export default UserModel;
