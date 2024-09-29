import { Request,Response } from "express"
import catchAsync from "../../utils/catchAsync"
import { FavoritePostService } from "./favorite.service"
import sendResponse from "../../utils/sendResponse";

const createFavoritePost = catchAsync(async(req:Request,res:Response)=>{
const result = await FavoritePostService.createFavoritePostIntoDb(req.body);

sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Save to favorite gallery',
    data: result,
  });
})


const deleteFavoritePost = catchAsync(async(req:Request,res:Response)=>{
const id = req.params.id;
const result = FavoritePostService.deleteFavoritePostFromDb(id);
sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Remove from your favorite post',
    data: result,
  });
})


const getMyFavoritePost = catchAsync(async (req: Request, res: Response) => {
    const userId = req.params.userId; 
    const result = await FavoritePostService.getMyFavoritePostFromDb(userId);
  
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Favorite posts fetched successfully",
      data: result,
    });
  });




export const FavoritePostController ={
createFavoritePost,
deleteFavoritePost,
getMyFavoritePost
}