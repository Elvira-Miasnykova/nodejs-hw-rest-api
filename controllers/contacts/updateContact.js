const {Contact} = require("../../models/contact");

const updateContact = async (req, res, next) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, {new: true});
  if (!result) {
    const error = new Error(`Contact with id=${id} not found`);
    error.status = 404;
    throw error;
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = updateContact;
