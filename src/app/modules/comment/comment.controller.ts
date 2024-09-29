import { Request, Response } from "express"
import catchAsync from "../../utils/catchAsync"
import { CommentService } from "./comment.service"
import sendResponse from "../../utils/sendResponse"

const createComment  = catchAsync(async(req:Request,res:Response)=>{
const result = await CommentService.createCommentIntoDb(req.body)
sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'You comment here',
    data: result,
  });
})

const updateComment  = catchAsync(async(req:Request,res:Response)=>{

})

const deleteComment = catchAsync(async(req:Request,res:Response)=>{

})


export const CommentController = {
    createComment,
    updateComment,
    deleteComment
}