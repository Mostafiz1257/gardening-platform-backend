import config from '../../config';
import { User } from '../user/user.model';

import jwt from 'jsonwebtoken';

const userLoginService = async (email: string, password: string) => {
  const user = await User.findOne({ email, password });
  if (!user) {
    return { success: false };
  }
  const jwtPayload = user.toObject();
  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: config.jwt_access_expires_in,
  });
  return {
    success: true,
    statusCode: 200,
    message: 'User login successfully',
    data: jwtPayload,
    token: accessToken,
  };
};

export const AuthService = {
  userLoginService,
};
