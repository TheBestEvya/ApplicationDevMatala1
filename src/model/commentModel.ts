import  mongoose from "mongoose";

interface iComment {
  userId: mongoose.Schema.Types.ObjectId,
  postId: mongoose.Schema.Types.ObjectId,
  text: string
}
export const commentSchema = new mongoose.Schema<iComment>({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true
    },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'posts',
      required : true
    },
    text: {
      type: String,
      required: true
    }
  });

  const commentModel = mongoose.model<iComment>("comments", commentSchema)
  
export default commentModel;