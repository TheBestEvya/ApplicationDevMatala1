const {postModel} = require("../model/postModel.js")
const {commentModel} = require("../model/commentModel.js")

const getAllposts = async (req , res)=>{
    try {
        const posts = await postModel.find({});
        res.status(200).json(posts);
      } catch (error) {
        res.status(500).json({ message: "Error fetching posts", error: error.message });
      }
}
const getPost = async (req , res)=>{
    try {
        const id = req.params.id
        const post = await postModel.findById(id);
        if(!post){
            return res.status(400).json({ message: "Post not found" });
        }
        res.status(200).json(post);
      } catch (error) {
        res.status(500).json({ message: "Error fetching post", error: error.message });
      }
}
const getPostBySender = async (req , res)=>{
    try {
        const senderId = req.params.sender_id
        const posts = await postModel.find({sender : senderId});
        if(!posts){
            return res.status(400).json({ message: "Post not found" });
        }
        res.status(200).json(posts);
      } catch (error) {
        res.status(500).json({ message: "Error fetching posts", error: error.message });
      }
}
const createPost = async(req,res)=>{
    try {
        const newPost = new postModel(req.body)
        const savedPost = await newPost.save()
        res.status(201).json({ message: "Post created successfully", Post: savedPost });
      } catch (error) {
        res.status(500).json({ message: "Error creating Post", error: error.message });
      }
}
const updatePost = async(req,res)=>{
    try {
        const id  = req.params.id;
        const {title , content} = req.body;
        const updatedPost = await postModel.findByIdAndUpdate(id , {title , content} , {new : true});
        res.status(200).json({ message: "Post updated successfully", Post: updatedPost });
      } catch (error) {
        res.status(500).json({ message: "Error updating Post", error: error.message });
      }
}
const deletePost = async(req,res)=>{
    try {
        const { id } = req.body; 
        await commentModel.deleteMany({postId : id})
        await postModel.findByIdAndDelete(id);
        res.status(200).json({ message: "Post deleted successfully" });
      } catch (error) {
        res.status(500).json({ message: "Error deleting Post", error: error.message });
      }
}

module.exports = {createPost,getPost,getPostBySender,getAllposts,updatePost,deletePost}