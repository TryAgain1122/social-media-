import bcrypt from "bcryptjs";
import userModel from "../models/userModel.js";

// Register a new User
export const registerUser = async (req, res) => {
  const { username, password, firstname, lastname } = req.body;

  // const salt = await bcrypt.genSalt(10);
  // const hashPass = await bcrypt.hash(password, salt);

  const newUser = new userModel({
    username,
    password,
    firstname,
    lastname,
  });

  try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//login user
export const loginUser = async (req, res) => {
    const {username, password} = req.body;
  try {
    
    const user = await userModel.findOne({ username: username});
    
    if (user) {
        const validity = await bcrypt.compare(password, user.password);

        validity ? res.status(200).json(user) : res.status(400).json("Wrong password");
    }
    else {
        res.status(404).json("User does not Exist");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
