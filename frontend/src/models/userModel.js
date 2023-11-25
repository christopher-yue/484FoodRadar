// frontend/src/models/UserModel.js
class UserModel {
    constructor({ _id, firstname, email, mobile, token }) {
        this.id = _id;
        this.firstname = firstname
        this.email = email;
        this.mobile = mobile;
        this.token = token;
    }
}

export default UserModel;
