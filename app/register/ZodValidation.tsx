import {z} from 'zod';

export const RegisterSchemaStep1 = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
})
.refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
});


export const RegisterSchemaStep2 = z.object({
    organization: z.string().min(3, "Organization name must be at least 3 characters"),
    phoneNumber: z.string().min(10, "Phone number must be at least 10 characters"),
    message:z.string(),
    terms: z.boolean()
})
.refine(data => data.terms === true, {
    message: "You must agree to the terms and conditions",
    path: ["terms"]
})

export type RegisterDataStep1 = z.infer<typeof RegisterSchemaStep1>;
export type RegisterDataStep2 = z.infer<typeof RegisterSchemaStep2>;