import { IPost } from "./post.interface";
import { Post } from "./post.model"



const createPostIntoDb = async(post:IPost)=>{
    const result = await Post.create(post)
    return result;
}

// const getAllPostFromDb  = async()=>{
//     const result = await Post.find().populate('userId').populate('likes').populate('dislikes').populate({
//         path: 'comments',
//             populate:{path:'author'}
//       }).sort({createdAt:-1});
//     return result;
// }


const updatePostIntoDb  = async(postId:string,postData:Partial<IPost>)=>{
    const result = await Post.findByIdAndUpdate(postId, postData,{new:true});
    return result;
}

const getMyPostFromDb =async(userId:string)=>{
const result = await Post.find({userId}).populate('userId').populate('comments')
return result;
}

const deletePostFromDb = async(postId:string)=>{
    const result = await Post.findByIdAndDelete(postId);
    return result;
}

const getAllPostFromDb = async (search: string, sortBy: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const query: any = {};
  
    // Prepare the search query if a search term is provided
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { content: { $regex: search, $options: "i" } },
        { category: { $regex: search, $options: "i" } },
      ];
    }
  
    // Sort criteria based on user input
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let sortCriteria: any = {};
  
    // Determine sorting based on the sortBy parameter
    if (sortBy === "like") {
      sortCriteria = { likes: -1 }; // Sort by likes in descending order
    } else if (sortBy === "dislike") {
      sortCriteria = { dislikes: -1 }; // Sort by dislikes in descending order
    } else if (sortBy === "comments") {
      sortCriteria = { comments: -1 }; // Sort by comments in descending order
    } else {
      sortCriteria = { createdAt: -1 }; // Default to sorting by createdAt in descending order
    }
  
    // Fetch posts from the database with the specified query and sorting
    const result = await Post.find(query)
      .populate("userId")
      .populate({
        path: "comments",
        populate: { path: "author" }, // Optionally populate author inside comments
      })
      .populate({
        path: "likes",
        populate: { path: "user" }, // Optionally populate user inside likes
      })
      .populate({
        path: "dislikes",
        populate: { path: "user" }, // Optionally populate user inside dislikes
      })
      .sort(sortCriteria) // Apply the sorting criteria
      .exec(); // Execute the query
  
    return result;
  };


export const PostService={
createPostIntoDb,
getAllPostFromDb,
updatePostIntoDb,
deletePostFromDb,
getMyPostFromDb

}