import { IComment } from "./comment.interface"
import { Comment } from "./comment.model"

const createCommentIntoDb = async(comment:IComment)=>{
const result = await Comment.create(comment);
return result
}

const updateCommentIntoDb = async(id:string,updateData:Partial<IComment>)=>{
const result = await Comment.findByIdAndUpdate(id,updateData,{new:true})
return result;

}

const deleteCommentFromDb = async(id:string)=>{
const result = await Comment.findByIdAndDelete(id);
return result;
}

export const CommentService = {
    createCommentIntoDb,
    updateCommentIntoDb,
    deleteCommentFromDb
}




