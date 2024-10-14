import { Types } from "mongoose";

export interface IPost {
    _id?: string; // Optional because it will be generated by MongoDB
    title: string;
    content: string; // Rich text content or Markdown
    image: {
      type: [string], // Array of strings
      default: [],
    },
    userId: string; // ID of the user who created the post
    category: string; // E.g., Vegetables, Flowers, etc.
    isPremium: boolean; // Indicates if the post is premium
    likes: Types.ObjectId[]; 
  dislikes: Types.ObjectId[]; 
  favorite:Types.ObjectId[];
    comments?: string[]; // Array of comment IDs
    createdAt?: Date; // Optional, will be set by MongoDB
    updatedAt?: Date; // Optional, will be set by MongoDB
  }
  