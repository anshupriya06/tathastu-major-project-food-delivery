import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import genToken from '../utils/token.js';

export const signUp = async (req, res) => {
  try {
    const { fullName, email, password , mobile, role} = req.body;
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }
    if (password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters long' });
    }
    if(mobile.length < 10){
      return res.status(400).json({ message: 'Mobile number must be at least 10 digits long' });
    }
    
  
    const hashedPassword = await bcrypt.hash(password, 10);

    user = await User.create({
      fullName,
      email,
      password: hashedPassword,
      mobile,
      role
    });


    const token = genToken(user._id);

    res.cookie('token', token, { 
        httpOnly: true, 
        secure: true, 
        sameSite: 'strict', // Use lowercase 'strict' for consistency
        maxAge: 30 * 24 * 60 * 60 * 1000 
    }); 
    
    return res.status(201).json(user);
        
  } catch (error) {
    res.status(500).json(`signUp error: ${error.message}`);
  }
};

export const signIn = async (req, res) => {
  try {
    const {  email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User doesnot exists' });
    }
    
    const isMatch = await bcrypt.compare(password, user.password); // Correctly compare password
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = genToken(user._id);

    res.cookie('token', token, { 
        httpOnly: true, 
        secure: true, 
        sameSite: 'strict', // Use lowercase 'strict' for consistency
        maxAge: 30 * 24 * 60 * 60 * 1000 
    }); 
    
    return res.status(200).json(user);
        
  } catch (error) {
    res.status(500).json(`signIn error: ${error.message}`);
  }
};

export const signOut = async (req, res) => {
    try {   
        res.clearCookie('token');
        return res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
        res.status(500).json(`signOut error: ${error.message}`);
    }
};
