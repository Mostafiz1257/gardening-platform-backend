import { Schema, model } from 'mongoose';
import { ICategory } from './category.interface'; // Assuming this interface is in category.interface.ts

const categorySchema = new Schema<ICategory>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Category = model<ICategory>('Category', categorySchema);

export default Category;
