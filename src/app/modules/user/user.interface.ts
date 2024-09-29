import { USER_ROLE } from "./user.constant";

export interface IUser {
    _id: string;           // Unique identifier for the user
    name: string;          // User's full name
    email: string;         // User's email address
    password: string;      // User's hashed password
    profileImage?: string; // Optional field for profile image URL
    phone?: string;        // Optional phone number
    address?: string;      // Optional address
    role: 'user' | 'admin'; // Role of the user, default is 'user'
    isPremium: boolean;    // Whether the user has premium access or not
    verified: boolean;     // Whether the user is verified based on post upvotes
    followers: string[];   // Array of user IDs who are following this user
    following: string[];   // Array of user IDs this user is following
    createdAt: Date;       // Date when the user account was created
    updatedAt: Date;       // Date when the user information was last updated
  }
  
  export type TUserRole = keyof typeof USER_ROLE;

  