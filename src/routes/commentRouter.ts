import  express from 'express';
const router = express.Router();
import  commentController from "../controller/commentController"


router.get('/All', commentController.getAll.bind(commentController));

router.get('/:id', commentController.getById.bind(commentController));

router.post('/create', commentController.create.bind(commentController));

// router.put('/update', commentController.updateComment);

router.delete('/delete', commentController.delete.bind(commentController));

export default router;