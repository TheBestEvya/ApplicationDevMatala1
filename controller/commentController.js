const {commentModel} = require("../model/commentModel.js");  // Assuming your model is in the 'model' folder
const {postModel} = require("../model/postModel.js")

const getAllComments = async (req, res) => {
  try {
    const comments = await commentModel.find();
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching comments", error: error.message });
  }
};

const getComment = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await commentModel.findById(id);
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ message: "Error fetching comment", error: error.message });
  }
};

const createComment = async (req, res) => {
  try {
    const newComment = new commentModel(req.body);
    const savedComment = await newComment.save();
    const {postId} = req.body
    res.status(201).json({ message: "Comment created successfully", comment: savedComment });
  } catch (error) {
    res.status(500).json({ message: "Error creating comment", error: error.message });
  }
};

const updateComment = async (req, res) => {
  try {
    const { id } = req.body;
    const updatedData = req.body;
    const updatedComment = await commentModel.findByIdAndUpdate(id, updatedData, { new: true });
    res.status(200).json({ message: "Comment updated successfully", comment: updatedComment });
  } catch (error) {
    res.status(500).json({ message: "Error updating comment", error: error.message });
  }
};

const deleteComment = async (req, res) => {
  try {
    const { id } = req.body;
    await commentModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting comment", error: error.message });
  }
};

module.exports = { createComment, getComment, getAllComments, updateComment, deleteComment };
