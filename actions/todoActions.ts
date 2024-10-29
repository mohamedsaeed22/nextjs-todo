"use server";

import { ITodo } from "@/interfaces";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export const getTodoAction = async ({ userId }: { userId: string | null }) => {
  try {
    const data = await prisma.todo.findMany({
      where: {
        user_id: userId as string,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

export const createTodoAction = async ({
  title,
  body,
  done,
  userId,
}: {
  title: string;
  body?: string | undefined;
  done: boolean;
  userId: string | null;
}) => {
  try {
    const todo = await prisma.todo.create({
      data: {
        title,
        body,
        done,
        user_id: userId as string,
      },
    });
    revalidatePath("/");
    return todo;
  } catch (error) {
    console.error("Error creating todo:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

export const deleteTodoAction = async ({ id }: { id: string }) => {
  try {
    const todo = await prisma.todo.delete({
      where: {
        id,
      },
    });
    revalidatePath("/"); // can update page and layout at second params , by default it will update page
    return todo;
  } catch (error) {
    console.error("Error deleting todo:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

export const updateTodoAction = async (data: ITodo) => {
  try {
    const todo = await prisma.todo.update({
      where: {
        id: String(data.id), // Ensure id is a string
      },
      data: {
        title: data.title,
        body: data.body,
        done: data.done,
      },
    });
    revalidatePath("/");
    return todo;
  } catch (error) {
    console.error("Error updating todo:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};
