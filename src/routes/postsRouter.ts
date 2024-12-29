import  express from "express";
const router = express.Router();
import  postController from "../controller/postsController"
import {Request, Response} from "express"

router.get("/All",postController.getAllposts)

// router.get("/", postController.getPostBySender)

// router.get("/:id", postController.getPost)

router.post("/create", postController.createPost)

router.put("/update/:id", postController.updatePost)

router.delete("/delete", postController.deletePost)

export default router;