const {commentModel} = require("../model/commentModel.js");  // Assuming your model is in the 'model' folder
const {postModel} = require("../model/postModel.js");
const { post } = require("../routes/postsRouter.js");

const getAllComments = async (req, res) => {
  try {
    const comments = await commentModel.find();
    res.status(200).json(comments);
  } catch (error) {
    res.status(400).json({ message: "Error fetching comments", error: error.message });
  }
};

const getComment = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await commentModel.findById(id);
    if (!comment) {
      res.status(400).json({message : "Comment not found!"});
      return;
    }
    res.status(200).json(comment);
  } catch (error) {
    res.status(400).json({ message: "Error fetching comment", error: error.message });
  }
};

const createComment = async (req, res) => {
  try {
    const {postId} = req.body
    const post = await postModel.findById(postId)
    if(!post){
      res.status(400).json({message : "Post not found!"});
      return;
    }
    const newComment = new commentModel(req.body);
    const savedComment = await newComment.save();
    post.comments.push(savedComment)
    await post.save();
    res.status(201).json({ message: "Comment created successfully", comment: savedComment });
  } catch (error) {
    res.status(400).json({ message: "Error creating comment", error: error.message });
  }
};

const updateComment = async (req, res) => {
  try {
    const { id , text } = req.body;
    const updatedComment = await commentModel.findByIdAndUpdate(id, {text : text}, { new: true });
    const post = await postModel.findById(updatedComment.postId);
    const comment = post.comments.find(comment => comment._id == id);
    if(comment){
      comment.text = text;
    }
    await post.save();
    res.status(200).json({ message: "Comment updated successfully", comment: updatedComment });
  } catch (error) {
    res.status(400).json({ message: "Error updating comment", error: error.message });
  }
};

const deleteComment = async (req, res) => {
  try {
    const { id } = req.body;
    const comment = await commentModel.findByIdAndDelete(id);
    if (!comment) {
      res.status(400).json({message : "Comment not found!"});
      return;
    }
    const post = await postModel.findById(comment.postId);
    post.comments = post.comments.filter(comment => comment._id != id);
    await post.save(); 

    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error deleting comment", error: error.message });
  }
};

module.exports = { createComment, getComment, getAllComments, updateComment, deleteComment };
