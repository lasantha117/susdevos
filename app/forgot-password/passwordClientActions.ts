import { z } from 'zod';


export const ForgotPasswordSchema1 = z
  .object({
    email: z.string().email({ message: 'Invalid email address' }),
  })
  

  export const ForgotPasswordSchema2 = z
  .object({
    newPassword: z
      .string()
      .min(8, { message: 'password should be minimum 8 character long' })
      .max(12, { message: 'password should be less than 12 character long' }),
    confirmPassword: z
      .string()
      // .min(8, { message: 'password should be minimum 8 character long' })
      // .max(12, { message: 'password should be less than 12 character long' }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

  export type ForgotPasswordSchemaData1 = z.infer<typeof ForgotPasswordSchema1>;
  export type ForgotPasswordSchemaData2 = z.infer<typeof ForgotPasswordSchema2>;