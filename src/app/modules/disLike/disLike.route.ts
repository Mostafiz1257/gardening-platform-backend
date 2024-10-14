import { Router } from "express";
import { toggleDislike } from "./disLike.controller";


const router = Router();

router.post(
  "/",
  
  toggleDislike
);

export const DisLikeRoutes = router;
