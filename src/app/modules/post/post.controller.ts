import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { PostService } from './post.service';
import sendResponse from '../../utils/sendResponse';

const createPost = catchAsync(async (req: Request, res: Response) => {
  const result = await PostService.createPostIntoDb(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Post created successfully',
    data: result,
  });
});

const getAllPost = catchAsync(async (req: Request, res: Response) => {
  const result = await PostService.getAllPostFromDb();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'retrieved all post successfully',
    data: result,
  });
});

const updatePost = catchAsync(async (req: Request, res: Response) => {
  const postId = req.params.id;
  const result = await PostService.updatePostIntoDb(postId, req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Successfully updated your post',
    data: result,
  });
});

const deletePost = catchAsync(async (req: Request, res: Response) => {
  const postId = req.params.id;
  const result = await PostService.deletePostFromDb(postId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Successfully deleted  your post',
    data: result,
  });
});

export const PostController = {
  createPost,
  getAllPost,
  updatePost,
  deletePost,
};
