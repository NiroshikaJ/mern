const userModel = require("../schema/userSchema");

exports.createUser = async (req, res) => {
  try {
    console.log(req.body);
    const user = await userModel.create({
      Name: req.body.Name,
      Email: req.body.Email,
    });

    if (user) {
      return res.status(201).json({ message: "successfull", data: user });
    }
    return res.status(400).json({ message: "not found" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};


exports.getUser = async (req, res) => {
  try {
    const user = await userModel.find();
    if (user) {
      return res.status(201).json({ message: "successfull", data: user });
    }
    return res.status(400).json({ message: "not found" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
