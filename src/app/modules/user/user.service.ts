import config from '../../config';
import { IUser } from './user.interface';
import { User } from './user.model';
import jwt from 'jsonwebtoken';
const createUserIntoDb = async (user: IUser) => {
  const newUser = await User.create(user);
  const jwtPayload = newUser.toObject();

  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: config.jwt_access_expires_in,
  });
  return {
    success: true,
    statusCode: 200,
    message: 'User is created successfully',
    data: jwtPayload,
    token: accessToken,
  };
};

const getAllUsersFromDb = async () => {
  const result = await User.find();
  return result;
};

const updateUserFromDb = async (userId: string, userData: Partial<IUser>) => {
  const result = await User.findByIdAndUpdate(userId, userData, { new: true });
  return result;
};

const deleteUserFromDb = async (userId: string) => {
  const result = await User.findByIdAndDelete(userId);
  return result;
};

export const UserServices = {
  createUserIntoDb,
  getAllUsersFromDb,
  updateUserFromDb,
  deleteUserFromDb,
};
