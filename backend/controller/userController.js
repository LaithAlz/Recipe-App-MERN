const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

const signupUser = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const user = await User.signup(email, name, password);
    // console.log(user);
    // res.status(200).json({ user });
    const token = createToken(user._id);
    // console.log(token);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    const token = createToken(user._id);
    res.status(200).json({ email, token });
    // res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUsers = async (req, res) => {
  const users = await User.find({});
  res.status(200).json(users);
};

module.exports = { signupUser, loginUser, getUsers };
