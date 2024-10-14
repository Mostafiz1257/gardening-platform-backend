import express from 'express'
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from './user.validation';
import { UserController } from './user.controller';

const router = express.Router()

router.post('/register' ,validateRequest(UserValidation.userValidationSchema),UserController.createUser)

router.get('/all-users',UserController.getAllUsers)
router.patch('/:id', UserController.updateUser)
router.delete('/:id', UserController.deleteUser)

//-------This route for Follow/unFollow user
router.post('/follow', UserController.followOrUnFollow);

router.get('/me',UserController.getSingleUSer)
router.put('/me',UserController.updatedUSer)

export const UserRouter = router;