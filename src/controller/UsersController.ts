import userModel from "../model/userModel";

const getAllUsers = async (req , res)=>{
    try {
        const users = await userModel.find();
        res.status(200).json(users);
      } catch (error) {
        res.status(500).json({ message: "Error fetching users", error: error.message });
      }
}
const getUser = async (req , res)=>{
    try {
        const id = req.params.id
        const user = await userModel.findById(id);
        if (!user) {
          res.status(400).json({ message: "User not found" });
          return;
        }
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json({ message: "Error fetching users", error: error.message });
      }
}
const createUser = async(req,res)=>{
    try {
        const newUser = new userModel(req.body)
        const savedUser = await newUser.save()
        res.status(201).json({ message: "User created successfully", user: savedUser });
      } catch (error) {
        res.status(500).json({ message: "Error creating user", error: error.message });
      }
}
const updateUser = async(req,res)=>{
    try {
        const { id } = req.body;
        const updatedData = req.body;
        const updatedUser = await userModel.findByIdAndUpdate(id ,updatedData)
        if (!updatedUser) {
          res.status(400).json({ message: "User not found" });
          return;
        }
        res.status(200).json({ message: "User updated successfully", user: updatedUser });
      } catch (error) {
        res.status(500).json({ message: "Error updating user", error: error.message });
      }
}
const deleteUser = async(req,res)=>{
    try {
        const { id } = req.body; 
        await userModel.findByIdAndDelete(id);
        res.status(200).json({ message: "User deleted successfully" });
      } catch (error) {
        res.status(500).json({ message: "Error deleting user", error: error.message });
      }
}

export default  {createUser,getUser,getAllUsers,updateUser,deleteUser}