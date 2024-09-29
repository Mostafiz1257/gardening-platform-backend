import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { AuthService } from "./auth.service";


const userLogin = catchAsync(async(req:Request,res:Response)=>{
    const {email, password} = req.body;
    const result  = await AuthService.userLoginService(email,password)
    
    res.status(200).json({
        success: result.success,
        statusCode: result.statusCode,
        message: result.message,
        token: result.token, 
        data: result.data,
      });
  
})

export const AuthController = {
    userLogin
}