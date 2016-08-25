"use strict";
var User = (function () {
    function User(Id, Name, Username, Password, Role, IsActive, uProduceDetail, LastLogin) {
        this.Id = Id;
        this.Name = Name;
        this.Username = Username;
        this.Password = Password;
        this.Role = Role;
        this.IsActive = IsActive;
        this.uProduceDetail = uProduceDetail;
        this.LastLogin = LastLogin;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.Model.js.map