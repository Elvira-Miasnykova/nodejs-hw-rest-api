const { NotFound } = require("http-errors");
const { User } = require("../../models/user");

const verifyEmail = async (req, res) => {
    const { verificationToken } = req.params;
    const user = await User.findOne({ verificationToken });
    if (!user) {
        throw new NotFound("Not found verification token");
    }
    await User.findByIdAndUpdate(user._id,
        { verify: true, verificationToken: "" });
    
    res.json({
        message: "Email is verified successfully",
    })
};

module.exports = verifyEmail;