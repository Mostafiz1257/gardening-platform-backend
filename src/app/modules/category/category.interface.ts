import { Document } from 'mongoose';

export interface ICategory extends Document {
  name: string;          // Category name
  description?: string | null; // Optional, defaults to null
  createdAt?: Date;      // Optional because it defaults to the current date
}
