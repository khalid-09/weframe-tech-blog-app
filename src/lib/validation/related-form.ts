import { z } from "zod";

export const emailSchema = z.object({
  email: z
    .string({ required_error: "Email should be a string" })
    .email({ message: "Invalid email address" }),
});

export type EmailSchema = z.infer<typeof emailSchema>;
