import { User } from "../user/user.model"



const userLoginService = async(email:string, password:string)=>{
    const user  = await User.findOne({email,password}) ;
    if(!user){
        return {success:false}
    }
    return user;

} 

export const AuthService ={
userLoginService
}