import  express from 'express';
const router = express.Router();
import  commentController from "../controller/commentController"


router.get('/All', commentController.getAllComments);

router.get('/:id', commentController.getComment);

router.post('/create', commentController.createComment);

router.put('/update', commentController.updateComment);

router.delete('/delete', commentController.deleteComment);

export default router;