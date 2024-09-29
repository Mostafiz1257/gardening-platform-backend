import { Router } from 'express';
import { AuthRouter } from '../modules/auth/auth.route';
import { UserRouter } from '../modules/user/user.route';


const router = Router();

const moduleRoute = [
  {
    path: '/auth',
    router: AuthRouter,
  },
  {
    path:'/auth',
    router:UserRouter

  }
];

moduleRoute.forEach((route) => router.use(route.path, route.router));

export default router;
