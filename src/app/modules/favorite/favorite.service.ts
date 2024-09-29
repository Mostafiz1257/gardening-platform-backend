import { IFavorite } from "./favorite.interface"
import { Favorite } from "./favorite.model"

const createFavoritePostIntoDb = async(favorite:IFavorite)=>{
    const result =  await Favorite.create(favorite)
    return result;
}

const deleteFavoritePostFromDb=async(id:string)=>{
    const result = await Favorite.findByIdAndDelete(id);
    return result
}
const getMyFavoritePostFromDb = async(userId:string)=>{
    const result = await Favorite.find({ userId }).populate('post');
    return result;
}

export  const FavoritePostService = {
    createFavoritePostIntoDb,
    getMyFavoritePostFromDb,
    deleteFavoritePostFromDb
}