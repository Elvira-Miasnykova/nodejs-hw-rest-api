const { NotFound, BadRequest } = require("http-errors");
const { User } = require("../../models/user");
const { sendEmail } = require("../../services/email");

const resendVerifiedEmail = async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        throw new NotFound("User is not found");
    }
    if (!user.verify) {
        throw new BadRequest("User`s already verified");
    }
    const mail = {
        to: email,
        subject: "confirmation of registration",
        html: `<a href="http://localhost:3000/api/users/verify/${user.verificationToken}" target="_blanc">Press to confirm an email</a>`,
    };
    await sendEmail(mail);
    res.json({
        message: "Email verification resend",
    })
};

module.exports = resendVerifiedEmail;