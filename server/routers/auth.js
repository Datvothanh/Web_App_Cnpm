const express = require("express");
const router = express.Router();
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const verifyToken = require('../middleware/auth')
//@route GET api/auth
//@desc Check if user is logged in
//@access Public
router.get('/', verifyToken, async(req, res)=>{
  try {
    const user = await User.findById(req.userId).select('-password')
    if(!user) return res.status(400).json({success: false, message: 'User not found'})
    res.json({success: true, user})
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: "Internal server error" })
  }
})


// @route GET api/posts
// @desc Get posts
// @access Private
router.get("/all", async (req, res) => {
  try {
    const users = await User.find({ });
    res.json({ success: true, users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
})


//@route POST api/auth/register
//@desc Register user
//@access Public

router.post("/register", async (req, res) => {
  const { username, password , name , address , permission} = req.body;

  //Simple validation
  if (!username || !password)
    return res
      .status(400)
      .json({ success: false, message: "Missing username and/or password" });

  if (!name || !address)
    return res
      .status(400)
      .json({ success: false, message: "Missing informacion personal" });

  try {
    // Check for existing user
    const user1 = await User.findOne({ username });

    if (user1)
      return res
        .status(400)
        .json({ success: false, message: "Username already taken" });

    // Check for existing user
    const user2 = await User.findOne({ name });

    if (user2)
      return res
        .status(400)
        .json({ success: false, message: "Name already taken" });

    // All good
    const hashedPassword = await argon2.hash(password);
    const newUser = new User({ username, password: hashedPassword , name , address , permission });
    await newUser.save();

    // Return token
    const accessToken = jwt.sign(
      { userId: newUser._id },
      process.env.ACCESS_TOKEN_SECRET
    );
    res.json({
      success: true,
      message: " User created successfully",
      accessToken,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

//@route POST api/auth/login
//@desc Login user
//@access Public
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  //Simple validation
  if (!username || !password)
    return res
      .status(400)
      .json({ success: false, message: "Missing username and/or password" });

  try {
    // Check for existing user
    const user = await User.findOne({ username });
    if (!user)
      return res
        .status(400)
        .json({ success: false, message: "Incorrect username or password " });

    //Username found
    const passwordValid = await argon2.verify(user.password, password);
    if (!passwordValid)
      return res
        .status(400)
        .json({ success: false, message: "Incorrect username or password " });

    //All good
    // Return token
    const accessToken = jwt.sign(
      { userId: user._id },
      process.env.ACCESS_TOKEN_SECRET
    );
    res.json({
      success: true,
      message: " User logged in successfully",
      accessToken,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
