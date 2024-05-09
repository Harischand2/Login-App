// contains all the functions that corresponds to each route
// in the route folder

const User = require('../models/user')
const {hashPassword, comparePasswords} =  require('../helpers/auth')
const jwt = require('jsonwebtoken')


const test1 = (req, res, next) => {
  res.json("test is working");
};

const registerUser = async (req, res, next) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    // check name
    if (!firstname) {return res.json({ error: "First name is required" });}
    if (!lastname) {return res.json({error: "Last name is required",});}
    
    // check email 
    if(!email){ return res.json({error: "Email is required"})}
    const exist = await User.findOne({email})
    if (exist) {return res.json({ error: "Email already exist", });}


    //check password
    const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    if (!password || !regex.test(password) ) { return res.json({  
        error: "Password needs to have at least 6 chars and must contain at least one number, one lowercase and one uppercase letter."});  }

    const hashedPassword =  await hashPassword(password)


    const user = await User.create({firstname, lastname, email, password: hashedPassword})
    
    return res.json(user)


  } catch (err) {
    console.log("err ", err);
  }
};

const loginUser = async(req, res)=>{
try{
const {email, password}  = req.body
// check if credentials are valid
const userObj = await User.findOne({email})
if (!userObj){
  return res.json({error: 'User not found'})
}

// check password
const match = await comparePasswords(password, userObj.password)
// if email and password is valid then we need to sign a JWT token
// aka a cookie to track the user throughout the whole application
if (match){
  jwt.sign({
    email: userObj.email,
    id: userObj._id,
    firstname: userObj.firstname,
    lastname: userObj.lastname
  },
  process.env.JWT_SECRET,
  {},
  (err, token)=>{
    if(err) throw err
    return res.cookie('token', token).json(userObj)
  }
)
  // return res.json('passwords matched')
}else{
  return res.json({error: 'Passwords dont match'})
}


}
catch(error){
  console.log("error ", error)
}
}

const getProfile= (req, res)=>{
    const {token} = req.cookies
    if (token){
      jwt.verify(token, process.env.JWT_SECRET, {}, (err, user)=>{
        if (err) throw err
        return res.json(user)
      })
    }else{
      return res.json(null)
    }

}

const logoutUser = (req, res)=>{
  res.clearCookie('token')
  return res.json(null)
  
}
const deleteUser =  async(req, res)=>{
  const {id} = req.body
  console.log(id)
  try{
  const data = await User.findByIdAndDelete(id)
  res.clearCookie('token')
  
  }
  catch(err){
    console.log("error " , err)
  }
  return  res.json(null) ;

}

const updateUser = async (req, res)=>{
  try {
    const { firstname, lastname, id} = req.body;
    console.log('id ', id)
    // check name
    if (!firstname) {return res.json({ error: "First name is required" });}
    if (!lastname) {return res.json({error: "Last name is required",});}
  
    const updatedUser = await User.findByIdAndUpdate(id, { firstname, lastname }, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ error: "User not found or update was unsuccessful" });
    }
    // Generate new token with updated user information
    const token = jwt.sign({ id: updatedUser._id,
      email: updatedUser.email,
      firstname: updatedUser.firstname,
      lastname: updatedUser.lastname

    }, process.env.JWT_SECRET);
    // Set new token in cookie
    res.cookie('token', token, { httpOnly: true, secure: true });
    return res.json(updatedUser);
     
      
       
  

        return res.json(result)
       
  } catch (err) {
    console.log("err ", err);
  }
}

module.exports = {
  test1,
  registerUser,
  loginUser,
  getProfile,
  logoutUser,
  deleteUser,
  updateUser
};
