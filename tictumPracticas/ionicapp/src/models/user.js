/**
 * Created by Javier on 17/05/2017.
 */
var User = (function () {
    function User(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    User.prototype.isAdmin = function () {
        return (this.role == 'admin') ? true : false;
    };
    User.prototype.isUser = function () {
        return (this.role == 'user') ? true : false;
    };
    User.prototype.addHolliday = function (data) {
        this.hollidays.push(data);
    };
    User.prototype.addPersonalDays = function (data) {
        this.personalDays.push(data);
    };
    return User;
}());
export { User };
//# sourceMappingURL=user.js.map