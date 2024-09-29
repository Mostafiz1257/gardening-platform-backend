import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { AuthService } from "./auth.service";
import sendResponse from "../../utils/sendResponse";

const userLogin = catchAsync(async(req:Request,res:Response)=>{
    const {email, password} = req.body;
    const result  = await AuthService.userLoginService(email,password)
    
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'User updated successfully',
        data: result,
      });
  
})

export const AuthController = {
    userLogin
}