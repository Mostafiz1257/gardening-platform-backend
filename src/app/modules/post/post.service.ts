import { IPost } from "./post.interface";
import { Post } from "./post.model"



const createPostIntoDb = async(post:IPost)=>{
    const result = await Post.create(post)
    return result;
}

const getAllPostFromDb  = async()=>{
    const result = await Post.find();
    return result;
}

const updatePostIntoDb  = async(postId:string,postData:Partial<IPost>)=>{
    const result = await Post.findByIdAndUpdate(postId, postData,{new:true});
    return result;
}

const deletePostFromDb = async(postId:string)=>{
    const result = await Post.findByIdAndDelete(postId);
    return result;
}


export const PostService={
createPostIntoDb,
getAllPostFromDb,
updatePostIntoDb,
deletePostFromDb

}