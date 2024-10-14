import { z } from 'zod';

const userValidationSchema = z.object({
  body:z.object({
    name: z.string({ message: 'Enter your name.' }), // Ensure the name is not empty

  email: z
    .string()
    .email({ message: 'Invalid email address.' }), // Optional: Limit email length

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
  })
});




export const UserValidation = {
  userValidationSchema,
};
