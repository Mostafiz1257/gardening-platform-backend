import { Router } from 'express';
import { AuthRouter } from '../modules/auth/auth.route';
import { UserRouter } from '../modules/user/user.route';
import { PostRouter } from '../modules/post/post.route';
import { PostCommentRouter } from '../modules/comment/commnet.route';
import { FavoritePostRouter } from '../modules/favorite/favorite.route';

const router = Router();

const moduleRoute = [
  {
    path: '/api/auth',
    router: AuthRouter,
  },
  {
    path: '/api/auth',
    router: UserRouter,
  },
  {
    path: '/api/post',
    router: PostRouter,
  },
  {
    path: '/api/post/comment',
    router: PostCommentRouter,
  },
  {
    path:'/api/post/favorite',
    router:FavoritePostRouter
  }
];

moduleRoute.forEach((route) => router.use(route.path, route.router));

export default router;
