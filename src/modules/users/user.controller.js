import bcrypt from "bcrypt"
import User from "../../../DB/model/user.model.js";

export const signup = async(req, res) => {
    const { username, email, password } = req.body;
    const userExist = await User.findOne({where: {email}});
    if(userExist){
        return res.status(400).json({ message: 'User already exists' });
    }
    const hashed = bcrypt.hashSync( password , 8);
    const user = await User.create({ username, email, password: hashed });
    res.json({ message: 'User created successfully', user });
};

export const signin = async(req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({where: {email}})
    if(!user){
        return res.status(404).json({ message: 'User not found' });
    }
    const isPassCorrect = bcrypt.compareSync(
        password,
        user.password
    )
    if(!isPassCorrect){
        return res.status(400).json({ message: 'Invalid password' });
    }
    const loginStatus = await user.update({loginStatus: true})
    res.json({ message: 'Signed in successfully', user });
}

export const logout = async(req,res)=>{
    const { id } = req.query;
    const loginStatus = await User.update({ loginStatus: false }, { where: { id } });
    res.json({ message: 'Logged out successfully', loginStatus });
}