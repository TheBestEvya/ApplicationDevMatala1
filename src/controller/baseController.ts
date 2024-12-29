
import {Request, Response} from "express"
import { Model } from "mongoose";

class BaseController<T>{
    model :Model<T>;
    constructor(model:Model<T>){
        this.model = model;
    }

async getAll(req : Request , res :Response){
  try {
    const comments = await this.model.find();
    res.status(200).json(comments);
  } catch (error) {
    res.status(400).json({ message: "Error fetching  ", error: error.message });
  }
};

 async getById(req : Request , res :Response){
  try {
    const { id } = req.params;
    const comment = await this.model.findById(id);
    if (!comment) {
      res.status(400).json({message : "Comment not found!"});
      return;
    }
    res.status(200).json(comment);
  } catch (error) {
    res.status(400).json({ message: "Error fetching comment", error: error.message });
  }
};

 async create(req : Request , res :Response){
  try {
    const newUser = new this.model(req.body)
        const savedUser = await newUser.save()
        res.status(201).json({ message: "User created successfully", user: savedUser });
      } catch (error) {
        res.status(500).json({ message: "Error creating user", error: error.message });
      }
};

 async delete(req : Request , res :Response) {
    try {
        const { id } = req.body; 
        await this.model.findByIdAndDelete(id);
        res.status(200).json({ message: "User deleted successfully" });
      } catch (error) {
        res.status(500).json({ message: "Error deleting user", error: error.message });
      }
};
}

export default BaseController;