import  express from "express";
const router = express.Router();
import  userController from "../controller/UsersController"

router.get("/All",userController.getAllUsers)

router.get("/:id", userController.getUser)

router.post("/create", userController.createUser)

router.put("/update", userController.updateUser)

router.delete("/delete", userController.deleteUser)

export default router;