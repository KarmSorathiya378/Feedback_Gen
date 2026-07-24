import { z } from "zod";

export const usernameValidation = z
        .string()
        .min(3, "Username must contain at least 3 letters")
        .max(10, "Username must contain at most 10 letters")
        .regex(/^[a-zA-Z0-9]+$/, "Username must contain only letters and numbers");


export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: "Invalid Email address"}),
    password: z.string().min(8, "Password must contain at least 8 characters").max(20, "Password must contain at most 20 characters"),
})

