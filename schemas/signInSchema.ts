import { z } from "zod";

export const signInSchema = z.object({
    identifier: z.string(),
    password: z.string().min(8, "Password must contain at least 8 characters").max(20, "Password must contain at most 20 characters"),
}) 