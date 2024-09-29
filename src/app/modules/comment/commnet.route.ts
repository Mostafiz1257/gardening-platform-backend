import express from 'express'
import { CommentController } from './comment.controller';
const router  = express.Router();

router.post('/',CommentController.createComment)

router.patch('/:id',CommentController.updateComment)

router.delete('/:id',CommentController.deleteComment)


export const PostCommentRouter = router;