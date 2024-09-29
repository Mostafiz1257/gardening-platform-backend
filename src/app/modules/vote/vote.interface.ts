
import { Types } from 'mongoose';

export interface IVote {
  user: Types.ObjectId; // Reference to the User
  post: Types.ObjectId; // Reference to the Post
  voteType: 'upvote' | 'downvote'; // Vote type can only be 'upvote' or 'downvote'
  createdAt?: Date; // Optional because it defaults to the current date
}