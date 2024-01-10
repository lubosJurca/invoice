import { z } from 'zod';

// ----------------- SIGN IN FORM
export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type TSignInSchema = z.infer<typeof signInSchema>;

// ------------------- SIGN UP FORM
// zod schema
export const signUpSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(5, 'Password must contain at least 5 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Password must match',
    path: ['confirmPassword'],
  });

export type TSignUpSchema = z.infer<typeof signUpSchema>;
