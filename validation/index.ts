import { z } from "zod";

export const todoFormSchema = z.object({
  title: z
    .string()
    .min(5, {
      message: "title must be at least 5 characters.",
    })
    .max(30, {
      message: "title must not be longer than 30 characters.",
    }),
  body: z
    .string()
    .max(100, {
      message: "title must not be longer than 100 characters.",
    })
    .optional(),
  done: z.boolean(),
});

export type TodoFormValues = z.infer<typeof todoFormSchema>;

export const todoDefaultValues: Partial<TodoFormValues> = {
  title: "",
  body: "",
  done: false,
};
