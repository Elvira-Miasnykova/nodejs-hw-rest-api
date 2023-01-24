const express = require('express')

const { validation, ctrlWrapper } = require("../../middlewares");
const {auth} = require("../../services")
const { joiSignupSchema, joiLoginSchema, joiUpdateSubSchema, joiVerifyEmailSchema} = require("../../models/user");
const { users: ctrl } = require("../../controllers");

const router = express.Router();

router.post("/signup", validation(joiSignupSchema), ctrlWrapper(ctrl.signup));
router.get("/verify/:verificationToken", ctrlWrapper(ctrl.verifyEmail));
router.post("/verify", validation(joiVerifyEmailSchema), ctrlWrapper(ctrl.resendVerifiedEmail));
router.post("/login", validation(joiLoginSchema), ctrlWrapper(ctrl.login));
router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));
router.get("/logout", auth, ctrlWrapper(ctrl.logout));
router.patch("/", auth, validation(joiUpdateSubSchema), ctrlWrapper(ctrl.updateSub));

module.exports = router;