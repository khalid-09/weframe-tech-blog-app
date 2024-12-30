import { z } from "zod";

export const relatedFormSchema = z.object({
  email: z
    .string({ required_error: "Email should be a string" })
    .email({ message: "Invalid email address" }),
});

export type RelatedFormSchema = z.infer<typeof relatedFormSchema>;
