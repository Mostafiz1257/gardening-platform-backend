import config from '../../config';
import { sendEmail } from '../../utils/sendEmail';
import { User } from '../user/user.model';

import jwt, { JwtPayload } from 'jsonwebtoken';

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

const forgetPasswordIntoDb = async (email: string) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('User does not exist!');
  }
  const accessToken = jwt.sign(
    { email: user?.email, id: user?._id },
    config.jwt_access_secret as string,
    {
      expiresIn: '10min',
    },
  );

  const link = `${config.reset_pass_ui_link}/api/auth/reset-password/${accessToken}/${user?._id}`;

  sendEmail(user.email, link);
  console.log('link', link);
};

const resetPasswordIntoDb = async (
  payload: { email: string; newPassword: string },
  token: string,
) => {
  const decoded = jwt.verify(
    token,
    config.jwt_access_secret as string,
  ) as JwtPayload;
  if (decoded) {
    await User.findOneAndUpdate(
      { email: payload.email },
      { $set: { password: payload.newPassword } },
      { new: true, runValidators: true },
    );


    return 'Password Updated';
  }
};

export const AuthService = {
  userLoginService,
  forgetPasswordIntoDb,
  resetPasswordIntoDb,
};
