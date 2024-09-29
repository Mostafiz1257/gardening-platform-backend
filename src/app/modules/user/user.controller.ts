import catchAsync from '../../utils/catchAsync';
import { Request, Response } from 'express';
import { UserServices } from './user.service';
import sendResponse from '../../utils/sendResponse';

const createUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserServices.createUserIntoDb(req.body);
  res.status(200).json({
    success: result.success,
    statusCode: result.statusCode,
    message: result.message,
    token: result.token, 
    data: result.data,
  });
});

const getAllUsers = catchAsync(async (req: Request, res: Response) => {
  const result = await UserServices.getAllUsersFromDb();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'All users retrieved successfully',
    data: result,
  });
});

const updateUser = catchAsync(async (req: Request, res: Response) => {
  const userId = req.params.id;
  const result = await UserServices.updateUserFromDb(userId, req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User updated successfully',
    data: result,
  });
});

const deleteUser = catchAsync(async (req: Request, res: Response) => {
  const userId = req.params.id;
  const result = await UserServices.deleteUserFromDb(userId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User deleted successfully',
    data: result,
  });
});

export const UserController = {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
};
