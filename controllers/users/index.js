const signup = require("./signup");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const updateSub = require("./updateSub");

const verifyEmail = require("./verifyEmail");
const resendVerifiedEmail = require("./resendVerifiedEmail");

const updateAvatar = require("./updateAvatar");


module.exports = {
    signup,
    login,
    getCurrent,
    logout,
    updateSub,

    verifyEmail,
    resendVerifiedEmail,

    updateAvatar,

};