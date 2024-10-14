import express from 'express'
import { toggleLike } from "./like.controller";

const router = express.Router();

// Toggle like on a post
router.post("/",  toggleLike); 

export const LikeRoutes = router;
