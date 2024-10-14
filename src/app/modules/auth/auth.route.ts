import express from 'express'
import validateRequest from '../../middlewares/validateRequest';
import { AuthValidation } from './auth.validation';
import { AuthController } from './auth.controller';
const router  = express.Router()


router.post('/login', validateRequest(AuthValidation.loginValidationSchema),AuthController.userLogin)

router.post('/forget-password',AuthController.forgetPassword)
router.post('/reset-password',AuthController.resetPassword)
// router.post('/reset-password/:token/:userId', AuthController.resetPassword);

export const AuthRouter = router;