const userModel = require("../schema/userSchema");

exports.createUser = async (req, res) => {
  try {
    console.log(req.body);
    const user = userModel.create({
      Name: req.body.Name,
      Email: req.body.Email,
    });

    if (user) {
      return res.status(201).json({ message: "successfull", data: user });
    }
    return res.status(400).json({ message: "not created" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
