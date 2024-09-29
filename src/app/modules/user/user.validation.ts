import { z } from 'zod';

const userValidationSchema = z.object({
  name: z.string().min(1, { message: 'Name is required.' }), // Ensure the name is not empty

  email: z
    .string()
    .email({ message: 'Invalid email address.' }) // Validate email format
    .min(1, { message: 'Email is required.' }) // Ensure the email is not empty
    .max(100, { message: 'Email must be less than 100 characters.' }), // Optional: Limit email length

  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters.' }) // Minimum password length
    .max(100, { message: 'Password must be less than 100 characters.' }), // Optional: Limit password length

  profileImage: z.string().optional(), // Optional profile image URL

  phone: z.string().optional(),

  address: z.string().optional(), // Optional address field

  role: z
    .enum(['user', 'admin'], {
      message: "Role must be either 'user' or 'admin'.",
    })
    .default('user'), // Default role is 'user'
});

export const UserValidation = {
  userValidationSchema,
};
