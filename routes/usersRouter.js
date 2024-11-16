const express = require("express");
const router = express.Router();
// const controller = require("../controller/UsersController.js")

router.get("/All",controller.getAllUsers)

router.post("/URL", (req,res)=>{

})
router.put("/URL", (req,res)=>{

})
router.delete("/URL", (req,res)=>{

})

module.exports = router;