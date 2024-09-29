import { IComment } from "./comment.interface"
import { Comment } from "./comment.model"

const createCommentIntoDb = async(comment:IComment)=>{
const result = await Comment.create(comment);
return result
}

export const CommentService = {
    createCommentIntoDb
}


