//implement json web token for authorization.
import jwt, { JwtPayload } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import { TUserRole } from '../modules/user/user.interface';
import catchAsync from '../utils/catchAsync';
import config from '../config';

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next:NextFunction) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        statusCode: 401,
        message: 'You have no access to this route',
      });
    }

    const token = authHeader.split(' ')[1];
    jwt.verify(token, config.jwt_access_secret as string, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          success: false,
          statusCode: 401,
          message: 'You have no access to this route',
        });
      }

      const role = (decoded as JwtPayload).role;
      if(requiredRoles.length && !requiredRoles.includes(role)){
        return res.status(401).json({
            success: false,
            statusCode: 401,
            message: 'You have no access to this route',
          });
      }
      req.user = decoded as JwtPayload;
      next();
    });
  });
};

export default auth;
