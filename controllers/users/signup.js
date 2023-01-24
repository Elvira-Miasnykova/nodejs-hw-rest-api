const { Conflict } = require("http-errors");
// const bcrypt = require("bcryptjs");
const { User } = require("../../models");
const { sendEmail } = require("../../services/email");
const { v4 } = require("uuid");

const signup = async (req, res) => {
    const { name, email, password, subscription } = req.body;
    const user = await User.findOne({ email });
    
    if (user) {
        throw new Conflict(`email ${email} in use!`);
    }
    const verificationToken = v4();
    const newUser = new User({
        name,
        email,
        subscription,
        verificationToken,
    });
    /*
    newUser = {
    name,
    email,
    setPassword(password) {
            this.password = bcrypt.hashPassword(
                password,
                bcrypt.genSaltSync(10)
                )
        }    
    }
    */
    newUser.setPassword(password);
    /*
    newUser = {
    name,
    email,
    password,
    setPassword(password) {
            this.password = bcrypt.hashPassword(
                password,
                bcrypt.genSaltSync(10)
                )
        }    
    }
    */
    newUser.save();
    // const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    // const result = await User.create({ name, email, password: hashPassword });
    const mail = {
        to: email,
        subject: "confirmation of registration",
        html: `<a href="http://localhost:3000/api/users/verify/${verificationToken}" target="_blanc">Press to confirm an email</a>`,
    };
    await sendEmail(mail);
    res.status(201).json({
        status: "success",
        code: 201,
        data: {
            user: {
                name,
                email,
                subscription,
            },
        },
    });
};

module.exports = signup;