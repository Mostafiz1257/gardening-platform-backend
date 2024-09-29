import express from 'express'
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from './user.validation';
import { UserController } from './user.controller';

const router = express.Router()

router.post('/signup' ,validateRequest(UserValidation.userValidationSchema),UserController.createUser)

router.get('/all-users',UserController.getAllUsers)

router.patch('/:id', UserController.updateUser)
router.delete('/:id', UserController.deleteUser)

export const UserRouter = router;