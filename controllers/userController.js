import { User } from "../server/models/user.js";
export const Register = async (req, res) => {
  try {
    const {name,  email, password, age, role } = req.body;

    // Check if any field is missing
    if ( !name||!email || !password || !age || !role) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }

    // Check if user with the same email already exists
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const user = new User({name,email, password, age, role });
    await user.save();

    res.status(201).json({
      message: "User created successfully",
      user: {
        name:user.name,
        email: user.email,
        age: user.age,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
