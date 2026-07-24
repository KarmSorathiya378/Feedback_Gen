import { z } from "zod";

export const messagesSchema = z.object({
    content: z
        .string()
        .min(5, "Message content must contain at least 5 characters")
        .max(300, "Message content must contain at most 300 characters"),

}) 