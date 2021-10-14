const userController = {};
let User = require("../models/userModel");


userController.signIn = (req, res) => {
  const { email, password } = req.body;
  const newUser = new User({
    email,
    password,
  });
  newUser
    .save()
    .then(() => res.json("Usuario Creado Correctamente"))
    .catch((e) => res.status(400).json("Error:" + e));
};

userController.logIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    if (user.password == password) {
      res.status(200).json(1);
    } else res.status(400).json(0);
  }
  res.status(400).json(0);
};

module.exports = userController;
