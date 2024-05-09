import { z } from 'zod';


export const LoginScema = z.object({
  username: z
    .string()
    .min(5, { message: 'username should be minimum 5 character long' }),
  password: z
    .string()
    .min(8, { message: 'password should be minimum 8 character long' })
    .max(12, { message: 'password should be less than 12 character long' }),
});

 export type LoginSchemaData = z.infer<typeof LoginScema>;