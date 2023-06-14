const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt")


router.post("/register", async (req,res)=>{
 
  try{

    //GENERATE NEW PASSWORD
    const salt = await bcrypt.genSalt(10);
    const hashedpassword =  await bcrypt.hash(req.body.password, salt)

    //CREATE NEW USER
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedpassword,
    })


    ///SAVE NEW USEER AND RESPONSE
    const user = await newUser.save();
    res.status(200).json(user)
  } catch(error) {
    res.status(500).json(error)
  }
})

//USER LOGIN

router.post("/login", async (req, res)=>{
  try{
    const user = await User.findOne({email: req.body.email});
!user && res.status(404).json("user not found");

const validpassword = await bcrypt.compare(req.body.password, user.password)
!validpassword && res.status(404).json("wrong passsword");

res.status(200).json(user)
  } catch(error)
  {console.log(error)}

})

module.exports = router