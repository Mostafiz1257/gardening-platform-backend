import { Document, Types } from 'mongoose';

export interface INotification extends Document {
  recipient: Types.ObjectId;     // Reference to the User who receives the notification
  sender?: Types.ObjectId;       // Optional reference to the User who sends the notification
  message: string;               // The notification message
  post?: Types.ObjectId;         // Optional reference to a Post (if related to a post)
  read?: boolean;                // Status of whether the notification is read or not
  createdAt?: Date;              // Automatically set, so it's optional
}
