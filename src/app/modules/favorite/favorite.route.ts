import express from 'express'
import { FavoriteControllers } from './favorite.controller';

const router = express.Router();

router.post(
    "/create-favorite",
   
    FavoriteControllers.createFavorite
  );
  
  router.delete("/", FavoriteControllers.deleteFavorite);
  
  router.get("/userId", FavoriteControllers.getAllFavorite);
  
  router.get('/:userId', FavoriteControllers.getAllMyFavorite);

export const FavoritePostRouter = router