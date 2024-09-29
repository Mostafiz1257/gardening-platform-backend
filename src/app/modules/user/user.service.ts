import { IUser } from "./user.interface"
import { User } from "./user.model"

const createUserIntoDb = async(user:IUser)=>{
const result = await User.create(user)
return result;
}

const  getAllUsersFromDb = async()=>{
    const result = await User.find();
    return result;

}

const updateUserFromDb  = async(userId:string, userData:Partial<IUser>)=>{
    const result = await User.findByIdAndUpdate(userId,userData,{new:true})
    return result
}

const deleteUserFromDb = async(userId:string)=>{
    const result = await User.findByIdAndDelete(userId);
    return result;
}

export const UserServices={
createUserIntoDb,
getAllUsersFromDb,
updateUserFromDb,
deleteUserFromDb
}