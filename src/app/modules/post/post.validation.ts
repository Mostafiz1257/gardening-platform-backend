
import { z } from 'zod';

const postValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1, { message: 'Title is required' }),
    content: z.string().min(1, { message: 'Content is required' }),
    image: z.array(z.string()).optional(), // Array of strings, optional
    userId: z.string().min(1, { message: 'User ID is required' }), // Ideally, you can add a custom validator for ObjectId if needed.
    category: z.string().min(1, { message: 'Category is required' }),
    isPremium: z.boolean().optional(),
    upvotes: z.number().min(0).optional(),
    downvotes: z.number().min(0).optional(),
    comments: z.array(z.string()).optional(), // Assuming the comments are represented by ObjectId strings
  }),
});

const updatePostValidationSchema = z.object({
  body: z.object({
    title: z
      .string()
      .min(1, { message: 'Title must have at least 1 character' })
      .optional(),
    content: z
      .string()
      .min(1, { message: 'Content must have at least 1 character' })
      .optional(),
    image: z.array(z.string()).optional(), // Array of image URLs, optional
    userId: z.string().min(1, { message: 'User ID is required' }).optional(),
    category: z.string().min(1, { message: 'Category is required' }).optional(),
    isPremium: z.boolean().optional(),
    upvotes: z.number().min(0).optional(),
    downvotes: z.number().min(0).optional(),
    comments: z.array(z.string()).optional(), // Array of comment ObjectIds, optional
  }),
});
export const postValidation = {
  postValidationSchema,
  updatePostValidationSchema,
};
