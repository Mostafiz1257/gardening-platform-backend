import config from '../../config';
import { IUser } from './user.interface';
import { User } from './user.model';
import jwt from 'jsonwebtoken';

interface DecodedToken {
  _id: string;
  // Add other fields from the token payload if necessary
}


const createUserIntoDb = async (user: IUser) => {
  const newUser = await User.create(user);
  const jwtPayload = newUser.toObject();

  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: config.jwt_access_expires_in,
  });
  return {
    success: true,
    statusCode: 200,
    message: 'User is created successfully',
    data: jwtPayload,
    token: accessToken,
  };
};

const getAllUsersFromDb = async () => {
  const result = await User.find().populate({
    path:"followers",
  });
  return result;
};

const updateUserFromDb = async (userId: string, userData: Partial<IUser>) => {
  const result = await User.findByIdAndUpdate(userId, userData, { new: true });
  return result;
};

const deleteUserFromDb = async (userId: string) => {
  const result = await User.findByIdAndDelete(userId);
  return result;
};



const followUser = async (followerId: string, followeeId: any) => {
  // Check if the follower is already following the followee
  const followee = await User.findById(followeeId);
  const follower = await User.findById(followerId);

  if (!followee || !follower) {
    throw new Error('User not found');
  }

  const isAlreadyFollowing = follower.following.includes(followeeId);

  if (isAlreadyFollowing) {
    // Unfollow: Remove followee from follower's following list
    await User.findByIdAndUpdate(followerId, { $pull: { following: followeeId } });
    await User.findByIdAndUpdate(followeeId, { $pull: { followers: followerId } });

    return { message: 'User unfollowed successfully' };
  } else {
    // Follow: Add followee to follower's following list
    await User.findByIdAndUpdate(followerId, { $addToSet: { following: followeeId } });
    await User.findByIdAndUpdate(followeeId, { $addToSet: { followers: followerId } });

    return { message: 'User followed successfully' };
  }
  
};

const getSingleUSerFromDb =async(token:string)=>{
try{
const decodedInfo = jwt.verify(token,config.jwt_access_secret as string) as DecodedToken
const result = await User.findById(decodedInfo._id )
if(!result) {
  throw new Error("user not found")
}

return result ;
}
catch(err){
  console.log(err);
}
}

const getUpdatedUser =async(token:string,payload:IUser)=>{
  try{
  const decodedInfo = jwt.verify(token,config.jwt_access_secret as string) as DecodedToken
  const userId = decodedInfo._id
  // console.log("userId",userId);
 const updatedUser = await User.findByIdAndUpdate({
  _id:userId
 },payload,{new:true})
 

  return updatedUser ;
  }
  catch(err){
    console.log(err);
  }
  }
  


export const UserServices = {
  createUserIntoDb,
  getAllUsersFromDb,
  updateUserFromDb,
  deleteUserFromDb,
  followUser,
  getSingleUSerFromDb,
  getUpdatedUser

};
