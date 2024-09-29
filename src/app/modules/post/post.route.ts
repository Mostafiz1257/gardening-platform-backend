import express from'express'
import validateRequest from '../../middlewares/validateRequest';
import { postValidation } from './post.validation';
import { PostController } from './post.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';


const router = express.Router();

router.post('/',auth(USER_ROLE.user),validateRequest(postValidation.postValidationSchema),PostController.createPost)

router.get('/', PostController.getAllPost)

router.patch('/:id',auth(USER_ROLE.user),validateRequest(postValidation.updatePostValidationSchema),PostController.updatePost)

router.delete('/:id',auth(USER_ROLE.user),PostController.deletePost)

export const PostRouter = router;